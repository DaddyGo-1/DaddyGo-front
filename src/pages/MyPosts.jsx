import React, { useState } from "react";
import NavBar from "../components/NavBar";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import MyPostCard from "../components/MyPostCard";

function MyPosts() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
//   const [searchValue, setSearchValue] = useState(currentUser.uid);
  return (
    <div>
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout mt-30">
        <div className="main-layout__top"></div>
        <div className="main-layout__main">
       
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
            {/* <BlogCard
              searchValue={"giAvGUBi0JhoiPBxZ4U2sTxrQRp1"}
            /> */}
            <MyPostCard/>
            {/* <BlogCard searchValue={searchValue}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
