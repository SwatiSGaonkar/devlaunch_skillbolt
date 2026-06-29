import { Link, NavLink } from "react-router-dom";
import { FaRocket, FaUserCircle } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  const active =
    "text-cyan-400 border-b-2 border-cyan-400 pb-1";

  const normal =
    "hover:text-cyan-400 transition";

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-cyan-400"
        >
          <FaRocket />
          DevLaunch
        </Link>

        <div className="flex gap-8">

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

          {isAuthenticated && (
            <>
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

              <NavLink
                to="/recruiter"
                className={({ isActive }) =>
                  isActive ? active : normal
                }
              >
                Recruiter
              </NavLink>
            </>
          )}

        </div>

        {!isAuthenticated ? (
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
        ) : (
          <div className="flex items-center gap-4">

            <div className="flex items-center gap-2 text-cyan-400">

              <FaUserCircle className="text-2xl" />

              <span className="font-semibold">
                {user?.name}
              </span>

            </div>

            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 transition"
            >
              Logout
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;