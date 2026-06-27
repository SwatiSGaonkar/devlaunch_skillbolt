import { Link, NavLink } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

function Navbar() {
  const active =
    "text-cyan-400 border-b-2 border-cyan-400 pb-1";

  const normal =
    "hover:text-cyan-400 transition";

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-cyan-400"
        >
          <FaRocket />
          DevLaunch
        </Link>

        <div className="flex gap-8 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Jobs
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Saved
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Profile
          </NavLink>

        </div>

        <div className="flex gap-3">

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;