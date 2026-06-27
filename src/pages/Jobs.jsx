import { useState } from "react";
import jobs from "../data/jobs";
import JobCard from "../components/jobs/JobCard";
import SearchBar from "../components/jobs/SearchBar";

function Jobs() {
  const [search, setSearch] = useState("");

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
            key={job.id}
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