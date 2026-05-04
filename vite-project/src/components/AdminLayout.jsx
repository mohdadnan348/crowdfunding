// import { Link, useLocation } from "react-router-dom";

// export default function AdminLayout({ children }) {
//   const { pathname } = useLocation();

//   const linkClass = (path) =>
//     `block px-3 py-2 rounded ${
//       pathname === path
//         ? "bg-white text-black"
//         : "hover:bg-white/20"
//     }`;

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">

//       {/* Sidebar */}
//       <div className="w-64 p-5 space-y-4">
//         <h2 className="text-xl font-bold">Admin Panel 👑</h2>

//         <Link to="/admin" className={linkClass("/admin")}>
//           Dashboard
//         </Link>

//         <Link to="/users" className={linkClass("/users")}>
//           Users
//         </Link>

//         <Link to="/projects" className={linkClass("/projects")}>
//           Projects
//         </Link>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-6">
//         {children}
//       </div>

//     </div>
//   );
// }
// import { Link, useLocation } from "react-router-dom";

// export default function AdminLayout({ children }) {
//   const { pathname } = useLocation();

//   const linkClass = (path) =>
//     `block px-4 py-2 rounded-lg transition ${
//       pathname === path
//         ? "bg-white text-black font-semibold"
//         : "hover:bg-white/20"
//     }`;

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">

//       {/* Sidebar */}
//       <div className="w-64 p-6 space-y-4 border-r border-white/10">
//         <h2 className="text-2xl font-bold mb-6">Admin </h2>

//         <Link to="/admin" className={linkClass("/admin")}>
//           Dashboard
//         </Link>

//         <Link to="/users" className={linkClass("/users")}>
//           Users
//         </Link>

//         <Link to="/projects" className={linkClass("/projects")}>
//           Projects
//         </Link>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-6">{children}</div>
//     </div>
//   );
// }
import { Link, useLocation } from "react-router-dom";

export default function AdminLayout({ children }) {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-cyan-400 text-black font-semibold shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
    }`;

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <div className="w-64 p-6 space-y-4 border-r border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.1)]">

        <h2 className="text-2xl font-bold mb-6 text-cyan-400 tracking-wide">
          Admin Panel
        </h2>

        <Link to="/admin" className={linkClass("/admin")}>
          Dashboard
        </Link>

        <Link to="/users" className={linkClass("/users")}>
          Users
        </Link>

        <Link to="/projects" className={linkClass("/projects")}>
          Projects
        </Link>
        <Link to="/investments" className={linkClass("/investments")}>
          Investments
        </Link>
        <Link to="/analytics" className={linkClass("/analytics")}>
  Analytics 📊
</Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-black">
        {children}
      </div>
    </div>
  );
}