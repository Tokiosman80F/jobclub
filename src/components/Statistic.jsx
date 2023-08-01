import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Statistic = () => {
  const data = [
    { subject: "assignment-1", full_mark: 60, obtain_mark: 59 },
    { subject: "assignment-2", full_mark: 60, obtain_mark: 58 },
    { subject: "assignment-3", full_mark: 60, obtain_mark: 60 },
    { subject: "assignment-4", full_mark: 60, obtain_mark: 57 },
    { subject: "assignment-5", full_mark: 60, obtain_mark: 50 },
    { subject: "assignment-6", full_mark: 60, obtain_mark: 60 },
    { subject: "assignment-7", full_mark: 60, obtain_mark: 59 },
    { subject: "assignment-8", full_mark: 60, obtain_mark: 60 },
  ];
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">Chart </h1>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="toki"
              dataKey="obtain_mark"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
