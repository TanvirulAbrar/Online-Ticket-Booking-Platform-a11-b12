import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const RevenueOverviewChart = ({ revenue, ticketsSold, ticketsAdded }) => {
  const data = [
    {
      name: "Total Revenue",
      value: revenue,
      fill: "#22c55e",
    },
    {
      name: "Tickets Sold",
      value: ticketsSold,
      fill: "#3b82f6",
    },
    {
      name: "Tickets Added",
      value: ticketsAdded,
      fill: "#f97316",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <RadialBarChart
        width={500}
        height={350}
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="50%"
        barSize={14}
        data={data}
      >
        <RadialBar
          dataKey="value"
          label={{ position: "insideStart", fill: "#fff" }}
          background
        />
        <Tooltip />
        <Legend layout="vertical" verticalAlign="bottom" align="right" />
      </RadialBarChart>
    </div>
  );
};

export default RevenueOverviewChart;
