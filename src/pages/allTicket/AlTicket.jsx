import React, { useEffect, useState } from "react";
import TicketCard from "./card/TicketCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";
import { XCircle } from "lucide-react";
// import { data } from "react-router";

const AlTicket = () => {
  // const [tickets, settickets] = useState([]);
  // useEffect(() => {
  //   fetch("/tickets.json")
  //     .then((res) => res.json())
  //     .then((data) => settickets(data))
  //     .catch((err) => console.log(err));
  // }, []);
  const axiosSecure = useAxiosSecure();
  const [sort, setsort] = useState("");
  const [page, setpage] = useState(0);
  const [pages, setpages] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [transportType, settransportType] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");

  const { isLoading, data: tickets = [] } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tickets/all/${page}?state=approved` +
          `${from && to ? `&from=${from}&to=${to}` : ""}` +
          `${transportType ? `&transportType=${transportType}` : ""}` +
          `${price ? `&price=${price}` : ""}` +
          `${title ? `&title=${title}` : ""}`
      );

      //console.log(res.data);
      // console.log(res.data);
      const data = res.data;
      setfilterdata(data?.tickets);
      // setpage(data.pages.length);
      setpages(data.pages);

      return data?.tickets;
    },
  });
  const category = ["Bus", "Train", "Launch", "Plane"];
  console.log(
    `/tickets/all/${page}?state=approved` +
      `${from && to ? `&from=${from}&to=${to}` : ""}` +
      `${transportType ? `&transportType=${transportType}` : ""}` +
      `${price ? `&price=${price}` : ""}` +
      `${title ? `&title=${title}` : ""}`
  );
  useEffect(() => {
    axiosSecure
      .get(
        `/tickets/all/${page}?state=approved` +
          `${from && to ? `&from=${from}&to=${to}` : ""}` +
          `${transportType ? `&transportType=${transportType}` : ""}` +
          `${price ? `&price=${price}` : ""}` +
          `${title ? `&title=${title}` : ""}`
      )
      .then((res) => {
        const data = res.data;
        setfilterdata(data?.tickets);
        // setpage(data?.pages?.length || 0);
        setpages(data?.pages || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, price, transportType, title, from, to]);

  if (isLoading) return <Loading />;
  if (!tickets) return <Loading />;

  const handelFilter = async (e) => {
    e.preventDefault();
    setpage(0);
  };
  const handelFilterReset = async (e) => {
    e.preventDefault();
    const res = await axiosSecure.get(`/tickets/all/0?state=approved`);
    // console.log(res.data?.tickets);
    const data = res.data;
    setfilterdata(data?.tickets);
    // setpage(data.pages.length);
    setpages(data.pages);
    setpage(0);
    setsort("");
    setfilterdata(data?.tickets);
  };
  const handelPageLoad = async (e, num) => {
    e.preventDefault();
    setpage(num);
  };
  const findWithWord = (a) => {
    settitle(a.toLowerCase());
    setpage(0);
  };
  const handelsort = (e, type) => {
    e.preventDefault();
    if (type == "price High-Low") {
      setprice("high");
    }
    if (type == "price Low-High") {
      setprice("low");
    }
    setpage(0);
    setsort(type);
  };

  const handelsortb = (e) => {
    e.preventDefault();
    setpage(0);
    // console.log(e.target);
    settransportType(e.target.innerText);
  };
  return (
    <div>
      <h1 className="text-3xl p-5 font-bold flex  my-5">
        <div className="w-[5px] mr-5 bg-blue-700"></div> All ticket
        <div className="w-[5px] ml-5 bg-blue-700"></div>
      </h1>
      <div className="flex justify-center content-center items-center max-w-300 mx-auto   py-5">
        <div className="w-4xl">
          {" "}
          <label className="input  w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            {transportType !== "" && (
              <button
                onClick={() => settransportType("")}
                className="btn btn-outline btn-primary"
              >
                {transportType}
                <XCircle></XCircle>
              </button>
            )}
            <input
              type="search"
              onChange={(e) => findWithWord(e.target.value.trim())}
              className="grow"
              placeholder="Search"
            />
          </label>
        </div>
        <div className="w-fit">
          <details className="dropdown">
            <summary className="btn m-1">
              Sort By{" "}
              <span className="max-[350px]:hidden flex">
                {" "}
                {sort ? sort : ""}
              </span>{" "}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-fit  py-2 shadow-sm">
              <li>
                <a onClick={(e) => handelsort(e, "price High-Low")}>
                  price High-Low
                </a>
              </li>
              <li>
                <a onClick={(e) => handelsort(e, "price Low-High")}>
                  price Low-High
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className=" rounded-2xl  shadow-sm mb-5   min-h-16 w-fit mx-auto  px-5">
        <div className="flex justify-center max-sm:flex-col gap-5 content-center items-center w-fit mx-auto py-5">
          <div className="w-fit flex justify-center gap-5">
            {" "}
            <label className="input w-fit pl-0 overflow-hidden">
              <div className="text-center items-center h-full font-semibold self-center flex justify-center bg-blue-300 px-5">
                from
              </div>
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                value={from}
                onChange={(e) => setfrom(e.target.value.trim())}
                className="grow"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="w-fit">
            {" "}
            <label className="input  w-fit pl-0 overflow-hidden">
              <div className="text-center items-center h-full flex justify-center font-semibold self-center bg-blue-300 px-5">
                to
              </div>
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                value={to}
                onChange={(e) => setto(e.target.value.trim())}
                className="grow"
                placeholder="Search"
              />
            </label>
          </div>

          {from !== "" && to !== "" && (
            <div className="">
              <button
                onClick={handelFilter}
                className="btn btn-outline btn-primary"
              >
                Apply
              </button>
            </div>
          )}
          <div className="">
            <button
              onClick={(e) => {
                setfrom("");
                setto("");
                handelFilterReset(e);
              }}
              className="btn btn-outline btn-primary"
            >
              reset
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-300 mb-5 justify-center flex overflow-scroll  ">
        {category.map((a, i) => (
          <button
            onClick={(e) => handelsortb(e)}
            key={"ac" + i}
            className="btn  btn-outline btn-primary mr-1.5"
          >
            {a}
          </button>
        ))}
        {/* <button className="btn btn-outline btn-primary">Primary</button> */}
      </div>
      <div className="grid grid-cols-3 mx-auto w-fit max-sm:grid-cols-1 gap-5">
        {filterdata.map((ticket, i) => {
          return <TicketCard key={i + "ti"} ticket={ticket}></TicketCard>;
        })}
      </div>
      <div className="flex flex-wrap justify-center p-5 gap-5">
        {pages.map((i) => {
          return (
            <div
              onClick={(e) => {
                setpage(Number(e.target.innerText) - 1);
                handelPageLoad(e, Number(e.target.innerText) - 1);
              }}
              className="btn btn-square"
              key={"page" + i}
            >
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlTicket;
