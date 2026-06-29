import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

import api from "../services/api";

import SaveButton from "../components/jobs/SaveButton";
import Button from "../components/common/Button";
import useAuth from "../hooks/useAuth";

function JobDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const res = await api.get(`/jobs/${id}`);
      setJob(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    if (!user) {
      alert("Please login first.");
      return;
    }

    try {
      setApplying(true);

      const res = await api.post("/applications", {
        userId: user.id,
        jobId: job._id,
      });

      alert(res.data.message);

    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to apply."
      );
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-2xl">
        Loading...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-20 text-red-500 text-2xl">
        Job Not Found
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
            {job.location}
          </div>

          <div className="flex items-center gap-3">
            <FaBriefcase className="text-cyan-400" />
            {job.type}
          </div>

          <div className="flex items-center gap-3">
            <FaMoneyBillWave className="text-cyan-400" />
            {job.salary}
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
                className="bg-cyan-900 px-4 py-2 rounded-full"
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

        <div className="mt-10 grid md:grid-cols-3 gap-4">

          <SaveButton job={job} />

          <Button
            onClick={handleApply}
            disabled={applying}
          >
            {applying ? "Applying..." : "Apply Now"}
          </Button>

          <Link to="/jobs">
            <Button
              variant="secondary"
              className="w-full"
            >
              Back to Jobs
            </Button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default JobDetails;