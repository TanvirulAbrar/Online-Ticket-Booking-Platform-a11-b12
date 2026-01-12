import { useEffect, useState } from "react";
import TicketCard from "./card/TicketCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Shared/Loading/Loading";
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
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header */}
        <div className="mb-8 border-l-4 border-primary pl-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All ticket</h1>
        </div>

        {/* Search and Filter Section */}
        <div className="space-y-6 mb-12">
          {/* Main Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <span className="material-symbols-outlined text-lg">search</span>
              </span>
              <input 
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary" 
                placeholder="Search" 
                type="text"
                onChange={(e) => findWithWord(e.target.value.trim())}
              />
            </div>
            <div className="relative">
              <select 
                className="appearance-none flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer pr-10"
                value={sort}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "price High-Low") {
                    setprice("high");
                  } else if (value === "price Low-High") {
                    setprice("low");
                  }
                  setsort(value);
                  setpage(0);
                }}
              >
                <option value="">Sort By</option>
                <option value="price High-Low">Price High-Low</option>
                <option value="price Low-High">Price Low-High</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
            </div>
          </div>

          {/* From/To Search */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex flex-grow w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center bg-primary text-white px-4 py-3 font-medium min-w-[80px] justify-center">from</div>
              <input 
                className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border-none focus:ring-0 text-gray-900 dark:text-white" 
                placeholder="Search" 
                type="text"
                value={from}
                onChange={(e) => setfrom(e.target.value.trim())}
              />
            </div>
            <div className="flex flex-grow w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center bg-primary text-white px-4 py-3 font-medium min-w-[80px] justify-center">to</div>
              <input 
                className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border-none focus:ring-0 text-gray-900 dark:text-white" 
                placeholder="Search" 
                type="text"
                value={to}
                onChange={(e) => setto(e.target.value.trim())}
              />
            </div>
            <button 
              className="w-full md:w-auto px-8 py-3 bg-blue-50 dark:bg-blue-900/20 text-primary border border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
              onClick={(e) => {
                setfrom("");
                setto("");
                handelFilterReset(e);
              }}
            >
              reset
            </button>
          </div>

          {/* Transport Type Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {category.map((type, i) => (
              <button 
                key={"ac" + i}
                className={`px-6 py-2 border border-primary rounded-md font-medium transition-colors ${
                  transportType === type 
                    ? 'bg-primary text-white' 
                    : 'text-primary hover:bg-primary hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  settransportType(type);
                  setpage(0);
                }}
              >
                {type}
              </button>
            ))}
            {transportType && (
              <button
                onClick={() => {
                  settransportType("");
                  setpage(0);
                }}
                className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 border border-red-300 rounded-md font-medium hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex items-center gap-2"
              >
                Clear: {transportType}
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filterdata.map((ticket, i) => {
            return <TicketCard key={i + "ti"} ticket={ticket}></TicketCard>;
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {pages.map((pageNum) => {
            return (
              <button
                key={"page" + pageNum}
                className={`w-10 h-10 flex items-center justify-center rounded-md border transition-colors ${
                  page === pageNum - 1
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white'
                }`}
                onClick={(e) => {
                  setpage(pageNum - 1);
                  handelPageLoad(e, pageNum - 1);
                }}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default AlTicket;
