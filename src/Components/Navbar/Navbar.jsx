import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="md:navbar-start">
          <Link
            to="/"
            className="text-xl lg:text-[1.75rem] text-secondary font-bold text-nowrap"
          >
            Book Vibe
          </Link>
          {/* dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden ml-56 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary px-3 py-2 rounded-md"
                    : "  px-3 py-2 rounded-md hover:bg-slate-200 hover:border"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary px-3 py-2 rounded-md"
                    : "  px-3 py-2 rounded-md hover:bg-slate-200 hover:border"
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border border-primary px-3 py-2 rounded-md"
                    : "  px-3 py-2 rounded-md hover:bg-slate-200 hover:border"
                }
              >
                Pages to Read
              </NavLink>
            </ul>
          </div>
        </div>
        {/* menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-14 text-[#131313CC] text-xl font-normal flex text-center items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border border-primary px-3 py-2 rounded-md"
                  : "  px-3 py-2 rounded-md hover:bg-transparent hover:border hover: border-black"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border border-primary px-3 py-2 rounded-md"
                  : "  px-3 py-2 rounded-md hover:bg-transparent hover:border hover: border-black"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border border-primary px-3 py-2 rounded-md"
                  : "  px-3 py-2 rounded-md hover:bg-transparent hover:border hover: border-black"
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        {/* buttons */}
        <div className="navbar-end hidden md:flex gap-4">
          <a className="btn btn-ghost text-xl font-semibold bg-primary text-white">
            Sign In
          </a>
          <a className="btn btn-ghost text-xl font-semibold bg-third text-white">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
