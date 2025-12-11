import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const { user, loading } = useAuth();
  console.log(user, loading);
  // const axiosSecure = useAxiosSecure();
  // const userdata = axiosSecure
  //   .get(`/users?email${user.email}`)
  //   .then((res) => res.data);
  return (
    <div className=" w-full h-full">
      <div className="bg-[url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg')] bg-cover h-40"></div>
      <div className="">
        <div className="relative w-fit">
          {" "}
          <div className="top-[40%] left-10 translate-y-[-40%]  absolute h-30 w-30 bg-white rounded-full shadow-sm"></div>
        </div>
      </div>
      <div className="max-sm:mt-20">
        <div className="p-5 w-full flex flex-col justify-center items-center">
          {user && (
            <div className="text-[40px] font-bold">{user.displayName}</div>
          )}
          {user && <div className="">{user.email}</div>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
