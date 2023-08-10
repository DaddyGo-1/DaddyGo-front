import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useUserPosts } from "../context/UserPostContext";
import trash from "../../src/assets/icons/trash.svg";
import DeleteModal from "./Modals/DeleteModal";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function MyPostCard({ searchValue }) {
  const navigate = useNavigate();
  const { userPosts } = useUserPosts();
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteItem = async (itemID) => {
    await deleteDoc(doc(db, "posts", itemID));
  };
  //   const data = Object.values(posts);
  //   const search_parameters = ["tag", "creatorID"];
  //   function search(post) {
  //     return post.filter((item) =>
  //       search_parameters.some((parameter) =>
  //         item[parameter]?.toLowerCase().includes(searchValue)
  //       )
  //     );
  //   }
  //   console.log(searchValue);
  //   const filteredPosts = search(posts, searchValue);
  //   console.log(filteredPosts);

  return (
    <>
      {userPosts.length < 1    ? (
        <h2
          className="text-2xl mx-auto"
          style={{
            position: "absolute",
            width: "fit-content",
            left: 0,
            right: 0,
          }}
        >
          You have not uploaded any posts
        </h2>
      ) : (
        userPosts.map((post, index) => (
          <>
            <div
              class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 pointer bg-white blogCard"
              key={index}
            >
              <div
                className="image-container"
                onClick={() => {
                  navigate(`/post/${post.id}`);
                }}
              >
                <img class="w-full" src={post.image} alt="Mountain" />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{post.title}</div>
                <p
                  class="text-gray-700 text-base text-container"
                  dangerouslySetInnerHTML={{
                    __html: post.body.slice(0, 200) + "... ",
                  }}
                
                ></p>
              </div>
              <p class="text-indigo-700 text-underline px-6 read-more">
                Read More
              </p>
              <div class="px-6 pt-4 pb-2 tag-container flex justify-between w-full">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{post.tag || "news"}
                </span>
                <div
                  onClick={() => {
                    setDeleteModal(true);
                  }}
                >
                  <img src={trash} alt="" />
                </div>
              </div>
            </div>
            <DeleteModal
              show={deleteModal}
              onHide={() => setDeleteModal(false)}
              onDelete={() => {
                deleteItem(post.id);
                setDeleteModal(false);
              }}
            />
          </>
        ))
      )}
    </>
    // </div>
  );
}

export default MyPostCard;
