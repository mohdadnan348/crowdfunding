// // // import { useState } from "react";
// // // import API from "../services/api";
// // // import { useAuth } from "../context/AuthContext";
// // // import { useNavigate } from "react-router-dom";

// // // const Login = () => {
// // //   const { login } = useAuth();
// // //   const navigate = useNavigate();

// // //   const [form, setForm] = useState({
// // //     email: "",
// // //     password: "",
// // //   });

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const res = await API.post("/auth/login", form);
// // //       login(res.data);

// // //       // 🔥 Role-based redirect
// // //       if (res.data.user.role === "ADMIN") navigate("/admin");
// // //       else if (res.data.user.role === "CREATOR") navigate("/creator");
// // //       else navigate("/");
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Login failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex justify-center mt-10">
// // //       <form onSubmit={handleSubmit} className="border p-6 w-80">
// // //         <h2 className="text-xl mb-4">Login</h2>

// // //         <input
// // //           className="border p-2 w-full mb-3"
// // //           placeholder="Email"
// // //           onChange={(e) =>
// // //             setForm({ ...form, email: e.target.value })
// // //           }
// // //         />

// // //         <input
// // //           type="password"
// // //           className="border p-2 w-full mb-3"
// // //           placeholder="Password"
// // //           onChange={(e) =>
// // //             setForm({ ...form, password: e.target.value })
// // //           }
// // //         />

// // //         <button className="bg-blue-500 text-white w-full p-2">
// // //           Login
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import { useState } from "react";
// // import API from "../services/api";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";
// // import { Mail, Lock } from "lucide-react";

// // export default function Login() {
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //     captcha: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await API.post("/auth/login", form);
// //       login(res.data);

// //       if (res.data.user.role === "ADMIN") navigate("/admin");
// //       else if (res.data.user.role === "CREATOR") navigate("/creator");
// //       else navigate("/");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
// //       <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">
// //         {/* Logo */}
// //         <div className="flex flex-col items-center mb-8">
// //           <img
// //             src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
// //             alt="logo"
// //             className="w-20 mb-3"
// //           />
// //           <h1 className="text-3xl font-bold text-gray-800">CrowdFund</h1>
// //           <p className="text-gray-500 text-sm">Login to your account</p>
// //         </div>

// //         {/* Form */}
// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           {/* Email */}
// //           <div>
// //             <label className="text-sm text-gray-600">Email</label>
// //             <div className="flex items-center mt-2 bg-gray-100 rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500 transition">
// //               <Mail className="text-gray-500" size={20} />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={form.email}
// //                 onChange={handleChange}
// //                 placeholder="Enter your email"
// //                 className="w-full p-3 bg-transparent outline-none"
// //               />
// //             </div>
// //           </div>

// //           {/* Password */}
// //           <div>
// //             <label className="text-sm text-gray-600">Password</label>
// //             <div className="flex items-center mt-2 bg-gray-100 rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500 transition">
// //               <Lock className="text-gray-500" size={20} />
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={form.password}
// //                 onChange={handleChange}
// //                 placeholder="Enter your password"
// //                 className="w-full p-3 bg-transparent outline-none"
// //               />
// //             </div>
// //           </div>

// //           {/* Captcha */}
// //           <div>
// //             <label className="text-sm text-gray-600">Captcha</label>
// //             <div className="flex items-center gap-3 mt-2">
// //               <img
// //                 src="https://dummyimage.com/120x40/000/fff&text=AB12C"
// //                 alt="captcha"
// //                 className="rounded-lg"
// //               />
// //               <input
// //                 type="text"
// //                 name="captcha"
// //                 value={form.captcha}
// //                 onChange={handleChange}
// //                 placeholder="Enter captcha"
// //                 className="flex-1 p-3 rounded-xl bg-gray-100 outline-none"
// //               />
// //             </div>
// //           </div>

// //           {/* Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold shadow-md"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         {/* Footer */}
// //         <p className="text-center text-sm text-gray-600 mt-6">
// //           Not registered?
// //           <span
// //             onClick={() => navigate("/register")}
// //             className="text-blue-600 font-medium cursor-pointer ml-1 hover:underline"
// //           >
// //             Create account
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }
// // import { useState } from "react";
// // import API from "../services/api";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";
// // import { Mail, Lock } from "lucide-react";

// // export default function Login() {
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await API.post("/auth/login", form);
// //       login(res.data);

// //       if (res.data.user.role === "ADMIN") navigate("/admin");
// //       else if (res.data.user.role === "CREATOR") navigate("/creator");
// //       else navigate("/");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-indigo-900">

// //       <div className="bg-white rounded-3xl shadow-xl p-8 w-[350px]">

