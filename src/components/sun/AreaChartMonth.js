import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const AreaChartMonth = ({ data }) => {
  return (
    <AreaChart
      width={700}
      height={240}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <XAxis dataKey="locdate" />
      <YAxis />
      <Area dataKey="sun" stroke="#8884d8" fill="#8884d8" />
      <Area dataKey="moon" stroke="#8884d8" fill="#8884d8" />
      <Tooltip />
    </AreaChart>
  );
};

export default AreaChartMonth;
