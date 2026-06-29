import { useEffect, useMemo, useState } from "react";
import api from "../services/api";

import Container from "../components/common/Container";
import Card from "../components/common/Card";
import SectionTitle from "../components/common/SectionTitle";

function RecruiterDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await api.get("/applications");
      setApplications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/applications/${id}`, { status });

      setApplications((prev) =>
        prev.map((app) =>
          app._id === id
            ? { ...app, status }
            : app
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update application.");
    }
  };

  const stats = useMemo(() => {
    return {
      total: applications.length,
      pending: applications.filter(
        (a) => a.status === "Pending"
      ).length,
      accepted: applications.filter(
        (a) => a.status === "Accepted"
      ).length,
      rejected: applications.filter(
        (a) => a.status === "Rejected"
      ).length,
    };
  }, [applications]);

  const badgeColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-600";
      case "Rejected":
        return "bg-red-600";
      default:
        return "bg-yellow-500 text-black";
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="text-center py-20 text-2xl">
          Loading Applications...
        </div>
      </Container>
    );
  }

  return (
    <Container>

      <SectionTitle
        title="Recruiter Dashboard"
        subtitle="Manage job applications."
      />

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <Card className="text-center">
          <h3 className="text-slate-400">
            Total Applications
          </h3>
          <p className="text-4xl font-bold text-cyan-400 mt-3">
            {stats.total}
          </p>
        </Card>

        <Card className="text-center">
          <h3 className="text-slate-400">
            Pending
          </h3>
          <p className="text-4xl font-bold text-yellow-400 mt-3">
            {stats.pending}
          </p>
        </Card>

        <Card className="text-center">
          <h3 className="text-slate-400">
            Accepted
          </h3>
          <p className="text-4xl font-bold text-green-400 mt-3">
            {stats.accepted}
          </p>
        </Card>

        <Card className="text-center">
          <h3 className="text-slate-400">
            Rejected
          </h3>
          <p className="text-4xl font-bold text-red-400 mt-3">
            {stats.rejected}
          </p>
        </Card>

      </div>

      {applications.length === 0 ? (
        <Card>
          <p className="text-center text-slate-400 py-10">
            No applications found.
          </p>
        </Card>
      ) : (
        <div className="space-y-6">

          {applications.map((application) => (
            <Card key={application._id}>

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold text-cyan-400">
                    {application.job?.title}
                  </h2>

                  <p className="mt-2">
                    <strong>Company:</strong>{" "}
                    {application.job?.company}
                  </p>

                  <p className="mt-2">
                    <strong>Applicant:</strong>{" "}
                    {application.user?.name}
                  </p>

                  <p className="mt-2">
                    <strong>Email:</strong>{" "}
                    {application.user?.email}
                  </p>

                </div>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${badgeColor(
                    application.status
                  )}`}
                >
                  {application.status}
                </span>

              </div>

              <div className="mt-8 flex gap-4">

                <button
                  onClick={() =>
                    updateStatus(
                      application._id,
                      "Accepted"
                    )
                  }
                  className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-lg font-semibold"
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      application._id,
                      "Rejected"
                    )
                  }
                  className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-lg font-semibold"
                >
                  Reject
                </button>

              </div>

            </Card>
          ))}

        </div>
      )}

    </Container>
  );
}

export default RecruiterDashboard;