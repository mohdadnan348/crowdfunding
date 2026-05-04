// const About = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">About Us</h1>
//       <p>
//         This is a crowdfunding platform where creators can raise funds
//         and investors can support innovative ideas.
//       </p>
//     </div>
//   );
// };

// export default About;
// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
//       <div className="max-w-6xl mx-auto px-6 py-12">
        
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold">About CrowdFund</h1>
//           <p className="text-blue-200 mt-2">
//             Empowering ideas. Connecting creators with supporters.
//           </p>
//         </div>

//         {/* Cards Section */}
//         <div className="grid md:grid-cols-3 gap-6">
          
//           {/* Mission */}
//           <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 hover:scale-105 transition">
//             <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
//             <p className="text-gray-600">
//               To help creators turn their ideas into reality by connecting them
//               with people who believe in innovation.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 hover:scale-105 transition">
//             <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
//             <p className="text-gray-600">
//               Building a global platform where anyone can raise funds and make
//               a difference through community support.
//             </p>
//           </div>

//           {/* What We Do */}
//           <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 hover:scale-105 transition">
//             <h2 className="text-xl font-semibold mb-2">What We Do</h2>
//             <p className="text-gray-600">
//               We provide a secure and user-friendly platform for crowdfunding,
//               helping investors discover and support innovative projects.
//             </p>
//           </div>
//         </div>

//         {/* Extra Section */}
//         <div className="mt-12 bg-white/90 text-black rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition">
//           <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
//           <ul className="space-y-2 text-gray-700">
//             <li>✔ Secure and trusted platform</li>
//             <li>✔ Easy project creation</li>
//             <li>✔ Transparent funding process</li>
//             <li>✔ Strong community support</li>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;
const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* 🔷 Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-400">
            About CrowdFund
          </h1>
          <p className="text-gray-400 mt-3">
            Empowering ideas. Connecting creators with supporters worldwide.
          </p>
        </div>

        {/* 🚀 Stats Section (NEW - Professional Touch) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="bg-black/60 border border-purple-500/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <h2 className="text-3xl font-bold text-purple-400">1000+</h2>
            <p className="text-gray-400 text-sm mt-1">Projects Created</p>
          </div>

          <div className="bg-black/60 border border-purple-500/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <h2 className="text-3xl font-bold text-purple-400">₹10L+</h2>
            <p className="text-gray-400 text-sm mt-1">Funds Raised</p>
          </div>

          <div className="bg-black/60 border border-purple-500/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <h2 className="text-3xl font-bold text-purple-400">500+</h2>
            <p className="text-gray-400 text-sm mt-1">Active Users</p>
          </div>
        </div>

        {/* 📦 Cards Section */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Mission */}
          <div className="bg-black/70 border border-purple-500/30 rounded-3xl p-6 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2 text-purple-400">
              Our Mission
            </h2>
            <p className="text-gray-400 text-sm">
              To help creators turn their ideas into reality by connecting them
              with people who believe in innovation and growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-black/70 border border-purple-500/30 rounded-3xl p-6 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2 text-purple-400">
              Our Vision
            </h2>
            <p className="text-gray-400 text-sm">
              Building a global ecosystem where anyone can raise funds and make
              an impact through strong community support.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-black/70 border border-purple-500/30 rounded-3xl p-6 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2 text-purple-400">
              What We Do
            </h2>
            <p className="text-gray-400 text-sm">
              We provide a secure, transparent and easy-to-use crowdfunding
              platform where investors discover and support innovative projects.
            </p>
          </div>
        </div>

        {/* ⭐ Why Choose Us */}
        <div className="mt-14 bg-black/70 border border-purple-500/30 rounded-3xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:scale-[1.02] transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>✔ Secure & trusted platform</li>
            <li>✔ Easy project creation process</li>
            <li>✔ Transparent funding system</li>
            <li>✔ Verified creators & safe investments</li>
            <li>✔ Strong and growing community</li>
          </ul>
        </div>

        {/* 💡 Extra Professional Section (NEW) */}
        <div className="mt-14 text-center">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">
            Our Commitment
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            At CrowdFund, we are committed to building trust between creators
            and investors by ensuring transparency, security, and a seamless
            funding experience for everyone.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;