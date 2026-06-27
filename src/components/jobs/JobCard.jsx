import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function JobCard({ job }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-900 rounded-xl p-6 border border-slate-800"
    >
      <h3 className="text-2xl font-bold text-cyan-400">
        {job.title}
      </h3>

      <p className="mt-2 font-semibold">
        {job.company}
      </p>

      <p className="text-gray-400 mt-1">
        📍 {job.location}
      </p>

      <p className="mt-2">
        {job.salary}
      </p>

      <p className="mt-2">
        {job.type}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="bg-cyan-900 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="block mt-6 bg-cyan-400 text-center text-black font-semibold py-2 rounded-lg"
      >
        View Details
      </Link>
    </motion.div>
  );
}

export default JobCard;