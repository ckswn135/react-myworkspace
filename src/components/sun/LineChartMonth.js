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
        <XAxis
          dataKey="locdate"
          domain={[0, 2400]}
          tickCount={4}
          tick={[600, 1200, 1800, 2400]}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="일출" stroke="#FFA500" />
        <Line type="monotone" dataKey="일몰" stroke="#008000" />
        <Line type="monotone" dataKey="월출" stroke="#1E90FF" />
        <Line type="monotone" dataKey="월몰" stroke="#00008B" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartMonth;
