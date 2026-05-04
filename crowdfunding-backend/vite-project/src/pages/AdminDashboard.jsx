// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import API from "../services/api";

// // // // // // // // // // // const AdminDashboard = () => {
// // // // // // // // // // //   const [stats, setStats] = useState({});
// // // // // // // // // // //   const [projects, setProjects] = useState([]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchStats();
// // // // // // // // // // //     fetchProjects();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   // 📊 Dashboard Stats
// // // // // // // // // // //   const fetchStats = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await API.get("/admin/dashboard");
// // // // // // // // // // //       setStats(res.data.data);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.log(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // 📁 All Projects
// // // // // // // // // // //   const fetchProjects = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await API.get("/admin/projects");
// // // // // // // // // // //       setProjects(res.data.data);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.log(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // ✅ Approve Project
// // // // // // // // // // //   const handleApprove = async (id) => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       await API.put(`/admin/projects/${id}/status`, {
// // // // // // // // // // //         status: "ACTIVE",
// // // // // // // // // // //       });

// // // // // // // // // // //       alert("Project Approved");
// // // // // // // // // // //       fetchProjects();
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       alert("Error");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // ❌ Reject Project
// // // // // // // // // // //   const handleReject = async (id) => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       await API.put(`/admin/projects/${id}/status`, {
// // // // // // // // // // //         status: "FAILED",
// // // // // // // // // // //       });

// // // // // // // // // // //       alert("Project Rejected");
// // // // // // // // // // //       fetchProjects();
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       alert("Error");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="p-6">
// // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

// // // // // // // // // // //       {/* 📊 Stats */}
// // // // // // // // // // //       <div className="grid grid-cols-4 gap-4 mb-6">
// // // // // // // // // // //         <div className="border p-4">Users: {stats.totalUsers}</div>
// // // // // // // // // // //         <div className="border p-4">Projects: {stats.totalProjects}</div>
// // // // // // // // // // //         <div className="border p-4">Active: {stats.activeProjects}</div>
// // // // // // // // // // //         <div className="border p-4">
// // // // // // // // // // //           Fund: ₹{stats.totalFundRaised}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* 📁 Projects */}
// // // // // // // // // // //       <h2 className="text-xl mb-2">All Projects</h2>

// // // // // // // // // // //       {projects.map((p) => (
// // // // // // // // // // //         <div key={p._id} className="border p-3 mb-3">
// // // // // // // // // // //           <h3 className="font-bold">{p.title}</h3>
// // // // // // // // // // //           <p>Status: {p.status}</p>
// // // // // // // // // // //           <p>Creator: {p.creatorId?.name}</p>

// // // // // // // // // // //           <div className="mt-2 space-x-2">
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => handleApprove(p._id)}
// // // // // // // // // // //               className="bg-green-500 text-white px-2 py-1"
// // // // // // // // // // //             >
// // // // // // // // // // //               Approve
// // // // // // // // // // //             </button>

// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => handleReject(p._id)}
// // // // // // // // // // //               className="bg-red-500 text-white px-2 py-1"
// // // // // // // // // // //             >
// // // // // // // // // // //               Reject
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       ))}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default AdminDashboard;
// // import { useEffect, useState } from "react";
// // import API from "../services/api";

// // export default function AdminDashboard() {
// //   const [stats, setStats] = useState({});
// //   const [projects, setProjects] = useState([]);

// //   useEffect(() => {
// //     fetchStats();
// //     fetchProjects();
// //   }, []);

// //   const fetchStats = async () => {
// //     try {
// //       const res = await API.get("/admin/dashboard");
// //       setStats(res.data.data || {});
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const fetchProjects = async () => {
// //     try {
// //       const res = await API.get("/admin/projects");
// //       setProjects(res.data.data || []);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const handleApprove = async (id) => {
// //     try {
// //       await API.put(`/admin/projects/${id}/status`, {
// //         status: "ACTIVE",
// //       });
// //       fetchProjects();
// //     } catch {
// //       alert("Error");
// //     }
// //   };

// //   const handleReject = async (id) => {
// //     try {
// //       await API.put(`/admin/projects/${id}/status`, {
// //         status: "FAILED",
// //       });
// //       fetchProjects();
// //     } catch {
// //       alert("Error");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// //       <div className="max-w-7xl mx-auto px-6 py-10">

// //         {/* Header */}
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold">Admin Dashboard 👑</h1>
// //           <p className="text-blue-200">
// //             Manage users, projects and platform activity
// //           </p>
// //         </div>

// //         {/* Stats */}
// //         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
// //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// //             <p className="text-sm text-gray-500">Users</p>
// //             <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
// //           </div>

// //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// //             <p className="text-sm text-gray-500">Projects</p>
// //             <h2 className="text-2xl font-bold">{stats.totalProjects || 0}</h2>
// //           </div>

// //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// //             <p className="text-sm text-gray-500">Active</p>
// //             <h2 className="text-2xl font-bold">{stats.activeProjects || 0}</h2>
// //           </div>

// //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// //             <p className="text-sm text-gray-500">Total Fund</p>
// //             <h2 className="text-2xl font-bold">
// //               ₹{stats.totalFundRaised || 0}
// //             </h2>
// //           </div>
// //         </div>

// //         {/* Projects */}
// //         <div>
// //           <h2 className="text-xl font-semibold mb-4">
// //             All Projects 📁
// //           </h2>

// //           <div className="space-y-4">
// //             {projects.length > 0 ? (
// //               projects.map((p) => (
// //                 <div
// //                   key={p._id}
// //                   className="bg-white/95 text-black rounded-2xl shadow-lg p-5 hover:scale-[1.01] transition"
// //                 >
// //                   <div className="flex justify-between items-center">

// //                     <div>
// //                       <h3 className="text-lg font-semibold">
// //                         {p.title}
// //                       </h3>
// //                       <p className="text-sm text-gray-600">
// //                         Creator: {p.creatorId?.name || "Unknown"}
// //                       </p>
// //                       <p className="text-sm mt-1">
// //                         Status:{" "}
// //                         <span
// //                           className={`font-semibold ${
// //                             p.status === "ACTIVE"
// //                               ? "text-green-600"
// //                               : p.status === "PENDING"
// //                               ? "text-yellow-600"
// //                               : "text-red-600"
// //                           }`}
// //                         >
// //                           {p.status}
// //                         </span>
// //                       </p>
// //                     </div>

// //                     {/* Buttons */}
// //                     <div className="flex gap-2">
// //                       <button
// //                         onClick={() => handleApprove(p._id)}
// //                         className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
// //                       >
// //                         Approve
// //                       </button>

// //                       <button
// //                         onClick={() => handleReject(p._id)}
// //                         className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
// //                       >
// //                         Reject
// //                       </button>
// //                     </div>

// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <p className="text-blue-200">No projects found</p>
// //             )}
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }
// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import API from "../services/api";

// // // // // // // // // export default function AdminDashboard() {
// // // // // // // // //   const [stats, setStats] = useState({});
// // // // // // // // //   const [projects, setProjects] = useState([]);
// // // // // // // // //   const [users, setUsers] = useState([]);
// // // // // // // // //   const [selectedInvestments, setSelectedInvestments] = useState([]);

// // // // // // // // //   const [showUsers, setShowUsers] = useState(false);
// // // // // // // // //   const [showInvestments, setShowInvestments] = useState(false);

// // // // // // // // //   const [search, setSearch] = useState("");

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchStats();
// // // // // // // // //     fetchProjects();
// // // // // // // // //   }, []);

// // // // // // // // //   // 📊 Stats
// // // // // // // // //   const fetchStats = async () => {
// // // // // // // // //     const res = await API.get("/admin/dashboard");
// // // // // // // // //     setStats(res.data.data || {});
// // // // // // // // //   };

// // // // // // // // //   // 📁 Projects
// // // // // // // // //   const fetchProjects = async () => {
// // // // // // // // //     const res = await API.get("/admin/projects");
// // // // // // // // //     setProjects(res.data.data || []);
// // // // // // // // //   };

