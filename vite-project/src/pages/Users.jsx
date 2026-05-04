// // // // import { useEffect, useState } from "react";
// // // // import API from "../services/api";
// // // // import AdminLayout from "../components/AdminLayout";

// // // // export default function Users() {
// // // //   const [users, setUsers] = useState([]);

// // // //   const fetchUsers = async () => {
// // // //     const res = await API.get("/users");
// // // //     setUsers(res.data.data);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchUsers();
// // // //   }, []);

// // // //   const toggleBlock = async (id, current) => {
// // // //     await API.put(`/users/${id}/block`, {
// // // //       isBlocked: !current,
// // // //     });
// // // //     fetchUsers();
// // // //   };

// // // //   return (
// // // //     <AdminLayout>
// // // //       <h1 className="text-2xl mb-4">Users</h1>

// // // //       {users.map((u) => (
// // // //         <div
// // // //           key={u._id}
// // // //           className="bg-white text-black p-4 mb-2 rounded"
// // // //         >
// // // //           <p>{u.name} ({u.email})</p>
// // // //           <p>Role: {u.role}</p>

// // // //           <button
// // // //             onClick={() => toggleBlock(u._id, u.isBlocked)}
// // // //             className="bg-red-500 text-white px-2 py-1 mt-2"
// // // //           >
// // // //             {u.isBlocked ? "Unblock" : "Block"}
// // // //           </button>
// // // //         </div>
// // // //       ))}
// // // //     </AdminLayout>
// // // //   );
// // // // }
// // // import { useEffect, useState } from "react";
// // // import API from "../services/api";
// // // import AdminLayout from "../components/AdminLayout";

// // // export default function Users() {
// // //   const [users, setUsers] = useState([]);
// // //   const [roleFilter, setRoleFilter] = useState(""); // ✅ filter state

// // //   const fetchUsers = async () => {
// // //     const res = await API.get("/users");
// // //     setUsers(res.data.data);
// // //   };

// // //   useEffect(() => {
// // //     fetchUsers();
// // //   }, []);

// // //   const toggleBlock = async (id, current) => {
// // //     await API.put(`/users/${id}/block`, {
// // //       isBlocked: !current,
// // //     });
// // //     fetchUsers();
// // //   };

// // //   // ✅ FILTER LOGIC
// // //   const filteredUsers = users.filter((u) =>
// // //     roleFilter ? u.role === roleFilter : true
// // //   );

// // //   return (
// // //     <AdminLayout>
// // //       <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

// // //       {/* 🔍 FILTER */}
// // //       <div className="mb-4">
// // //         <select
// // //           value={roleFilter}
// // //           onChange={(e) => setRoleFilter(e.target.value)}
// // //           className="p-2 rounded text-black"
// // //         >
// // //           <option value="">All Users</option>
// // //           <option value="ADMIN">Admin</option>
// // //           <option value="CREATOR">Creator</option>
// // //           <option value="INVESTOR">Investor</option>
// // //         </select>
// // //       </div>

// // //       {/* 👇 USERS LIST */}
// // //       {filteredUsers.length > 0 ? (
// // //         filteredUsers.map((u) => (
// // //           <div
// // //             key={u._id}
// // //             className="bg-white text-black p-4 mb-3 rounded-xl shadow"
// // //           >
// // //             <p className="font-semibold">
// // //               {u.name} ({u.email})
// // //             </p>

// // //             <p className="text-sm">
// // //               Role:{" "}
// // //               <span className="font-medium">{u.role}</span>
// // //             </p>

// // //             <p className="text-sm">
// // //               Status:{" "}
// // //               <span
// // //                 className={`font-semibold ${
// // //                   u.isBlocked ? "text-red-600" : "text-green-600"
// // //                 }`}
// // //               >
// // //                 {u.isBlocked ? "Blocked" : "Active"}
// // //               </span>
// // //             </p>

// // //             <button
// // //               onClick={() => toggleBlock(u._id, u.isBlocked)}
// // //               className={`mt-2 px-3 py-1 rounded text-white ${
// // //                 u.isBlocked
// // //                   ? "bg-green-600 hover:bg-green-700"
// // //                   : "bg-red-500 hover:bg-red-600"
// // //               }`}
// // //             >
// // //               {u.isBlocked ? "Unblock" : "Block"}
// // //             </button>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <p className="text-white">No users found</p>
// // //       )}
// // //     </AdminLayout>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import API from "../services/api";
// // import AdminLayout from "../components/AdminLayout";

