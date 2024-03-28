import React from "react";
import bgImg from "../../assets/pngwing.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="hero bg-[#1313130D] container mx-auto mt-4 md:mt-12 rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-10 lg:justify-around lg:space-x-60">
          <div className="text-center lg:text-left space-y-4">
            <h1 className="text-4xl md:text-nowrap lg:text-5xl font-bold font-serif">
              Books to freshen up
              <br />
              your bookshelf
            </h1>
            <Link
              to="/books"
              className="btn btn-ghost text-xl font-semibold bg-primary text-white"
            >
              View The List
            </Link>
          </div>
          <div>
            <img src={bgImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