// // // // // // // // //   // 👤 Users
// // // // // // // // //   const fetchUsers = async () => {
// // // // // // // // //     const res = await API.get("/admin/users");
// // // // // // // // //     setUsers(res.data.data || []);
// // // // // // // // //     setShowUsers(true);
// // // // // // // // //   };

// // // // // // // // //   // 💰 Investments
// // // // // // // // //   const fetchInvestments = async (projectId) => {
// // // // // // // // //     const res = await API.get(`/admin/investments/${projectId}`);
// // // // // // // // //     setSelectedInvestments(res.data.data || []);
// // // // // // // // //     setShowInvestments(true);
// // // // // // // // //   };

// // // // // // // // //   // ✅ Approve
// // // // // // // // //   const handleApprove = async (id) => {
// // // // // // // // //     if (!window.confirm("Approve this project?")) return;

// // // // // // // // //     await API.put(`/admin/projects/${id}/status`, {
// // // // // // // // //       status: "ACTIVE",
// // // // // // // // //     });

// // // // // // // // //     alert("✅ Project Approved");
// // // // // // // // //     fetchProjects();
// // // // // // // // //   };

// // // // // // // // //   // ❌ Reject
// // // // // // // // //   const handleReject = async (id) => {
// // // // // // // // //     if (!window.confirm("Reject this project?")) return;

// // // // // // // // //     await API.put(`/admin/projects/${id}/status`, {
// // // // // // // // //       status: "FAILED",
// // // // // // // // //     });

// // // // // // // // //     alert("❌ Project Rejected");
// // // // // // // // //     fetchProjects();
// // // // // // // // //   };

// // // // // // // // //   // 🚫 Block User
// // // // // // // // //   const toggleBlock = async (id, current) => {
// // // // // // // // //     await API.put(`/admin/users/${id}/block`, {
// // // // // // // // //       isBlocked: !current,
// // // // // // // // //     });

// // // // // // // // //     fetchUsers();
// // // // // // // // //   };

// // // // // // // // //   // 🔍 Filter
// // // // // // // // //   const filteredProjects = projects.filter((p) =>
// // // // // // // // //     p.title.toLowerCase().includes(search.toLowerCase())
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// // // // // // // // //       <div className="max-w-7xl mx-auto px-6 py-10">

// // // // // // // // //         {/* HEADER */}
// // // // // // // // //         <h1 className="text-3xl font-bold mb-6">Admin Dashboard 👑</h1>

// // // // // // // // //         {/* 📊 STATS */}
// // // // // // // // //         <div className="grid md:grid-cols-4 gap-6 mb-10">

// // // // // // // // //           <div
// // // // // // // // //             onClick={fetchUsers}
// // // // // // // // //             className="bg-white text-black p-5 rounded-xl cursor-pointer"
// // // // // // // // //           >
// // // // // // // // //             <p>Users</p>
// // // // // // // // //             <h2 className="text-2xl font-bold">{stats.totalUsers}</h2>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="bg-white text-black p-5 rounded-xl">
// // // // // // // // //             <p>Projects</p>
// // // // // // // // //             <h2 className="text-2xl font-bold">{stats.totalProjects}</h2>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="bg-white text-black p-5 rounded-xl">
// // // // // // // // //             <p>Active</p>
// // // // // // // // //             <h2 className="text-2xl font-bold">{stats.activeProjects}</h2>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="bg-white text-black p-5 rounded-xl">
// // // // // // // // //             <p>Fund</p>
// // // // // // // // //             <h2 className="text-2xl font-bold">
// // // // // // // // //               ₹{stats.totalFundRaised}
// // // // // // // // //             </h2>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* 🔍 SEARCH */}
// // // // // // // // //         <input
// // // // // // // // //           placeholder="Search project..."
// // // // // // // // //           className="p-2 mb-6 rounded text-black w-full"
// // // // // // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // // // // // //         />

// // // // // // // // //         {/* 📁 PROJECTS */}
// // // // // // // // //         <div className="space-y-4">
// // // // // // // // //           {filteredProjects.map((p) => (
// // // // // // // // //             <div
// // // // // // // // //               key={p._id}
// // // // // // // // //               className="bg-white text-black p-5 rounded-xl shadow"
// // // // // // // // //             >
// // // // // // // // //               <h2 className="font-bold text-lg">{p.title}</h2>
// // // // // // // // //               <p>Creator: {p.creatorId?.name}</p>
// // // // // // // // //               <p>Status: {p.status}</p>

// // // // // // // // //               <div className="flex gap-2 mt-3 flex-wrap">

// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => handleApprove(p._id)}
// // // // // // // // //                   className="bg-green-600 text-white px-3 py-1 rounded"
// // // // // // // // //                 >
// // // // // // // // //                   Approve
// // // // // // // // //                 </button>

// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => handleReject(p._id)}
// // // // // // // // //                   className="bg-red-600 text-white px-3 py-1 rounded"
// // // // // // // // //                 >
// // // // // // // // //                   Reject
// // // // // // // // //                 </button>

// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => fetchInvestments(p._id)}
// // // // // // // // //                   className="bg-blue-600 text-white px-3 py-1 rounded"
// // // // // // // // //                 >
// // // // // // // // //                   View Investments
// // // // // // // // //                 </button>

// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* 👤 USERS MODAL */}
// // // // // // // // //         {showUsers && (
// // // // // // // // //           <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
// // // // // // // // //             <div className="bg-white text-black p-6 rounded w-[600px] max-h-[80vh] overflow-auto">
// // // // // // // // //               <h2 className="text-xl mb-4">All Users</h2>

// // // // // // // // //               {users.map((u) => (
// // // // // // // // //                 <div key={u._id} className="border p-2 mb-2">
// // // // // // // // //                   <p>{u.name} ({u.email})</p>
// // // // // // // // //                   <p>Role: {u.role}</p>

// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => toggleBlock(u._id, u.isBlocked)}
// // // // // // // // //                     className="bg-red-500 text-white px-2 py-1 mt-1"
// // // // // // // // //                   >
// // // // // // // // //                     {u.isBlocked ? "Unblock" : "Block"}
// // // // // // // // //                   </button>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}

// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setShowUsers(false)}
// // // // // // // // //                 className="mt-3 bg-gray-800 text-white px-3 py-1"
// // // // // // // // //               >
// // // // // // // // //                 Close
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         )}

// // // // // // // // //         {/* 💰 INVESTMENTS MODAL */}
// // // // // // // // //         {showInvestments && (
// // // // // // // // //           <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
// // // // // // // // //             <div className="bg-white text-black p-6 rounded w-[600px] max-h-[80vh] overflow-auto">
// // // // // // // // //               <h2 className="text-xl mb-4">Investments</h2>

// // // // // // // // //               {selectedInvestments.map((inv) => (
// // // // // // // // //                 <div key={inv._id} className="border p-2 mb-2">
// // // // // // // // //                   <p>Name: {inv.investorId?.name}</p>
// // // // // // // // //                   <p>Email: {inv.investorId?.email}</p>
// // // // // // // // //                   <p>Amount: ₹{inv.amount}</p>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}

// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setShowInvestments(false)}
// // // // // // // // //                 className="mt-3 bg-gray-800 text-white px-3 py-1"
// // // // // // // // //               >
// // // // // // // // //                 Close
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         )}

// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import API from "../services/api";
// // // // // // // // import AdminLayout from "../components/AdminLayout";
// // // // // // // // import AdminCharts from "../components/AdminCharts";

// // // // // // // // export default function AdminDashboard() {
// // // // // // // //   const [stats, setStats] = useState({});
// // // // // // // //   const [projects, setProjects] = useState([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchStats();
// // // // // // // //     fetchProjects();
// // // // // // // //   }, []);

// // // // // // // //   const fetchStats = async () => {
// // // // // // // //     const res = await API.get("/admin/dashboard");
// // // // // // // //     setStats(res.data.data || {});
// // // // // // // //   };

