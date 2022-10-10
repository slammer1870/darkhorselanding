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
      className="container mx-auto my-12 px-4 text-gray-900 md:my-20"
    >
      <div className="w-full mb-8">
        <h5 className="mb-8 text-3xl md:text-4xl md:mb-4">
          What others have had to say
        </h5>
        <p className="mb-4 text-gray-700 md:text-xl">
          Check out what some of our members have had to say about us{" "}
        </p>
        <p className="text-gray-700 md:text-xl">
          We have a dedicated facility, purpose built to get you started on your
          fitness journey.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
        <div className="mx-auto aspect-video h-full w-full max-w-screen-md opacity-100">
          <iframe
            src="https://www.youtube.com/embed/ofE8AZ5zinI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        </div>
        <div className="mx-auto aspect-video h-full w-full max-w-screen-md opacity-100">
          <iframe
            src="https://www.youtube.com/embed/hVJqqZooUvo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
      {video && (
        <div className="fixed top-0 left-0 z-10 flex h-full w-full bg-black bg-opacity-90 p-4 ">
          <button
            className="absolute h-screen w-screen"
            onClick={handleVideo}
          ></button>
          <div className="relative z-20 mx-auto my-auto w-full max-w-screen-md bg-white md:p-0"></div>
        </div>
      )}
    </div>
  );
};

export default Offer;
