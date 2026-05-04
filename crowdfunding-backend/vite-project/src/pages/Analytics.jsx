// // import { useEffect, useState } from "react";
// // import API from "../services/api";
// // import AdminLayout from "../components/AdminLayout";

// // import {
// //   PieChart, Pie, Cell, Tooltip,
// //   BarChart, Bar, XAxis, YAxis,
// //   LineChart, Line
// // } from "recharts";

// // export default function Analytics() {
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     const res = await API.get("/admin/analytics");
// //     setData(res.data.data);
// //   };

// //   if (!data) return <p className="text-white">Loading...</p>;

// //   // 🔥 Convert data
// //   const statusChart = Object.entries(data.statusData).map(([k, v]) => ({
// //     name: k,
// //     value: v,
// //   }));

// //   const roleChart = Object.entries(data.roleData).map(([k, v]) => ({
// //     name: k,
// //     value: v,
// //   }));

// //   const monthlyChart = Object.entries(data.monthlyData).map(([k, v]) => ({
// //     name: k,
// //     amount: v,
// //   }));

// //   return (
// //     <AdminLayout>
// //       <h1 className="text-3xl font-bold text-cyan-400 mb-6">
// //         Analytics Dashboard 📊
// //       </h1>

// //       <div className="grid md:grid-cols-2 gap-6">

// //         {/* 🥧 Project Status */}
// //         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl">
// //           <h2 className="mb-4 text-cyan-300">Project Status</h2>
// //           <PieChart width={300} height={300}>
// //             <Pie data={statusChart} dataKey="value" outerRadius={100}>
// //               {statusChart.map((_, i) => <Cell key={i} />)}
// //             </Pie>
// //             <Tooltip />
// //           </PieChart>
// //         </div>

// //         {/* 👥 User Roles */}
// //         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl">
// //           <h2 className="mb-4 text-cyan-300">User Roles</h2>
// //           <PieChart width={300} height={300}>
// //             <Pie data={roleChart} dataKey="value" outerRadius={100}>
// //               {roleChart.map((_, i) => <Cell key={i} />)}
// //             </Pie>
// //             <Tooltip />
// //           </PieChart>
// //         </div>

// //         {/* 📈 Monthly Growth */}
// //         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2">
// //           <h2 className="mb-4 text-cyan-300">Monthly Investment</h2>
// //           <LineChart width={600} height={300} data={monthlyChart}>
// //             <XAxis dataKey="name" />
// //             <YAxis />
// //             <Tooltip />
// //             <Line dataKey="amount" />
// //           </LineChart>
// //         </div>

// //       </div>
// //     </AdminLayout>
// //   );
// // }
// // import { useEffect, useState } from "react";
// // import API from "../services/api";
// // import AdminLayout from "../components/AdminLayout";

// // import {
// //   PieChart, Pie, Cell, Tooltip,
// //   LineChart, Line, XAxis, YAxis,
// // } from "recharts";

// // export default function Analytics() {
// //   const [data, setData] = useState(null);
// //   const [advanced, setAdvanced] = useState(null);

// //   useEffect(() => {
// //     fetchBasic();
// //     fetchAdvanced();
// //   }, []);

// //   // 🔹 BASIC DATA
// //   const fetchBasic = async () => {
// //     try {
// //       const res = await API.get("/admin/analytics");
// //       setData(res.data.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   // 🔹 ADVANCED DATA
// //   const fetchAdvanced = async () => {
// //     try {
// //       const res = await API.get("/admin/analytics/advanced");
// //       setAdvanced(res.data.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   if (!data) return <p className="text-white">Loading...</p>;

// //   // 🔥 Convert Data
// //   const statusChart = Object.entries(data.statusData).map(([k, v]) => ({
// //     name: k,
// //     value: v,
// //   }));

// //   const roleChart = Object.entries(data.roleData).map(([k, v]) => ({
// //     name: k,
// //     value: v,
// //   }));

// //   const monthlyChart = Object.entries(data.monthlyData).map(([k, v]) => ({
// //     name: k,
// //     amount: v,
// //   }));

// //   return (
// //     <AdminLayout>
// //       <h1 className="text-3xl font-bold text-cyan-400 mb-6">
// //         Analytics Dashboard 📊
// //       </h1>

// //       {/* 🔹 BASIC CHARTS */}
// //       <div className="grid md:grid-cols-2 gap-6">

// //         {/* 🥧 Project Status */}
// //         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)]">
// //           <h2 className="mb-4 text-cyan-300">Project Status</h2>

