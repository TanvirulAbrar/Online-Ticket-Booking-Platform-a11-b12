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
      //console.log(res.data);
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
      //console.log(filteredData);
      return filteredData;
    },
  });
  const { data: userDb = {}, refetch: userRefetch } = useQuery({
    queryKey: ["userDb", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      //console.log(res.data);
      const lodedData = res.data;

      return lodedData;
    },
  });
  // const axiosSecure = useAxiosSecure();
  // const userdata = axiosSecure
  //   .get(`/users?email${user.email}`)
  //   .then((res) => res.data);
  return (
    <div className="p-6">
      {/* Modern Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Profile
          </h1>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {userDb[0]?.role || 'User'}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-8">
          Manage your account information and view your activity
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Cover Image */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 relative">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Profile Content */}
          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="flex justify-center -mt-16 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-white">
                <img 
                  src={user?.photoURL} 
                  alt={user?.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* User Info */}
            <div className="text-center space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {user?.displayName}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {user?.email}
                </p>
              </div>
              
              {/* Role Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <BadgeCheck className="h-4 w-4" />
                  <span className="capitalize">{userDb[0]?.role || 'User'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Profile Stats or Info can go here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {ticket?.length || 0}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Booked Tickets
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {userDb[0]?.createdAt ? new Date(userDb[0].createdAt).getFullYear() : new Date().getFullYear()}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Member Since
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              Active
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Account Status
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
