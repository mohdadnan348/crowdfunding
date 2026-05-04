import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";
import jsPDF from "jspdf";

export default function Investments() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [investments, setInvestments] = useState([]);
  const [selectedInv, setSelectedInv] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await API.get("/admin/projects");
    setProjects(res.data.data);
  };

  const fetchInvestments = async (projectId) => {
    const res = await API.get(`/admin/investments/${projectId}`);
    setInvestments(res.data.data);
    setSelectedProject(projectId);
  };

  // 🧾 PDF DOWNLOAD
  const downloadReceipt = (inv) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Investment Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Investor: ${inv.investorId?.name}`, 20, 40);
    doc.text(`Email: ${inv.investorId?.email}`, 20, 50);
    doc.text(`Amount: ₹${inv.amount}`, 20, 60);
    doc.text(`Transaction ID: ${inv.transactionId || "N/A"}`, 20, 70);
    doc.text(
      `Date: ${new Date(inv.createdAt).toLocaleString()}`,
      20,
      80
    );

    doc.save("receipt.pdf");
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Investments 💰
      </h1>

      {/* PROJECT SELECT */}
      <div className="mb-6">
        <select
          onChange={(e) => fetchInvestments(e.target.value)}
          className="px-4 py-2 rounded-xl text-black"
        >
          <option value="">Select Project</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      {/* INVESTMENT LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {investments.map((inv) => (
          <div
            key={inv._id}
            className="bg-black/70 border border-cyan-400/30 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.2)] p-5 rounded-2xl"
          >
            <p><b>Name:</b> {inv.investorId?.name}</p>
            <p><b>Email:</b> {inv.investorId?.email}</p>
            <p><b>Amount:</b> ₹{inv.amount}</p>
            <p><b>Txn ID:</b> {inv.transactionId || "N/A"}</p>
            <p><b>Date:</b> {new Date(inv.createdAt).toLocaleString()}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setSelectedInv(inv)}
                className="px-3 py-2 bg-cyan-500 text-black rounded"
              >
                View Receipt
              </button>

              <button
                onClick={() => downloadReceipt(inv)}
                className="px-3 py-2 bg-green-500 rounded"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RECEIPT MODAL */}
      {selectedInv && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-black text-white p-6 rounded-2xl border border-cyan-400 w-[400px]">

            <h2 className="text-xl font-bold text-cyan-400 mb-4">
              Receipt 🧾
            </h2>

            <p><b>Name:</b> {selectedInv.investorId?.name}</p>
            <p><b>Email:</b> {selectedInv.investorId?.email}</p>
            <p><b>Amount:</b> ₹{selectedInv.amount}</p>
            <p><b>Txn:</b> {selectedInv.transactionId || "N/A"}</p>
            <p>
              <b>Date:</b>{" "}
              {new Date(selectedInv.createdAt).toLocaleString()}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => window.print()}
                className="px-3 py-2 bg-yellow-400 text-black rounded"
              >
                Print
              </button>

              <button
                onClick={() => downloadReceipt(selectedInv)}
                className="px-3 py-2 bg-green-500 rounded"
              >
                Download PDF
              </button>

              <button
                onClick={() => setSelectedInv(null)}
                className="px-3 py-2 bg-red-500 rounded"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </AdminLayout>
  );
}