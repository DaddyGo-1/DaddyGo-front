import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";
import { useUserPosts } from "../context/UserPostContext";
import MyPostCard from "../components/MyPostCard";
import ComingSoon from "../components/Modals/ComingSoon";
import { useNavigate } from "react-router";

function Profile(props) {
  const { userData, logOut } = useAuth();
  const { userPosts } = useUserPosts();
  const [modal, setModal] = useState(false);
//   const {   } = useAuth();
const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut();

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NavBar />
      <div class="  bg-white  mt-32">
        <div class=" max-w-lg mx-auto  px-4 pb-6">
          <div class="text-center my-4">
            <img
              class="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
              src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
              alt=""
            />
            <div class="py-2">
              <h3 class="font-bold text-2xl mb-1">{userData?.name || ""}</h3>
              <div class="inline-flex text-gray-700 items-center">
                {/* <svg class="h-5 w-5 text-gray-400 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg> */}
                @{userData.username || ""}
              </div>
            </div>
          </div>
          <div class="flex gap-2 px-2">
            <button
              class="flex-1 rounded-lg bg-indigo-600 text-white antialiased font-bold hover:bg-indigo-800 px-4 py-2"
              onClick={() => setModal(true)}
            >
              Claim token
            </button>
            <button class="flex-1 rounded-lg border-2 border-gray-400 font-semibold text-black hover:bg-indigo-800 hover:text-white hover:border-indigo-800 px-4 py-2" 
            onClick={()=>{
                handleLogOut()
            }}
            >
              Log Out
            </button>
          </div>
        </div>
        <div class="mx-10 py-4 border-b pb-4 flex  justify-center items-center">
          <div class="flex gap-2  items-center text-gray-800 mb-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stickies"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
              <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
            </svg>
            <span>
              <strong class="text-black">{userPosts?.length}</strong>post(s)
            </span>
          </div>
          <div className="flex gap-2  items-center text-gray-800r mb-4 ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-coin"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <strong class="text-black text-1xl">
              {userPosts?.tokens || 0}
            </strong>
            token(s)
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          <MyPostCard />
        </div>
      </div>
      <ComingSoon show={modal} onHide={() => setModal(false)} />
    </div>
    // </div>
  );
}

export default Profile;
