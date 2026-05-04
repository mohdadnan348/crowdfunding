// // // // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // // // // // import API from "../services/api";

// // // // // // // // // // // // // const ProjectDetails = () => {
// // // // // // // // // // // // //   const { id } = useParams();

// // // // // // // // // // // // //   const [project, setProject] = useState(null);
// // // // // // // // // // // // //   const [amount, setAmount] = useState("");

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchProject = async () => {
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const res = await API.get(`/projects/${id}`);
// // // // // // // // // // // // //         setProject(res.data.data);
// // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // //         console.log(err);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     fetchProject();
// // // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // // //   // 🔥 INVEST FUNCTION
// // // // // // // // // // // // //   const handleInvest = async () => {
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const user = JSON.parse(localStorage.getItem("user"));

// // // // // // // // // // // // //       if (!user) {
// // // // // // // // // // // // //         alert("Please login as Investor first");
// // // // // // // // // // // // //         return;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       if (user.role !== "INVESTOR") {
// // // // // // // // // // // // //         alert("Only Investors can invest");
// // // // // // // // // // // // //         return;
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       // 1️⃣ Create Investment
// // // // // // // // // // // // //       const invRes = await API.post("/investments", {
// // // // // // // // // // // // //         projectId: id,
// // // // // // // // // // // // //         amount: Number(amount),
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       const investmentId = invRes.data.data.investmentId;

// // // // // // // // // // // // //       // 2️⃣ Create Transaction
// // // // // // // // // // // // //       await API.post("/transactions", {
// // // // // // // // // // // // //         investmentId,
// // // // // // // // // // // // //         transactionId: "TXN_" + Date.now(),
// // // // // // // // // // // // //         amount: Number(amount),
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       alert("Investment Successful 🚀");

// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   if (!project) return <p>Loading...</p>;

// // // // // // // // // // // // //   const percent =
// // // // // // // // // // // // //     (project.fundedAmount / project.targetAmount) * 100;

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="p-6">
// // // // // // // // // // // // //       <h1 className="text-2xl font-bold">{project.title}</h1>
// // // // // // // // // // // // //       <p>{project.description}</p>

// // // // // // // // // // // // //       <div className="bg-gray-200 h-3 mt-2 rounded">
// // // // // // // // // // // // //         <div
// // // // // // // // // // // // //           className="bg-green-500 h-3 rounded"
// // // // // // // // // // // // //           style={{ width: `${percent}%` }}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <p className="mt-2">
// // // // // // // // // // // // //         ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // // // // // // // //       </p>

// // // // // // // // // // // // //       {/* 💰 Invest Section */}
// // // // // // // // // // // // //       <div className="mt-4">
// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // // // //           className="border p-2 mr-2"
// // // // // // // // // // // // //           onChange={(e) => setAmount(e.target.value)}
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <button
// // // // // // // // // // // // //           onClick={handleInvest}
// // // // // // // // // // // // //           className="bg-blue-500 text-white px-4 py-2"
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           Invest
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default ProjectDetails;
// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // // // import API from "../services/api";

// // // // // // // // // // // const ProjectDetails = () => {
// // // // // // // // // // //   const { id } = useParams();

// // // // // // // // // // //   const [project, setProject] = useState(null);
// // // // // // // // // // //   const [amount, setAmount] = useState("");

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchProject = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const res = await API.get(`/projects/${id}`);
// // // // // // // // // // //         setProject(res.data.data);
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.log(err);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchProject();
// // // // // // // // // // //   }, [id]);

// // // // // // // // // // //   // 🔥 INVEST FUNCTION
// // // // // // // // // // //   const handleInvest = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const user = JSON.parse(localStorage.getItem("user"));

// // // // // // // // // // //       if (!user) {
// // // // // // // // // // //         alert("Please login as Investor first");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       if (user.role !== "INVESTOR") {
// // // // // // // // // // //         alert("Only Investors can invest");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       if (!amount || amount <= 0) {
// // // // // // // // // // //         alert("Enter valid amount");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       // 1️⃣ Create Investment
// // // // // // // // // // //       const invRes = await API.post("/investments", {
// // // // // // // // // // //         projectId: id,
// // // // // // // // // // //         amount: Number(amount),
// // // // // // // // // // //       });

// // // // // // // // // // //       const investmentId = invRes.data.data.investmentId;

// // // // // // // // // // //       // 2️⃣ Create Transaction
// // // // // // // // // // //       await API.post("/transactions", {
// // // // // // // // // // //         investmentId,
// // // // // // // // // // //         transactionId: "TXN_" + Date.now(),
// // // // // // // // // // //         amount: Number(amount),
// // // // // // // // // // //       });

// // // // // // // // // // //       alert("Investment Successful 🚀");

// // // // // // // // // // //       setAmount(""); // reset input
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   if (!project) return <p className="text-center mt-10">Loading...</p>;

// // // // // // // // // // //   const percent = project.targetAmount
// // // // // // // // // // //     ? (project.fundedAmount / project.targetAmount) * 100
// // // // // // // // // // //     : 0;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="p-6 max-w-2xl mx-auto border rounded-xl shadow-md">
      
// // // // // // // // // // //       {/* 📌 Title */}
// // // // // // // // // // //       <h1 className="text-2xl font-bold">{project.title}</h1>

// // // // // // // // // // //       {/* 📌 Description */}
// // // // // // // // // // //       <p className="text-gray-600 mt-2">{project.description}</p>

// // // // // // // // // // //       {/* 📊 Progress Bar */}
// // // // // // // // // // //       <div className="mt-4 bg-gray-200 h-2 rounded">
// // // // // // // // // // //         <div
// // // // // // // // // // //           className="bg-green-500 h-2 rounded"
// // // // // // // // // // //           style={{ width: `${percent}%` }}
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* 💰 Amount */}
// // // // // // // // // // //       <p className="mt-2 font-medium">
// // // // // // // // // // //         ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // // // // // //       </p>

// // // // // // // // // // //       {/* 💳 Invest Section */}
// // // // // // // // // // //       <div className="mt-4 flex gap-2">
// // // // // // // // // // //         <input
// // // // // // // // // // //           type="number"
// // // // // // // // // // //           placeholder="Amount"
// // // // // // // // // // //           value={amount}
// // // // // // // // // // //           className="border p-2 rounded w-full"
// // // // // // // // // // //           onChange={(e) => setAmount(e.target.value)}
// // // // // // // // // // //         />

// // // // // // // // // // //         <button
// // // // // // // // // // //           onClick={handleInvest}
// // // // // // // // // // //           className="bg-blue-500 text-white px-4 py-2 rounded"
// // // // // // // // // // //         >
// // // // // // // // // // //           Invest
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default ProjectDetails;
// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import { useParams, useSearchParams } from "react-router-dom";
// // // // // // // // // // // import API from "../services/api";

// // // // // // // // // // // const ProjectDetails = () => {
// // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // //   const [searchParams] = useSearchParams();

// // // // // // // // // // //   const mode = searchParams.get("mode") || "view"; // 👈 default view

// // // // // // // // // // //   const [project, setProject] = useState(null);
// // // // // // // // // // //   const [amount, setAmount] = useState("");

// // // // // // // // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchProject = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const res = await API.get(`/projects/${id}`);
// // // // // // // // // // //         setProject(res.data.data);
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.log(err);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchProject();
// // // // // // // // // // //   }, [id]);

// // // // // // // // // // //   const handleInvest = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       if (!user) {
// // // // // // // // // // //         alert("Please login as Investor first");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       if (user.role !== "INVESTOR") {
// // // // // // // // // // //         alert("Only Investors can invest");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       if (!amount || amount <= 0) {
// // // // // // // // // // //         alert("Enter valid amount");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       const invRes = await API.post("/investments", {
// // // // // // // // // // //         projectId: id,
// // // // // // // // // // //         amount: Number(amount),
// // // // // // // // // // //       });

// // // // // // // // // // //       const investmentId = invRes.data.data.investmentId;

// // // // // // // // // // //       await API.post("/transactions", {
// // // // // // // // // // //         investmentId,
// // // // // // // // // // //         transactionId: "TXN_" + Date.now(),
// // // // // // // // // // //         amount: Number(amount),
// // // // // // // // // // //       });

// // // // // // // // // // //       alert("Investment Successful 🚀");
// // // // // // // // // // //       setAmount("");

// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   if (!project)
// // // // // // // // // // //     return <p className="text-center mt-10">Loading...</p>;

// // // // // // // // // // //   const percent = project.targetAmount
// // // // // // // // // // //     ? (project.fundedAmount / project.targetAmount) * 100
// // // // // // // // // // //     : 0;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      
// // // // // // // // // // //       {/* WHITE CARD */}
// // // // // // // // // // //       <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-lg text-black">

// // // // // // // // // // //         {/* Title */}
// // // // // // // // // // //         <h1 className="text-2xl font-bold mb-2">
// // // // // // // // // // //           {project.title}
// // // // // // // // // // //         </h1>

// // // // // // // // // // //         {/* Description */}
// // // // // // // // // // //         <p className="mb-3">{project.description}</p>

// // // // // // // // // // //         {/* Progress */}
// // // // // // // // // // //         <div className="w-full bg-gray-200 h-2 rounded">
// // // // // // // // // // //           <div
// // // // // // // // // // //             className="bg-green-500 h-2 rounded"
// // // // // // // // // // //             style={{ width: `${percent}%` }}
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Amount */}
// // // // // // // // // // //         <p className="mt-2 font-medium">
// // // // // // // // // // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // // // // // //         </p>

