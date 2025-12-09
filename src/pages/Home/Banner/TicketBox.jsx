import { Search } from "lucide-react";

const TicketBox = () => {
  const data = [
    {
      tag: "DAC",
      title: "Dhaka",
      detail: " Bangladesh, HSIA ",
    },
    {
      tag: "CXB",
      title: "Cox's Bazar",
      detail: "  Bangladesh, CBA",
    },
    {
      tag: "09",
      title: "December",
      detail: "  Tuesday, 2025",
    },
    {
      tag: "11",
      title: "December",
      detail: "  Tuesday, 2025",
    },
  ];
  return (
    <div className="w-full max-w-4xl mx-auto  max-sm:hidden  flex flex-wrap items-center justify-between gap-4">
      {data.map((item, i) => {
        return (
          <div
            key={i + "b"}
            className="flex max-w-50 max-h-15
             overflow-hidden px-4 py-2 border border-[#cfcfcf] rounded-xl w-1/4"
          >
            <span className=" self-center font-bold">{item.tag}</span>
            <div className="w-[1px] mx-1 bg-[#cbcbcb]"></div>
            <div className="flex w-fit flex-col">
              {" "}
              <span className=" font-semibold">{item.title}</span>
              <div className="text-[12px] flex   font-light text-gray-500">
                {item.detail}
              </div>
            </div>
          </div>
        );
      })}

      <button className="p-4 rounded-xl bg-[#C9A27D] hover:bg-[#b58d68] transition text-white flex items-center justify-center">
        <Search className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TicketBox;
