import React, { useState } from "react";
import Image from "next/image";

const Offer = () => {
  const [video, setVideo] = useState();

  const handleVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };
  return (
    <div
      id="offer"
      className="container mx-auto my-12 px-4 text-gray-900 md:my-20 md:flex md:items-center"
    >
      <h5 className="mb-8 text-3xl md:mb-4 md:hidden">What others have had to say</h5>
      <div
        className="relative mb-4 flex aspect-video md:w-1/2"
        onClick={handleVideo}
      >
        <Image src="/throw.jpeg" alt="mo" layout="fill" objectFit="cover" />
        <div className="z-10 mx-auto flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="217"
            height="34"
            viewBox="0 0 217 34"
            className="z-10"
          >
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M8,0l8,13H0Z"
              transform="translate(26 9) rotate(90)"
              fill="#fff"
            />
            <g
              id="Ellipse_8"
              data-name="Ellipse 8"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            >
              <circle cx="17" cy="17" r="17" stroke="none" />
              <circle cx="17" cy="17" r="16.5" fill="none" />
            </g>
            <text
              id="Watch_the_video_1_minute_"
              data-name="Watch the video (1 minute)"
              transform="translate(45 22)"
              fill="#fff"
              fontSize="14"
              fontFamily="HelveticaNeue-Medium, Helvetica Neue"
              fontWeight="500"
            >
              <tspan x="0" y="0">
                Watch the video (1 minute)
              </tspan>
            </text>
          </svg>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-14">
        <h5 className="mb-8 hidden text-3xl md:mb-4 md:block md:text-3xl lg:text-4xl">
          What others have had to say
        </h5>
        <p className="mb-4 text-gray-700 md:text-xl">
Check out what some of our members have had to say about us        </p>
        <p className="text-gray-700 md:text-xl">
          We have a dedicated facility, purpose built to get you started on your
          fitness journey.
        </p>
      </div>
      {video && (
        <div className="fixed top-0 left-0 z-10 flex h-full w-full bg-black bg-opacity-90 p-4 ">
          <button
            className="absolute h-screen w-screen"
            onClick={handleVideo}
          ></button>
          <div className="relative z-20 mx-auto my-auto w-full max-w-screen-md bg-white md:p-0">
            <div className="mx-auto aspect-video h-full w-full max-w-screen-md opacity-100">
              <iframe
                src="https://www.youtube.com/embed/ofE8AZ5zinI?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
