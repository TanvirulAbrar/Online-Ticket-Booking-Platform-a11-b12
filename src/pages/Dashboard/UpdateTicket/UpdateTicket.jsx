import axios from "axios";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

const UpdateTicket = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [ticket, setticket] = useState({});
  const { data: tic = {}, refetch: reload } = useQuery({
    queryKey: ["Ticket", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tickets/${id}`);
      const data = res.data;
      data && setticket(data);
      console.log(data);
      return data;
    },
  });
  const [perks, setperks] = useState([
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
  ]);

  const [ticketPerks, setticketPerks] = useState([]);
  //   const [AC, setAC] = useState(false);
  //   const [WiFi, setWiFi] = useState(false);
  //   const [Breakfast, setBreakfast] = useState(false);
  useEffect(() => {
    if (ticket && ticket.perks) {
      setticketPerks(ticket.perks);
      setperks([...perks]);
      console.log(ticket.perks);
    }

    //   setAC()
    //   setBreakfast()
    //   setWiFi()
    // toast("changed");
  }, [ticket]);

  const handleChange = (perk) => {
    setticketPerks((a) =>
      a.includes(perk) ? a.filter((p) => p !== perk) : [...a, perk]
    );
  };
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.departure.value);
    const from = e.target.from.value.trim().toLowerCase();
    const to = e.target.to.value.trim().toLowerCase();
    if (from === to) {
      return toast("The value of From and To cannot be same");
    }
    // let perksSelected = [];
    // const AC = e.target.AC.checked;

    // const WiFi = e.target.WiFi.checked;
    // const Breakfast = e.target.Breakfast.checked;
    const img = e.target.img.files[0];
    const formData = new FormData();
    formData.append("image", img);

    // AC && perksSelected.push("AC");
    // WiFi && perksSelected.push("WiFi");
    // Breakfast && perksSelected.push("Breakfast");

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
        quantity: e.target.quantity.value,
        departure: e.target.departure.value,
        perks: ticketPerks,
        image: photoURL,
        // state: e.target.state.value,
        email: e.target.email.value,
      };

      console.log(photoURL);
      axiosSecure
        .patch(`/tickets/${id}`, ticket)
        .then((res) => {
          reload();
          // console.log("user created in the database");
          toast.success("Updated");
        })
        .catch((error) => console.log(error));
    });
  };
  if (!ticket) {
    return <Loading></Loading>;
  }

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
          defaultValue={ticket.title}
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
          defaultValue={ticket.from}
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
          defaultValue={ticket.to}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Transport Type</label>
        <select
          name="transportType"
          defaultValue={ticket.transportType}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option defaultValue="">Select type</option>
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
          defaultValue={ticket.price}
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
          defaultValue={ticket.quantity}
          //   onChange={(e) => (ticket.price = e.target.value)}
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
          defaultValue={ticket.departure}
          //   onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <span className="block font-semibold mb-2">Perks</span>
        {/* {ticketPerks?.length} */}
        {perks.map((perk) => (
          <label
            key={perk}
            className="flex items-center gap-2 cursor-pointer mr-4"
          >
            <input
              type="checkbox"
              className="peer w-4 h-4"
              checked={ticketPerks.includes(perk)}
              onChange={() => handleChange(perk)}
            />
            <span>{perk}</span>
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
        <div className="">{user?.name}</div>
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
        update
        {/* {loading ? "Adding Ticket..." : "Add Ticket"} */}
      </button>
      <NavLink
        to={`/details/${id}`}
        className="card-actions btn flex items-center w-fit  rounded-[5px] hover:bg-blue-200 font-bold text-[13px] text-[#311986]"
      >
        view <ChevronRight className="h-4 w-4" />
      </NavLink>
    </form>
  );
};

export default UpdateTicket;
