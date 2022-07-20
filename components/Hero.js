import Link from "next/link";

const Hero = () => {
  return (
    <div className="mb-12  min-h-screen  bg-gray-900 bg-opacity-80 bg-[url('/mo.jpeg')] bg-cover bg-center bg-blend-overlay flex flex-col justify-center">
      <div className="container row-span-1 mx-auto flex flex-col items-start justify-center px-4 pt-12 lg:row-span-2">
        <h1 className="mb-2 text-lg uppercase text-gray-100 md:text-xl">
          Dark Horse Strength and Performance
        </h1>
        <h2 className="mb-2 text-3xl font-medium uppercase text-white md:text-4xl">
          Do you want to become our next success story?
        </h2>
        <h3 className="text-xl mb-8 text-[#FECE7E] md:text-2xl">
          Join a group of driven, like-minded individuals in a fun, social
          training environment.
        </h3>
        <div className="flex w-full text-center text-white text-lg max-w-screen-sm">
          <a
            className="bg-[#FECE7E] w-full px-4 py-2 text-gray-600"
            href="#signup"
          >
            Get Started
          </a>
          <a
            className="bg-white w-full ml-4 px-4 py-2 text-gray-600"
            href="#learnmore"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
