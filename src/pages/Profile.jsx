import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
  FaBookmark,
  FaCalendarCheck,
} from "react-icons/fa";

import profile from "../data/profile";

import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";

function Profile() {
  return (
    <Container>
      <div className="py-14">

        <SectionTitle
          title="Student Dashboard"
          subtitle="Manage your profile and career journey."
        />

        <div className="grid lg:grid-cols-3 gap-8">

          <Card className="text-center">

            <img
              src="https://ui-avatars.com/api/?name=Swati+Gaonkar&background=0891b2&color=fff&size=200"
              alt="Profile"
              className="w-36 h-36 rounded-full mx-auto border-4 border-cyan-400"
            />

            <h2 className="text-3xl font-bold mt-5">
              {profile.name}
            </h2>

            <p className="text-cyan-400 mt-2">
              {profile.role}
            </p>

            <div className="mt-6 space-y-3 text-slate-300">

              <p className="flex items-center gap-2 justify-center">
                <FaEnvelope />
                {profile.email}
              </p>

              <p className="flex items-center gap-2 justify-center">
                <FaMapMarkerAlt />
                {profile.location}
              </p>

              <p className="flex items-center gap-2 justify-center">
                <FaUserGraduate />
                {profile.college}
              </p>

            </div>

            <Button className="w-full mt-8">
              Edit Profile
            </Button>

          </Card>

          <div className="lg:col-span-2 space-y-8">

            <Card>

              <h2 className="text-2xl font-bold mb-4">
                About
              </h2>

              <p className="text-slate-300 leading-8">
                {profile.about}
              </p>

            </Card>

            <Card>

              <h2 className="text-2xl font-bold mb-6">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {profile.skills.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}

              </div>

            </Card>

            <div className="grid md:grid-cols-3 gap-6">

              <Card className="text-center">

                <FaBriefcase className="mx-auto text-4xl text-cyan-400 mb-4" />

                <h2 className="text-4xl font-bold">
                  {profile.stats.applied}
                </h2>

                <p className="mt-2">
                  Applied Jobs
                </p>

              </Card>

              <Card className="text-center">

                <FaBookmark className="mx-auto text-4xl text-cyan-400 mb-4" />

                <h2 className="text-4xl font-bold">
                  {profile.stats.saved}
                </h2>

                <p className="mt-2">
                  Saved Jobs
                </p>

              </Card>

              <Card className="text-center">

                <FaCalendarCheck className="mx-auto text-4xl text-cyan-400 mb-4" />

                <h2 className="text-4xl font-bold">
                  {profile.stats.interviews}
                </h2>

                <p className="mt-2">
                  Interviews
                </p>

              </Card>

            </div>

          </div>

        </div>

      </div>
    </Container>
  );
}

export default Profile;