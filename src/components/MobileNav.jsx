import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// import PodModal from "../Modals/PodModal";
import { useAuth } from "../context/AuthContext";

function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  const {currentUser } = useAuth()
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* <PodModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      <div className="MobileNav">
        {/* <img
          src={menu}
          alt="menu"
          className="menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        /> */}
           <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            // onClick={() => {
            //     setShowMenu(!showMenu);
            //   }}
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

        <div className={`MobileNav__list ${showMenu ? "meuDIsplay" : ""}`}>
          {/* <div className='desktop'> */}
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/news">News</CustomLink>
          </li>
          <li>
            <CustomLink
              to="/adverts"
              // className="block py-2 pl-3 pr-4 text-gray-900  md:hover:bg-transparent md:hover:text-indigo-500 md:p-0 md:dark:hover:text-indigo-500 dark:text-indigo  dark:hover:text-indigo-500 md:dark:hover:bg-transparent "
            >
              Adverts
            </CustomLink>
          </li>
        </div>
      </div>
    </>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <Link className={isActive ? "pageActive" : ""} to={to} {...props}>
      {children}
    </Link>
  );
}

export default MobileNav;
