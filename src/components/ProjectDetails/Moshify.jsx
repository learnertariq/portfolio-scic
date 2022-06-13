import React from "react";
import moshifyImg from "../../assets/moshify.jpg";
import moshifyBannerImg from "../../assets/moshifyBanner.jpg";
import moshifyFooterImg from "../../assets/moshifyFooter.JPG";
import Carousel from "../Carousel";

const Moshify = () => {
  return (
    <div className="project">
      {/* <div className="top-container flex justify-center gap-8 flex-wrap"> */}
      <div>
        <Carousel
          img1={moshifyImg}
          img2={moshifyBannerImg}
          img3={moshifyFooterImg}
        />

        <div className="container mx-auto mt-8">
          <div
            style={{ width: "700px" }}
            className="description max-w-full mx-auto"
          >
            <h2 className="text-2xl mb-3">Moshified Landing Page</h2>
            <p>
              Moshified is one of the most beautiful website (Landing Page). Not
              only it is beautiful but also it is a site where users can choose
              there desired plans to get products. This has a features section
              where many features of your company displayed.
            </p>
            <ul className="mt-4" style={{ listStyleType: "square" }}>
              <li>Beautiful Landing Page</li>
              <li>Product Plan</li>
              <li>Customer Review</li>
              <li>Beautiful Footer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="technologies text-center mt-5">
        <h2 className="text-xl mb-3">Technologies</h2>
        <div className=" flex justify-center gap-4">
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            HTML
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            CSS
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            JavaScript
          </div>
        </div>
      </div>
      <div className="links flex gap-3 mt-4 justify-center">
        <a
          href="https://programmertariq.github.io/moshify/"
          className="btn btn-sm btn-primary"
        >
          Live Site
        </a>
        <a
          href="https://github.com/programmertariq/moshify/"
          className="btn btn-sm btn-primary"
        >
          Client Repo
        </a>
      </div>
    </div>
  );
};

export default Moshify;
