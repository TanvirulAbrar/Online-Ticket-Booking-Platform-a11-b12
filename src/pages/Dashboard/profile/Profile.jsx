import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { data } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { BadgeCheck } from "lucide-react";

const Profile = () => {
  const { user, loading } = useAuth();

  const axiosSecure = useAxiosSecure();
  // console.log(user, loading);
  const {
    isLoading,
    data: ticket = {},
    refetch,
  } = useQuery({
    queryKey: ["userticket", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets`);
      console.log(res.data);
      const lodedData = res.data;
      const filteredData = [];
      for (const ticket of lodedData) {
        const bookeds = ticket.booked;
        if (bookeds) {
          for (const booked of bookeds) {
            if (booked.email === user.email) {
              filteredData.post(ticket);
            }
          }
        }
      }
      console.log(filteredData);
      return filteredData;
    },
  });
  const { data: userDb = {}, refetch: userRefetch } = useQuery({
    queryKey: ["userDb", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      console.log(res.data);
      const lodedData = res.data;

      return lodedData;
    },
  });
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
          <div className="top-[40%] left-10 translate-y-[-40%]  absolute h-30 w-30 flex content-center items-center bg-white rounded-full shadow-sm overflow-hidden border-3 border-white">
            <img src={user.photoURL} alt="" />
          </div>
        </div>
      </div>
      <div className="max-sm:mt-20 shadow-sm">
        <div className="p-5 w-full flex flex-col justify-center items-center">
          {user && (
            <div className="text-[40px] font-bold">{user.displayName}</div>
          )}
          {user && <div className="">Email:{user.email}</div>}

          <div className="flex items-center gap-2 w-fit px-2 rounded-[5px] bg-blue-400 text-white text-[13px]  ">
            <BadgeCheck className="h-4 w-4 " />
            <span>{userDb[0]?.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
