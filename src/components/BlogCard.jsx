import React from "react";
import { useNavigate } from "react-router";
import { usePosts } from "../context/PostsContext";

function BlogCard() {
  const navigate = useNavigate();
  const {posts} = usePosts();


  return (
    <>
      {posts.length > 0
        ? posts.map((post, index) => (
            <div
              class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 pointer bg-white"
              onClick={() => {
                navigate(`/post/${post.id}`);
              }}
              key={index}
            >
              <img
                class="w-full"
                src={post.image}
                alt="Mountain"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{post.title}</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #news
                </span>
               
              </div>
            </div>
          ))
        : ""}
    </>
    // </div>
  );
}

export default BlogCard;
