import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const AddTicket = () => {
  const { user } = useAuth();
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
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.departure.value);
    const from = e.target.from.value.trim().toLowerCase();
    const to = e.target.to.value.trim().toLowerCase();
    if (from === to) {
      return toast("The value of From and To cannot be same");
    }
    let perksSelected = [];
    const AC = e.target.AC.checked;
    AC && perksSelected.push("AC");

    const Cabin = e.target.Cabin.checked;
    Cabin && perksSelected.push("Cabin");

    const Food = e.target.Food.checked;
    Food && perksSelected.push("Food");

    const Luggage = e.target.Luggage.checked;
    Luggage && perksSelected.push("Luggage");

    const Meal = e.target.Meal.checked;
    Meal && perksSelected.push("Meal");

    const Sleeper = e.target.Sleeper.checked;
    Sleeper && perksSelected.push("Sleeper");

    const Snacks = e.target.Snacks.checked;
    Snacks && perksSelected.push("Snacks");

    const TV = e.target.TV.checked;
    TV && perksSelected.push("TV");

    const VIPCabin = e.target["VIP Cabin"].checked;
    VIPCabin && perksSelected.push("VIP Cabin");

    const WiFi = e.target.WiFi.checked;
    WiFi && perksSelected.push("WiFi");

    const Breakfast = e.target.Breakfast.checked;
    Breakfast && perksSelected.push("Breakfast");

    const img = e.target.img.files[0];
    const formData = new FormData();
    formData.append("image", img);

    const image_API_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_host_key
    }`;

    axios.post(image_API_URL, formData).then((res) => {
      const photoURL = res.data.data.url;

      const ticket = {
        title: e.target.title.value,
        from: e.target.from.value,
        to: e.target.to.value,
        transportType: e.target.transportType.value,
        price: Number(e.target.price.value),
        quantity: Number(e.target.quantity.value),
        departure: e.target.departure.value,
        perks: perksSelected,
        image: photoURL,
        // state: e.target.state.value,
        email: e.target.email.value,
      };

      //console.log(photoURL);
      axiosSecure
        .post("/tickets", ticket)
        .then((res) => {
          //console.log("user created in the database");
          toast.success("added");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="p-6">
      {/* Modern Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Add New Ticket
          </h1>
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
            Create Listing
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 ml-8">
          Create a new ticket listing for your transport service
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
                    name={perk}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{perk}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="img"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required
            />
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

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTicket;
