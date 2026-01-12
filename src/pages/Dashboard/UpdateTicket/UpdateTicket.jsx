import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import { useState, useEffect } from "react";

const UpdateTicket = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [ticket, setticket] = useState({});
  const [imageOption, setImageOption] = useState("keep"); // "keep", "upload", "link"
  const [imageUrl, setImageUrl] = useState("");
  const axiosSecure = useAxiosSecure();
  
  const { data: tic = {}, refetch: reload } = useQuery({
    queryKey: ["Ticket", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets/${id}`);
      const data = res.data;
      data && setticket(data);
      return data;
    },
  });

  const perks = [
    "AC",
    "Cabin",
    "Food",
    "Luggage",
    "Meal",
    "Sleeper",
    "Snacks",
    "TV",
    "VIP Cabin",
    "WiFi",
    "Breakfast",
  ];

  const [ticketPerks, setticketPerks] = useState([]);

  useEffect(() => {
    if (ticket && ticket.perks) {
      setticketPerks(ticket.perks);
    }
  }, [ticket]);

  const handlePerkChange = (perk) => {
    setticketPerks((prev) =>
      prev.includes(perk) ? prev.filter((p) => p !== perk) : [...prev, perk]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target.from.value.trim().toLowerCase();
    const to = e.target.to.value.trim().toLowerCase();
    if (from === to) {
      return toast("The value of From and To cannot be same");
    }

    // Function to update ticket with image URL
    const updateTicketWithImage = (imageUrl) => {
      const updatedTicket = {
        title: e.target.title.value,
        from: e.target.from.value,
        to: e.target.to.value,
        transportType: e.target.transportType.value,
        price: Number(e.target.price.value),
        quantity: Number(e.target.quantity.value),
        departure: e.target.departure.value,
        perks: ticketPerks,
        image: imageUrl,
        email: e.target.email.value,
      };

      axiosSecure
        .patch(`/tickets/${id}`, updatedTicket)
        .then((res) => {
          reload();
          toast.success("Updated successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Update failed");
        });
    };

    // Handle different image options
    if (imageOption === "keep") {
      // Keep existing image
      updateTicketWithImage(ticket.image);
      return;
    } else if (imageOption === "link") {
      // Use provided image URL
      if (!imageUrl.trim()) {
        toast.error("Please provide an image URL");
        return;
      }
      updateTicketWithImage(imageUrl.trim());
      return;
    } else if (imageOption === "upload") {
      // Upload new image file
      const img = e.target.img.files[0];
      if (!img) {
        toast.error("Please select an image file to upload");
        return;
      }

      const formData = new FormData();
      formData.append("image", img);

      const image_API_URL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host_key
      }`;

      axios.post(image_API_URL, formData)
        .then((res) => {
          const photoURL = res.data.data.url;
          updateTicketWithImage(photoURL);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Image upload failed");
        });
    }
  };

  if (!ticket || !ticket.title) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-6">
      {/* Modern Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Update Ticket
          </h1>
          <div className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-medium">
            Edit Listing
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-8">
          Update your existing ticket listing information
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ticket Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={ticket.title}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Transport Type
              </label>
              <select
                name="transportType"
                defaultValue={ticket.transportType}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">Select type</option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
                <option value="Launch">Launch</option>
                <option value="Plane">Plane</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From (Location)
              </label>
              <input
                type="text"
                name="from"
                defaultValue={ticket.from}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To (Location)
              </label>
              <input
                type="text"
                name="to"
                defaultValue={ticket.to}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price (per unit)
              </label>
              <input
                type="number"
                name="price"
                min="1"
                defaultValue={ticket.price}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ticket Quantity
              </label>
              <input
                type="number"
                name="quantity"
                min="1"
                defaultValue={ticket.quantity}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Departure Date & Time
              </label>
              <input
                type="datetime-local"
                name="departure"
                defaultValue={ticket.departure}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Perks & Amenities
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {perks.map((perk) => (
                <label key={perk} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ticketPerks.includes(perk)}
                    onChange={() => handlePerkChange(perk)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{perk}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Image Options
            </label>
            
            {/* Image Option Selection */}
            <div className="space-y-4 mb-6">
              <div className="flex flex-col space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="imageOption"
                    value="keep"
                    checked={imageOption === "keep"}
                    onChange={(e) => setImageOption(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Keep current image</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="imageOption"
                    value="upload"
                    checked={imageOption === "upload"}
                    onChange={(e) => setImageOption(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Upload new image file</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="imageOption"
                    value="link"
                    checked={imageOption === "link"}
                    onChange={(e) => setImageOption(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Use image URL/link</span>
                </label>
              </div>
            </div>

            {/* File Upload (shown when upload option is selected) */}
            {imageOption === "upload" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Image File
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="img"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            )}

            {/* Image URL Input (shown when link option is selected) */}
            {imageOption === "link" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                {imageUrl && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Preview:</p>
                    <img 
                      src={imageUrl} 
                      alt="URL preview" 
                      className="w-40 h-28 object-cover rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden w-40 h-28 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Invalid URL</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Current Image Display */}
            {ticket.image && (
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Current image {imageOption === "keep" ? "(will be kept)" : "(will be replaced)"}:
                </p>
                <img 
                  src={ticket.image} 
                  alt="Current ticket" 
                  className="w-40 h-28 object-cover rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Vendor Name
              </label>
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300">
                {user?.displayName}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Vendor Email
              </label>
              <input 
                name="email" 
                type="email" 
                value={user?.email} 
                readOnly 
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300"
              />
            </div>
          </div>

          <div className="pt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Ticket
            </button>
            <NavLink
              to={`/details/${id}`}
              className="flex items-center gap-2 px-6 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              View Details
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTicket;