// // // // // // // //   const fetchProjects = async () => {
// // // // // // // //     const res = await API.get("/admin/projects");
// // // // // // // //     setProjects(res.data.data || []);
// // // // // // // //   };

// // // // // // // //   const handleApprove = async (id) => {
// // // // // // // //     if (!window.confirm("Approve project?")) return;

// // // // // // // //     await API.put(`/admin/projects/${id}/status`, {
// // // // // // // //       status: "ACTIVE",
// // // // // // // //     });

// // // // // // // //     alert("Approved");
// // // // // // // //     fetchProjects();
// // // // // // // //   };

// // // // // // // //   const handleReject = async (id) => {
// // // // // // // //     if (!window.confirm("Reject project?")) return;

// // // // // // // //     await API.put(`/admin/projects/${id}/status`, {
// // // // // // // //       status: "FAILED",
// // // // // // // //     });

// // // // // // // //     alert("Rejected");
// // // // // // // //     fetchProjects();
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <AdminLayout>

// // // // // // // //       <h1 className="text-2xl font-bold mb-6">
// // // // // // // //         Dashboard 👑
// // // // // // // //       </h1>

// // // // // // // //       {/* Stats Cards */}
// // // // // // // //       <div className="grid md:grid-cols-4 gap-4 mb-6">
// // // // // // // //         <div className="bg-white p-4 rounded shadow">
// // // // // // // //           Users: {stats.totalUsers}
// // // // // // // //         </div>
// // // // // // // //         <div className="bg-white p-4 rounded shadow">
// // // // // // // //           Projects: {stats.totalProjects}
// // // // // // // //         </div>
// // // // // // // //         <div className="bg-white p-4 rounded shadow">
// // // // // // // //           Active: {stats.activeProjects}
// // // // // // // //         </div>
// // // // // // // //         <div className="bg-white p-4 rounded shadow">
// // // // // // // //           ₹{stats.totalFundRaised}
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* 📊 Charts */}
// // // // // // // //       <AdminCharts stats={stats} />

// // // // // // // //       {/* Projects */}
// // // // // // // //       <h2 className="text-xl mt-8 mb-3">Projects</h2>

// // // // // // // //       {projects.map((p) => (
// // // // // // // //         <div
// // // // // // // //           key={p._id}
// // // // // // // //           className="bg-white p-4 rounded shadow mb-3"
// // // // // // // //         >
// // // // // // // //           <h3 className="font-bold">{p.title}</h3>
// // // // // // // //           <p>Status: {p.status}</p>

// // // // // // // //           <div className="mt-2 space-x-2">
// // // // // // // //             <button
// // // // // // // //               onClick={() => handleApprove(p._id)}
// // // // // // // //               className="bg-green-600 text-white px-2 py-1"
// // // // // // // //             >
// // // // // // // //               Approve
// // // // // // // //             </button>

// // // // // // // //             <button
// // // // // // // //               onClick={() => handleReject(p._id)}
// // // // // // // //               className="bg-red-600 text-white px-2 py-1"
// // // // // // // //             >
// // // // // // // //               Reject
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       ))}

// // // // // // // //     </AdminLayout>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import API from "../services/api";
// // // // // // // import AdminLayout from "../components/AdminLayout";
// // // // // // // import AdminCharts from "../components/AdminCharts";

// // // // // // // export default function Dashboard() {
// // // // // // //   const [stats, setStats] = useState({});
// // // // // // //   const navigate = useNavigate();

// // // // // // //   useEffect(() => {
// // // // // // //     API.get("/admin/dashboard").then((res) =>
// // // // // // //       setStats(res.data.data)
// // // // // // //     );
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <AdminLayout>

// // // // // // //       <h1 className="text-3xl mb-6 font-bold">Dashboard</h1>

// // // // // // //       {/* CLICKABLE CARDS */}
// // // // // // //       <div className="grid md:grid-cols-4 gap-4 mb-6">

// // // // // // //         <div
// // // // // // //           onClick={() => navigate("/admin/users")}
// // // // // // //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// // // // // // //         >
// // // // // // //           Users: {stats.totalUsers}
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           onClick={() => navigate("/admin/projects?status=ACTIVE")}
// // // // // // //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// // // // // // //         >
// // // // // // //           Active: {stats.activeProjects}
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           onClick={() => navigate("/admin/projects?status=DRAFT")}
// // // // // // //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// // // // // // //         >
// // // // // // //           Draft Projects
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           onClick={() => navigate("/admin/projects?status=FAILED")}
// // // // // // //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// // // // // // //         >
// // // // // // //           Cancelled
// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //       <AdminCharts stats={stats} />

// // // // // // //     </AdminLayout>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useEffect, useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import API from "../services/api";
// // // // // // import AdminLayout from "../components/AdminLayout";
// // // // // // import AdminCharts from "../components/AdminCharts";

