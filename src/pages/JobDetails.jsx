import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";
import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Job Not Found
        </h1>

        <Link
          to="/jobs"
          className="inline-block mt-8 bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

        <h1 className="text-4xl font-bold text-cyan-400">
          {job.title}
        </h1>

        <h2 className="text-2xl mt-3 font-semibold">
          {job.company}
        </h2>

        <div className="mt-8 space-y-4 text-lg">

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaBriefcase className="text-cyan-400" />
            <span>{job.type}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMoneyBillWave className="text-cyan-400" />
            <span>{job.salary}</span>
          </div>

        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">
            Required Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="bg-cyan-900 text-white px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">
            Job Description
          </h3>

          <p className="text-slate-300 leading-8">
            {job.description}
          </p>
        </div>

        <div className="mt-10 flex gap-4">

          <button
            className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-300 transition"
          >
            Apply Now
          </button>

          <Link
            to="/jobs"
            className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Back to Jobs
          </Link>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;