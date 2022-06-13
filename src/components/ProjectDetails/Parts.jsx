import React from "react";
import partsPayImg from "../../assets/partsPay.jpg";
import partsBusiImg from "../../assets/partsBusi.jpg";
import partsAdminImg from "../../assets/partsAdmin.jpg";
import Carousel from "../Carousel";

const Parts = () => {
  return (
    <div className="project">
      {/* <div className="top-container flex justify-center gap-8 flex-wrap"> */}
      <div>
        <Carousel img1={partsPayImg} img2={partsBusiImg} img3={partsAdminImg} />

        <div className="container mx-auto mt-8">
          <div
            style={{ width: "700px" }}
            className="description max-w-full mx-auto"
          >
            <h2 className="text-2xl mb-3">Manufacturer Wholesaler App</h2>
            <p>
              In this website you can buy/sell any kind of technology spare
              parts. There is a section/route called dashboard where you can get
              all of your orders and cancel them. You can also pay your bill via
              credit card using stripe payment method. and with the help of
              admin panel you can have super power.
            </p>
            <ul className="mt-4" style={{ listStyleType: "square" }}>
              <li>Firebase Authentication</li>
              <li>Admin Dashboard</li>
              <li>Stripe Card Payment Method</li>
              <li>React Query</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="technologies text-center mt-5">
        <h2 className="text-xl mb-3">Technologies</h2>
        <div className=" flex justify-center gap-4 flex-wrap">
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            HTML
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            CSS
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            JavaScript
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            React
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            Node.js
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            Express
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            MongoDB
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            Stripe
          </div>
          <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
            Firebase
          </div>
        </div>
      </div>
      <div className="links flex gap-3 mt-4 justify-center">
        <a
          href="https://tariq-mobile-parts.web.app/"
          className="btn btn-sm btn-primary"
        >
          Live Site
        </a>
        <a
          href="https://github.com/programmertariq/tariq-mobile-parts"
          className="btn btn-sm btn-primary"
        >
          Client Repo
        </a>
        <a
          href="https://github.com/programmertariq/tariq-mobile-parts"
          className="btn btn-sm btn-primary"
        >
          Server Repo
        </a>
      </div>
    </div>
  );
};

export default Parts;