// // // // // // export default function Dashboard() {
// // // // // //   const [stats, setStats] = useState({});
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     API.get("/admin/dashboard").then((res) =>
// // // // // //       setStats(res.data.data)
// // // // // //     );
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <AdminLayout>
// // // // // //       <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

// // // // // //       <div className="grid md:grid-cols-4 gap-6 mb-8">

// // // // // //         <div
// // // // // //           onClick={() => navigate("/users")}
// // // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // // //         >
// // // // // //           <p className="text-sm text-gray-500">Users</p>
// // // // // //           <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
// // // // // //         </div>

// // // // // //         <div
// // // // // //           onClick={() => navigate("/projects?status=ACTIVE")}
// // // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer"
// // // // // //         >
// // // // // //           Active: {stats.activeProjects || 0}
// // // // // //         </div>

// // // // // //         <div
// // // // // //           onClick={() => navigate("/projects?status=DRAFT")}
// // // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer"
// // // // // //         >
// // // // // //           Draft : {stats.draftProjects || 0}
// // // // // //         </div>

// // // // // //         <div
// // // // // //           onClick={() => navigate("/projects?status=FAILED")}
// // // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer"
// // // // // //         >
// // // // // //           Cancelled :{stats.cancelledProjects || 0}
// // // // // //         </div>

// // // // // //       </div>

// // // // // //       <AdminCharts stats={stats} />
// // // // // //     </AdminLayout>
// // // // // //   );
// // // // // // }
// // // // // import { useEffect, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import API from "../services/api";
// // // // // import AdminLayout from "../components/AdminLayout";
// // // // // import AdminCharts from "../components/AdminCharts";

// // // // // export default function Dashboard() {
// // // // //   const [stats, setStats] = useState({});
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     API.get("/admin/dashboard").then((res) => {
// // // // //       console.log("STATS:", res.data.data);
// // // // //       setStats(res.data.data);
// // // // //     });
// // // // //   }, []);

// // // // //   return (
// // // // //     <AdminLayout>
// // // // //       <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

// // // // //       {/* ✅ RESPONSIVE GRID */}
// // // // //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

// // // // //         {/* USERS */}
// // // // //         <div
// // // // //           onClick={() => navigate("/users")}
// // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // //         >
// // // // //           <p className="text-sm text-gray-500">Users</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.totalUsers || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* ACTIVE */}
// // // // //         <div
// // // // //           onClick={() => navigate("/projects?status=ACTIVE")}
// // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // //         >
// // // // //           <p className="text-sm text-gray-500">Active</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.activeProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* DRAFT */}
// // // // //         <div
// // // // //           onClick={() => navigate("/projects?status=DRAFT")}
// // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // //         >
// // // // //           <p className="text-sm text-gray-500">Draft</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.draftProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* CANCELLED */}
// // // // //         <div
// // // // //           onClick={() => navigate("/projects?status=FAILED")}
// // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // //         >
// // // // //           <p className="text-sm text-gray-500">Cancelled</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.cancelledProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* COMPLETED */}
// // // // //         <div
// // // // //           onClick={() => navigate("/projects?status=COMPLETED")}
// // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // //         >
// // // // //           <p className="text-sm text-gray-500">Completed</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.completedProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* 💰 TOTAL FUND (FIXED UI) */}
// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl col-span-2">
// // // // //           <p className="text-sm text-gray-500">Total Fund</p>
// // // // //           <h2 className="text-lg md:text-2xl font-bold break-words">
// // // // //             ₹{stats.totalFundRaised?.toLocaleString() || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //       </div>

// // // // //       {/* Charts */}
// // // // //       <AdminCharts stats={stats} />
// // // // //     </AdminLayout>
// // // // //   );

// // // // // import { useEffect, useState } from "react";
// // // // // import API from "../services/api";
// // // // // import AdminLayout from "../components/AdminLayout";
// // // // // import AdminCharts from "../components/AdminCharts";

// // // // // export default function Dashboard() {
// // // // //   const [stats, setStats] = useState({});
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const [showUsers, setShowUsers] = useState(false);

// // // // //   useEffect(() => {
// // // // //     fetchStats();
// // // // //   }, []);

// // // // //   // 📊 Stats
// // // // //   const fetchStats = async () => {
// // // // //     try {
// // // // //       const res = await API.get("/admin/dashboard", {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //         },
// // // // //       });
// // // // //       setStats(res.data.data || {});
// // // // //     } catch (err) {
// // // // //       console.log(err);
// // // // //     }
// // // // //   };

// // // // //   // 👤 Users
// // // // //   const fetchUsers = async () => {
// // // // //     try {
// // // // //       const res = await API.get("/admin/users", {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //         },
// // // // //       });

// // // // //       setUsers(res.data.users || res.data.data || []);
// // // // //       setShowUsers(true);
// // // // //     } catch (err) {
// // // // //       console.log(err);
// // // // //       alert("Error fetching users");
// // // // //     }
// // // // //   };

// // // // //   // 🚫 Block/Unblock
// // // // //   const toggleBlock = async (id, isBlocked) => {
// // // // //     try {
// // // // //       await API.put(
// // // // //         `/admin/users/${id}/block`,
// // // // //         { isBlocked: !isBlocked },
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       fetchUsers();
// // // // //     } catch (err) {
// // // // //       alert("Error updating user");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <AdminLayout>
// // // // //       <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

// // // // //       {/* 📊 STATS */}
// // // // //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

// // // // //         {/* USERS */}
// // // // //         <div
// // // // //           onClick={fetchUsers}
// // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // //         >
// // // // //           <p className="text-sm text-gray-500">Users</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.totalUsers || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* ACTIVE */}
// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Active</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.activeProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* DRAFT */}
// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Draft</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.draftProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* CANCELLED */}
// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Cancelled</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.cancelledProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* COMPLETED */}
// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Completed</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.completedProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* TOTAL FUND */}
// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl col-span-2">
// // // // //           <p className="text-sm text-gray-500">Total Fund</p>
// // // // //           <h2 className="text-lg md:text-2xl font-bold">
// // // // //             ₹{stats.totalFundRaised?.toLocaleString() || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //       </div>

// // // // //       {/* 📊 Charts */}
// // // // //       <AdminCharts stats={stats} />

// // // // //       {/* 👤 USERS MODAL */}
// // // // //       {showUsers && (
// // // // //         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

// // // // //           <div className="bg-white text-black p-6 rounded-xl w-[700px] max-h-[80vh] overflow-auto">

// // // // //             <h2 className="text-xl font-bold mb-4">All Users</h2>

// // // // //             {users.map((u) => (
// // // // //               <div key={u._id} className="border p-3 mb-3 rounded">

// // // // //                 <p><b>Name:</b> {u.name}</p>
// // // // //                 <p><b>Email:</b> {u.email}</p>
// // // // //                 <p><b>Role:</b> {u.role}</p>

// // // // //                 {/* Investor */}
// // // // //                 {u.role === "INVESTOR" && (
// // // // //                   <p><b>Experience:</b> {u.experience || "N/A"}</p>
// // // // //                 )}

// // // // //                 {/* Creator */}
// // // // //                 {u.role === "CREATOR" && (
// // // // //                   <>
// // // // //                     <p><b>College:</b> {u.college}</p>
// // // // //                     <p><b>Course:</b> {u.course}</p>
// // // // //                   </>
// // // // //                 )}

// // // // //                 {/* 📄 Documents */}
// // // // //                 <div className="flex gap-3 mt-2 flex-wrap">

// // // // //                   {u.aadhaarUrl && (
// // // // //                     <a href={u.aadhaarUrl} target="_blank" className="text-blue-600 underline">
// // // // //                       Aadhaar
// // // // //                     </a>
// // // // //                   )}

// // // // //                   {u.panUrl && (
// // // // //                     <a href={u.panUrl} target="_blank" className="text-green-600 underline">
// // // // //                       PAN
// // // // //                     </a>
// // // // //                   )}

// // // // //                   {u.studentIdUrl && (
// // // // //                     <a href={u.studentIdUrl} target="_blank" className="text-purple-600 underline">
// // // // //                       Student ID
// // // // //                     </a>
// // // // //                   )}

// // // // //                 </div>

// // // // //                 {/* 🚫 Block Button */}
// // // // //                 <button
// // // // //                   onClick={() => toggleBlock(u._id, u.isBlocked)}
// // // // //                   className={`mt-3 px-3 py-1 rounded ${
// // // // //                     u.isBlocked
// // // // //                       ? "bg-green-500 text-white"
// // // // //                       : "bg-red-500 text-white"
// // // // //                   }`}
// // // // //                 >
// // // // //                   {u.isBlocked ? "Unblock" : "Block"}
// // // // //                 </button>

// // // // //               </div>
// // // // //             ))}

// // // // //             <button
// // // // //               onClick={() => setShowUsers(false)}
// // // // //               className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
// // // // //             >
// // // // //               Close
// // // // //             </button>

// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //     </AdminLayout>
// // // // //   );
// // // // // }
// // // // // import { useEffect, useState } from "react";
// // // // // import API from "../services/api";
// // // // // import AdminLayout from "../components/AdminLayout";
// // // // // import AdminCharts from "../components/AdminCharts";

// // // // // export default function Dashboard() {
// // // // //   const [stats, setStats] = useState({});
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const [showUsers, setShowUsers] = useState(false);

// // // // //   useEffect(() => {
// // // // //     fetchStats();
// // // // //   }, []);

// // // // //   // 📊 Stats
// // // // //   const fetchStats = async () => {
// // // // //     try {
// // // // //       const res = await API.get("/admin/dashboard", {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //         },
// // // // //       });
// // // // //       setStats(res.data.data || {});
// // // // //     } catch (err) {
// // // // //       console.log(err);
// // // // //     }
// // // // //   };

// // // // //   // 👤 Users
// // // // //   const fetchUsers = async () => {
// // // // //     try {
// // // // //       const res = await API.get("/admin/users", {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //         },
// // // // //       });

// // // // //       setUsers(res.data.users || res.data.data || []);
// // // // //       setShowUsers(true);
// // // // //     } catch (err) {
// // // // //       console.log(err);
// // // // //       alert("Error fetching users");
// // // // //     }
// // // // //   };

// // // // //   // 🚫 Block/Unblock
// // // // //   const toggleBlock = async (id, isBlocked) => {
// // // // //     try {
// // // // //       await API.put(
// // // // //         `/admin/users/${id}/block`,
// // // // //         { isBlocked: !isBlocked },
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       fetchUsers();
// // // // //     } catch (err) {
// // // // //       alert("Error updating user");
// // // // //     }
// // // // //   };

// // // // //   // ✅ Verify / Not Verify
// // // // //   const toggleVerify = async (id, isVerified) => {
// // // // //     try {
// // // // //       await API.put(
// // // // //         `/admin/users/${id}/verify`,
// // // // //         { isVerified: !isVerified },
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       fetchUsers();
// // // // //     } catch (err) {
// // // // //       alert("Error updating verification");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <AdminLayout>
// // // // //       <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

// // // // //       {/* 📊 STATS */}
// // // // //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

// // // // //         {/* USERS */}
// // // // //         <div
// // // // //           onClick={fetchUsers}
// // // // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // // // //         >
// // // // //           <p className="text-sm text-gray-500">Users</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.totalUsers || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Active</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.activeProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Draft</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.draftProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Cancelled</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.cancelledProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // // // //           <p className="text-sm text-gray-500">Completed</p>
// // // // //           <h2 className="text-xl md:text-2xl font-bold">
// // // // //             {stats.completedProjects || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //         <div className="bg-white/95 text-black p-5 rounded-xl col-span-2">
// // // // //           <p className="text-sm text-gray-500">Total Fund</p>
// // // // //           <h2 className="text-lg md:text-2xl font-bold">
// // // // //             ₹{stats.totalFundRaised?.toLocaleString() || 0}
// // // // //           </h2>
// // // // //         </div>

// // // // //       </div>

// // // // //       {/* 📊 Charts */}
// // // // //       <AdminCharts stats={stats} />

// // // // //       {/* 👤 USERS MODAL */}
// // // // //       {showUsers && (
// // // // //         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

// // // // //           <div className="bg-white text-black p-6 rounded-xl w-[700px] max-h-[80vh] overflow-auto">

// // // // //             <h2 className="text-xl font-bold mb-4">All Users</h2>

// // // // //             {users.map((u) => (
// // // // //               <div key={u._id} className="border p-3 mb-3 rounded">

// // // // //                 <p><b>Name:</b> {u.name}</p>
// // // // //                 <p><b>Email:</b> {u.email}</p>
// // // // //                 <p><b>Role:</b> {u.role}</p>

// // // // //                 {/* Investor */}
// // // // //                 {u.role === "INVESTOR" && (
// // // // //                   <p><b>Experience:</b> {u.experience || "N/A"}</p>
// // // // //                 )}

// // // // //                 {/* Creator */}
// // // // //                 {u.role === "CREATOR" && (
// // // // //                   <>
// // // // //                     <p><b>College:</b> {u.college}</p>
// // // // //                     <p><b>Course:</b> {u.course}</p>
// // // // //                   </>
// // // // //                 )}

// // // // //                 {/* 📄 Documents */}
// // // // //                 <div className="flex gap-3 mt-2 flex-wrap">

// // // // //                   {u.aadhaarUrl && (
// // // // //                     <a href={u.aadhaarUrl} target="_blank" className="text-blue-600 underline">
// // // // //                       Aadhaar
// // // // //                     </a>
// // // // //                   )}

// // // // //                   {u.panUrl && (
// // // // //                     <a href={u.panUrl} target="_blank" className="text-green-600 underline">
// // // // //                       PAN
// // // // //                     </a>
// // // // //                   )}

// // // // //                   {u.studentIdUrl && (
// // // // //                     <a href={u.studentIdUrl} target="_blank" className="text-purple-600 underline">
// // // // //                       Student ID
// // // // //                     </a>
// // // // //                   )}

// // // // //                 </div>

// // // // //                 {/* 🔥 STATUS BADGE */}
// // // // //                 <p className="mt-2 text-sm">
// // // // //                   Status:{" "}
// // // // //                   <span className={`font-semibold ${
// // // // //                     u.isVerified ? "text-green-600" : "text-yellow-600"
// // // // //                   }`}>
// // // // //                     {u.isVerified ? "Verified ✅" : "Not Verified ⏳"}
// // // // //                   </span>
// // // // //                 </p>

// // // // //                 {/* 🚫 Block + ✅ Verify Buttons */}
// // // // //                 <div className="flex gap-2 mt-3">

// // // // //                   <button
// // // // //                     onClick={() => toggleBlock(u._id, u.isBlocked)}
// // // // //                     className={`px-3 py-1 rounded ${
// // // // //                       u.isBlocked
// // // // //                         ? "bg-green-500 text-white"
// // // // //                         : "bg-red-500 text-white"
// // // // //                     }`}
// // // // //                   >
// // // // //                     {u.isBlocked ? "Unblock" : "Block"}
// // // // //                   </button>

// // // // //                   <button
// // // // //                     onClick={() => toggleVerify(u._id, u.isVerified)}
// // // // //                     className={`px-3 py-1 rounded ${
// // // // //                       u.isVerified
// // // // //                         ? "bg-yellow-500 text-black"
// // // // //                         : "bg-blue-600 text-white"
// // // // //                     }`}
// // // // //                   >
// // // // //                     {u.isVerified ? "Not Verified" : "Verify"}
// // // // //                   </button>

// // // // //                 </div>

// // // // //               </div>
// // // // //             ))}

// // // // //             <button
// // // // //               onClick={() => setShowUsers(false)}
// // // // //               className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
// // // // //             >
// // // // //               Close
// // // // //             </button>

// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //     </AdminLayout>
// // // // //   );
// // // // // }
// // // import { useEffect, useState } from "react";
// // // import API from "../services/api";
// // // import AdminLayout from "../components/AdminLayout";
// // // import AdminCharts from "../components/AdminCharts";

// // // export default function Dashboard() {
// // //   const [stats, setStats] = useState({});
// // //   const [users, setUsers] = useState([]);
// // //   const [showUsers, setShowUsers] = useState(false);

// // //   useEffect(() => {
// // //     fetchStats();
// // //   }, []);

// // //   // 📊 Stats
// // //   const fetchStats = async () => {
// // //     try {
// // //       const res = await API.get("/admin/dashboard", {
// // //         headers: {
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //       });
// // //       setStats(res.data.data || {});
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   };

// // //   // 👤 Users
// // //   const fetchUsers = async () => {
// // //     try {
// // //       const res = await API.get("/admin/users", {
// // //         headers: {
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //       });

// // //       setUsers(res.data.data || []);
// // //       setShowUsers(true);
// // //     } catch (err) {
// // //       console.log(err);
// // //       alert("Error fetching users");
// // //     }
// // //   };

// // //   // 🚫 Block/Unblock
// // //   const toggleBlock = async (id, isBlocked) => {
// // //     try {
// // //       await API.put(
// // //         `/admin/users/${id}/block`,
// // //         { isBlocked: !isBlocked },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //           },
// // //         }
// // //       );

// // //       fetchUsers();
// // //     } catch (err) {
// // //       alert("Error updating user");
// // //     }
// // //   };

// // //   // ✅ Verify / Not Verify
// // //   const toggleVerify = async (id, isVerified) => {
// // //     try {
// // //       await API.put(
// // //         `/admin/users/${id}/verify`,
// // //         { isVerified: !isVerified },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //           },
// // //         }
// // //       );

// // //       fetchUsers();
// // //     } catch (err) {
// // //       alert("Error updating verification");
// // //     }
// // //   };

// // //   return (
// // //     <AdminLayout>
// // //       <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

// // //       {/* 📊 STATS */}
// // //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

// // //         {/* USERS */}
// // //         <div
// // //           onClick={fetchUsers}
// // //           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
// // //         >
// // //           <p className="text-sm text-gray-500">Users</p>
// // //           <h2 className="text-xl md:text-2xl font-bold">
// // //             {stats.totalUsers || 0}
// // //           </h2>
// // //         </div>

// // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // //           <p className="text-sm text-gray-500">Active</p>
// // //           <h2 className="text-xl md:text-2xl font-bold">
// // //             {stats.activeProjects || 0}
// // //           </h2>
// // //         </div>

// // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // //           <p className="text-sm text-gray-500">Draft</p>
// // //           <h2 className="text-xl md:text-2xl font-bold">
// // //             {stats.draftProjects || 0}
// // //           </h2>
// // //         </div>

// // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // //           <p className="text-sm text-gray-500">Cancelled</p>
// // //           <h2 className="text-xl md:text-2xl font-bold">
// // //             {stats.cancelledProjects || 0}
// // //           </h2>
// // //         </div>

// // //         <div className="bg-white/95 text-black p-5 rounded-xl">
// // //           <p className="text-sm text-gray-500">Completed</p>
// // //           <h2 className="text-xl md:text-2xl font-bold">
// // //             {stats.completedProjects || 0}
// // //           </h2>
// // //         </div>

// // //         <div className="bg-white/95 text-black p-5 rounded-xl col-span-2">
// // //           <p className="text-sm text-gray-500">Total Fund</p>
// // //           <h2 className="text-lg md:text-2xl font-bold">
// // //             ₹{stats.totalFundRaised?.toLocaleString() || 0}
// // //           </h2>
// // //         </div>

// // //       </div>

// // //       {/* 📊 Charts */}
// // //       <AdminCharts stats={stats} />

// // //       {/* 👤 USERS MODAL */}
// // //       {showUsers && (
// // //         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

// // //           <div className="bg-white text-black p-6 rounded-xl w-[700px] max-h-[80vh] overflow-auto">

// // //             <h2 className="text-xl font-bold mb-4">All Users</h2>

// // //             {users.map((u) => (
// // //               <div key={u._id} className="border p-3 mb-3 rounded">

// // //                 <p><b>Name:</b> {u.name}</p>
// // //                 <p><b>Email:</b> {u.email}</p>
// // //                 <p><b>Role:</b> {u.role}</p>

// // //                 {/* Investor */}
// // //                 {u.role === "INVESTOR" && (
// // //                   <p><b>Experience:</b> {u.experience || "N/A"}</p>
// // //                 )}

// // //                 {/* Creator */}
// // //                 {u.role === "CREATOR" && (
// // //                   <>
// // //                     <p><b>College:</b> {u.college}</p>
// // //                     <p><b>Course:</b> {u.course}</p>
// // //                   </>
// // //                 )}

// // //                 {/* Documents */}
// // //                 <div className="flex gap-3 mt-2 flex-wrap">

// // //                   {u.aadhaarUrl && (
// // //                     <a href={u.aadhaarUrl} target="_blank" className="text-blue-600 underline">
// // //                       Aadhaar
// // //                     </a>
// // //                   )}

// // //                   {u.panUrl && (
// // //                     <a href={u.panUrl} target="_blank" className="text-green-600 underline">
// // //                       PAN
// // //                     </a>
// // //                   )}

// // //                   {u.studentIdUrl && (
// // //                     <a href={u.studentIdUrl} target="_blank" className="text-purple-600 underline">
// // //                       Student ID
// // //                     </a>
// // //                   )}

// // //                 </div>

// // //                 {/* ✅ STATUS FIX */}
// // //                 <p className="mt-2 text-sm">
// // //                   Status:{" "}
// // //                   <span className={`font-semibold ${
// // //                     u.isKYCVerified ? "text-green-600" : "text-yellow-600"
// // //                   }`}>
// // //                     {u.isKYCVerified ? "Verified ✅" : "Not Verified ⏳"}
// // //                   </span>
// // //                 </p>

// // //                 {/* 🚫 Block + ✅ Verify */}
// // //                 <div className="flex gap-2 mt-3">

// // //                   <button
// // //                     onClick={() => toggleBlock(u._id, u.isBlocked)}
// // //                     className={`px-3 py-1 rounded ${
// // //                       u.isBlocked
// // //                         ? "bg-green-500 text-white"
// // //                         : "bg-red-500 text-white"
// // //                     }`}
// // //                   >
// // //                     {u.isBlocked ? "Unblock" : "Block"}
// // //                   </button>

// // //                   <button
// // //                     onClick={() => toggleVerify(u._id, u.isKYCVerified)}
// // //                     className={`px-3 py-1 rounded ${
// // //                       u.isKYCVerified
// // //                         ? "bg-yellow-500 text-black"
// // //                         : "bg-blue-600 text-white"
// // //                     }`}
// // //                   >
// // //                     {u.isKYCVerified ? "Not Verified" : "Verify"}
// // //                   </button>

// // //                 </div>

// // //               </div>
// // //             ))}

// // //             <button
// // //               onClick={() => setShowUsers(false)}
// // //               className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
// // //             >
// // //               Close
// // //             </button>

// // //           </div>
// // //         </div>
// // //       )}

// // //     </AdminLayout>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import API from "../services/api";
// // import AdminLayout from "../components/AdminLayout";
// // import AdminCharts from "../components/AdminCharts";

// // export default function Dashboard() {
// //   const [stats, setStats] = useState({});
// //   const [users, setUsers] = useState([]);
// //   const [showUsers, setShowUsers] = useState(false);

// //   const [modalType, setModalType] = useState(null);
// //   const [projects, setProjects] = useState([]);

// //   useEffect(() => {
// //     fetchStats();
// //   }, []);

// //   const fetchStats = async () => {
// //     try {
// //       const res = await API.get("/admin/dashboard", {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });
// //       setStats(res.data.data || {});
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const fetchUsers = async () => {
// //     try {
// //       const res = await API.get("/admin/users", {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });

// //       setUsers(res.data.data || []);
// //       setShowUsers(true);
// //     } catch (err) {
// //       console.log(err);
// //       alert("Error fetching users");
// //     }
// //   };

// //   const fetchProjects = async (type) => {
// //     try {
// //       const res = await API.get("/admin/projects", {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });

// //       const allProjects = res.data.data || [];

// //       const filteredProjects = allProjects.filter(
// //         (p) => p.status === type.toUpperCase()
// //       );

// //       setProjects(filteredProjects);
// //       setModalType(type);
// //     } catch (err) {
// //       console.log(err);
// //       alert("Error fetching projects");
// //     }
// //   };

// //   const cardStyle =
// //     "bg-black/70 border border-cyan-400/30 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] p-5 rounded-2xl cursor-pointer hover:scale-105 transition";

// //   return (
// //     <AdminLayout>
// //       <h1 className="text-3xl font-bold mb-6 text-cyan-400">
// //         Dashboard 🚀
// //       </h1>

// //       {/* STATS */}
// //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

// //         <div onClick={fetchUsers} className={cardStyle}>
// //           <p className="text-gray-400">Users</p>
// //           <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
// //         </div>

// //         <div onClick={() => fetchProjects("active")} className={cardStyle}>
// //           <p className="text-gray-400">Active</p>
// //           <h2 className="text-green-400 text-2xl font-bold">
// //             {stats.activeProjects || 0}
// //           </h2>
// //         </div>

// //         <div onClick={() => fetchProjects("draft")} className={cardStyle}>
// //           <p className="text-gray-400">Draft</p>
// //           <h2 className="text-yellow-400 text-2xl font-bold">
// //             {stats.draftProjects || 0}
// //           </h2>
// //         </div>

// //         <div onClick={() => fetchProjects("cancelled")} className={cardStyle}>
// //           <p className="text-gray-400">Cancelled</p>
// //           <h2 className="text-red-400 text-2xl font-bold">
// //             {stats.rejectedProjects || 0}
// //           </h2>
// //         </div>

// //         <div onClick={() => fetchProjects("completed")} className={cardStyle}>
// //           <p className="text-gray-400">Completed</p>
// //           <h2 className="text-blue-400 text-2xl font-bold">
// //             {stats.completedProjects || 0}
// //           </h2>
// //         </div>

// //         <div className={`${cardStyle} col-span-2`}>
// //           <p className="text-gray-400">Total Fund</p>
// //           <h2 className="text-cyan-300 text-2xl font-bold">
// //             ₹{stats.totalFundRaised?.toLocaleString() || 0}
// //           </h2>
// //         </div>

// //       </div>

// //       <AdminCharts stats={stats} />

// //       {/* USERS MODAL */}
// //       {showUsers && (
// //         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
// //           <div className="bg-white text-black p-6 rounded-xl w-[700px] max-h-[80vh] overflow-auto">

// //             <h2 className="text-xl font-bold mb-4">All Users</h2>

// //             {users.map((u) => (
// //               <div key={u._id} className="border p-3 mb-3 rounded">

// //                 <p><b>Name:</b> {u.name}</p>
// //                 <p><b>Email:</b> {u.email}</p>
// //                 <p><b>Role:</b> {u.role}</p>

// //                 {u.role === "INVESTOR" && (
// //                   <p><b>Experience:</b> {u.experience || "N/A"}</p>
// //                 )}

// //                 {u.role === "CREATOR" && (
// //                   <>
// //                     <p><b>College:</b> {u.college}</p>
// //                     <p><b>Course:</b> {u.course}</p>
// //                   </>
// //                 )}

// //                 <div className="flex gap-3 mt-2 flex-wrap">
// //                   {u.aadhaarUrl && (
// //                     <a href={u.aadhaarUrl} target="_blank" className="text-blue-600 underline">
// //                       Aadhaar
// //                     </a>
// //                   )}

// //                   {u.panUrl && (
// //                     <a href={u.panUrl} target="_blank" className="text-green-600 underline">
// //                       PAN
// //                     </a>
// //                   )}

// //                   {u.studentIdUrl && (
// //                     <a href={u.studentIdUrl} target="_blank" className="text-purple-600 underline">
// //                       Student ID
// //                     </a>
// //                   )}
// //                 </div>

// //               </div>
// //             ))}

// //             <button
// //               onClick={() => setShowUsers(false)}
// //               className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
// //             >
// //               Close
// //             </button>

// //           </div>
// //         </div>
// //       )}

// //       {/* PROJECT MODAL */}
// //       {modalType && (
// //         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
// //           <div className="bg-black text-white p-6 rounded-2xl w-[700px] max-h-[80vh] overflow-auto border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.2)] relative">

// //             <button
// //               onClick={() => setModalType(null)}
// //               className="absolute top-3 right-4 text-cyan-400 text-xl"
// //             >
// //               ✕
// //             </button>

// //             <h2 className="text-xl font-bold mb-4 text-cyan-400 capitalize">
// //               {modalType} Projects
// //             </h2>

// //             {projects.length === 0 ? (
// //               <p className="text-gray-400">No projects found</p>
// //             ) : (
// //               projects.map((p) => (
// //                 <div key={p._id} className="border border-cyan-400/20 p-3 mb-3 rounded">
// //                   <p><b>Title:</b> {p.title}</p>
// //                   <p><b>Creator:</b> {p.creator?.name}</p>
// //                   <p><b>Goal:</b> ₹{p.goalAmount}</p>
// //                   <p><b>Raised:</b> ₹{p.raisedAmount}</p>
// //                 </div>
// //               ))
// //             )}

// //           </div>
// //         </div>
// //       )}

// //     </AdminLayout>
// //   );
// // }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";
// import AdminCharts from "../components/AdminCharts";

// export default function Dashboard() {
//   const [stats, setStats] = useState({});
//   const [users, setUsers] = useState([]);
//   const [showUsers, setShowUsers] = useState(false);

//   const [modalType, setModalType] = useState(null);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const res = await API.get("/admin/dashboard", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       setStats(res.data.data || {});
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/admin/users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       setUsers(res.data.data || []);
//       setShowUsers(true);
//     } catch (err) {
//       console.log(err);
//       alert("Error fetching users");
//     }
//   };

//   const fetchProjects = async (type) => {
//     try {
//       const res = await API.get("/admin/projects", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const allProjects = res.data.data || [];

//       const filteredProjects = allProjects.filter(
//         (p) => p.status === type.toUpperCase()
//       );

//       setProjects(filteredProjects);
//       setModalType(type);
//     } catch (err) {
//       console.log(err);
//       alert("Error fetching projects");
//     }
//   };

//   // ✅ USER ACTIONS
//   const toggleBlock = async (id, isBlocked) => {
//     try {
//       await API.put(
//         `/admin/users/${id}/block`,
//         { isBlocked: !isBlocked },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       fetchUsers();
//     } catch {
//       alert("Error updating user");
//     }
//   };

//   const toggleVerify = async (id, isVerified) => {
//     try {
//       await API.put(
//         `/admin/users/${id}/verify`,
//         { isVerified: !isVerified },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       fetchUsers();
//     } catch {
//       alert("Error updating verification");
//     }
//   };

//   const cardStyle =
//     "bg-black/70 border border-cyan-400/30 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] p-5 rounded-2xl cursor-pointer hover:scale-105 transition";

//   return (
//     <AdminLayout>
//       <h1 className="text-3xl font-bold mb-6 text-cyan-400">
//         Dashboard 🚀
//       </h1>

//       {/* STATS */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

//         <div onClick={fetchUsers} className={cardStyle}>
//           <p className="text-gray-400">Users</p>
//           <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
//         </div>

//         <div onClick={() => fetchProjects("active")} className={cardStyle}>
//           <p className="text-gray-400">Active</p>
//           <h2 className="text-green-400 text-2xl font-bold">
//             {stats.activeProjects || 0}
//           </h2>
//         </div>

//         <div onClick={() => fetchProjects("draft")} className={cardStyle}>
//           <p className="text-gray-400">Draft</p>
//           <h2 className="text-yellow-400 text-2xl font-bold">
//             {stats.draftProjects || 0}
//           </h2>
//         </div>

//         {/* ✅ FIXED: Rejected */}
//         <div onClick={() => fetchProjects("rejected")} className={cardStyle}>
//           <p className="text-gray-400">Rejected</p>
//           <h2 className="text-red-400 text-2xl font-bold">
//             {stats.rejectedProjects || 0}
//           </h2>
//         </div>

//         <div onClick={() => fetchProjects("completed")} className={cardStyle}>
//           <p className="text-gray-400">Completed</p>
//           <h2 className="text-blue-400 text-2xl font-bold">
//             {stats.completedProjects || 0}
//           </h2>
//         </div>

//         <div className={`${cardStyle} col-span-2`}>
//           <p className="text-gray-400">Total Fund</p>
//           <h2 className="text-cyan-300 text-2xl font-bold">
//             ₹{stats.totalFundRaised?.toLocaleString() || 0}
//           </h2>
//         </div>

//       </div>

//       <AdminCharts stats={stats} />

//       {/* ✅ USERS MODAL (NEON DESIGN + BUTTONS) */}
//       {showUsers && (
//         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
//           <div className="bg-black text-white p-6 rounded-2xl w-[700px] max-h-[80vh] overflow-auto border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.2)]">

//             <h2 className="text-xl font-bold mb-4 text-cyan-400">
//               All Users
//             </h2>

//             {users.map((u) => (
//               <div key={u._id} className="border border-cyan-400/20 p-4 mb-3 rounded">

//                 <p><b>Name:</b> {u.name}</p>
//                 <p><b>Email:</b> {u.email}</p>
//                 <p><b>Role:</b> {u.role}</p>

//                 {u.role === "INVESTOR" && (
//                   <p><b>Experience:</b> {u.experience || "N/A"}</p>
//                 )}

//                 {u.role === "CREATOR" && (
//                   <>
//                     <p><b>College:</b> {u.college}</p>
//                     <p><b>Course:</b> {u.course}</p>
//                   </>
//                 )}

//                 {/* DOCUMENTS */}
//                 <div className="flex gap-3 mt-2 flex-wrap">
//                   {u.aadhaarUrl && (
//                     <a href={u.aadhaarUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
//                       Aadhaar
//                     </a>
//                   )}
//                   {u.panUrl && (
//                     <a href={u.panUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">
//                       PAN
//                     </a>
//                   )}
//                   {u.studentIdUrl && (
//                     <a href={u.studentIdUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
//                       Student ID
//                     </a>
//                   )}
//                 </div>

//                 {/* ✅ ACTION BUTTONS */}
//                 <div className="flex gap-3 mt-3">
//                   <button
//                     onClick={() => toggleBlock(u._id, u.isBlocked)}
//                     className={`px-3 py-1 rounded text-sm ${
//                       u.isBlocked ? "bg-green-500" : "bg-red-500"
//                     }`}
//                   >
//                     {u.isBlocked ? "Unblock" : "Block"}
//                   </button>

//                   <button
//                     onClick={() => toggleVerify(u._id, u.isVerified)}
//                     className={`px-3 py-1 rounded text-sm ${
//                       u.isVerified ? "bg-yellow-500" : "bg-blue-500"
//                     }`}
//                   >
//                     {u.isVerified ? "Unverify" : "Verify"}
//                   </button>
//                 </div>

//               </div>
//             ))}

//             <button
//               onClick={() => setShowUsers(false)}
//               className="mt-4 bg-gray-800 px-4 py-2 rounded"
//             >
//               Close
//             </button>

//           </div>
//         </div>
//       )}

//       {/* PROJECT MODAL (same) */}
//       {modalType && (
//         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
//           <div className="bg-black text-white p-6 rounded-2xl w-[700px] max-h-[80vh] overflow-auto border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.2)] relative">

//             <button
//               onClick={() => setModalType(null)}
//               className="absolute top-3 right-4 text-cyan-400 text-xl"
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-4 text-cyan-400 capitalize">
//               {modalType} Projects
//             </h2>

//             {projects.length === 0 ? (
//               <p className="text-gray-400">No projects found</p>
//             ) : (
//               projects.map((p) => (
//                 <div key={p._id} className="border border-cyan-400/20 p-3 mb-3 rounded">
//                   <p><b>Title:</b> {p.title}</p>
//                   <p><b>Creator:</b> {p.creator?.name}</p>
//                   <p><b>Goal:</b> ₹{p.goalAmount}</p>
//                   <p><b>Raised:</b> ₹{p.raisedAmount}</p>
//                 </div>
//               ))
//             )}

//           </div>
//         </div>
//       )}

//     </AdminLayout>
//   );
// }
import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";
import AdminCharts from "../components/AdminCharts";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const [modalType, setModalType] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setStats(res.data.data || {});
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUsers(res.data.data || []);
      setShowUsers(true);
    } catch (err) {
      console.log(err);
      alert("Error fetching users");
    }
  };

  // ✅ FIXED STATUS MAPPING
  const fetchProjects = async (type) => {
    try {
      const res = await API.get("/admin/projects", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const allProjects = res.data.data || [];

      const statusMap = {
        active: "ACTIVE",
        draft: "DRAFT",
        completed: "COMPLETED",
        failed: "FAILED", // 🔥 IMPORTANT FIX
      };

      const filteredProjects = allProjects.filter(
        (p) => p.status === statusMap[type]
      );

      setProjects(filteredProjects);
      setModalType(type);
    } catch (err) {
      console.log(err);
      alert("Error fetching projects");
    }
  };

  // ✅ USER ACTIONS FIXED
  const toggleBlock = async (id, isBlocked) => {
    try {
      await API.put(
        `/admin/users/${id}/block`,
        { isBlocked: !isBlocked },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchUsers();
    } catch {
      alert("Error updating user");
    }
  };

  const toggleVerify = async (id, isKYCVerified) => {
    try {
      await API.put(
        `/admin/users/${id}/verify`,
        { isVerified: !isKYCVerified }, // backend expects isVerified
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchUsers();
    } catch {
      alert("Error updating verification");
    }
  };

  const cardStyle =
    "bg-black/70 border border-cyan-400/30 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] p-5 rounded-2xl cursor-pointer hover:scale-105 transition";

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Dashboard 🚀
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

        <div onClick={fetchUsers} className={cardStyle}>
          <p className="text-gray-400">Users</p>
          <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
        </div>

        <div onClick={() => fetchProjects("active")} className={cardStyle}>
          <p className="text-gray-400">Active</p>
          <h2 className="text-green-400 text-2xl font-bold">
            {stats.activeProjects || 0}
          </h2>
        </div>

        <div onClick={() => fetchProjects("draft")} className={cardStyle}>
          <p className="text-gray-400">Draft</p>
          <h2 className="text-yellow-400 text-2xl font-bold">
            {stats.draftProjects || 0}
          </h2>
        </div>

        {/* ✅ REJECTED FIX */}
        <div onClick={() => fetchProjects("failed")} className={cardStyle}>
          <p className="text-gray-400">Rejected</p>
          <h2 className="text-red-400 text-2xl font-bold">
            {stats.cancelledProjects || 0}
          </h2>
        </div>

        <div onClick={() => fetchProjects("completed")} className={cardStyle}>
          <p className="text-gray-400">Completed</p>
          <h2 className="text-blue-400 text-2xl font-bold">
            {stats.completedProjects || 0}
          </h2>
        </div>

        <div className={`${cardStyle} col-span-2`}>
          <p className="text-gray-400">Total Fund</p>
          <h2 className="text-cyan-300 text-2xl font-bold">
            ₹{stats.totalFundRaised?.toLocaleString() || 0}
          </h2>
        </div>

      </div>

      <AdminCharts stats={stats} />

      {/* USERS MODAL */}
      {showUsers && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-black text-white p-6 rounded-2xl w-[700px] max-h-[80vh] overflow-auto border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.2)]">

            <h2 className="text-xl font-bold mb-4 text-cyan-400">
              All Users
            </h2>

            {users.map((u) => (
              <div key={u._id} className="border border-cyan-400/20 p-4 mb-3 rounded">

                <p><b>Name:</b> {u.name}</p>
                <p><b>Email:</b> {u.email}</p>
                <p><b>Role:</b> {u.role}</p>

                {u.role === "INVESTOR" && (
                  <p><b>Experience:</b> {u.experience || "N/A"}</p>
                )}

                {u.role === "CREATOR" && (
                  <>
                    <p><b>College:</b> {u.college}</p>
                    <p><b>Course:</b> {u.course}</p>
                  </>
                )}

                <div className="flex gap-3 mt-2 flex-wrap">
                  {u.aadhaarUrl && (
                    <a href={u.aadhaarUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                      Aadhaar
                    </a>
                  )}
                  {u.panUrl && (
                    <a href={u.panUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">
                      PAN
                    </a>
                  )}
                  {u.studentIdUrl && (
                    <a href={u.studentIdUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
                      Student ID
                    </a>
                  )}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => toggleBlock(u._id, u.isBlocked)}
                    className={`px-3 py-1 rounded text-sm ${
                      u.isBlocked ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {u.isBlocked ? "Unblock" : "Block"}
                  </button>

                  <button
                    onClick={() => toggleVerify(u._id, u.isKYCVerified)}
                    className={`px-3 py-1 rounded text-sm ${
                      u.isKYCVerified ? "bg-yellow-500" : "bg-blue-500"
                    }`}
                  >
                    {u.isKYCVerified ? "Unverify" : "Verify"}
                  </button>
                </div>

              </div>
            ))}

            <button
              onClick={() => setShowUsers(false)}
              className="mt-4 bg-gray-800 px-4 py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {modalType && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-black text-white p-6 rounded-2xl w-[700px] max-h-[80vh] overflow-auto border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.2)] relative">

            <button
              onClick={() => setModalType(null)}
              className="absolute top-3 right-4 text-cyan-400 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-cyan-400 capitalize">
              {modalType} Projects
            </h2>

            {projects.length === 0 ? (
              <p className="text-gray-400">No projects found</p>
            ) : (
              projects.map((p) => (
                <div key={p._id} className="border border-cyan-400/20 p-3 mb-3 rounded">
                  <p><b>Title:</b> {p.title}</p>
                  <p><b>Creator:</b> {p.creatorId?.name}</p>
                  <p><b>Email:</b> {p.creatorId?.email}</p>
                  <p><b>Target:</b> ₹{p.targetAmount}</p>
              <p><b>Funded:</b> ₹{p.fundedAmount}</p>
                </div>
              ))
            )}

          </div>
        </div>
      )}

    </AdminLayout>
  );
}