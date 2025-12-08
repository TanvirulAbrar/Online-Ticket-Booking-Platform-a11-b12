import { Mail, Lock, Eye, EyeOff, Apple, Chrome, Image } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";

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
  const handleRegistration = (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send the photo to store and get the ul
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;

          // create user in the database
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

          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          updateUserProfile(userProfile)
            .then(() => {
              // console.log('user profile updated done.')
              navigate(location.state || "/");
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex bg-white max-w-[1600px]">
      <div className=" bg-[url('/rm222batch5-kul-03.jpg')] bg-cover bg-center w-full ">
        <p className="mx-auto p-7 text-center text-[#006f8e] text-8xl">
          Welcome
        </p>
      </div>
      <form
        className="w-full max-w-md mx-auto p-8 flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-800">Name</label>
          <div className="flex items-center h-12 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 transition">
            <Mail size={20} className="text-gray-500" />
            <input
              type="name"
              placeholder="Enter your name"
              className="w-full h-full ml-3 outline-none bg-transparent"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        {errors.name?.type === "required" && (
          <p className="text-red-500">Name is required.</p>
        )}
        <div className="flex items-center h-12 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 transition">
          {" "}
          <Image size={20} className="text-gray-500" />
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />
        </div>
        {errors.name?.type === "required" && (
          <p className="text-red-500">Photo is required.</p>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-800">Email</label>
          <div className="flex items-center h-12 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 transition">
            <Mail size={20} className="text-gray-500" />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full h-full ml-3 outline-none bg-transparent"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        {errors.email?.type === "required" && (
          <p className="text-red-500">Email is required.</p>
        )}
        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-800">Password</label>
          <div className="flex items-center h-12 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 transition">
            <Lock size={20} className="text-gray-500" />
            <input
              type={isEye ? "text" : "password"}
              placeholder="Enter your Password"
              className="w-full ml-3 outline-none bg-transparent"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
              })}
            />
            <Eye onClick={handelEye} className="text-gray-500" size={20} />
          </div>
        </div>
        {errors.password?.type === "required" && (
          <p className="text-red-500">Password is required.</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500">
            Password must be 6 characters or longer
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500">
            Password must have at least one uppercase, at least one lowercase,
            at least one number, and at least one special characters
          </p>
        )}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="checkbox checkbox-sm" />
            Remember me
          </label>

          <button type="button" className="text-blue-600 text-sm font-medium">
            Forgot password?
          </button>
        </div>

        {/* Sign in button */}
        <button className="btn w-full h-12 bg-black text-white rounded-xl hover:bg-neutral-800">
          Sign In
        </button>

        {/* Signup */}
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <NavLink to={"/login"}>
            <span className="text-blue-600 font-medium cursor-pointer">
              Login
            </span>
          </NavLink>
        </p>

        <p className="text-center text-sm text-gray-500 my-1">Or With</p>

        {/* Social Buttons */}
        <div className="flex items-center gap-3 w-full">
          <button className="btn w-1/2 h-12 rounded-xl border border-gray-300 hover:border-blue-500 bg-white flex items-center justify-center gap-2">
            <Chrome size={20} />
            Google
          </button>

          <button className="btn w-1/2 h-12 rounded-xl border border-gray-300 hover:border-blue-500 bg-white flex items-center justify-center gap-2">
            <Apple size={20} />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}