// // export default function Users() {
// //   const [users, setUsers] = useState([]);
// //   const [roleFilter, setRoleFilter] = useState("");

// //   const fetchUsers = async () => {
// //     try {
// //       const res = await API.get("/users");
// //       setUsers(res.data.data);
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error fetching users");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   const toggleBlock = async (id, current) => {
// //     try {
// //       await API.put(`/users/${id}/block`); // ✅ no body needed
// //       alert(`User ${current ? "unblocked" : "blocked"} successfully ✅`);
// //       fetchUsers();
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error toggling block");
// //     }
// //   };

// //   const filteredUsers = users.filter((u) =>
// //     roleFilter ? u.role === roleFilter : true
// //   );

// //   return (
// //     <AdminLayout>
// //       <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

// //       {/* FILTER */}
// //       <div className="mb-4">
// //         <select
// //           value={roleFilter}
// //           onChange={(e) => setRoleFilter(e.target.value)}
// //           className="p-2 rounded text-black"
// //         >
// //           <option value="">All Users</option>
// //           <option value="ADMIN">Admin</option>
// //           <option value="CREATOR">Creator</option>
// //           <option value="INVESTOR">Investor</option>
// //         </select>
// //       </div>

// //       {/* USERS LIST */}
// //       {filteredUsers.length > 0 ? (
// //         filteredUsers.map((u) => (
// //           <div
// //             key={u._id}
// //             className="bg-white text-black p-4 mb-3 rounded-xl shadow"
// //           >
// //             <p className="font-semibold">{u.name} ({u.email})</p>
// //             <p className="text-sm">
// //               Role: <span className="font-medium">{u.role}</span>
// //             </p>
// //             <p className="text-sm">
// //               Status:{" "}
// //               <span className={`font-semibold ${u.isBlocked ? "text-red-600" : "text-green-600"}`}>
// //                 {u.isBlocked ? "Blocked" : "Active"}
// //               </span>
// //             </p>

// //             <button
// //               onClick={() => toggleBlock(u._id, u.isBlocked)}
// //               className={`mt-2 px-3 py-1 rounded text-white ${
// //                 u.isBlocked
// //                   ? "bg-green-600 hover:bg-green-700"
// //                   : "bg-red-500 hover:bg-red-600"
// //               }`}
// //             >
// //               {u.isBlocked ? "Unblock" : "Block"}
// //             </button>
// //           </div>
// //         ))
// //       ) : (
// //         <p className="text-white">No users found</p>
// //       )}
// //     </AdminLayout>
// //   );
// // }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [roleFilter, setRoleFilter] = useState("");

//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/users");
//       setUsers(res.data.data);
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error fetching users");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const toggleBlock = async (id) => {
//     try {
//       // 🔹 Only call the endpoint, no body
//       await API.put(`/users/${id}/block`);

//       // 🔹 Update local state immediately
//       setUsers((prev) =>
//         prev.map((u) =>
//           u._id === id ? { ...u, isBlocked: !u.isBlocked } : u
//         )
//       );

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error toggling block");
//     }
//   };

//   const filteredUsers = users.filter((u) =>
//     roleFilter ? u.role === roleFilter : true
//   );

//   return (
//     <AdminLayout>
//       <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

//       {/* FILTER */}
//       <div className="mb-4">
//         <select
//           value={roleFilter}
//           onChange={(e) => setRoleFilter(e.target.value)}
//           className="p-2 rounded text-black"
//         >
//           <option value="">All Users</option>
//           <option value="ADMIN">Admin</option>
//           <option value="CREATOR">Creator</option>
//           <option value="INVESTOR">Investor</option>
//         </select>
//       </div>

