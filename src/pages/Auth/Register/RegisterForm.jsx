import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [isEye, setisEye] = useState(false);
  const handelEye = () => {
    setisEye(!isEye);
  };

  const handleRegistration = (data, event) => {
    event.preventDefault();
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        //  store  image
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in the database");
            }
          });

          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          updateUserProfile(userProfile)
            .then(() => {
              toast("Registration successful");
              navigate(location.state || "/");
            })
            .catch((error) => {
              console.log(error);
              toast.error("" + error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("" + error);
      });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleRegistration)}>
      {/* Name */}
      <div>
        <label
          className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300"
          htmlFor="name"
        >
          Name
        </label>
        <div className="relative">
          <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            person
          </span>
          <input
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            id="name"
            placeholder="Enter your full name"
            type="text"
            {...register("name", { required: true })}
          />
        </div>
        {errors.name?.type === "required" && (
          <p className="text-red-500 text-sm mt-1">Name is required.</p>
        )}
      </div>

      {/* Profile Image */}
      <div>
        <label
          className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300"
          htmlFor="profile_image"
        >
          Profile Image
        </label>
        <div className="flex items-center w-full">
          <label className="w-full flex flex-col items-center px-4 py-3 bg-white dark:bg-slate-800 text-slate-400 rounded-xl border border-slate-200 dark:border-slate-700 border-dashed cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined">image</span>
              <span className="text-sm">Choose profile photo</span>
            </div>
            <input
              className="hidden"
              type="file"
              {...register("photo", { required: true })}
            />
          </label>
        </div>
        {errors.photo?.type === "required" && (
          <p className="text-red-500 text-sm mt-1">Photo is required.</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300"
          htmlFor="email"
        >
          Email Address
        </label>
        <div className="relative">
          <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            mail
          </span>
          <input
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-blue-50/50 dark:bg-blue-900/10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            id="email"
            placeholder="m@m21.com"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email?.type === "required" && (
          <p className="text-red-500 text-sm mt-1">Email is required.</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            lock
          </span>
          <input
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-blue-50/50 dark:bg-blue-900/10 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            id="password"
            placeholder="••••••••"
            type={isEye ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            type="button"
            onClick={handelEye}
          >
            <span className="material-icons-outlined text-lg">visibility</span>
          </button>
        </div>
        {errors.password?.type === "required" && (
          <p className="text-red-500 text-sm mt-1">Password is required.</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 text-sm mt-1">
            Password must be 6 characters or longer
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500 text-sm mt-1">
            Password must have at least one uppercase, at least one lowercase,
            at least one number, and at least one special characters
          </p>
        )}
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            className="rounded text-primary border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-offset-0"
            type="checkbox"
          />
          <span className="text-slate-600 dark:text-slate-400">
            Remember me
          </span>
        </label>
        <a className="text-blue-600 hover:text-blue-700 font-medium" href="#">
          Forgot password?
        </a>
      </div>

      <button
        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4 shadow-lg"
        type="submit"
      >
        Sign Up
      </button>

      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        <span className="flex-shrink mx-4 text-xs text-slate-400 uppercase tracking-wider">
          Or With
        </span>
        <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
      </div>

      <SocialLogin />
    </form>
  );
}
