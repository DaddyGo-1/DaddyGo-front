import React, { useState } from "react";
import NavBar from "../components/NavBar";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router";

function News() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout mt-30">
        <div className="main-layout__top"></div>
        <div className="main-layout__main">
          {/* <h1 className="text-center text-4xl mb-3 text-white">News</h1> */}
          <div className="flex justify-center">
            {/* <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
	Default Button
  </button> */}
            <span
              className={`inline-block px-5 py-2 bg-gray-200 hover:bg-indigo-600 hover:text-white rounded-full text-md font-semibold  mr-2 mb-2 pointer ${
                searchValue === ""
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setSearchValue("");
              }}
            >
              All
            </span>
            <span
              className={`inline-block px-5 py-2 bg-gray-200 hover:bg-indigo-600 hover:text-white rounded-full text-md font-semibold  mr-2 mb-2 pointer ${
                searchValue === "news"
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setSearchValue("news");
              }}
            >
              News
            </span>
            <span
              className={`inline-block px-5 py-2 bg-gray-200 hover:bg-indigo-600 hover:text-white rounded-full text-md font-semibold  mr-2 mb-2 pointer ${
                searchValue === "advert"
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setSearchValue("advert");
              }}
            >
              Adverts
            </span>
            <span
              className={`inline-block px-5 py-2 bg-gray-200 hover:bg-indigo-600 hover:text-white rounded-full text-md font-semibold  mr-2 mb-2 pointer ${
                searchValue === "campaign"
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setSearchValue("campaign");
              }}
            >
              Campaigns
            </span>
          </div>
          {/* <h5 className="text-center text-white">
          Check out the latest happenings around the faculty as submitted by our
          admins
        </h5> */}
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
            <BlogCard
              onClick={() => {
                navigate(`/post/1}`);
              }}
              searchValue={searchValue}
            />
            {/* <BlogCard searchValue={searchValue}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