// // // // // // // // // // //         {/* Extra Info */}
// // // // // // // // // // //         <div className="mt-4 text-sm space-y-1">
// // // // // // // // // // //           <p><b>Category:</b> {project.category}</p>
// // // // // // // // // // //           <p><b>Status:</b> {project.status}</p>
// // // // // // // // // // //           <p>
// // // // // // // // // // //             <p><b>Description:</b> {project.description}</p>
// // // // // // // // // // //           <p></p>
// // // // // // // // // // //           <p><b>TargerAmount:</b> {project.targetAmount}</p>
// // // // // // // // // // //           <p></p>
// // // // // // // // // // //           <p><b>FundedAmount:</b> {project.fundedAmount}</p>
// // // // // // // // // // //           <p></p>
// // // // // // // // // // //             <b>Deadline:</b>{" "}
// // // // // // // // // // //             {new Date(project.deadline).toDateString()}
// // // // // // // // // // //           </p>
          

// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* 🔥 INVEST SECTION */}
// // // // // // // // // // //         {mode === "invest" && (
// // // // // // // // // // //           <div className="mt-6 border-t pt-4">

// // // // // // // // // // //             {!user ? (
// // // // // // // // // // //               <p className="text-red-500">
// // // // // // // // // // //                 Please login as Investor to invest
// // // // // // // // // // //               </p>
// // // // // // // // // // //             ) : user.role !== "INVESTOR" ? (
// // // // // // // // // // //               <p className="text-red-500">
// // // // // // // // // // //                 Only Investors can invest
// // // // // // // // // // //               </p>
// // // // // // // // // // //             ) : (
// // // // // // // // // // //               <div className="flex gap-2">
// // // // // // // // // // //                 <input
// // // // // // // // // // //                   type="number"
// // // // // // // // // // //                   placeholder="Enter amount"
// // // // // // // // // // //                   value={amount}
// // // // // // // // // // //                   className="border p-2 rounded w-full"
// // // // // // // // // // //                   onChange={(e) => setAmount(e.target.value)}
// // // // // // // // // // //                 />

// // // // // // // // // // //                 <button
// // // // // // // // // // //                   onClick={handleInvest}
// // // // // // // // // // //                   className="bg-blue-600 text-white px-4 py-2 rounded"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Invest
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             )}

// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}

// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default ProjectDetails;
// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import { useParams, useSearchParams, useNavigate } from "react-router-dom";
// // // // // // // // // // import API from "../services/api";

// // // // // // // // // // const ProjectDetails = () => {
// // // // // // // // // //   const { id } = useParams();
// // // // // // // // // //   const [searchParams] = useSearchParams();
// // // // // // // // // //   const navigate = useNavigate(); // ✅ for back/close

// // // // // // // // // //   const mode = searchParams.get("mode") || "view"; // default view

// // // // // // // // // //   const [project, setProject] = useState(null);
// // // // // // // // // //   const [amount, setAmount] = useState("");

// // // // // // // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchProject = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const res = await API.get(`/projects/${id}`);
// // // // // // // // // //         setProject(res.data.data);
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.log(err);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchProject();
// // // // // // // // // //   }, [id]);

