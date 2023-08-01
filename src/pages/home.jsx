import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CarouselComponent from "../components/Carousel";
import InstallPWA from "../components/Button";
import phone from "../assets/images/phone.png";

function HomePage() {
  // const [deferredPrompt, setDeferredPrompt] = useState(null);

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      console.log(deferredPrompt);
      // Save the event object in the state
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, [deferredPrompt]);

  const handleInstallClick = () => {
    console.log("working");
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA installed");
        }
        setDeferredPrompt(null); // Reset the deferredPrompt state after prompting
      });
    }
  };

  return (
    <div>
      {/* <Nav /> */}
      <NavBar />
      <section class="bg-white mt-10">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-indigo-700">
              Welcome to <br />
              NUESA Updates.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              As we embrace the spirit of continuous growth and development, we
              are delighted to share the latest achievements, milestones, and
              opportunities on the go.
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mb-4">
              <Link
                to="/register"
                className="text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-md px-10 py-2 text-center mr-2  dark:bg-indigo-600 dark:hover:bg-indigo-700"
              >
                Join
              </Link>

              <button
                className="bg-gray-200  font-medium rounded-lg text-md px-10 py-2 text-center md:mr-0 hover:bg-indigo-600 hover:text-white"
                onClick={() => {
                  handleInstallClick();
                }}
              >
                Download
              </button>
            </div>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            {/* <img src={hero} alt="heroimage"/> */}
            <CarouselComponent />
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div class="grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class=" lg:mt-0 lg:col-span-5 lg:flex order-last lg:order-first">
            {/* <img src={hero} alt="heroimage"/> */}
            <CarouselComponent />
          </div>
          <div class=" mr-auto xl:ml-auto place-self-center lg:col-span-7 order-first lg:order-last">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-indigo-700">
              Explore outstanding <br />
              brands & businesses.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Check Out brands and businesses by Nuesans. Each brand is customer
              centric and an embodiment of excellence, from cloth vendors to
              crypto exchnges Nuesans have got you covered.
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mb-5">
              <Link
                to="/discover"
                className="text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-md px-10 py-2 text-center mr-2  dark:bg-indigo-600 dark:hover:bg-indigo-700"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div class="grid max-w-screen-xl px-4 pt-10 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-indigo-600">
              Updates on the go{" "}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Don't want to go through the hassle of opening your browser, we've
              got you covered. Click the Download button to access all of these
              from your home screen.
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mb-4">
              <button className="bg-gray-200  font-medium rounded-lg text-md px-10 py-2 text-center md:mr-0 hover:bg-indigo-600 hover:text-white hidden sm:block">
                Download
              </button>
              {/* <InstallPWA/> */}
            </div>
          </div>
          <div class=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={phone} alt="heroimage" />
            {/* <CarouselComponent /> */}
          </div>
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 my-4 mx-auto xs:mx-10">
            <button className="bg-gray-200  font-medium rounded-lg text-md px-10 py-2 text-center md:mr-0 hover:bg-indigo-600 hover:text-white block sm:hidden">
              Download
            </button>
          </div>
        </div>
      </section>
      {/* <section class="hero">
          <div class="hero-center">
            <article class="hero-info">
              <h1>
                Realtime school updates in engineering.
                <p> We dey for u</p>
              </h1>
              <p>
                Connect with thousands of upcoming engineers and leaders at all
                levels Stripe’s app allow to to get accurate and up-to-date
                information from the horses mouth as quickly as possible.
              </p>
              <NavLink className="" to="/login">
                <button class="btn">Start now</button>
              </NavLink>
            </article>
            <article class="hero-images">
              <img src="./images/phone.svg" class="img" alt="" />
            </article>
          </div>
        </section> */}

      {/* <h1 className="mt-36 text-center">
        Page currently under construction
        </h1> */}
    </div>
  );
}

export default HomePage;
