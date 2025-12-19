import axios from "axios";
import React from "react";
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
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded shadow"
    >
      {/* {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
      )} */}

      <div className="mb-4">
        <label className="block font-semibold mb-1">Ticket Title</label>
        <input
          type="text"
          name="title"
          //   value={formData.title}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">From (Location)</label>
        <input
          type="text"
          name="from"
          //   value={formData.from}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">To (Location)</label>
        <input
          type="text"
          name="to"
          //   value={formData.to}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Transport Type</label>
        <select
          name="transportType"
          //   value={formData.transportType}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select type</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Launch">Launch</option>
          <option value="Plane">Plane</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Price (per unit)</label>
        <input
          type="number"
          name="price"
          min="1"
          //   value={formData.price}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Ticket Quantity</label>
        <input
          type="number"
          name="quantity"
          min="1"
          //   value={formData.quantity}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">
          Departure Date & Time
        </label>
        <input
          type="datetime-local"
          name="departure"
          //   value={formData.departure}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <span className="block font-semibold mb-2">Perks</span>
        {perks.map((perk) => (
          <label key={perk} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              name={perk}
              // checked={formData.perks[perk]}
              // onChange={handleChange}
              className="mr-1"
            />
            {perk}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          name="img"
          //   onChange={handleFileChange}
          className="w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Vendor Name</label>
        <div className="">{user?.displayName}</div>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-1">Vendor Email</label>

        <input name="email" type="email" value={user?.email} readOnly />
      </div>

      <button
        type="submit"
        // disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-blue-400"
      >
        Add
        {/* {loading ? "Adding Ticket..." : "Add Ticket"} */}
      </button>
    </form>
  );
};

export default AddTicket;
