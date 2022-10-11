import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import LeadForm from "../components/LeadForm";
import Offer from "../components/Offer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Script from "next/script";

import Consent from "../components/Consent";

import { getCookie } from "cookies-next";

export default function Home() {
  const consent = getCookie("localConsent");

  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-235369179-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
          gtag('js', new Date());
        
          gtag('config', 'UA-235369179-1');
        `}
      </Script>
      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}
      <Hero />
      <section id="learnmore" className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-8 md:py-16 lg:py-24 md:flex-row flex-col items-center">
          <h1 className="mb-8 text-3xl md:mb-4 md:hidden">
            Are you ready for a change?
          </h1>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
            <Image src="/ro.jpg" width={720} height={600} objectFit="cover" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
            <h1 className="mb-8 text-3xl md:mb-4 hidden md:block text-gray-900">
              Are you ready for a change?
            </h1>
            <p className="mb-4 text-gray-700 md:text-xl">
              Health and fitness should be accessible to all, and here at Dark
              Horse Strength &amp; Performance we believe we have found an
              effective, efficient solution to training that integrates into
              your lifestyle in a way that makes sense. No 6 week
              transformations or crash diets - effective information, in a
              professional setting.
            </p>
            <div className="flex justify-center w-full max-w-screen-xs md:w-auto">
              <a
                href="#signup"
                className=" text-center text-gray-700 uppercase font-light bg-[#FECE7E] border-0 py-2 px-6 focus:outline-none hover:bg-[#d6a551] text-lg w-full max-w-screen-sm"
              >
                Join our 30 day trial
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-8 md:py-16 lg:py-24 mx-auto flex flex-wrap justify-start xl:justify-between items-end">
          <div className="">
            <h1 className="mb-8 text-gray-900 text-3xl md:mb-4 md:text-3xl lg:text-4xl">
              After 30 days you will:
            </h1>
            <div className="flex items-center">
              <div className="p-6  w-24 md:w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 31.084"
                  className="w-10 md:w-14"
                >
                  <path
                    id="person-running-solid"
                    d="M39.313,13.6H36.642l-1.586-3.233a5.838,5.838,0,0,0-3.749-3.1L26.989,5.988a6.224,6.224,0,0,0-1.366-.161,5.807,5.807,0,0,0-3.537,1.2L19.673,8.882a1.942,1.942,0,0,0,2.368,3.078l2.406-1.844A2,2,0,0,1,25.632,9.7a1.533,1.533,0,0,1,.355.04l.888.258L24.6,15.314a3.77,3.77,0,0,0-.311,1.515A3.9,3.9,0,0,0,26.2,20.186l5.16,3.043-1.67,5.327a1.945,1.945,0,0,0,1.275,2.436,1.9,1.9,0,0,0,.576.091,1.937,1.937,0,0,0,1.852-1.366l1.928-6.132a2.88,2.88,0,0,0,.109-.785A2.94,2.94,0,0,0,34,20.285l-3.711-2.193,1.9-4.759,1.229,2.52a2.931,2.931,0,0,0,2.564,1.631h3.333a1.943,1.943,0,0,0,0-3.886Zm-6.8-7.771A2.914,2.914,0,1,0,29.6,2.914,2.915,2.915,0,0,0,32.513,5.828Zm-9.6,13.447L22,21.37H17.943a1.943,1.943,0,1,0,0,3.885h4.705a2.9,2.9,0,0,0,2.671-1.768l.539-1.245-.653-.379A5.731,5.731,0,0,1,22.909,19.276Z"
                    transform="translate(-16)"
                  />
                </svg>
              </div>

              <p className="mb-4 text-gray-900 md:text-2xl">Feel Better. </p>
            </div>
            <div className="flex items-center">
              <div className="p-6 w-24 md:w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 17.679"
                  className="w-10 md:w-14"
                >
                  <path
                    id="dumbbell-solid"
                    d="M4.1,34.526H2.21a.949.949,0,0,0-.947.947v4.1A1.263,1.263,0,0,0,1.227,42.1l.036,4.1a.946.946,0,0,0,.947.947H4.1a.945.945,0,0,0,.947-.947V35.473A.947.947,0,0,0,4.1,34.526ZM17.995,32H16.1a.949.949,0,0,0-.947.947v6.63H10.1v-6.63A.946.946,0,0,0,9.155,32H7.261a.949.949,0,0,0-.947.947V48.732a.947.947,0,0,0,.947.947H9.155a.945.945,0,0,0,.947-.947V42.1h5.051v6.63a.947.947,0,0,0,.947.947h1.894a.947.947,0,0,0,.947-.947V32.947A.946.946,0,0,0,17.995,32Zm6,7.577v-4.1a.947.947,0,0,0-.947-.947H21.152a.95.95,0,0,0-.947.947V46.206a.947.947,0,0,0,.947.947h1.894a.947.947,0,0,0,.947-.947V42.1a1.263,1.263,0,1,0,0-2.526Z"
                    transform="translate(0 -32)"
                  />
                </svg>
              </div>
              <p className="mb-4 text-gray-900 md:text-2xl">
                Feel Fitter &amp; Stronger{" "}
              </p>
            </div>
            <div className="flex items-center">
              <div className="p-6  w-24 md:w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 22.101"
                  className="w-10 md:w-14"
                >
                  <path
                    id="heart-pulse-solid"
                    d="M47.821,42.446l-2.458,4.908a.792.792,0,0,1-1.427-.031L41.127,41.09l-1.482,3.539-4.839,0,8.7,8.988a1.575,1.575,0,0,0,2.271,0l8.7-8.988H48.95Zm7.044-8.926a6.8,6.8,0,0,0-9.25.644l-.972,1-.972-1a6.8,6.8,0,0,0-9.249-.644,7.069,7.069,0,0,0-1.018,9.528h5.18l1.772-4.255a.8.8,0,0,1,1.457-.019l2.872,6.383,2.421-4.834a.793.793,0,0,1,1.414,0l1.365,2.726H55.88A7.068,7.068,0,0,0,54.865,33.521Z"
                    transform="translate(-32.016 -31.998)"
                  />
                </svg>
              </div>
              <p className="mb-4 text-gray-900 md:text-2xl">
                Be Sleeping Better{" "}
              </p>
            </div>
          </div>
          <div className="mb-2">
            <div className="flex items-center justify-start">
              <div className="p-6  w-24 md:w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 25.258"
                  className="w-10 md:w-14"
                >
                  <path
                    id="medal-solid"
                    d="M11.04,6.453,7.36.383A.671.671,0,0,0,6.728,0H.8A.789.789,0,0,0,.149,1.242L5.64,9.081A10.2,10.2,0,0,1,11.04,6.453Zm1.593,1.441a8.683,8.683,0,1,0,8.683,8.683A8.68,8.68,0,0,0,12.634,7.893Zm4.563,7.76-1.869,1.825.438,2.578a.564.564,0,0,1-.82.592l-2.313-1.215L10.32,20.646a.564.564,0,0,1-.82-.592l.438-2.578L8.069,15.651a.569.569,0,0,1,.317-.969l2.584-.376,1.155-2.342a.564.564,0,0,1,1.011,0L14.3,14.306l2.584.376A.568.568,0,0,1,17.2,15.653ZM24.429,0h-5.89a.789.789,0,0,0-.677.383L14.223,6.407a10.172,10.172,0,0,1,5.4,2.633L25.116,1.2A.77.77,0,0,0,24.429,0Z"
                    transform="translate(-0.005)"
                  />
                </svg>
              </div>
              <p className="mb-4 text-gray-900 md:text-2xl">
                Be Feeling More Confident
              </p>
            </div>
            <div className="flex items-center">
              <div className="p-6  w-24 md:w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 14.031"
                  className="w-10 md:w-14"
                >
                  <path
                    id="battery-half-solid"
                    d="M12.628,105.822H4.209v-5.612h8.419ZM0,99.508A3.507,3.507,0,0,1,3.508,96H20.345a3.507,3.507,0,0,1,3.508,3.508v.7a1.4,1.4,0,0,1,1.4,1.4v2.806a1.4,1.4,0,0,1-1.4,1.4v.7a3.507,3.507,0,0,1-3.508,3.508H3.508A3.507,3.507,0,0,1,0,106.523Zm3.508-.7a.7.7,0,0,0-.7.7v7.015a.7.7,0,0,0,.7.7H20.345a.7.7,0,0,0,.7-.7V99.508a.7.7,0,0,0-.7-.7Z"
                    transform="translate(0 -96)"
                  />
                </svg>
              </div>
              <p className="mb-4 text-gray-900 md:text-2xl">Have More Energy</p>
            </div>
            <div className="flex items-center">
              <div className="p-6 w-24 md:w-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 36.732"
                  className="w-10 h-12 md:w-14 md:h-14"
                >
                  <path
                    id="child-reaching-solid"
                    d="M33.212,4.592A4.592,4.592,0,1,1,28.621,0,4.593,4.593,0,0,1,33.212,4.592Zm-7.2,7.619a10.852,10.852,0,0,0,2.619.416,8.455,8.455,0,0,0,7.088-3.845l1.306-2a2.3,2.3,0,1,1,3.845,2.508l-1.3,1.994A13.065,13.065,0,0,1,34.36,15.9V34.436a2.3,2.3,0,0,1-4.592,0V27.549h-2.3v6.887a2.3,2.3,0,0,1-4.592,0V15.884a12.759,12.759,0,0,1-5.1-4.541l-1.4-2.03a2.3,2.3,0,1,1,3.82-2.55l1.4,2.1a8.483,8.483,0,0,0,4.217,3.286.939.939,0,0,1,.2.065Z"
                    transform="translate(-15.994)"
                  />
                </svg>
              </div>
              <p className="mb-4 text-gray-900 md:text-2xl pl-2 md:pl-0">
                Be Surrounded by a Supportive &amp; Like-Minded Community{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Offer />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 lg:py-24 mx-auto">
          <div className="mb-8">
            <h1 className="mb-8 text-gray-900 text-3xl md:mb-4 md:text-3xl lg:text-4xl">
              What you will get{" "}
            </h1>
          </div>
          <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  <strong>Unlimited</strong> Personal Training{" "}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  <strong>Unlimited</strong> Class Access{" "}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Personal Goal Setting &amp; Strategy Session{" "}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Nutrition Support{" "}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">Expert Guidance</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium underline">
                  Everything you need to move forward with your journey!{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm product="landing" />
      <section>
        <footer className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <img src="/logo.svg" alt="logo" className="h-12" />
            </a>
            <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
              © {new Date().getFullYear()} Dark Horse Strength and Performance
            </p>
          </div>
        </footer>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
      />
      <Consent />
    </div>
  );
}