// //         {/* SAME IMAGE AS LOGIN */}
// //         <div className="text-center mb-6">
// //           <img
// //             src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
// //             alt="logo"
// //             className="w-20 mx-auto mb-3"
// //           />
// //           <div className="text-2xl font-bold">CrowdFund</div>
// //           <p className="text-gray-500 text-sm">
// //             Login to your account
// //           </p>
// //         </div>

// //         <form onSubmit={handleSubmit}>

// //           {/* Email */}
// //           <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
// //             <Mail size={18} />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               className="bg-transparent p-2 w-full outline-none"
// //               onChange={handleChange}
// //             />
// //           </div>

// //           {/* Password */}
// //           <div className="mb-4 flex items-center bg-gray-100 px-3 rounded-lg">
// //             <Lock size={18} />
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               className="bg-transparent p-2 w-full outline-none"
// //               onChange={handleChange}
// //             />
// //           </div>

// //           {/* LOGIN BUTTON (BLUE SAME AS BEFORE) */}
// //           <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2 rounded-lg">
// //             Login
// //           </button>

// //         </form>

// //         <p className="text-center text-sm mt-4">
// //           Not registered?{" "}
// //           <span
// //             onClick={() => navigate("/register")}
// //             className="text-blue-600 font-semibold cursor-pointer"
// //           >
// //             Create account
// //           </span>
// //         </p>

// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import API from "../services/api";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { Mail, Lock } from "lucide-react";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   // ✅ SAME INPUT STYLE AS REGISTER (slightly darker border)
//   const inputStyle =
//     "w-full p-3 rounded-xl bg-black/40 border border-cyan-500/50 text-white outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-300 placeholder-gray-400";

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/login", form);
//       login(res.data);

//       if (res.data.user.role === "ADMIN") navigate("/admin");
//       else if (res.data.user.role === "CREATOR") navigate("/creator");
//       else navigate("/");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">

//       <div className="bg-black/70 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.2)] backdrop-blur-xl rounded-3xl p-8 w-[380px]">

//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-cyan-400">
//             Welcome Back
//           </h1>
//           <p className="text-gray-400 text-sm">
//             Login to your account 🚀
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>

//           {/* Email */}
//           <div className="mb-3 flex items-center bg-black/40 px-3 rounded-xl border border-cyan-500/40 focus-within:ring-2 focus-within:ring-cyan-400">
//             <Mail size={18} className="text-cyan-400" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="bg-transparent p-2 w-full outline-none text-white placeholder-gray-400"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4 flex items-center bg-black/40 px-3 rounded-xl border border-cyan-500/40 focus-within:ring-2 focus-within:ring-cyan-400">
//             <Lock size={18} className="text-cyan-400" />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="bg-transparent p-2 w-full outline-none text-white placeholder-gray-400"
//               onChange={handleChange}
//             />
//           </div>

//           {/* Button (SAME AS REGISTER) */}
//           <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-xl shadow-lg hover:opacity-90">
//             Login
//           </button>

//         </form>

//         <p className="text-center text-sm mt-4 text-gray-400">
//           Not registered?{" "}
//           <span
//             onClick={() => navigate("/register")}
//             className="text-cyan-400 font-semibold cursor-pointer hover:underline"
//           >
//             Create account
//           </span>
//         </p>

//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);
      login(res.data);

      if (res.data.user.role === "ADMIN") navigate("/admin");
      else if (res.data.user.role === "CREATOR") navigate("/creator");
      else navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="bg-black/70 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.2)] backdrop-blur-xl rounded-3xl p-8 w-[350px] text-white">

        {/* SAME IMAGE AS LOGIN */}
        <div className="text-center mb-6">
          <img
  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  alt="logo"
  className="w-20 mx-auto mb-3 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)] p-1"
/>
          <div className="text-2xl font-bold text-cyan-400">CrowdFund</div>
          <p className="text-gray-400 text-sm">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-3 flex items-center bg-black/40 px-3 rounded-lg border border-cyan-500/40 focus-within:ring-2 focus-within:ring-cyan-400">
            <Mail size={18} className="text-cyan-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent p-2 w-full outline-none text-white placeholder-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4 flex items-center bg-black/40 px-3 rounded-lg border border-cyan-500/40 focus-within:ring-2 focus-within:ring-cyan-400">
            <Lock size={18} className="text-cyan-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent p-2 w-full outline-none text-white placeholder-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* LOGIN BUTTON (UNCHANGED LOGIC, ONLY STYLE UPDATED) */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90">
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4 text-gray-400">
          Not registered?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-cyan-400 font-semibold cursor-pointer hover:underline"
          >
            Create account
          </span>
        </p>

      </div>
    </div>
  );
}