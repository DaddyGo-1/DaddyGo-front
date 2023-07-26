import React, { useState } from "react";
import logo from "../assets/images/Nuesa.jpg";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar(props) {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const { currentUser, userData, logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div>

    <nav className="bg-white border-gray-200 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={logo} className="h-16 mr-3" alt="Logo" />
        </a>
        <div className="flex md:order-2">
          {currentUser ? (
            <button
              type="button"
              className={`text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-md px-10 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800`}
              onClick={() => {
                handleLogOut();
              }}
            >
              Logout
            </button>
          ) : (
            <div className="hidden md:flex justify-between ">
              <button className="block   text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-md px-10 py-2 text-center mr-3  dark:bg-indigo-600 dark:hover:bg-indigo-700">
                Register
              </button>
              <button className="block   border border-indigo-500 bg-white text-indigo-500 font-medium rounded-lg text-md px-10 py-2 text-center md:mr-0 hover:bg-indigo-600 hover:text-white">
                Login
              </button>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
        {/* {open ? ( */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 mx-auto ${
            open ? "" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col items-center justify-center font-medium mb-0 p-0 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li className="w-100 ">
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/discover">Discover</CustomLink>
            </li>
            {currentUser ? (
              <li>
                <CustomLink to="/create">Create</CustomLink>
              </li>
            ) : (
              ""
            )}
            {!currentUser ? (
              <div className="w-full">
                <button className="block md:hidden w-1/2 text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-md px-10 py-2 text-center mx-auto md:mr-3 dark:bg-indigo-600 dark:hover:bg-indigo-700 mb-4 mt-10 ">
                  Register
                </button>
                <button className="block md:hidden w-1/2 border border-indigo-500 bg-white text-indigo-500 font-medium rounded-lg text-md px-10 py-2 text-center mx-auto md:mr-3  hover:bg-indigo-600 hover:text-white ">
                  Login
                </button>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
        {/* ) : (
          ""
        )} */}
      </div>
    </nav>

    // </div>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <Link
      className={`block py-2 pl-3 pr-4 text-gray-900  md:hover:bg-transparent md:hover:text-indigo-500 md:p-0 md:dark:hover:text-indigo-500 dark:text-indigo  dark:hover:text-indigo md:dark:hover:bg-transparent  ${
        isActive ? "active-link" : ""
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default NavBar;
