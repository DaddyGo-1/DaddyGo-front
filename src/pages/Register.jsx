import React, { useState } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import logo from '../assets/images/Nuesa.jpg';

const Register = (props) => {
  const [user, setUser] = useState({ name: "", email: "", password: "", username: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().required().min(5).label("Username"),
    id: Joi.string().required().min(2).label("id"),
    password: Joi.string().required().min(5).label("Password"),
    text: Joi.string().required().min(5).label("Text"),
    job: Joi.string().required().min(5).max(15).label("Job"),
  };

  const { signUp, Uid } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const result = Joi.validate(user, schema, {
      abortEarly: false,
    });

    if (!result.error) return null;

    // const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(user.email, user.password);

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
      setErrors(error)
    }
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
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
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
                Register
              </button>
            </div>
            <hr className="my-6 border-gray-300 w-full" />

            <button
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
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
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
