import { PieChart, Pie, Tooltip, Legend } from "recharts";

const RevenuePieChart = ({ revenue, ticketsSold, ticketsAdded }) => {
  const innerData = [
    { name: "Revenue", value: revenue },
    { name: "Tickets Sold", value: ticketsSold },
    { name: "Tickets Added", value: ticketsAdded },
  ];

  const outerData = [
    { name: "Revenue ($)", value: revenue },
    { name: "Sold Qty", value: ticketsSold },
    { name: "Added Qty", value: ticketsAdded },
  ];

  return (
    <PieChart
      width={450}
      height={350}
      style={{ maxWidth: "100%", margin: "0 auto" }}
    >
      <Pie
        data={innerData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={0}
        outerRadius={70}
        fill="#8884d8"
        label
      />

      <Pie
        data={outerData}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={120}
        fill="#82ca9d"
        label
      />

      <Tooltip />
      <Legend />
    </PieChart>
  );
};
export default RevenuePieChart;
