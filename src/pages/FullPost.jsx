import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function FullPost() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getFullPost = async () => {
      try {
        const docRef = doc(db, "posts", id);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setData(snapshot.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    id && getFullPost();
  }, [id]);
  return (
    <div>
      {/* <Nav /> */}
      <NavBar />
      <div className="main-layout ">
        <div className="mx-auto max-w-6xl  mb-20">
          <div className="">
            <div
              className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
              style={{ height: "24em" }}
            >
              <div
                className="absolute left-0 bottom-0 w-full h-full z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.7)",
                }}
              ></div>
              <img
                loading="lazy"
                src={data.image}
                className="absolute left-0 top-0 w-full h-full h-25 z-0 object-cover"
                alt=""
              />
              <div className="p-4 absolute bottom-0 left-0 z-10">
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  {data.title}
                </h2>
                <div className="flex mt-3">
                  <img
                    src={"https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="}
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm">
                      {" "}
                      {data.creator?.name || 'untitled'}{" "}
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                      {/* {" "}
                      14 Aug{" "} */}
                       @{data.creator?.username || 'untitled'}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed bg-white prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: data.body }}
            ></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default FullPost;
