import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        id="myVideo"
        className="object-cover w-full h-full fixed top-0 left-0 z-[-1]"
      >
        <source
          src="https://res.cloudinary.com/<your_cloud_name>/video/upload/v<video_version>/<video_path>.mp4"
          type="video/mp4"
        />
      </video> */}

      {/* Text Overlay */}
      <div className="flex justify-center items-center h-full flex-wrap">
        <div className="text-center">
          <div className="flex justify-around mb-5">
            <h1 className="hover-text-stroke text-[120px] font-semibold">Go</h1>
            <h1 className="hover-text-stroke text-[120px] font-semibold">
              Beyond
            </h1>
          </div>
          <a
            href="packages.html"
            className="text-white text-lg border-2 border-white rounded-[50px] py-[10px] px-[20px] inline-block transition duration-500 hover:backdrop-blur-[8px]"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