// // // // // // // // // //   const handleInvest = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       if (!user) {
// // // // // // // // // //         alert("Please login as Investor first");
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       if (user.role !== "INVESTOR") {
// // // // // // // // // //         alert("Only Investors can invest");
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       if (!amount || amount <= 0) {
// // // // // // // // // //         alert("Enter valid amount");
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       const invRes = await API.post("/investments", {
// // // // // // // // // //         projectId: id,
// // // // // // // // // //         amount: Number(amount),
// // // // // // // // // //       });

// // // // // // // // // //       const investmentId = invRes.data.data.investmentId;

// // // // // // // // // //       await API.post("/transactions", {
// // // // // // // // // //         investmentId,
// // // // // // // // // //         transactionId: "TXN_" + Date.now(),
// // // // // // // // // //         amount: Number(amount),
// // // // // // // // // //       });

// // // // // // // // // //       alert("Investment Successful 🚀");
// // // // // // // // // //       setAmount("");

// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   if (!project) return <p className="text-center mt-10">Loading...</p>;

// // // // // // // // // //   const percent = project.targetAmount
// // // // // // // // // //     ? (project.fundedAmount / project.targetAmount) * 100
// // // // // // // // // //     : 0;

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      
// // // // // // // // // //       {/* WHITE CARD */}
// // // // // // // // // //       <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-lg text-black relative">

// // // // // // // // // //         {/* CLOSE BUTTON */}
// // // // // // // // // //         <button
// // // // // // // // // //           onClick={() => navigate(-1)}
// // // // // // // // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
// // // // // // // // // //         >
// // // // // // // // // //           ✕
// // // // // // // // // //         </button>

// // // // // // // // // //         {/* Title */}
// // // // // // // // // //         <h1 className="text-2xl font-bold mb-2">{project.title}</h1>

// // // // // // // // // //         {/* Description */}
// // // // // // // // // //         <p className="mb-3">{project.description}</p>

// // // // // // // // // //         {/* Progress */}
// // // // // // // // // //         <div className="w-full bg-gray-200 h-2 rounded">
// // // // // // // // // //           <div
// // // // // // // // // //             className="bg-green-500 h-2 rounded"
// // // // // // // // // //             style={{ width: `${percent}%` }}
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Amount */}
// // // // // // // // // //         <p className="mt-2 font-medium">
// // // // // // // // // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // // // // //         </p>

// // // // // // // // // //         {/* Extra Info */}
// // // // // // // // // //         <div className="mt-4 text-sm space-y-1">
// // // // // // // // // //           <p><b>Category:</b> {project.category}</p>
// // // // // // // // // //           <p><b>Status:</b> {project.status}</p>
// // // // // // // // // //           <p><b>Description:</b> {project.description}</p>
// // // // // // // // // //           <p><b>Target Amount:</b> {project.targetAmount}</p>
// // // // // // // // // //           <p><b>Funded Amount:</b> {project.fundedAmount}</p>
// // // // // // // // // //           <p><b>Deadline:</b> {new Date(project.deadline).toDateString()}</p>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* INVEST SECTION */}
// // // // // // // // // //         {mode === "invest" && (
// // // // // // // // // //           <div className="mt-6 border-t pt-4">

// // // // // // // // // //             {!user ? (
// // // // // // // // // //               <p className="text-red-500">Please login as Investor to invest</p>
// // // // // // // // // //             ) : user.role !== "INVESTOR" ? (
// // // // // // // // // //               <p className="text-red-500">Only Investors can invest</p>
// // // // // // // // // //             ) : (
// // // // // // // // // //               <div className="flex gap-2">
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="number"
// // // // // // // // // //                   placeholder="Enter amount"
// // // // // // // // // //                   value={amount}
// // // // // // // // // //                   className="border p-2 rounded w-full"
// // // // // // // // // //                   onChange={(e) => setAmount(e.target.value)}
// // // // // // // // // //                 />

// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={handleInvest}
// // // // // // // // // //                   className="bg-blue-600 text-white px-4 py-2 rounded"
// // // // // // // // // //                 >
// // // // // // // // // //                   Invest
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}

// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ProjectDetails;
// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import { useParams, useSearchParams, useNavigate } from "react-router-dom";
// // // // // // // // // import API from "../services/api";

// // // // // // // // // const ProjectDetails = () => {
// // // // // // // // //   const { id } = useParams();
// // // // // // // // //   const [searchParams] = useSearchParams();
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const mode = searchParams.get("mode") || "view"; // default view

// // // // // // // // //   const [project, setProject] = useState(null);
// // // // // // // // //   const [amount, setAmount] = useState("");

// // // // // // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchProject = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const res = await API.get(`/projects/${id}`);
// // // // // // // // //         setProject(res.data.data);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.log(err);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchProject();
// // // // // // // // //   }, [id]);

// // // // // // // // //   const handleInvest = async () => {
// // // // // // // // //     try {
// // // // // // // // //       if (!user) {
// // // // // // // // //         alert("Please login as Investor first");
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       if (user.role !== "INVESTOR") {
// // // // // // // // //         alert("Only Investors can invest");
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       if (!amount || amount <= 0) {
// // // // // // // // //         alert("Enter valid amount");
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       const invRes = await API.post("/investments", {
// // // // // // // // //         projectId: id,
// // // // // // // // //         amount: Number(amount),
// // // // // // // // //       });

// // // // // // // // //       const investmentId = invRes.data.data.investmentId;

// // // // // // // // //       await API.post("/transactions", {
// // // // // // // // //         investmentId,
// // // // // // // // //         transactionId: "TXN_" + Date.now(),
// // // // // // // // //         amount: Number(amount),
// // // // // // // // //       });

// // // // // // // // //       alert("Investment Successful 🚀");
// // // // // // // // //       setAmount("");
// // // // // // // // //     } catch (err) {
// // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   if (!project) return <p className="text-center mt-10">Loading...</p>;

// // // // // // // // //   const percent = project.targetAmount
// // // // // // // // //     ? (project.fundedAmount / project.targetAmount) * 100
// // // // // // // // //     : 0;

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
// // // // // // // // //       <div
// // // // // // // // //         className={`w-full max-w-2xl p-6 rounded-2xl shadow-lg relative ${
// // // // // // // // //           mode === "view" || mode === "invest"
// // // // // // // // //             ? "bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white"
// // // // // // // // //             : "bg-white text-black"
// // // // // // // // //         }`}
// // // // // // // // //       >
// // // // // // // // //         {/* CLOSE BUTTON */}
// // // // // // // // //         <button
// // // // // // // // //           onClick={() => navigate(-1)}
// // // // // // // // //           className={`absolute top-4 right-4 font-bold ${
// // // // // // // // //             mode === "view" || mode === "invest"
// // // // // // // // //               ? "text-white hover:text-gray-200"
// // // // // // // // //               : "text-gray-500 hover:text-gray-800"
// // // // // // // // //           }`}
// // // // // // // // //         >
// // // // // // // // //           ✕
// // // // // // // // //         </button>

// // // // // // // // //         {/* Title */}
// // // // // // // // //         <h1 className="text-2xl font-bold mb-2">{project.title}</h1>

// // // // // // // // //         {/* Description */}
// // // // // // // // //         <p className="mb-3">{project.description}</p>

// // // // // // // // //         {/* Progress */}
// // // // // // // // //         <div className="w-full bg-gray-200 h-2 rounded">
// // // // // // // // //           <div
// // // // // // // // //             className="bg-green-500 h-2 rounded"
// // // // // // // // //             style={{ width: `${percent}%` }}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Amount */}
// // // // // // // // //         <p className="mt-2 font-medium">
// // // // // // // // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // // // //         </p>

// // // // // // // // //         {/* Extra Info */}
// // // // // // // // //         <div className="mt-4 text-sm space-y-1">
// // // // // // // // //           <p>
// // // // // // // // //             <b>Category:</b> {project.category}
// // // // // // // // //           </p>
// // // // // // // // //           <p>
// // // // // // // // //             <b>Status:</b> {project.status}
// // // // // // // // //           </p>
// // // // // // // // //           <p>
// // // // // // // // //             <b>Description:</b> {project.description}
// // // // // // // // //           </p>
// // // // // // // // //           <p>
// // // // // // // // //             <b>Target Amount:</b> {project.targetAmount}
// // // // // // // // //           </p>
// // // // // // // // //           <p>
// // // // // // // // //             <b>Funded Amount:</b> {project.fundedAmount}
// // // // // // // // //           </p>
// // // // // // // // //           <p>
// // // // // // // // //             <b>Deadline:</b> {new Date(project.deadline).toDateString()}
// // // // // // // // //           </p>
// // // // // // // // //         </div>

// // // // // // // // //         {/* INVEST SECTION */}
// // // // // // // // //         {mode === "invest" && (
// // // // // // // // //           <div className="mt-6 border-t pt-4">
// // // // // // // // //             {!user ? (
// // // // // // // // //               <p className="text-red-300">Please login as Investor to invest</p>
// // // // // // // // //             ) : user.role !== "INVESTOR" ? (
// // // // // // // // //               <p className="text-red-300">Only Investors can invest</p>
// // // // // // // // //             ) : (
// // // // // // // // //               <div className="flex gap-2">
// // // // // // // // //                 <input
// // // // // // // // //                   type="number"
// // // // // // // // //                   placeholder="Enter amount"
// // // // // // // // //                   value={amount}
// // // // // // // // //                   className="border p-2 rounded w-full text-black"
// // // // // // // // //                   onChange={(e) => setAmount(e.target.value)}
// // // // // // // // //                 />
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={handleInvest}
// // // // // // // // //                   className="px-4 py-2 rounded bg-white text-black"
// // // // // // // // //                 >
// // // // // // // // //                   Invest
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ProjectDetails;
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import {
// // // // // // // //   useParams,
// // // // // // // //   useSearchParams,
// // // // // // // //   useNavigate,
// // // // // // // // } from "react-router-dom";
// // // // // // // // import API from "../services/api";

// // // // // // // // const ProjectDetails = () => {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const [searchParams] = useSearchParams();
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const mode = searchParams.get("mode") || "view";

// // // // // // // //   const [project, setProject] = useState(null);
// // // // // // // //   const [amount, setAmount] = useState("");
// // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // // // // //   // ✅ Fetch project
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchProject = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await API.get(`/projects/${id}`);
// // // // // // // //         setProject(res.data.data);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.log(err);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchProject();
// // // // // // // //   }, [id]);

// // // // // // // //   // ✅ FINAL INVEST FUNCTION (MERGED + FIXED)
// // // // // // // //   const handleInvest = async (e) => {
// // // // // // // //     if (e) e.preventDefault(); // 🔥 prevent double call

// // // // // // // //     try {
// // // // // // // //       // ✅ Auth check
// // // // // // // //       if (!user) {
// // // // // // // //         alert("Please login as Investor first");
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       if (user.role !== "INVESTOR") {
// // // // // // // //         alert("Only Investors can invest");
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       if (!amount || amount <= 0) {
// // // // // // // //         alert("Enter valid amount");
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       setLoading(true);

// // // // // // // //       // ✅ Create Investment
// // // // // // // //       const invRes = await API.post("/investments", {
// // // // // // // //         projectId: id,
// // // // // // // //         amount: Number(amount),
// // // // // // // //       });

// // // // // // // //       const investmentId =
// // // // // // // //         invRes.data.data?._id || invRes.data.data?.investmentId;

// // // // // // // //       // ✅ Create Transaction (optional but included)
// // // // // // // //       if (investmentId) {
// // // // // // // //         await API.post("/transactions", {
// // // // // // // //           investmentId,
// // // // // // // //           transactionId: "TXN_" + Date.now(),
// // // // // // // //           amount: Number(amount),
// // // // // // // //         });
// // // // // // // //       }

// // // // // // // //       // ✅ UI UPDATE (no refresh)
// // // // // // // //       setProject((prev) => ({
// // // // // // // //         ...prev,
// // // // // // // //         fundedAmount: prev.fundedAmount + Number(amount),
// // // // // // // //       }));

// // // // // // // //       setAmount("");

// // // // // // // //       alert("✅ Investment Successful 🚀");
// // // // // // // //     } catch (err) {
// // // // // // // //       console.log(err);
// // // // // // // //       alert(err.response?.data?.message || "Investment failed");
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (!project)
// // // // // // // //     return <p className="text-center mt-10 text-white">Loading...</p>;

// // // // // // // //   const percent =
// // // // // // // //     project.targetAmount > 0
// // // // // // // //       ? Math.min(
// // // // // // // //           100,
// // // // // // // //           (project.fundedAmount / project.targetAmount) * 100
// // // // // // // //         )
// // // // // // // //       : 0;

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
// // // // // // // //       <div
// // // // // // // //         className={`w-full max-w-2xl p-6 rounded-2xl shadow-lg relative ${
// // // // // // // //           mode === "view" || mode === "invest"
// // // // // // // //             ? "bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white"
// // // // // // // //             : "bg-white text-black"
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         {/* ❌ CLOSE BUTTON */}
// // // // // // // //         <button
// // // // // // // //           onClick={() => navigate(-1)}
// // // // // // // //           className="absolute top-4 right-4 text-white text-xl"
// // // // // // // //         >
// // // // // // // //           ✕
// // // // // // // //         </button>

// // // // // // // //         {/* Title */}
// // // // // // // //         <h1 className="text-2xl font-bold mb-2">
// // // // // // // //           {project.title}
// // // // // // // //         </h1>

// // // // // // // //         {/* Description */}
// // // // // // // //         <p className="mb-3">{project.description}</p>

// // // // // // // //         {/* Progress */}
// // // // // // // //         <div className="w-full bg-gray-200 h-2 rounded">
// // // // // // // //           <div
// // // // // // // //             className="bg-green-500 h-2 rounded transition-all"
// // // // // // // //             style={{ width: `${percent}%` }}
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         <p className="mt-2 font-medium">
// // // // // // // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // // //         </p>

// // // // // // // //         {/* Extra Info */}
// // // // // // // //         <div className="mt-4 text-sm space-y-1">
// // // // // // // //           <p><b>Category:</b> {project.category}</p>
// // // // // // // //           <p><b>Status:</b> {project.status}</p>
// // // // // // // //           <p><b>Target:</b> ₹{project.targetAmount}</p>
// // // // // // // //           <p><b>Funded:</b> ₹{project.fundedAmount}</p>
// // // // // // // //           <p>
// // // // // // // //             <b>Deadline:</b>{" "}
// // // // // // // //             {new Date(project.deadline).toDateString()}
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* 💰 INVEST SECTION */}
// // // // // // // //         {mode === "invest" && (
// // // // // // // //           <form
// // // // // // // //             onSubmit={handleInvest}
// // // // // // // //             className="mt-6 border-t pt-4"
// // // // // // // //           >
// // // // // // // //             {!user ? (
// // // // // // // //               <p className="text-red-300">
// // // // // // // //                 Please login as Investor
// // // // // // // //               </p>
// // // // // // // //             ) : user.role !== "INVESTOR" ? (
// // // // // // // //               <p className="text-red-300">
// // // // // // // //                 Only Investors can invest
// // // // // // // //               </p>
// // // // // // // //             ) : (
// // // // // // // //               <div className="flex gap-2">
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   placeholder="Enter amount"
// // // // // // // //                   value={amount}
// // // // // // // //                   onChange={(e) =>
// // // // // // // //                     setAmount(e.target.value)
// // // // // // // //                   }
// // // // // // // //                   className="border p-2 rounded w-full text-black"
// // // // // // // //                 />

// // // // // // // //                 <button
// // // // // // // //                   type="submit"
// // // // // // // //                   disabled={loading}
// // // // // // // //                   className="px-4 py-2 rounded bg-white text-black"
// // // // // // // //                 >
// // // // // // // //                   {loading ? "..." : "Invest"}
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </form>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProjectDetails;
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import {
// // // // // // //   useParams,
// // // // // // //   useSearchParams,
// // // // // // //   useNavigate,
// // // // // // // } from "react-router-dom";
// // // // // // // import API from "../services/api";

// // // // // // // const ProjectDetails = () => {
// // // // // // //   const { id } = useParams();
// // // // // // //   const [searchParams] = useSearchParams();
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const mode = searchParams.get("mode") || "view";

// // // // // // //   const [project, setProject] = useState(null);
// // // // // // //   const [amount, setAmount] = useState("");
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // // // //   // ✅ Fetch project
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProject = async () => {
// // // // // // //       try {
// // // // // // //         const res = await API.get(`/projects/${id}`);
// // // // // // //         setProject(res.data.data);
// // // // // // //       } catch (err) {
// // // // // // //         console.log(err);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchProject();
// // // // // // //   }, [id]);

// // // // // // //   // ✅ INVEST FUNCTION
// // // // // // //   const handleInvest = async (e) => {
// // // // // // //     if (e) e.preventDefault();

// // // // // // //     try {
// // // // // // //       if (!user) {
// // // // // // //         alert("Please login as Investor first");
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       if (user.role !== "INVESTOR") {
// // // // // // //         alert("Only Investors can invest");
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       if (!amount || amount <= 0) {
// // // // // // //         alert("Enter valid amount");
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       setLoading(true);

// // // // // // //       // 1️⃣ Create Investment
// // // // // // //       const invRes = await API.post("/investments", {
// // // // // // //         projectId: id,
// // // // // // //         amount: Number(amount),
// // // // // // //       });

// // // // // // //       const investmentId =
// // // // // // //         invRes.data.data?._id || invRes.data.data?.investmentId;

// // // // // // //       // 2️⃣ Create Transaction
// // // // // // //       if (investmentId) {
// // // // // // //         await API.post("/transactions", {
// // // // // // //           investmentId,
// // // // // // //           transactionId: "TXN_" + Date.now(),
// // // // // // //           amount: Number(amount),
// // // // // // //         });
// // // // // // //       }

// // // // // // //       // ✅ UI update without refresh
// // // // // // //       setProject((prev) => ({
// // // // // // //         ...prev,
// // // // // // //         fundedAmount: prev.fundedAmount + Number(amount),
// // // // // // //       }));

// // // // // // //       setAmount("");

// // // // // // //       alert("✅ Investment Successful 🚀");
// // // // // // //     } catch (err) {
// // // // // // //       console.log(err);
// // // // // // //       alert(err.response?.data?.message || "Investment failed");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (!project)
// // // // // // //     return <p className="text-center mt-10 text-white">Loading...</p>;

// // // // // // //   const percent =
// // // // // // //     project.targetAmount > 0
// // // // // // //       ? Math.min(
// // // // // // //           100,
// // // // // // //           (project.fundedAmount / project.targetAmount) * 100
// // // // // // //         )
// // // // // // //       : 0;

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
// // // // // // //       <div
// // // // // // //         className={`w-full max-w-2xl p-6 rounded-2xl shadow-lg relative ${
// // // // // // //           mode === "view" || mode === "invest"
// // // // // // //             ? "bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white"
// // // // // // //             : "bg-white text-black"
// // // // // // //         }`}
// // // // // // //       >
// // // // // // //         {/* ❌ CLOSE BUTTON */}
// // // // // // //         <button
// // // // // // //           onClick={() => navigate(-1)}
// // // // // // //           className="absolute top-4 right-4 text-white text-xl"
// // // // // // //         >
// // // // // // //           ✕
// // // // // // //         </button>

// // // // // // //         {/* 📌 Title */}
// // // // // // //         <h1 className="text-2xl font-bold mb-2">
// // // // // // //           {project.title}
// // // // // // //         </h1>

// // // // // // //         {/* 📌 Description */}
// // // // // // //         <p className="mb-3">{project.description}</p>

// // // // // // //         {/* 📊 Progress */}
// // // // // // //         <div className="w-full bg-gray-200 h-2 rounded">
// // // // // // //           <div
// // // // // // //             className="bg-green-500 h-2 rounded transition-all"
// // // // // // //             style={{ width: `${percent}%` }}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* 💰 Amount */}
// // // // // // //         <p className="mt-2 font-medium">
// // // // // // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // //         </p>

// // // // // // //         {/* 📌 Extra Info */}
// // // // // // //         <div className="mt-4 text-sm space-y-1">
// // // // // // //           <p><b>Category:</b> {project.category}</p>
// // // // // // //           <p><b>Status:</b> {project.status}</p>
// // // // // // //           <p><b>Target:</b> ₹{project.targetAmount}</p>
// // // // // // //           <p><b>Funded:</b> ₹{project.fundedAmount}</p>

// // // // // // //           {/* ✅ PHONE NUMBER ADDED */}
// // // // // // //           <p>
// // // // // // //             <b>Phone:</b>{" "}
// // // // // // //             {project.phoneNumber ? (
// // // // // // //               <a
// // // // // // //                 href={`tel:${project.phoneNumber}`}
// // // // // // //                 className="underline text-blue-300"
// // // // // // //               >
// // // // // // //                 {project.phoneNumber}
// // // // // // //               </a>
// // // // // // //             ) : (
// // // // // // //               "Not Available"
// // // // // // //             )}
// // // // // // //           </p>

// // // // // // //           <p>
// // // // // // //             <b>Deadline:</b>{" "}
// // // // // // //             {new Date(project.deadline).toDateString()}
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* 💰 INVEST SECTION */}
// // // // // // //         {mode === "invest" && (
// // // // // // //           <form
// // // // // // //             onSubmit={handleInvest}
// // // // // // //             className="mt-6 border-t pt-4"
// // // // // // //           >
// // // // // // //             {!user ? (
// // // // // // //               <p className="text-red-300">
// // // // // // //                 Please login as Investor
// // // // // // //               </p>
// // // // // // //             ) : user.role !== "INVESTOR" ? (
// // // // // // //               <p className="text-red-300">
// // // // // // //                 Only Investors can invest
// // // // // // //               </p>
// // // // // // //             ) : (
// // // // // // //               <div className="flex gap-2">
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   placeholder="Enter amount"
// // // // // // //                   value={amount}
// // // // // // //                   onChange={(e) =>
// // // // // // //                     setAmount(e.target.value)
// // // // // // //                   }
// // // // // // //                   className="border p-2 rounded w-full text-black"
// // // // // // //                 />

// // // // // // //                 <button
// // // // // // //                   type="submit"
// // // // // // //                   disabled={loading}
// // // // // // //                   className="px-4 py-2 rounded bg-white text-black"
// // // // // // //                 >
// // // // // // //                   {loading ? "..." : "Invest"}
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </form>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProjectDetails;
// // // // // // import { useEffect, useState } from "react";
// // // // // // import {
// // // // // //   useParams,
// // // // // //   useSearchParams,
// // // // // //   useNavigate,
// // // // // // } from "react-router-dom";
// // // // // // import API from "../services/api";

// // // // // // const ProjectDetails = () => {
// // // // // //   const { id } = useParams();
// // // // // //   const [searchParams] = useSearchParams();
// // // // // //   const navigate = useNavigate();

// // // // // //   const mode = searchParams.get("mode") || "view";

// // // // // //   const [project, setProject] = useState(null);
// // // // // //   const [amount, setAmount] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // // //   useEffect(() => {
// // // // // //     const fetchProject = async () => {
// // // // // //       const res = await API.get(`/projects/${id}`);
// // // // // //       setProject(res.data.data);
// // // // // //     };
// // // // // //     fetchProject();
// // // // // //   }, [id]);

// // // // // //   const handleInvest = async (e) => {
// // // // // //     if (e) e.preventDefault();

// // // // // //     try {
// // // // // //       if (!user) return alert("Login first");
// // // // // //       if (user.role !== "INVESTOR")
// // // // // //         return alert("Only Investors allowed");
// // // // // //       if (!amount || amount <= 0)
// // // // // //         return alert("Enter valid amount");

// // // // // //       setLoading(true);

// // // // // //       const invRes = await API.post("/investments", {
// // // // // //         projectId: id,
// // // // // //         amount: Number(amount),
// // // // // //       });

// // // // // //       const investmentId =
// // // // // //         invRes.data.data?._id ||
// // // // // //         invRes.data.data?.investmentId;

// // // // // //       if (investmentId) {
// // // // // //         await API.post("/transactions", {
// // // // // //           investmentId,
// // // // // //           transactionId: "TXN_" + Date.now(),
// // // // // //           amount: Number(amount),
// // // // // //         });
// // // // // //       }

// // // // // //       setProject((prev) => ({
// // // // // //         ...prev,
// // // // // //         fundedAmount:
// // // // // //           prev.fundedAmount + Number(amount),
// // // // // //       }));

// // // // // //       setAmount("");
// // // // // //       alert("✅ Investment Successful");
// // // // // //     } catch (err) {
// // // // // //       alert("Error");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!project) return <p>Loading...</p>;

// // // // // //   const percent =
// // // // // //     project.targetAmount > 0
// // // // // //       ? Math.min(
// // // // // //           100,
// // // // // //           (project.fundedAmount /
// // // // // //             project.targetAmount) *
// // // // // //             100
// // // // // //         )
// // // // // //       : 0;

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex justify-center items-center p-6 bg-gray-100">
// // // // // //       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl">

// // // // // //         <button
// // // // // //           onClick={() => navigate(-1)}
// // // // // //           className="float-right text-red-500"
// // // // // //         >
// // // // // //           ✕
// // // // // //         </button>

// // // // // //         <h1 className="text-xl font-bold">
// // // // // //           {project.title}
// // // // // //         </h1>

// // // // // //         <p>{project.description}</p>

// // // // // //         {/* ✅ PHONE + EMAIL */}
// // // // // //         <p><b>Phone:</b> {project.phone || project.userId?.phone || "N/A"}</p>
// // // // // //         <p><b>Email:</b> {project.email || project.userId?.email || "N/A"}</p>

// // // // // //         <div className="bg-gray-200 h-2 mt-3 rounded">
// // // // // //           <div
// // // // // //             className="bg-green-500 h-2 rounded"
// // // // // //             style={{ width: `${percent}%` }}
// // // // // //           />
// // // // // //         </div>

// // // // // //         <p className="mt-2">
// // // // // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // //         </p>

// // // // // //         {mode === "invest" && (
// // // // // //           <form onSubmit={handleInvest} className="mt-4 flex gap-2">
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               value={amount}
// // // // // //               onChange={(e) =>
// // // // // //                 setAmount(e.target.value)
// // // // // //               }
// // // // // //               className="border p-2 w-full"
// // // // // //               placeholder="Amount"
// // // // // //             />

// // // // // //             <button className="bg-blue-600 text-white px-4">
// // // // // //               {loading ? "..." : "Invest"}
// // // // // //             </button>
// // // // // //           </form>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProjectDetails;
// // // // // import { useEffect, useState } from "react";
// // // // // import {
// // // // //   useParams,
// // // // //   useSearchParams,
// // // // //   useNavigate,
// // // // // } from "react-router-dom";
// // // // // import API from "../services/api";

// // // // // const ProjectDetails = () => {
// // // // //   const { id } = useParams();
// // // // //   const [searchParams] = useSearchParams();
// // // // //   const navigate = useNavigate();

// // // // //   const mode = searchParams.get("mode") || "view";

// // // // //   const [project, setProject] = useState(null);
// // // // //   const [amount, setAmount] = useState("");
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // //   useEffect(() => {
// // // // //     const fetchProject = async () => {
// // // // //       try {
// // // // //         const res = await API.get(`/projects/${id}`);
// // // // //         setProject(res.data.data);
// // // // //       } catch (err) {
// // // // //         console.log(err);
// // // // //       }
// // // // //     };
// // // // //     fetchProject();
// // // // //   }, [id]);

// // // // //   const handleInvest = async (e) => {
// // // // //     if (e) e.preventDefault();

// // // // //     try {
// // // // //       if (!user) return alert("Login first");
// // // // //       if (user.role !== "INVESTOR")
// // // // //         return alert("Only Investors allowed");
// // // // //       if (!amount || amount <= 0)
// // // // //         return alert("Enter valid amount");

// // // // //       setLoading(true);

// // // // //       const invRes = await API.post("/investments", {
// // // // //         projectId: id,
// // // // //         amount: Number(amount),
// // // // //       });

// // // // //       const investmentId =
// // // // //         invRes.data.data?._id ||
// // // // //         invRes.data.data?.investmentId;

// // // // //       if (investmentId) {
// // // // //         await API.post("/transactions", {
// // // // //           investmentId,
// // // // //           transactionId: "TXN_" + Date.now(),
// // // // //           amount: Number(amount),
// // // // //         });
// // // // //       }

// // // // //       setProject((prev) => ({
// // // // //         ...prev,
// // // // //         fundedAmount:
// // // // //           prev.fundedAmount + Number(amount),
// // // // //       }));

// // // // //       setAmount("");
// // // // //       alert("✅ Investment Successful 🚀");
// // // // //     } catch (err) {
// // // // //       alert("Error");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   if (!project)
// // // // //     return <p className="text-center mt-10">Loading...</p>;

// // // // //   const percent =
// // // // //     project.targetAmount > 0
// // // // //       ? Math.min(
// // // // //           100,
// // // // //           (project.fundedAmount / project.targetAmount) * 100
// // // // //         )
// // // // //       : 0;

// // // // //   return (
// // // // //     <div className="min-h-screen flex justify-center items-center p-6 bg-gray-100">
      
// // // // //       {/* 🔥 SAME DESIGN CARD */}
// // // // //       <div className="w-full max-w-2xl p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white relative">

// // // // //         {/* ❌ CLOSE */}
// // // // //         <button
// // // // //           onClick={() => navigate(-1)}
// // // // //           className="absolute top-4 right-4 text-white text-xl"
// // // // //         >
// // // // //           ✕
// // // // //         </button>

// // // // //         {/* TITLE */}
// // // // //         <h1 className="text-2xl font-bold mb-2">
// // // // //           {project.title}
// // // // //         </h1>

// // // // //         {/* DESCRIPTION */}
// // // // //         <p className="mb-3 opacity-90">
// // // // //           {project.description}
// // // // //         </p>

// // // // //         {/* 📊 PROGRESS */}
// // // // //         <div className="w-full bg-gray-300 h-2 rounded">
// // // // //           <div
// // // // //             className="bg-green-400 h-2 rounded transition-all"
// // // // //             style={{ width: `${percent}%` }}
// // // // //           />
// // // // //         </div>

// // // // //         <p className="mt-2 font-medium">
// // // // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // //         </p>

// // // // //         {/* 🔥 FULL DETAILS */}
// // // // //         <div className="mt-4 text-sm space-y-1">

// // // // //           <p><b>Category:</b> {project.category}</p>
// // // // //           <p><b>Status:</b> {project.status}</p>

// // // // //           {/* ✅ CONTACT DETAILS */}
// // // // //           <p>
// // // // //             <b>Phone:</b>{" "}
// // // // //             {project.phone || project.userId?.phone || "N/A"}
// // // // //           </p>

// // // // //           <p>
// // // // //             <b>Email:</b>{" "}
// // // // //             {project.email || project.userId?.email || "N/A"}
// // // // //           </p>

// // // // //           <p>
// // // // //             <b>Target:</b> ₹{project.targetAmount}
// // // // //           </p>

// // // // //           <p>
// // // // //             <b>Funded:</b> ₹{project.fundedAmount}
// // // // //           </p>

// // // // //           <p>
// // // // //             <b>Deadline:</b>{" "}
// // // // //             {project.deadline
// // // // //               ? new Date(project.deadline).toDateString()
// // // // //               : "N/A"}
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* 💰 INVEST SECTION */}
// // // // //         {mode === "invest" && (
// // // // //           <form
// // // // //             onSubmit={handleInvest}
// // // // //             className="mt-6 border-t border-white/30 pt-4"
// // // // //           >
// // // // //             {!user ? (
// // // // //               <p className="text-red-300">
// // // // //                 Please login first
// // // // //               </p>
// // // // //             ) : user.role !== "INVESTOR" ? (
// // // // //               <p className="text-red-300">
// // // // //                 Only Investors allowed
// // // // //               </p>
// // // // //             ) : (
// // // // //               <div className="flex gap-2">
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   placeholder="Enter amount"
// // // // //                   value={amount}
// // // // //                   onChange={(e) =>
// // // // //                     setAmount(e.target.value)
// // // // //                   }
// // // // //                   className="border p-2 rounded w-full text-black"
// // // // //                 />

// // // // //                 <button
// // // // //                   type="submit"
// // // // //                   disabled={loading}
// // // // //                   className="px-4 py-2 rounded bg-white text-black"
// // // // //                 >
// // // // //                   {loading ? "..." : "Invest"}
// // // // //                 </button>
// // // // //               </div>
// // // // //             )}
// // // // //           </form>
// // // // //         )}

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProjectDetails;
// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   useParams,
// // // //   useSearchParams,
// // // //   useNavigate,
// // // // } from "react-router-dom";
// // // import API from "../services/api";

// // // const ProjectDetails = () => {
// // //   const { id } = useParams();
// // //   const [searchParams] = useSearchParams();
// // //   const navigate = useNavigate();

// // //   const mode = searchParams.get("mode") || "view";

// // //   const [project, setProject] = useState(null);
// // //   const [amount, setAmount] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   const user = JSON.parse(localStorage.getItem("user"));

// // //   useEffect(() => {
// // //     fetchProject();
// // //   }, [id]);

// // //   const fetchProject = async () => {
// // //     try {
// // //       const res = await API.get(`/projects/${id}`);
// // //       setProject(res.data.data);
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   };

// // //   const handleInvest = async (e) => {
// // //     if (e) e.preventDefault();

// // //     try {
// // //       if (!user) return alert("Login first");
// // //       if (user.role !== "INVESTOR")
// // //         return alert("Only Investors allowed");
// // //       if (!amount || amount <= 0)
// // //         return alert("Enter valid amount");

// // //       setLoading(true);

// // //       const invRes = await API.post("/investments", {
// // //         projectId: id,
// // //         amount: Number(amount),
// // //       });

// // //       const investmentId =
// // //         invRes.data.data?._id ||
// // //         invRes.data.data?.investmentId;

// // //       if (investmentId) {
// // //         await API.post("/transactions", {
// // //           investmentId,
// // //           transactionId: "TXN_" + Date.now(),
// // //           amount: Number(amount),
// // //         });
// // //       }

// // //       // UI update
// // //       setProject((prev) => ({
// // //         ...prev,
// // //         fundedAmount:
// // //           prev.fundedAmount + Number(amount),
// // //       }));

// // //       setAmount("");
// // //       alert("✅ Investment Successful 🚀");
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Error");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (!project)
// // //     return <p className="text-center mt-10">Loading...</p>;

// // //   const percent =
// // //     project.targetAmount > 0
// // //       ? Math.min(
// // //           100,
// // //           (project.fundedAmount / project.targetAmount) * 100
// // //         )
// // //       : 0;

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center p-6 bg-gray-100">
      
// // //       <div className="w-full max-w-2xl p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white relative">

// // //         {/* ❌ CLOSE */}
// // //         <button
// // //           onClick={() => navigate(-1)}
// // //           className="absolute top-4 right-4 text-white text-xl"
// // //         >
// // //           ✕
// // //         </button>

// // //         {/* TITLE */}
// // //         <h1 className="text-2xl font-bold mb-2">
// // //           {project.title}
// // //         </h1>

// // //         {/* DESCRIPTION */}
// // //         <p className="mb-3 opacity-90">
// // //           {project.description}
// // //         </p>

// // //         {/* 📊 PROGRESS */}
// // //         <div className="w-full bg-gray-300 h-2 rounded">
// // //           <div
// // //             className="bg-green-400 h-2 rounded transition-all"
// // //             style={{ width: `${percent}%` }}
// // //           />
// // //         </div>

// // //         <p className="mt-2 font-medium">
// // //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// // //         </p>

// // //         {/* 🔥 DETAILS */}
// // //         <div className="mt-4 text-sm space-y-1">

// // //           <p><b>Category:</b> {project.category}</p>
// // //           <p><b>Status:</b> {project.status}</p>

// // //           {/* ✅ CONTACT ONLY IN VIEW MODE */}
// // //           {mode === "view" && (
// // //             <>
// // //               <p>
// // //                 <b>Email:</b>{" "}
// // //                 {project.creatorId?.email || "N/A"}
// // //               </p>

// // //               <p>
// // //                 <b>Phone:</b>{" "}
// // //                 {project.creatorId?.phone || "N/A"}
// // //               </p>
// // //             </>
// // //           )}

// // //           <p>
// // //             <b>Target:</b> ₹{project.targetAmount}
// // //           </p>

// // //           <p>
// // //             <b>Funded:</b> ₹{project.fundedAmount}
// // //           </p>

// // //           <p>
// // //             <b>Deadline:</b>{" "}
// // //             {project.deadline
// // //               ? new Date(project.deadline).toDateString()
// // //               : "N/A"}
// // //           </p>
// // //         </div>

// // //         {/* 💰 INVEST */}
// // //         {mode === "invest" && (
// // //           <form
// // //             onSubmit={handleInvest}
// // //             className="mt-6 border-t border-white/30 pt-4"
// // //           >
// // //             {!user ? (
// // //               <p className="text-red-300">
// // //                 Please login first as a investor
// // //               </p>
// // //             ) : user.role !== "INVESTOR" ? (
// // //               <p className="text-red-300">
// // //                 Only Investors allowed
// // //               </p>
// // //             ) : (
// // //               <div className="flex gap-2">
// // //                 <input
// // //                   type="number"
// // //                   placeholder="Enter amount"
// // //                   value={amount}
// // //                   onChange={(e) =>
// // //                     setAmount(e.target.value)
// // //                   }
// // //                   className="border p-2 rounded w-full text-black"
// // //                 />

// // //                 <button
// // //                   type="submit"
// // //                   disabled={loading}
// // //                   className="px-4 py-2 rounded bg-white text-black"
// // //                 >
// // //                   {loading ? "..." : "Invest"}
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </form>
// // //         )}

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProjectDetails;
// // import { useEffect, useState } from "react";
// // import {
// //   useParams,
// //   useSearchParams,
// //   useNavigate,
// // } from "react-router-dom";
// // import API from "../services/api";

// // const ProjectDetails = () => {
// //   const { id } = useParams();
// //   const [searchParams] = useSearchParams();
// //   const navigate = useNavigate();

// //   const mode = searchParams.get("mode") || "view";

// //   const [project, setProject] = useState(null);
// //   const [amount, setAmount] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const user = JSON.parse(localStorage.getItem("user"));

// //   useEffect(() => {
// //     fetchProject();
// //   }, [id]);

// //   const fetchProject = async () => {
// //     try {
// //       const res = await API.get(`/projects/${id}`);
// //       setProject(res.data.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const handleInvest = async (e) => {
// //     if (e) e.preventDefault();

// //     try {
// //       if (!user) return alert("Login first");
// //       if (user.role !== "INVESTOR")
// //         return alert("Only Investors allowed");
// //       if (!amount || amount <= 0)
// //         return alert("Enter valid amount");

// //       setLoading(true);

// //       const invRes = await API.post("/investments", {
// //         projectId: id,
// //         amount: Number(amount),
// //       });

// //       const investmentId =
// //         invRes.data.data?._id ||
// //         invRes.data.data?.investmentId;

// //       if (investmentId) {
// //         await API.post("/transactions", {
// //           investmentId,
// //           transactionId: "TXN_" + Date.now(),
// //           amount: Number(amount),
// //         });
// //       }

// //       setProject((prev) => ({
// //         ...prev,
// //         fundedAmount:
// //           prev.fundedAmount + Number(amount),
// //       }));

// //       setAmount("");
// //       alert("✅ Investment Successful 🚀");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (!project)
// //     return <p className="text-center mt-10">Loading...</p>;

// //   const percent =
// //     project.targetAmount > 0
// //       ? Math.min(
// //           100,
// //           (project.fundedAmount / project.targetAmount) * 100
// //         )
// //       : 0;

// //   return (
// //     <div className="min-h-screen flex justify-center items-center p-6 bg-gray-100">

// //       <div className="w-full max-w-2xl p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white relative">

// //         {/* CLOSE */}
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="absolute top-4 right-4 text-xl"
// //         >
// //           ✕
// //         </button>

// //         <h1 className="text-2xl font-bold mb-2">
// //           {project.title}
// //         </h1>

// //         <p className="mb-3 opacity-90">
// //           {project.description}
// //         </p>

// //         {/* PROGRESS */}
// //         <div className="w-full bg-gray-300 h-2 rounded">
// //           <div
// //             className="bg-green-400 h-2 rounded"
// //             style={{ width: `${percent}%` }}
// //           />
// //         </div>

// //         <p className="mt-2">
// //           ₹{project.fundedAmount} / ₹{project.targetAmount}
// //         </p>

// //         {/* DETAILS */}
// //         <div className="mt-4 space-y-1 text-sm">
// //           <p><b>Category:</b> {project.category}</p>
// //           <p><b>Status:</b> {project.status}</p>

// //           {/* ✅ EMAIL */}
// //           <p>
// //             <b>Email:</b>{" "}
// //             {project.creatorId?.email || "N/A"}
// //           </p>

// //           {/* ✅ PHONE (MAIN FIX) */}
// //           <p>
// //             <b>Phone:</b>{" "}
// //             {project.phone ||
// //               project.creatorId?.phone ||
// //               "N/A"}
// //           </p>

// //           <p><b>Target:</b> ₹{project.targetAmount}</p>
// //           <p><b>Funded:</b> ₹{project.fundedAmount}</p>

// //           <p>
// //             <b>Deadline:</b>{" "}
// //             {project.deadline
// //               ? new Date(project.deadline).toDateString()
// //               : "N/A"}
// //           </p>
// //         </div>

// //         {/* INVEST */}
// //         {mode === "invest" && (
// //           <form
// //             onSubmit={handleInvest}
// //             className="mt-6 border-t border-white/30 pt-4"
// //           >
// //             {!user ? (
// //               <p className="text-red-300">
// //                 Please login first
// //               </p>
// //             ) : user.role !== "INVESTOR" ? (
// //               <p className="text-red-300">
// //                 Only Investors allowed
// //               </p>
// //             ) : (
// //               <div className="flex gap-2">
// //                 <input
// //                   type="number"
// //                   placeholder="Enter amount"
// //                   value={amount}
// //                   onChange={(e) =>
// //                     setAmount(e.target.value)
// //                   }
// //                   className="border p-2 rounded w-full text-black"
// //                 />

// //                 <button
// //                   type="submit"
// //                   disabled={loading}
// //                   className="px-4 py-2 rounded bg-white text-black"
// //                 >
// //                   {loading ? "..." : "Invest"}
// //                 </button>
// //               </div>
// //             )}
// //           </form>
// //         )}

// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectDetails;
// import { useEffect, useState } from "react";
// import {
//   useParams,
//   useSearchParams,
//   useNavigate,
// } from "react-router-dom";
// import API from "../services/api";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const mode = searchParams.get("mode") || "view";

//   const [project, setProject] = useState(null);
//   const [amount, setAmount] = useState("");
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetchProject();
//   }, [id]);

//   const fetchProject = async () => {
//     try {
//       const res = await API.get(`/projects/${id}`);
//       setProject(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 🔥 PREVIEW
//   const handlePreview = () => {
//     if (!amount || amount <= 0) {
//       alert("Enter valid amount");
//       return;
//     }

//     const interestRate = 0.12; // 12%
//     const interest = amount * interestRate;
//     const total = Number(amount) + interest;

//     setPreview({ interest, total });
//   };

//   const handleInvest = async () => {
//     try {
//       if (!user) return alert("Login first");
//       if (user.role !== "INVESTOR")
//         return alert("Only Investors allowed");

//       setLoading(true);

//       const invRes = await API.post("/investments", {
//         projectId: id,
//         amount: Number(amount),
//       });

//       const investmentId =
//         invRes.data.data?._id ||
//         invRes.data.data?.investmentId;

//       if (investmentId) {
//         await API.post("/transactions", {
//           investmentId,
//           transactionId: "TXN_" + Date.now(),
//           amount: Number(amount),
//         });
//       }

//       setProject((prev) => ({
//         ...prev,
//         fundedAmount:
//           prev.fundedAmount + Number(amount),
//       }));

//       setAmount("");
//       setPreview(null);

//       alert("✅ Investment Successful 🚀");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!project)
//     return <p className="text-center mt-10">Loading...</p>;

//   const percent =
//     project.targetAmount > 0
//       ? Math.min(
//           100,
//           (project.fundedAmount / project.targetAmount) * 100
//         )
//       : 0;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900 flex justify-center items-center p-6 text-white">

//       <div className="bg-white/95 text-black p-6 rounded-3xl shadow-2xl w-full max-w-xl relative">

//         {/* ❌ CLOSE */}
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-3 right-4 text-xl font-bold"
//         >
//           ✕
//         </button>

//         {/* TITLE */}
//         <h2 className="text-2xl font-bold mb-2">
//           {project.title}
//         </h2>

//         <p className="text-gray-600 mb-3">
//           {project.description}
//         </p>

//         {/* PROGRESS */}
//         <div className="mb-3">
//           <div className="w-full bg-gray-200 h-2 rounded">
//             <div
//               className="bg-blue-600 h-2 rounded"
//               style={{ width: `${percent}%` }}
//             ></div>
//           </div>

//           <div className="flex justify-between text-xs mt-1">
//             <span>₹{project.fundedAmount}</span>
//             <span>{Math.round(percent)}%</span>
//           </div>
//         </div>

//         {/* 🔥 ALL DETAILS BACK */}
//         <div className="space-y-1 text-sm mb-4">
//           <p><b>Status:</b> {project.status}</p>
//           <p><b>Category:</b> {project.category}</p>
//           <p><b>Target:</b> ₹{project.targetAmount}</p>
//           <p><b>Funded:</b> ₹{project.fundedAmount}</p>
//           <p>
//             <b>Deadline:</b>{" "}
//             {project.deadline
//               ? new Date(project.deadline).toDateString()
//               : "N/A"}
//           </p>

//           <p>
//             <b>Email:</b>{" "}
//             {project.creatorId?.email || "N/A"}
//           </p>

//           <p>
//             <b>Phone:</b>{" "}
//             {project.creatorId?.phone || "N/A"}
//           </p>
//         </div>

//         {/* 💰 INVEST */}
//         {mode === "invest" && (
//           <div className="space-y-3">

//             <input
//               type="number"
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100 outline-none"
//             />

//             {/* PREVIEW */}
//             <button
//               onClick={handlePreview}
//               className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-2 rounded-xl hover:scale-105 transition"
//             >
//               Preview Profit
//             </button>

//             {/* RESULT */}
//             {preview && (
//               <div className="bg-gray-100 p-3 rounded-xl text-sm">
//                 <p>💰 Interest: ₹{preview.interest}</p>
//                 <p>📈 Total Return: ₹{preview.total}</p>
//               </div>
//             )}

//             {/* INVEST */}
//             <button
//               onClick={handleInvest}
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl hover:scale-105 transition"
//             >
//               {loading ? "Processing..." : "Invest Now"}
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
// import { useEffect, useState } from "react";
// import {
//   useParams,
//   useSearchParams,
//   useNavigate,
// } from "react-router-dom";
// import API from "../services/api";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const mode = searchParams.get("mode") || "view";

//   const [project, setProject] = useState(null);
//   const [amount, setAmount] = useState("");
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 🔥 NEW STATES
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [transactionId, setTransactionId] = useState("");
//   const [paymentDate, setPaymentDate] = useState("");
//   const [proof, setProof] = useState(null);
//   const [declaration, setDeclaration] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetchProject();
//   }, [id]);

//   const fetchProject = async () => {
//     try {
//       const res = await API.get(`/projects/${id}`);
//       setProject(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 🔍 PREVIEW
//   const handlePreview = () => {
//     if (!amount || amount <= 0) {
//       alert("Enter valid amount");
//       return;
//     }

//     const interestRate = 0.12;
//     const interest = amount * interestRate;
//     const total = Number(amount) + interest;

//     setPreview({ interest, total });
//   };

//   // 🚀 INVEST
//   const handleInvest = async () => {
//     try {
//       if (!user) return alert("Login first");
//       if (user.role !== "INVESTOR")
//         return alert("Only Investors allowed");

//       if (!declaration) {
//         return alert("Please confirm transaction");
//       }

//       setLoading(true);

//       const data = new FormData();
//       data.append("projectId", id);
//       data.append("amount", amount);
//       data.append("paymentMethod", paymentMethod);
//       data.append("transactionId", transactionId);
//       data.append("paymentDate", paymentDate);
//       data.append("proof", proof);

//       await API.post("/investments", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setProject((prev) => ({
//         ...prev,
//         fundedAmount:
//           prev.fundedAmount + Number(amount),
//       }));

//       // reset
//       setAmount("");
//       setPreview(null);
//       setTransactionId("");
//       setPaymentDate("");
//       setProof(null);
//       setDeclaration(false);

//       alert("✅ Investment Submitted (Pending Verification)");

//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!project)
//     return <p className="text-center mt-10">Loading...</p>;

//   const percent =
//     project.targetAmount > 0
//       ? Math.min(
//           100,
//           (project.fundedAmount / project.targetAmount) * 100
//         )
//       : 0;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900 flex justify-center items-center p-6 text-white">

//       <div className="bg-white/95 text-black p-6 rounded-3xl shadow-2xl w-full max-w-xl relative">

//         {/* CLOSE */}
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-3 right-4 text-xl font-bold"
//         >
//           ✕
//         </button>

//         {/* TITLE */}
//         <h2 className="text-2xl font-bold mb-2">
//           {project.title}
//         </h2>

//         <p className="text-gray-600 mb-3">
//           {project.description}
//         </p>

//         {/* PROGRESS */}
//         <div className="mb-3">
//           <div className="w-full bg-gray-200 h-2 rounded">
//             <div
//               className="bg-blue-600 h-2 rounded"
//               style={{ width: `${percent}%` }}
//             ></div>
//           </div>

//           <div className="flex justify-between text-xs mt-1">
//             <span>₹{project.fundedAmount}</span>
//             <span>{Math.round(percent)}%</span>
//           </div>
//         </div>

//         {/* DETAILS */}
//         <div className="space-y-1 text-sm mb-4">
//           <p><b>Status:</b> {project.status}</p>
//           <p><b>Category:</b> {project.category}</p>
//           <p><b>Target:</b> ₹{project.targetAmount}</p>
//           <p><b>Funded:</b> ₹{project.fundedAmount}</p>

//           <p>
//             <b>Deadline:</b>{" "}
//             {project.deadline
//               ? new Date(project.deadline).toDateString()
//               : "N/A"}
//           </p>

//           <p>
//             <b>Email:</b>{" "}
//             {project.creatorId?.email || "N/A"}
//           </p>

//           <p>
//             <b>Phone:</b>{" "}
//             {project.creatorId?.phone || "N/A"}
//           </p>
//         </div>

//         {/* 💰 INVEST SECTION */}
//         {mode === "invest" && (
//           <div className="space-y-3 mt-4">

//             <input
//               type="number"
//               placeholder="Enter amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100 outline-none"
//             />

//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100"
//             >
//               <option value="UPI">UPI</option>
//               <option value="BANK">Bank Transfer</option>
//               <option value="CARD">Card</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Transaction ID / UTR"
//               value={transactionId}
//               onChange={(e) => setTransactionId(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100 outline-none"
//             />

//             <input
//               type="date"
//               value={paymentDate}
//               onChange={(e) => setPaymentDate(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100"
//             />

//             <input
//               type="file"
//               onChange={(e) => setProof(e.target.files[0])}
//               className="w-full"
//             />

//             <div className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={declaration}
//                 onChange={(e) =>
//                   setDeclaration(e.target.checked)
//                 }
//               />
//               <span>I confirm this is a real transaction</span>
//             </div>

//             <button
//               onClick={handlePreview}
//               className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-2 rounded-xl"
//             >
//               Preview Profit
//             </button>

//             {preview && (
//               <div className="bg-gray-100 p-3 rounded-xl text-sm">
//                 <p>💰 Interest: ₹{preview.interest}</p>
//                 <p>📈 Total Return: ₹{preview.total}</p>
//               </div>
//             )}

//             <button
//               onClick={handleInvest}
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl"
//             >
//               {loading ? "Processing..." : "Invest Now 🚀"}
//             </button>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
// import { useEffect, useState } from "react";
// import {
//   useParams,
//   useSearchParams,
//   useNavigate,
// } from "react-router-dom";
// import API from "../services/api";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const mode = searchParams.get("mode") || "view";

//   const [project, setProject] = useState(null);
//   const [amount, setAmount] = useState("");
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 🔥 NEW STATES
//   const [paymentMethod, setPaymentMethod] = useState("UPI");
//   const [transactionId, setTransactionId] = useState("");
//   const [paymentDate, setPaymentDate] = useState("");
//   const [proof, setProof] = useState(null);
//   const [declaration, setDeclaration] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetchProject();
//   }, [id]);

//   const fetchProject = async () => {
//     try {
//       const res = await API.get(`/projects/${id}`);
//       setProject(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 🔍 PREVIEW
//   const handlePreview = () => {
//     if (!amount || amount <= 0) {
//       alert("Enter valid amount");
//       return;
//     }

//     const interestRate = 0.12;
//     const interest = Number(amount) * interestRate;
//     const total = Number(amount) + interest;

//     setPreview({ interest, total });
//   };

//   // 🚀 INVEST
//   const handleInvest = async () => {
//     try {
//       if (!user) return alert("Login first");
//       if (user.role !== "INVESTOR")
//         return alert("Only Investors allowed");

//       if (!amount) return alert("Enter amount");
//       if (!transactionId) return alert("Enter transaction ID");
//       if (!paymentDate) return alert("Select payment date");
//       if (!proof) return alert("Upload payment proof");
//       if (!declaration) return alert("Please confirm transaction");

//       setLoading(true);

//       const data = new FormData();

//       // ✅ IMPORTANT FIXES
//       data.append("projectId", id);
//       data.append("amount", Number(amount)); // 🔥 FIX
//       data.append("paymentMethod", paymentMethod);
//       data.append("transactionId", transactionId);
//       data.append("paymentDate", paymentDate);
//       data.append("proof", proof);

//       console.log("SENDING DATA:", {
//         projectId: id,
//         amount,
//         paymentMethod,
//         transactionId,
//       });

//       await API.post("/investments", data, {
       
//       });

//       // UI update
//       setProject((prev) => ({
//         ...prev,
//         fundedAmount: prev.fundedAmount + Number(amount),
//       }));

//       // reset
//       setAmount("");
//       setPreview(null);
//       setTransactionId("");
//       setPaymentDate("");
//       setProof(null);
//       setDeclaration(false);

//       alert("✅ Investment Successfull");

//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data?.message || "Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!project)
//     return <p className="text-center mt-10">Loading...</p>;

//   const percent =
//     project.targetAmount > 0
//       ? Math.min(
//           100,
//           (project.fundedAmount / project.targetAmount) * 100
//         )
//       : 0;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900 flex justify-center items-center p-6 text-white">

//       <div className="bg-white/95 text-black p-6 rounded-3xl shadow-2xl w-full max-w-xl relative">

//         {/* CLOSE */}
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-3 right-4 text-xl font-bold"
//         >
//           ✕
//         </button>

//         {/* TITLE */}
//         <h2 className="text-2xl font-bold mb-2">
//           {project.title}
//         </h2>

//         <p className="text-gray-600 mb-3">
//           {project.description}
//         </p>

//         {/* PROGRESS */}
//         <div className="mb-3">
//           <div className="w-full bg-gray-200 h-2 rounded">
//             <div
//               className="bg-blue-600 h-2 rounded"
//               style={{ width: `${percent}%` }}
//             ></div>
//           </div>

//           <div className="flex justify-between text-xs mt-1">
//             <span>₹{project.fundedAmount}</span>
//             <span>{Math.round(percent)}%</span>
//           </div>
//         </div>

//         {/* DETAILS */}
//         <div className="space-y-1 text-sm mb-4">
//           <p><b>Status:</b> {project.status}</p>
//           <p><b>Category:</b> {project.category}</p>
//           <p><b>Target:</b> ₹{project.targetAmount}</p>
//           <p><b>Funded:</b> ₹{project.fundedAmount}</p>
//         </div>

//         {/* 💰 INVEST */}
//         {mode === "invest" && (
//           <div className="space-y-3 mt-4">

//             <input
//               type="number"
//               placeholder="Enter amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100"
//             />

//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100"
//             >
//               <option value="UPI">UPI</option>
//               <option value="BANK">Bank Transfer</option>
//               <option value="CARD">Card</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Transaction ID / UTR"
//               value={transactionId}
//               onChange={(e) => setTransactionId(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100"
//             />

//             <input
//               type="date"
//               value={paymentDate}
//               onChange={(e) => setPaymentDate(e.target.value)}
//               className="w-full p-3 rounded-xl bg-gray-100"
//             />

//             <input
//               type="file"
//               onChange={(e) => setProof(e.target.files[0])}
//               className="w-full"
//             />

//             <div className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={declaration}
//                 onChange={(e) =>
//                   setDeclaration(e.target.checked)
//                 }
//               />
//               <span>I confirm this is a real transaction</span>
//             </div>

//             <button
//               onClick={handlePreview}
//               className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-2 rounded-xl"
//             >
//               Preview Profit
//             </button>

//             {preview && (
//               <div className="bg-gray-100 p-3 rounded-xl text-sm">
//                 <p>💰 Interest: ₹{preview.interest}</p>
//                 <p>📈 Total Return: ₹{preview.total}</p>
//               </div>
//             )}

//             <button
//               onClick={handleInvest}
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl"
//             >
//               {loading ? "Processing..." : "Invest Now 🚀"}
//             </button>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
import { useEffect, useState } from "react";
import {
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import API from "../services/api";

const ProjectDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get("mode") || "view";

  const [project, setProject] = useState(null);
  const [amount, setAmount] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [transactionId, setTransactionId] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [proof, setProof] = useState(null);
  const [declaration, setDeclaration] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const res = await API.get(`/projects/${id}`);
      setProject(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreview = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    const interestRate = 0.12;
    const interest = Number(amount) * interestRate;
    const total = Number(amount) + interest;

    setPreview({ interest, total });
  };

  const handleInvest = async () => {
    try {
      if (!user) return alert("Login first");
      if (user.role !== "INVESTOR")
        return alert("Only Investors allowed");

      if (!amount) return alert("Enter amount");
      if (!transactionId) return alert("Enter transaction ID");
      if (!paymentDate) return alert("Select payment date");
      if (!proof) return alert("Upload payment proof");
      if (!declaration) return alert("Please confirm transaction");

      setLoading(true);

      const data = new FormData();
      data.append("projectId", id);
      data.append("amount", Number(amount));
      data.append("paymentMethod", paymentMethod);
      data.append("transactionId", transactionId);
      data.append("paymentDate", paymentDate);
      data.append("proof", proof);

      await API.post("/investments", data);

      setProject((prev) => ({
        ...prev,
        fundedAmount: prev.fundedAmount + Number(amount),
      }));

      setAmount("");
      setPreview(null);
      setTransactionId("");
      setPaymentDate("");
      setProof(null);
      setDeclaration(false);

      alert("✅ Investment Successful");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  if (!project)
    return <p className="text-center mt-10 text-white">Loading...</p>;

  const percent =
    project.targetAmount > 0
      ? Math.min(
          100,
          (project.fundedAmount / project.targetAmount) * 100
        )
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 flex justify-center items-center p-6 text-white">

      <div className="bg-white/95 backdrop-blur-md text-black p-7 rounded-3xl shadow-2xl w-full max-w-xl relative transition hover:scale-[1.01]">

        {/* CLOSE */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-2">
          {project.title}
        </h2>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* PROGRESS */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="flex justify-between text-xs mt-1 text-gray-600">
            <span>₹{project.fundedAmount}</span>
            <span>{Math.round(percent)}%</span>
          </div>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-2 gap-3 text-sm mb-5">
          <p><b>Status:</b> {project.status}</p>
          <p><b>Category:</b> {project.category}</p>
          <p><b>Target:</b> ₹{project.targetAmount}</p>
          <p><b>Funded:</b> ₹{project.fundedAmount}</p>
        </div>

        {/* INVEST */}
        {mode === "invest" && (
          <div className="space-y-3">

            <input
              type="number"
              placeholder="Enter amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 outline-none"
            >
              <option value="UPI">UPI</option>
              <option value="BANK">Bank Transfer</option>
              <option value="CARD">Card</option>
            </select>

            <input
              type="text"
              placeholder="Transaction ID / UTR"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 outline-none"
            />

            <input
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 outline-none"
            />

            <input
              type="file"
              onChange={(e) => setProof(e.target.files[0])}
              className="w-full text-sm"
            />

            <div className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={declaration}
                onChange={(e) =>
                  setDeclaration(e.target.checked)
                }
              />
              <span>I confirm this is a real transaction</span>
            </div>

            <button
              onClick={handlePreview}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-2 rounded-xl hover:opacity-90"
            >
              Preview Profit
            </button>

            {preview && (
              <div className="bg-gray-100 p-3 rounded-xl text-sm shadow-inner">
                <p>💰 Interest: ₹{preview.interest}</p>
                <p>📈 Total Return: ₹{preview.total}</p>
              </div>
            )}

            <button
              onClick={handleInvest}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              {loading ? "Processing..." : "Invest Now 🚀"}
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;