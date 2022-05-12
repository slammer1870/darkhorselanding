import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src="darkBlack.png" className="w-14" />
            </a>
          </div>
        </header>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-8 md:py-16 lg:py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
            <Image src="/ro.jpg" width={720} height={600} objectFit="cover" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Are you ready to be our next success story?
            </h1>
            <p className="mb-8 leading-relaxed">
              We will help you get healthy, lean, fit, strong, feel more
              confident and we have the results to prove it. We have helped
              hundreds of people like you transform their bodies time and time
              again, regardless of their fitness level.
            </p>
            <div className="flex justify-center w-full max-w-screen-xs md:w-auto">
              <button
                type="button"
                className=" text-center text-gray-700 uppercase font-light bg-[#FECE7E] border-0 py-2 px-6 focus:outline-none hover:bg-[#d6a551] text-lg w-full max-w-screen-sm"
              >
                I want to get fit
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 lg:py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                Moon hashtag pop-up try-hard offal truffaut
              </h1>
              <div className="leading-relaxed">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0">
            <Image src="/gym.jpg" width={900} height={450} objectFit="cover" />
          </div>
          <section className="text-gray-600 body-font"></section>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 lg:py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900 mb-20">
            Raw Denim Heirloom Man Braid Selfies Wayfarers
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 22.101"
                  className="w-10"
                >
                  <path
                    id="heart-pulse-solid"
                    d="M47.821,42.446l-2.458,4.908a.792.792,0,0,1-1.427-.031L41.127,41.09l-1.482,3.539-4.839,0,8.7,8.988a1.575,1.575,0,0,0,2.271,0l8.7-8.988H48.95Zm7.044-8.926a6.8,6.8,0,0,0-9.25.644l-.972,1-.972-1a6.8,6.8,0,0,0-9.249-.644,7.069,7.069,0,0,0-1.018,9.528h5.18l1.772-4.255a.8.8,0,0,1,1.457-.019l2.872,6.383,2.421-4.834a.793.793,0,0,1,1.414,0l1.365,2.726H55.88A7.068,7.068,0,0,0,54.865,33.521Z"
                    transform="translate(-32.016 -31.998)"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-4 h-4 ml-2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 17.679"
                  className="w-10"
                >
                  <path
                    id="dumbbell-solid"
                    d="M4.1,34.526H2.21a.949.949,0,0,0-.947.947v4.1A1.263,1.263,0,0,0,1.227,42.1l.036,4.1a.946.946,0,0,0,.947.947H4.1a.945.945,0,0,0,.947-.947V35.473A.947.947,0,0,0,4.1,34.526ZM17.995,32H16.1a.949.949,0,0,0-.947.947v6.63H10.1v-6.63A.946.946,0,0,0,9.155,32H7.261a.949.949,0,0,0-.947.947V48.732a.947.947,0,0,0,.947.947H9.155a.945.945,0,0,0,.947-.947V42.1h5.051v6.63a.947.947,0,0,0,.947.947h1.894a.947.947,0,0,0,.947-.947V32.947A.946.946,0,0,0,17.995,32Zm6,7.577v-4.1a.947.947,0,0,0-.947-.947H21.152a.95.95,0,0,0-.947.947V46.206a.947.947,0,0,0,.947.947h1.894a.947.947,0,0,0,.947-.947V42.1a1.263,1.263,0,1,0,0-2.526Z"
                    transform="translate(0 -32)"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-4 h-4 ml-2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center mb-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.256 31.084"
                  className="w-10"
                >
                  <path
                    id="person-running-solid"
                    d="M39.313,13.6H36.642l-1.586-3.233a5.838,5.838,0,0,0-3.749-3.1L26.989,5.988a6.224,6.224,0,0,0-1.366-.161,5.807,5.807,0,0,0-3.537,1.2L19.673,8.882a1.942,1.942,0,0,0,2.368,3.078l2.406-1.844A2,2,0,0,1,25.632,9.7a1.533,1.533,0,0,1,.355.04l.888.258L24.6,15.314a3.77,3.77,0,0,0-.311,1.515A3.9,3.9,0,0,0,26.2,20.186l5.16,3.043-1.67,5.327a1.945,1.945,0,0,0,1.275,2.436,1.9,1.9,0,0,0,.576.091,1.937,1.937,0,0,0,1.852-1.366l1.928-6.132a2.88,2.88,0,0,0,.109-.785A2.94,2.94,0,0,0,34,20.285l-3.711-2.193,1.9-4.759,1.229,2.52a2.931,2.931,0,0,0,2.564,1.631h3.333a1.943,1.943,0,0,0,0-3.886Zm-6.8-7.771A2.914,2.914,0,1,0,29.6,2.914,2.915,2.915,0,0,0,32.513,5.828Zm-9.6,13.447L22,21.37H17.943a1.943,1.943,0,1,0,0,3.885h4.705a2.9,2.9,0,0,0,2.671-1.768l.539-1.245-.653-.379A5.731,5.731,0,0,1,22.909,19.276Z"
                    transform="translate(-16)"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-4 h-4 ml-2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 lg:py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 975.036 975.036"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-[#FECE7E] mt-8 mb-6" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 lg:py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form method="get" id="i4f54x">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-300 hover:bg-[#d6a551] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-[#FECE7E] border-0 py-2 px-8 focus:outline-none hover:bg-[#d6a551] rounded text-lg"
              >
                Button
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </form>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 lg:py-24 mx-auto">
          <div className="mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium  title-font text-gray-900 mb-4">
              Raw Denim Heirloom Man Braid
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
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
                  Authentic Cliche Forage
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
                  Kinfolk Chips Snackwave
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
                  Coloring Book Ethical
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
                  Typewriter Polaroid Cray
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
                  Pack Truffaut Blue
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
                  The Catcher In The Rye
                </span>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-[#FECE7E] border-0 py-2 px-8 focus:outline-none hover:bg-[#d6a551] rounded text-lg">
            Button
          </button>
        </div>
      </section>

      <section>
        <footer className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <img src="/logo.svg" alt="logo" className="h-12" />
            </a>
            <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
              © {new Date().getFullYear()} Dark Horse Strength and Performance
            </p>
            <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
}