// //           <PieChart width={300} height={300}>
// //             <Pie data={statusChart} dataKey="value" outerRadius={100}>
// //               {statusChart.map((_, i) => <Cell key={i} />)}
// //             </Pie>
// //             <Tooltip />
// //           </PieChart>
// //         </div>

// //         {/* 👥 User Roles */}
// //         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)]">
// //           <h2 className="mb-4 text-cyan-300">User Roles</h2>

// //           <PieChart width={300} height={300}>
// //             <Pie data={roleChart} dataKey="value" outerRadius={100}>
// //               {roleChart.map((_, i) => <Cell key={i} />)}
// //             </Pie>
// //             <Tooltip />
// //           </PieChart>
// //         </div>

// //         {/* 📈 Monthly Growth */}
// //         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
// //           <h2 className="mb-4 text-cyan-300">Monthly Investment</h2>

// //           <LineChart width={600} height={300} data={monthlyChart}>
// //             <XAxis dataKey="name" />
// //             <YAxis />
// //             <Tooltip />
// //             <Line dataKey="amount" />
// //           </LineChart>
// //         </div>

// //       </div>

// //       {/* 🔥 ADVANCED ANALYTICS */}
// //       {advanced && (
// //         <div className="mt-10 grid md:grid-cols-2 gap-6">

// //           {/* 💰 Total */}
// //           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
// //             <h2 className="text-cyan-300 mb-2">Total Investment</h2>
// //             <p className="text-2xl font-bold">
// //               ₹{advanced.totalInvestment}
// //             </p>
// //           </div>

// //           {/* 💸 Avg */}
// //           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
// //             <h2 className="text-cyan-300 mb-2">Avg Investment</h2>
// //             <p className="text-2xl font-bold">
// //               ₹{advanced.avgInvestment?.toFixed(0)}
// //             </p>
// //           </div>

// //           {/* 🏆 Top Projects */}
// //           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2 shadow">
// //             <h2 className="text-cyan-300 mb-4">Top Projects 🔥</h2>

// //             {advanced.topProjects.map((p, i) => (
// //               <div key={i} className="flex justify-between border-b border-cyan-400/20 py-2">
// //                 <span>{p.title}</span>
// //                 <span>₹{p.amount}</span>
// //               </div>
// //             ))}

// //             {/* 📥 CSV DOWNLOAD */}
// //             <button
// //               onClick={() => {
// //                 const csv = advanced.topProjects
// //                   .map((p) => `${p.title},${p.amount}`)
// //                   .join("\n");

// //                 const blob = new Blob([csv], { type: "text/csv" });
// //                 const url = window.URL.createObjectURL(blob);

// //                 const a = document.createElement("a");
// //                 a.href = url;
// //                 a.download = "top-projects.csv";
// //                 a.click();
// //               }}
// //               className="mt-4 bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600"
// //             >
// //               Download CSV
// //             </button>
// //           </div>

// //           {/* 📊 Category Pie */}
// //           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
// //             <h2 className="text-cyan-300 mb-4">Categories</h2>

// //             <PieChart width={300} height={300}>
// //               <Pie
// //                 data={Object.entries(advanced.categoryData).map(([k, v]) => ({
// //                   name: k,
// //                   value: v,
// //                 }))}
// //                 dataKey="value"
// //                 outerRadius={100}
// //               >
// //                 {Object.entries(advanced.categoryData).map((_, i) => (
// //                   <Cell key={i} />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //             </PieChart>
// //           </div>

// //           {/* 📈 Growth */}
// //           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
// //             <h2 className="text-cyan-300 mb-2">Growth</h2>
// //             <p className="text-3xl font-bold">
// //               {advanced.growth}%
// //             </p>
// //           </div>

// //           {/* 🧠 Insights */}
// //           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2 shadow">
// //             <h2 className="text-cyan-300 mb-4">Insights 🧠</h2>

// //             {advanced.insights.map((i, idx) => (
// //               <p key={idx} className="mb-2">• {i}</p>
// //             ))}
// //           </div>

// //         </div>
// //       )}
// //     </AdminLayout>
// //   );
// // }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";

// import {
//   PieChart, Pie, Cell, Tooltip,
//   LineChart, Line, XAxis, YAxis,
// } from "recharts";

// export default function Analytics() {
//   const [data, setData] = useState(null);
//   const [advanced, setAdvanced] = useState(null);

//   useEffect(() => {
//     fetchBasic();
//     fetchAdvanced();
//   }, []);

//   const fetchBasic = async () => {
//     try {
//       const res = await API.get("/admin/analytics");
//       setData(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchAdvanced = async () => {
//     try {
//       const res = await API.get("/admin/analytics/advanced");
//       setAdvanced(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!data) return <p className="text-white">Loading...</p>;

