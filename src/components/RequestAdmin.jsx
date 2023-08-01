import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import NotificationModal from "./Modals/NotificationModal";

import emailjs from "@emailjs/browser";

function RequestAccess() {
  const [user, setUser] = useState({
    department: "",
    position: "",
    post_type: "",
  });
  // const [errors, setErrors] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  // const schema = {
  //   name: Joi.string().required().min(5).label("Username"),
  //   id: Joi.string().required().min(2).label("id"),
  //   password: Joi.string().required().min(5).label("Password"),
  //   text: Joi.string().required().min(5).label("Text"),
  //   job: Joi.string().required().min(5).max(15).label("Job"),
  // };

  const { userData } = useAuth();
  // const navigate = useNavigate();

  // const validate = () => {
  //   const result = Joi.validate(user, schema, {
  //     abortEarly: false,
  //   });

  //   if (!result.error) return null;

  //   const errors = {};
  //   for (let item of result.error.details) {
  //     errors[item.path[0]] = item.message;
  //   }
  //   return errors;
  // };

  // const validateProperty = (input) => {
  //   const obj = { [input.name]: input.value };
  //   const schema = { [input.name]: schema[input.name] };
  //   const { error } = Joi.validate(obj, schema);
  //   return error ? error.details[0].message : null;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendAdminEmail();
      // navigate("/");
    } catch (error) {
      console.log(error);
      //   setErrors(error)
    }
  };

  const handleChange = (e) => {
    const updatedUser = { ...user };
    updatedUser[e.target.name] = e.target.value;

    setUser(updatedUser);
  };

  var templateParams = {
    to_name: `Evans`,
    message: `${userData.name} of ${user.department} department, is requesting to post ${user.post_type}`,
    user_email: `daddygo558@gmail.com`,
  };
  // function sendUserEmail() {
  //   emailjs
  //     .send(
  //       process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  //       templateParams,
  //       process.env.REACT_APP_EMAILJS_KEY
  //     )
  //     .then(
  //       function (response) {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (error) {
  //         console.log("FAILED...", error);
  //       }
  //     );
  // }
  useEffect(() => {
    // Load data from local storage when the component mounts
    const sentRequestEmail = localStorage.getItem("requestSent");
    if (sentRequestEmail) {
      setRequestSent(sentRequestEmail);
    }
  }, []);


  async function sendAdminEmail() {
    setModalShow(!modalShow);
    setRequestSent(true);
    localStorage.setItem("requestSent", true);
    // emailjs
    //   .send(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     templateParams,
    //     process.env.REACT_APP_EMAILJS_KEY
    //   )
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
        
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
  }

  // render() {
  return (
    <>
      <div className=" min-h-full  w-full md:max-w-md lg:max-w-full md:mx-auto px-6 lg:px-16 pt-16">
        {requestSent ? (
          <div
            class="bg-orange-100 text-orange-700 text-red-700 px-4 py-3 rounded relative mt-6"
            role="alert"
          >
            {/* <strong class="font-bold">Holy smokes!</strong> */}
            <span className="block mx-auto w-fit">
              Your request is being processed
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-xl font-medium leading-9 tracking-tight text-gray-900">
            Oops! You currently don't have access to this feature.
          </h2>
          <h2 className="mt-5 text-center text-lg font-medium   leading-9 tracking-tight text-indigo-600">
            Fill out this short form to request access
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={userData.name}
                  value={userData.name}
                  disabled
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={userData.email}
                  value={userData.email}
                  disabled
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Department
              </label>
              <div className="mt-2">
                <input
                  id="department"
                  name="department"
                  type="text"
                  autoComplete="department"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Position <small>(if any)</small>
              </label>
              <div className="mt-2">
                <input
                  id="position"
                  name="position"
                  type="email"
                  autoComplete="position"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Type of posts <small>(adverts, campaign, news)</small>
              </label>
              <div className="mt-2">
                <input
                  id="post_type"
                  name="post_type"
                  type="text"
                  autoComplete="post_type"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request
              </button>
            </div>
            <hr className="my-6 border-gray-300 w-full" />
          </form>
        </div>
      </div>

      <NotificationModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default RequestAccess;
