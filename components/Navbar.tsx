import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 z-10 lg:px-16 px-2 lg:py-4 fixed top-0 left-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
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
          </label>
          <ul
            tabIndex={0}
            className="menu divide-y divide-slate-300 menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href={"/home"}
                className="link link-hover hover:bg-transparent  text-xl  text-primary  dark:text-white   font-normal"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href={"/home"}
                className="link link-hover hover:bg-transparent  text-xl text-primary  dark:text-white   font-normal "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={"/home"}
                className="link link-hover  hover:bg-transparent text-xl  text-primary dark:text-white   font-normal"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold  text-primary  dark:text-accent lg:text-5xl">
          COURSES
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link
              href={"/home"}
              className="link link-hover hover:bg-transparent  text-lg text-primary  font-normal"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href={"/home"}
              className="link link-hover hover:bg-transparent  text-lg text-primary font-normal "
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={"/home"}
              className="link link-hover  hover:bg-transparent text-lg text-primary font-normal"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary dark:btn-primary capitalize rounded-full btn-sm lg:btn-md text-xs  lg:w-44 lg:text-base  hover:text-primary  shadow-sm">
          Sign up for free
        </a>
      </div>
    </div>
  );
};

export default Navbar;