//       {/* USERS LIST */}
//       {filteredUsers.length > 0 ? (
//         filteredUsers.map((u) => (
//           <div
//             key={u._id}
//             className="bg-white text-black p-4 mb-3 rounded-xl shadow"
//           >
//             <p className="font-semibold">{u.name} ({u.email})</p>
//             <p className="text-sm">
//               Role: <span className="font-medium">{u.role}</span>
//             </p>
//             <p className="text-sm">
//               Status:{" "}
//               <span
//                 className={`font-semibold ${
//                   u.isBlocked ? "text-red-600" : "text-green-600"
//                 }`}
//               >
//                 {u.isBlocked ? "Blocked" : "Active"}
//               </span>
//             </p>

//             <button
//               onClick={() => toggleBlock(u._id)}
//               className={`mt-2 px-3 py-1 rounded text-white ${
//                 u.isBlocked
//                   ? "bg-green-600 hover:bg-green-700"
//                   : "bg-red-500 hover:bg-red-600"
//               }`}
//             >
//               {u.isBlocked ? "Unblock" : "Block"}
//             </button>
//           </div>
//         ))
//       ) : (
//         <p className="text-white">No users found</p>
//       )}
//     </AdminLayout>
//   );
// }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [roleFilter, setRoleFilter] = useState("");

//   // Fetch all users
//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/admin/users"); // ✅ corrected admin path
//       setUsers(res.data.data);
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error fetching users");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Toggle block/unblock a user
//   const toggleBlock = async (id) => {
//     try {
//       await API.put(`/admin/users/${id}/block`); // ✅ admin route
//       // Update local state immediately for UI feedback
//       setUsers((prev) =>
//         prev.map((u) => (u._id === id ? { ...u, isBlocked: !u.isBlocked } : u))
//       );
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error toggling block");
//     }
//   };

//   // Filter users by role
//   const filteredUsers = users.filter((u) =>
//     roleFilter ? u.role === roleFilter : true
//   );

//   return (
//     <AdminLayout>
//       <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

//       {/* Role Filter */}
//       <div className="mb-4">
//         <select
//           value={roleFilter}
//           onChange={(e) => setRoleFilter(e.target.value)}
//           className="p-2 rounded text-black"
//         >
//           <option value="">All Users</option>
//           <option value="ADMIN">Admin</option>
//           <option value="CREATOR">Creator</option>
//           <option value="INVESTOR">Investor</option>
//         </select>
//       </div>

//       {/* Users List */}
//       {filteredUsers.length > 0 ? (
//         filteredUsers.map((u) => (
//           <div
//             key={u._id}
//             className="bg-white text-black p-4 mb-3 rounded-xl shadow"
//           >
//             <p className="font-semibold">
//               {u.name} ({u.email})
//             </p>

//             <p className="text-sm">
//               Role: <span className="font-medium">{u.role}</span>
//             </p>

//             <p className="text-sm">
//               Status:{" "}
//               <span
//                 className={`font-semibold ${
//                   u.isBlocked ? "text-red-600" : "text-green-600"
//                 }`}
//               >
//                 {u.isBlocked ? "Blocked" : "Active"}
//               </span>
//             </p>

//             <button
//               onClick={() => toggleBlock(u._id)}
//               className={`mt-2 px-3 py-1 rounded text-white ${
//                 u.isBlocked
//                   ? "bg-green-600 hover:bg-green-700"
//                   : "bg-red-500 hover:bg-red-600"
//               }`}
//             >
//               {u.isBlocked ? "Unblock" : "Block"}
//             </button>
//           </div>
//         ))
//       ) : (
//         <p className="text-white">No users found</p>
//       )}
//     </AdminLayout>
//   );
// }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [roleFilter, setRoleFilter] = useState("");

//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/admin/users");
//       setUsers(res.data.data);
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error fetching users");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const toggleBlock = async (id) => {
//     try {
//       await API.put(`/admin/users/${id}/block`);
//       setUsers((prev) =>
//         prev.map((u) =>
//           u._id === id ? { ...u, isBlocked: !u.isBlocked } : u
//         )
//       );
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error toggling block");
//     }
//   };

//   const filteredUsers = users.filter((u) =>
//     roleFilter ? u.role === roleFilter : true
//   );

//   return (
//     <AdminLayout>
//       <h1 className="text-3xl font-bold mb-6 text-white">
//         Users Management 👥
//       </h1>

