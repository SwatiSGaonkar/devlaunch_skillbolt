import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaTrash,
  FaMapMarkerAlt,
} from "react-icons/fa";

import useJobs from "../hooks/useJobs";

import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";

function SavedJobs() {
  const { savedJobs, removeJob } = useJobs();

  return (
    <Container>
      <div className="py-14">

        <SectionTitle
          title="Saved Jobs"
          subtitle="Jobs you've bookmarked for later."
        />

        {savedJobs.length === 0 ? (
          <Card className="text-center py-16">

            <FaBriefcase className="mx-auto text-6xl text-slate-600 mb-6" />

            <h2 className="text-2xl font-bold">
              No Saved Jobs
            </h2>

            <p className="text-slate-400 mt-3">
              Start saving jobs to see them here.
            </p>

            <Link to="/jobs">
              <Button className="mt-8">
                Browse Jobs
              </Button>
            </Link>

          </Card>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">

            {savedJobs.map((job) => (
              <Card key={job.id}>

                <h2 className="text-2xl font-bold text-cyan-400">
                  {job.title}
                </h2>

                <p className="mt-2 font-semibold">
                  {job.company}
                </p>

                <p className="flex items-center gap-2 mt-3 text-slate-400">
                  <FaMapMarkerAlt />
                  {job.location}
                </p>

                <p className="mt-4">
                  {job.salary}
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

                <div className="flex gap-3 mt-8">

                  <Link
                    to={`/jobs/${job.id}`}
                    className="flex-1"
                  >
                    <Button className="w-full">
                      View Details
                    </Button>
                  </Link>

                  <button
                    onClick={() => removeJob(job.id)}
                    className="bg-rose-600 hover:bg-rose-500 px-5 rounded-xl transition"
                  >
                    <FaTrash />
                  </button>

                </div>

              </Card>
            ))}

          </div>
        )}

      </div>
    </Container>
  );
}

export default SavedJobs;