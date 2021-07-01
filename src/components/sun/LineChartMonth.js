import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartMonth = ({ data }) => {
  console.log("--linemonthchart data--");
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height="70%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="날짜" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="일출" stroke="#66bb6a" />
        <Line type="monotone" dataKey="일몰" stroke="#66bb6a" />
        <Line type="monotone" dataKey="월출" stroke="#8884d8" />
        <Line type="monotone" dataKey="월몰" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartMonth;
