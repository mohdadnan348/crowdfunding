// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function AdminCharts({ stats }) {
//   const data = [
//     { name: "Users", value: stats.totalUsers || 0 },
//     { name: "Projects", value: stats.totalProjects || 0 },
//     { name: "Active", value: stats.activeProjects || 0 },
//   ];

//   return (
//     <div className="bg-white p-5 rounded-xl shadow">
//       <h2 className="text-lg font-bold mb-4">Platform Analytics 📊</h2>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function AdminCharts({ stats }) {
//   const data = [
//     { name: "Users", value: stats.totalUsers || 0 },
//     { name: "Projects", value: stats.totalProjects || 0 },
//     { name: "Active", value: stats.activeProjects || 0 },
//   ];

//   return (
//     <div className="bg-white/95 text-black p-5 rounded-2xl shadow-lg">
//       <h2 className="text-lg font-bold mb-4">Analytics 📊</h2>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" fill="#4f46e5" radius={[10, 10, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function AdminCharts({ stats }) {
  const data = [
    { name: "Users", value: stats.totalUsers || 0 },
    { name: "Projects", value: stats.totalProjects || 0 },
    { name: "Active", value: stats.activeProjects || 0 },
  ];

  return (
    <div className="bg-black border border-cyan-500/30 p-5 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.15)]">

      <h2 className="text-lg font-bold mb-4 text-cyan-400">
        Analytics 📊
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>

          {/* Grid for professional look */}
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

          {/* Axes */}
          <XAxis
            dataKey="name"
            stroke="#9ca3af"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <YAxis
            stroke="#9ca3af"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #22d3ee",
              borderRadius: "10px",
              color: "#fff",
            }}
          />

          {/* Bars */}
          <Bar
            dataKey="value"
            fill="#22d3ee"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}