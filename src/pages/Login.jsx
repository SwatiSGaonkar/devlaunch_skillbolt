import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    console.log("Login Data:", form);
  };

  return (
    <Container>
      <div className="min-h-[80vh] flex items-center justify-center">

        <Card className="w-full max-w-md">

          <SectionTitle
            title="Welcome Back"
            subtitle="Login to continue your DevLaunch journey."
          />

          <form onSubmit={handleSubmit}>

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />

            <div className="mb-5">
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 pr-12 focus:border-cyan-400 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>
            </div>

            {error && (
              <p className="text-red-400 mb-4">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
            >
              Login
            </Button>

          </form>

          <p className="mt-6 text-center text-slate-400">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-cyan-400 hover:underline"
            >
              Register
            </Link>

          </p>

        </Card>

      </div>
    </Container>
  );
}

export default Login;