import { Mail, Lock, Eye, EyeOff, Apple, Chrome } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isEye, setisEye] = useState(false);
  const handelEye = () => {
    setisEye(!isEye);
  };
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data, event) => {
    event.preventDefault();
    //console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        toast("login successful");
        //console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error("login error" + error);
        console.log(error);
      });
  };

  return (
    <div className="flex bg-white max-w-[1600px]">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full max-w-md ml-0 p-8  rounded-2xl flex flex-col gap-4"
      >
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-800">Email</label>
          <div className="flex items-center h-12 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 transition">
            <Mail size={20} className="text-gray-500" />
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: true })}
              className="w-full h-full ml-3 outline-none bg-transparent"
            />
          </div>
        </div>
        {errors.email?.type === "required" && (
          <p className="text-red-500">Email is required</p>
        )}
        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-800">Password</label>
          <div className="flex items-center h-12 border border-gray-300 rounded-xl px-3 focus-within:border-blue-500 transition">
            <Lock size={20} className="text-gray-500" />
            <input
              type={isEye ? "text" : "password"}
              placeholder="Enter your Password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full ml-3 outline-none bg-transparent"
            />
            <Eye onClick={handelEye} className="text-gray-500" size={20} />
          </div>
        </div>
        {errors.password?.type === "minLength" && (
          <p className="text-red-500">
            Password must be 6 characters or longer{" "}
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
          Login
        </button>

        {/* Signup */}
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <NavLink to={"/register"}>
            <span className="text-blue-600 font-medium cursor-pointer">
              Sign Up
            </span>
          </NavLink>
        </p>

        <p className="text-center text-sm text-gray-500 my-1">Or With</p>

        {/* Social Buttons */}
        {/* <div className="flex items-center gap-3 w-full">
          <button className="btn w-1/2 h-12 rounded-xl border border-gray-300 hover:border-blue-500 bg-white flex items-center justify-center gap-2">
            <Chrome size={20} />
            Google
          </button>

          <button className="btn w-1/2 h-12 rounded-xl border border-gray-300 hover:border-blue-500 bg-white flex items-center justify-center gap-2">
            <Apple size={20} />
            Apple
          </button>
        </div> */}
        <SocialLogin></SocialLogin>
      </form>
      <div className=" bg-[url('/rm222batch5-kul-03.jpg')] bg-cover bg-center w-full max-sm:hidden"></div>
    </div>
  );
}
