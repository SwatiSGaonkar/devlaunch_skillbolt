import { useEffect, useState } from "react";
import api from "../services/api";

import JobCard from "../components/jobs/JobCard";
import SearchBar from "../components/jobs/SearchBar";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");

      setJobs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) =>
    (
      job.title +
      job.company +
      job.location +
      job.skills.join(" ")
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-24 text-2xl">
        Loading Jobs...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold text-cyan-400 mb-8">
        Explore Jobs
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
          />
        ))}

      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No matching jobs found.
        </div>
      )}

    </div>
  );
}

export default Jobs;