//   // 🔥 Convert Data
//   const statusChart = Object.entries(data.statusData).map(([k, v]) => ({
//     name: k,
//     value: v,
//   }));

//   const roleChart = Object.entries(data.roleData).map(([k, v]) => ({
//     name: k,
//     value: v,
//   }));

//   const monthlyChart = Object.entries(data.monthlyData).map(([k, v]) => ({
//     name: k,
//     amount: v,
//   }));

//   // 🎨 Grey Theme Colors
//   const COLORS = ["#9CA3AF", "#6B7280", "#4B5563", "#374151"];

//   return (
//     <AdminLayout>
//       <h1 className="text-3xl font-bold text-cyan-400 mb-6">
//         Analytics Dashboard 📊
//       </h1>

//       {/* 🔹 BASIC CHARTS */}
//       <div className="grid md:grid-cols-2 gap-6">

//         {/* 🥧 Project Status */}
//         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
//           <h2 className="mb-4 text-cyan-300">Project Status</h2>

//           <PieChart width={300} height={300}>
//             <Pie data={statusChart} dataKey="value" outerRadius={100}>
//               {statusChart.map((_, i) => (
//                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </div>

//         {/* 👥 User Roles */}
//         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
//           <h2 className="mb-4 text-cyan-300">User Roles</h2>

//           <PieChart width={300} height={300}>
//             <Pie data={roleChart} dataKey="value" outerRadius={100}>
//               {roleChart.map((_, i) => (
//                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </div>

//         {/* 📈 Monthly Growth */}
//         <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2 shadow">
//           <h2 className="mb-4 text-cyan-300">Monthly Investment</h2>

//           <LineChart width={600} height={300} data={monthlyChart}>
//             <XAxis dataKey="name" stroke="#9CA3AF" />
//             <YAxis stroke="#9CA3AF" />
//             <Tooltip />
//             <Line type="monotone" dataKey="amount" stroke="#9CA3AF" strokeWidth={3} />
//           </LineChart>
//         </div>

//       </div>

//       {/* 🔥 ADVANCED ANALYTICS */}
//       {advanced && (
//         <div className="mt-10 grid md:grid-cols-2 gap-6">

//           {/* 💰 Total */}
//           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl">
//             <h2 className="text-cyan-300 mb-2">Total Investment</h2>
//             <p className="text-2xl font-bold">
//               ₹{advanced.totalInvestment}
//             </p>
//           </div>

//           {/* 💸 Avg */}
//           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl">
//             <h2 className="text-cyan-300 mb-2">Average Investment</h2>
//             <p className="text-2xl font-bold">
//               ₹{advanced.avgInvestment?.toFixed(0)}
//             </p>
//           </div>

//           {/* 🏆 Top Projects */}
//           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2">
//             <h2 className="text-cyan-300 mb-4">Top Projects 🔥</h2>

//             {advanced.topProjects.map((p, i) => (
//               <div key={i} className="flex justify-between border-b border-gray-700 py-2">
//                 <span>{p.title}</span>
//                 <span>₹{p.amount}</span>
//               </div>
//             ))}

//             {/* CSV */}
//             <button
//               onClick={() => {
//                 const csv = advanced.topProjects
//                   .map((p) => `${p.title},${p.amount}`)
//                   .join("\n");

//                 const blob = new Blob([csv], { type: "text/csv" });
//                 const url = window.URL.createObjectURL(blob);

//                 const a = document.createElement("a");
//                 a.href = url;
//                 a.download = "top-projects.csv";
//                 a.click();
//               }}
//               className="mt-4 bg-gray-700 px-4 py-2 rounded hover:bg-gray-800"
//             >
//               Download CSV
//             </button>
//           </div>

//           {/* 📊 Category Pie */}
//           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl">
//             <h2 className="text-cyan-300 mb-4">Categories</h2>

//             <PieChart width={300} height={300}>
//               <Pie
//                 data={Object.entries(advanced.categoryData).map(([k, v]) => ({
//                   name: k,
//                   value: v,
//                 }))}
//                 dataKey="value"
//                 outerRadius={100}
//               >
//                 {Object.entries(advanced.categoryData).map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </div>

//           {/* 📈 Growth */}
//           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl">
//             <h2 className="text-cyan-300 mb-2">Growth</h2>
//             <p className={`text-3xl font-bold ${advanced.growth < 0 ? "text-red-500" : "text-green-400"}`}>
//               {advanced.growth}%
//             </p>
//           </div>

//           {/* 🧠 Insights */}
//           <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2">
//             <h2 className="text-cyan-300 mb-4">Insights 🧠</h2>