//       {/* Filter */}
//       <div className="mb-6">
//         <select
//           value={roleFilter}
//           onChange={(e) => setRoleFilter(e.target.value)}
//           className="px-4 py-2 rounded-xl bg-white/90 text-black shadow focus:ring-2 focus:ring-indigo-500 outline-none"
//         >
//           <option value="">All Users</option>
//           <option value="ADMIN">Admin</option>
//           <option value="CREATOR">Creator</option>
//           <option value="INVESTOR">Investor</option>
//         </select>
//       </div>

//       {/* Users Grid */}
//       {filteredUsers.length > 0 ? (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredUsers.map((u) => (
//             <div
//               key={u._id}
//               className="bg-white/95 backdrop-blur-md text-black p-5 rounded-3xl shadow-xl hover:scale-[1.03] transition-all duration-300 border border-white/40"
//             >
//               {/* Name */}
//               <h2 className="text-lg font-semibold mb-1">
//                 {u.name}
//               </h2>

//               <p className="text-sm text-gray-600 mb-2">
//                 {u.email}
//               </p>

//               {/* Role Badge */}
//               <span className="inline-block text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium mb-2">
//                 {u.role}
//               </span>

//               {/* Status */}
//               <p className="text-sm mb-3">
//                 Status:{" "}
//                 <span
//                   className={`font-semibold ${
//                     u.isBlocked
//                       ? "text-red-600"
//                       : "text-green-600"
//                   }`}
//                 >
//                   {u.isBlocked ? "Blocked ❌" : "Active ✅"}
//                 </span>
//               </p>

//               {/* Button */}
//               <button
//                 onClick={() => toggleBlock(u._id)}
//                 className={`w-full py-2 rounded-xl font-medium shadow ${
//                   u.isBlocked
//                     ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
//                     : "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
//                 }`}
//               >
//                 {u.isBlocked ? "Unblock" : "Block"}
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-white">No users found</p>
//       )}
//     </AdminLayout>
//   );
// }
import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error fetching users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleBlock = async (id, isBlocked) => {
    try {
      await API.put(`/admin/users/${id}/block`, {
        isBlocked: !isBlocked,
      });

      setUsers((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, isBlocked: !u.isBlocked } : u
        )
      );
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error toggling block");
    }
  };

  // ✅ FILTER LOGIC
  const filteredUsers = users
    .filter((u) =>
      roleFilter ? u.role === roleFilter : true
    )
    .filter((u) =>
      statusFilter
        ? statusFilter === "ACTIVE"
          ? !u.isBlocked
          : u.isBlocked
        : true
    );

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Users Management 👥
      </h1>

      {/* 🔍 FILTERS */}
      <div className="flex flex-wrap gap-4 mb-6 bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)]">

        {/* Role Filter */}
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 rounded-xl bg-white text-black"
        >
          <option value="">All Roles</option>
          <option value="ADMIN">Admin</option>
          <option value="CREATOR">Creator</option>
          <option value="INVESTOR">Investor</option>
        </select>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-xl bg-white text-black"
        >
          <option value="">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="BLOCKED">Blocked</option>
        </select>

      </div>

      {/* 👥 USERS GRID */}
      {filteredUsers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((u) => (
            <div
              key={u._id}
              className="bg-black/70 border border-cyan-400/30 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] p-5 rounded-3xl hover:scale-[1.03] transition-all duration-300"
            >
              {/* Name */}
              <h2 className="text-lg font-semibold mb-1">
                {u.name}
              </h2>

              <p className="text-sm text-gray-300 mb-2">
                {u.email}
              </p>

              {/* Role Badge */}
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-medium mb-2">
                {u.role}
              </span>

              {/* Status */}
              <p className="text-sm mb-3">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    u.isBlocked
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {u.isBlocked ? "Blocked ❌" : "Active ✅"}
                </span>
              </p>

              {/* Button */}
              <button
                onClick={() => toggleBlock(u._id, u.isBlocked)}
                className={`w-full py-2 rounded-xl font-medium ${
                  u.isBlocked
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"
                }`}
              >
                {u.isBlocked ? "Unblock" : "Block"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No users found</p>
      )}
    </AdminLayout>
  );
}