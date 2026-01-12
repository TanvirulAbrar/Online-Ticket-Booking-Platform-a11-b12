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
    event?.preventDefault?.();
    signInUser(data.email, data.password)
      .then(() => {
        toast("login successful");
        const redirectTo = location?.state?.from || location?.state || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        toast.error("login error" + error);
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
      {/* Show message if user was redirected from booking */}
      {location?.state?.message && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mb-4">
          <p className="text-sm font-medium">{location.state.message}</p>
        </div>
      )}

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">mail</span>
          <input
            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            id="email"
            name="email"
            placeholder="m@m21.com"
            required
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email?.type === "required" && <p className="text-red-500 text-sm mt-1">Email is required</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">lock</span>
          <input
            className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            id="password"
            name="password"
            placeholder="••••••••"
            required
            type={isEye ? "text" : "password"}
            {...register("password", { required: true, minLength: 6 })}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            type="button"
            onClick={handelEye}
          >
            <span className="material-symbols-outlined text-sm">visibility</span>
          </button>
        </div>
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 text-sm mt-1">Password must be 6 characters or longer</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700" type="checkbox" />
          <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
        </label>
        <a className="text-sm font-medium text-blue-600 hover:text-blue-500" href="#">Forgot password?</a>
      </div>

      <button className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2" type="submit">
        Login
      </button>

      <div className="pt-4 space-y-3">
        <p className="text-center text-xs text-slate-500 font-medium uppercase tracking-wider mb-4">Quick Login for Testing</p>
        <div className="grid grid-cols-1 gap-2">
          <button
            className="w-full bg-red-500 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:brightness-95 transition-all"
            type="button"
            onClick={() => handleLogin({ email: "m@m21.com", password: "123Qwe$" })}
          >
            <span className="material-symbols-outlined text-sm">shield_person</span> Login as Admin
          </button>
          <button
            className="w-full bg-blue-500 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:brightness-95 transition-all"
            type="button"
            onClick={() => handleLogin({ email: "m@m2.com", password: "123Qwe$" })}
          >
            <span className="material-symbols-outlined text-sm">store</span> Login as Vendor
          </button>
          <button
            className="w-full bg-green-500 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:brightness-95 transition-all"
            type="button"
            onClick={() => handleLogin({ email: "m@m25.com", password: "123Qwe$" })}
          >
            <span className="material-symbols-outlined text-sm">person</span> Login as User
          </button>
        </div>
      </div>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">Or with</span>
        </div>
      </div>

      

      <SocialLogin />
    </form>
  );
}

