import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

function Home() {
  return (
    <div>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-6xl font-black leading-tight">

            Launch Your

            <span className="block text-cyan-400">
              Dream Tech Career
            </span>

          </h1>

          <p className="mt-6 text-slate-300 max-w-2xl text-lg">
            Discover internships, fresher jobs,
            hackathons and software careers from
            top companies.
          </p>

          <div className="mt-8 flex gap-5">

            <Link
              to="/jobs"
              className="bg-cyan-400 text-black px-7 py-3 rounded-lg font-bold"
            >
              Browse Jobs
            </Link>

            <Link
              to="/register"
              className="border border-cyan-400 px-7 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Join Free
            </Link>

          </div>

        </motion.div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-xl p-8">
            <FaBriefcase className="text-cyan-400 text-4xl mb-4" />

            <h2 className="text-2xl font-bold">
              Verified Jobs
            </h2>

            <p className="text-slate-400 mt-3">
              Find fresher jobs and internships
              from trusted recruiters.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-8">
            <FaLaptopCode className="text-cyan-400 text-4xl mb-4" />

            <h2 className="text-2xl font-bold">
              Developer Friendly
            </h2>

            <p className="text-slate-400 mt-3">
              Designed especially for engineering
              students and fresh graduates.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-8">
            <FaCode className="text-cyan-400 text-4xl mb-4" />

            <h2 className="text-2xl font-bold">
              Skill Based
            </h2>

            <p className="text-slate-400 mt-3">
              Search using technologies like React,
              Java, Python, AI and more.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;