//             {advanced.insights.map((i, idx) => (
//               <p key={idx} className="mb-2 text-gray-300">• {i}</p>
//             ))}
//           </div>

//         </div>
//       )}
//     </AdminLayout>
//   );
// }
import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

import {
  PieChart, Pie, Cell, Tooltip,
  LineChart, Line, XAxis, YAxis,
} from "recharts";

export default function Analytics() {
  const [data, setData] = useState(null);
  const [advanced, setAdvanced] = useState(null);

  useEffect(() => {
    fetchBasic();
    fetchAdvanced();
  }, []);

  const fetchBasic = async () => {
    try {
      const res = await API.get("/admin/analytics");
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAdvanced = async () => {
    try {
      const res = await API.get("/admin/analytics/advanced");
      setAdvanced(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!data) return <p className="text-white">Loading...</p>;

  // 🔥 NEON COLORS
  const COLORS = [
    "#00FFFF", // cyan
    "#FF00FF", // pink
    "#00FF00", // green
    "#FFFF00", // yellow
    "#FF5733", // orange
    "#3399FF", // blue
  ];

  const statusChart = Object.entries(data.statusData).map(([k, v]) => ({
    name: k,
    value: v,
  }));

  const roleChart = Object.entries(data.roleData).map(([k, v]) => ({
    name: k,
    value: v,
  }));

  const monthlyChart = Object.entries(data.monthlyData).map(([k, v]) => ({
    name: k,
    amount: v,
  }));

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        Analytics Dashboard 📊
      </h1>

      {/* BASIC */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* STATUS */}
        <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          <h2 className="mb-4 text-cyan-300">Project Status</h2>

          <PieChart width={300} height={300}>
            <Pie data={statusChart} dataKey="value" outerRadius={100}>
              {statusChart.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* ROLES */}
        <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          <h2 className="mb-4 text-cyan-300">User Roles</h2>

          <PieChart width={300} height={300}>
            <Pie data={roleChart} dataKey="value" outerRadius={100}>
              {roleChart.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* LINE CHART */}
        <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          <h2 className="mb-4 text-cyan-300">Monthly Investment</h2>

          <LineChart width={600} height={300} data={monthlyChart}>
            <XAxis dataKey="name" stroke="#00FFFF" />
            <YAxis stroke="#00FFFF" />
            <Tooltip />
            <Line
              dataKey="amount"
              stroke="#FF00FF"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </div>

      </div>

      {/* ADVANCED */}
      {advanced && (
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
            <h2 className="text-cyan-300 mb-2">Total Investment</h2>
            <p className="text-2xl font-bold">₹{advanced.totalInvestment}</p>
          </div>

          <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
            <h2 className="text-cyan-300 mb-2">Avg Investment</h2>
            <p className="text-2xl font-bold">
              ₹{advanced.avgInvestment?.toFixed(0)}
            </p>
          </div>

          {/* TOP PROJECTS */}
          <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2 shadow">
            <h2 className="text-cyan-300 mb-4">Top Projects 🔥</h2>

            {advanced.topProjects.map((p, i) => (
              <div key={i} className="flex justify-between border-b border-cyan-400/20 py-2">
                <span>{p.title}</span>
                <span>₹{p.amount}</span>
              </div>
            ))}

            <button
              onClick={() => {
                const csv = advanced.topProjects
                  .map((p) => `${p.title},${p.amount}`)
                  .join("\n");

                const blob = new Blob([csv], { type: "text/csv" });
                const url = window.URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = url;
                a.download = "top-projects.csv";
                a.click();
              }}
              className="mt-4 bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600"
            >
              Download CSV
            </button>
          </div>

          {/* CATEGORY PIE */}
          <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
            <h2 className="text-cyan-300 mb-4">Categories</h2>

            <PieChart width={300} height={300}>
              <Pie
                data={Object.entries(advanced.categoryData).map(([k, v]) => ({
                  name: k,
                  value: v,
                }))}
                dataKey="value"
                outerRadius={100}
              >
                {Object.entries(advanced.categoryData).map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* GROWTH */}
          <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl shadow">
            <h2 className="text-cyan-300 mb-2">Growth</h2>
            <p className="text-3xl font-bold text-pink-400">
              {advanced.growth}%
            </p>
          </div>

          {/* INSIGHTS */}
          <div className="bg-black/70 border border-cyan-400/30 p-5 rounded-2xl col-span-2 shadow">
            <h2 className="text-cyan-300 mb-4">Insights 🧠</h2>

            {advanced.insights.map((i, idx) => (
              <p key={idx} className="mb-2 text-gray-300">
                • {i}
              </p>
            ))}
          </div>

        </div>
      )}
    </AdminLayout>
  );
}