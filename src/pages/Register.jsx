import React, { useState } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import logo from '../assets/images/Nuesa.jpg';
import { SpinnerSM } from "../components/Spinners";
import Validation from "../utilities/validateInputFields";

const Register = (props) => {
  const [user, setUser] = useState({ name: "", email: "", password: "", username: "" });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState();
  const [loading, setLoading] = useState(false);

  const { signUp, Uid } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = Validation(user);
    // if (Object.keys(validationErrors).length > 0) {
    //   // setErrors(validationErrors);
    // } else {
      setLoading(true)
      try {
        await signUp(user.email, user.password);
        setLoading(false)
  
        await setDoc(doc(db, "users", Uid[0]), {
          name: user.name,
          email: user.email,
          username: user.username,
          admin: false,
        });
  
        // Perform redirection after successful registration
        navigate("/");
      } catch (error) {
        console.log(error);
        setAuthError(error.code);
        setLoading(false);
      }
    // }

  
  };

  const handleChange = (e) => {
    const updatedUser = { ...user };
    updatedUser[e.target.name] = e.target.value;

    setUser(updatedUser);
  };
  // render() {
    return (
      <div className=" min-h-full  w-full md:max-w-md lg:max-w-full md:mx-auto px-6 lg:px-16 pt-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
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
                  autoComplete="name"
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
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
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
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 focus:border focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
               
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
                {loading ? <SpinnerSM/> : 'Register'} 
              </button>
            </div>
            {Object.keys(errors).map((key) => (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">{errors[key]|| errors}</span>
            </div>
          ))}
             {authError?
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">{authError}</span>
            </div>
            : ""
         }
            <hr className="my-6 border-gray-300 w-full" />

            {/* <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className=" w-5"
                  alt="google logo"
                ></img>
                <span className="ml-4 ">Log in with Google</span>
              </div>
            </button> */}
          </form>

          <p className="mt-10 mb-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }
  export default Register;
