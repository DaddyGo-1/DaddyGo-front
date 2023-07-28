/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useImageUpload } from "../context/ImageUploadCOntext";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import RequestAccess from "../components/RequestAdmin";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showImage, setShowImage] = useState(null);
  const [tag, setTag] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
  const {
    image,
    setImage,
    downloadURL,
    uploading,
    setUploading,
    uploadState,
    clearImageData,
  } = useImageUpload();

  const handleImageChange = async (e) => {
    try {
      const file = e.target.files[0];
      setImage(file);
      console.log(image);
      if (!uploading) {
        await setUploading(true);
        console.log(showImage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    clearImageData();
    setIsAdmin(userData?.admin);
    console.log(isAdmin);
  }, []);

  const handleTag = (e) => {
    setTag(e.target.value);
  };

  const handleUpload = async () => {
    try {
      const docRef = doc(collection(db, "posts"));
      sessionStorage.setItem("blogID", docRef.id);
      // const blogID = docRef.id;
      await setDoc(docRef, {
        title: title,
        body: body,
        creator: userData,
        image: downloadURL,
        created: serverTimestamp(),
        tag: tag,
      }).then(
        console.log("sucessful", `postid:${docRef.id}`),
        navigate("/news")
      );
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <div>
      {/* <Nav /> */}
      <NavBar />
     {
      isAdmin ? 
      //create seperate component for this
      <div className="main-layout">
      {/* <div className="main-layout__top"></div> */}
      <div className="main-layout__main">
        <div className="mx-auto max-w-6xl ">
          <div className="lg:w-1/2 w-2/3 mx-auto mb-20">
            {/* <div className="flex justify-center align-center mb-5"> */}

            <div class="flex flex-wrap justify-center mb-5">
              <div class="flex items-center mr-4">
                <input
                  id="red-radio"
                  type="radio"
                  value='campaign'
                  onChange={handleTag}
                  name="colored-radio"
                  class="campaign"
                />
                <label
                  for="red-radio"
                  class="ml-2 text-sm font-medium text-gray-900 "
                >
                  Campaign Post
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="green-radio"
                  type="radio"
                  value="advert"
                  onChange={handleTag}
                  name="colored-radio"
                  class="custom-radio"
                />
                <label
                  for="green-radio"
                  class="ml-2 text-sm font-medium text-gray-900 "
                >
                  Advert Post
                </label>
              </div>
              {isAdmin ? (
                <div class="flex items-center mr-4">
                  <input
                    checked
                    id="purple-radio"
                    type="radio"
                    value='news'
                    onChange={handleTag}
                    name="colored-radio"
                    class="custom-radio"
                  />
                  <label
                    for="purple-radio"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    News Post
                  </label>
                </div>
              ) : (
                ""
              )}
            </div>

            <div class="max-w-xl mb-5">
              {downloadURL ? (
                <div className="w-full h-40 px-4  rounded-md  cursor-pointer ">
                  <img
                    className="h-full d-block mx-auto"
                    loading="lazy"
                    src={downloadURL}
                    alt=""
                  />
                </div>
              ) : (
                <label class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none">
                  <span class="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    {uploading ? (
                      <span class="font-medium text-gray-600">
                        Upload is {uploadState}% done
                      </span>
                    ) : (
                      <span class="font-medium text-gray-600">
                        Add Cover{" "}
                        <small>(recommended: landscape images)</small>
                      </span>
                    )}
                  </span>
                  <input
                    type="file"
                    name="file_upload"
                    class="hidden"
                    accept="image/gif,image/jpeg,image/png,image/heic,image/heif,image/webp,image/svg+xml,video/mov,video/mp4,video/ogg "
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>
            <div className="mb-5">
              <label className="block  font-medium leading-6 text-gray-900">
                Article Title
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block  font-medium leading-6 text-gray-900">
                Article Content
              </label>
              <div className="mt-2">
                <ReactQuill
                  value={body}
                  onChange={(content) => setBody(content)}
                />
              </div>
            </div>
            <button
              className="mt-5 text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-md px-10 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              onClick={() => {
                // navigate('/auth-contact')
                handleUpload();
              }}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    :
    <RequestAccess/>
     }
   
    </div>
  );
}

export default Create;
