import React from "react";
import moshifyImg from "../assets/moshify.jpg";
import partsImg from "../assets/parts.JPG";
import messyImg from "../assets/messy.jpg";
import todoImg from "../assets/todo.jpg";
import dashImg from "../assets/dash.JPG";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects mt-16">
      <h2 className="text-center text-6xl mt-20 mb-16">Projects</h2>
      <div className="project">
        <div className="top-container flex justify-center gap-8 flex-wrap">
          <img src={moshifyImg} alt="" />
          <div className="description w-96 max-w-full">
            <h2 className="text-2xl mb-3">Moshified Landing Page</h2>
            <p>
              Moshified is one of the most beautiful website (Landing Page). Not
              only it is beautiful but also it is a site where users can choose
              there desired plans to get products. This has a features section
              where many features of your company displayed.
            </p>
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
          <Link className="btn btn-sm btn-secondary" to="moshify">
            Details
          </Link>
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
      <div className="divider"></div>
      <div className="project my-8">
        <div className="top-container flex flex-row-reverse justify-center gap-8 flex-wrap">
          <img src={partsImg} alt="" />
          <div className="description w-96 max-w-full text-right">
            <h2 className="text-2xl mb-3">Manufacturer Wholesaler App</h2>
            <p>
              In this website you can buy/sell any kind of technology spare
              parts. There is a section/route called dashboard where you can get
              all of your orders and cancel them. You can also pay your bill via
              credit card using stripe payment method. and with the help of
              admin panel you can have super power.
            </p>
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
          <Link className="btn btn-sm btn-secondary" to="parts">
            Details
          </Link>

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
      <div className="divider"></div>
      <div className="project">
        <div className="top-container flex justify-center gap-8 flex-wrap">
          <img src={messyImg} alt="" />
          <div className="description w-96 max-w-full">
            <h2 className="text-2xl mb-3">Choose Products</h2>
            <p>
              You can choose a product/laptop and add to cart. then you can
              remove the item from the cart. and you cannot choose more than 4
              items from the cart. lastly you can also clear all items from the
              cart.
            </p>
          </div>
        </div>
        <div className="technologies text-center mt-5">
          <h2 className="text-xl mb-3">Technologies</h2>
          <div className=" flex justify-center gap-4">
            <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
              React.js
            </div>
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
              Bootstrap
            </div>
          </div>
        </div>
        <div className="links flex gap-3 mt-4 justify-center">
          <Link className="btn btn-sm btn-secondary" to="moshify">
            Details
          </Link>

          <a
            href="https://messy-chooser.netlify.app/"
            className="btn btn-sm btn-primary"
          >
            Live Site
          </a>
          <a
            href="https://github.com/programmertariq/messy-chooser"
            className="btn btn-sm btn-primary"
          >
            Client Repo
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="project my-8">
        <div className="top-container flex flex-row-reverse justify-center gap-8 flex-wrap">
          <img src={todoImg} alt="" />
          <div className="description w-96 max-w-full text-right">
            <h2 className="text-2xl mb-3">To-Do List App</h2>
            <p>
              You can signUP and login in this todo list app. Every user can
              save their own todo list. and every indivisual user can delete
              their todo and they also can mark their todo list as completed.
            </p>
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
              React.js
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
              Firebase
            </div>
            <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
              Heroku
            </div>
          </div>
        </div>
        <div className="links flex gap-3 mt-4 justify-center">
          <Link className="btn btn-sm btn-secondary" to="moshify">
            Details
          </Link>

          <a
            href="https://todo-d1553.web.app/"
            className="btn btn-sm btn-primary"
          >
            Live Site
          </a>
          <a
            href="https://github.com/programmertariq/todo-job"
            className="btn btn-sm btn-primary"
          >
            Client Repo
          </a>
          <a
            href="https://github.com/programmertariq/todo-job-api"
            className="btn btn-sm btn-primary"
          >
            Server Repo
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="project">
        <div className="top-container flex justify-center gap-8 flex-wrap">
          <img src={dashImg} alt="" />
          <div className="description w-96 max-w-full">
            <h2 className="text-2xl mb-3">Theme Products Analysis</h2>
            <p>
              Here You can analyze your products. There is a section of customer
              review. And most beautiful chart examples in inside dashboard
              using 'Recharts'.
            </p>
          </div>
        </div>
        <div className="technologies text-center mt-5">
          <h2 className="text-xl mb-3">Technologies</h2>
          <div className=" flex justify-center gap-4">
            <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
              React.js
            </div>
            <div className="border-solid border-2 border-accent rounded-full px-4 py-1">
              Recharts
            </div>
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
              Bootstrap
            </div>
          </div>
        </div>
        <div className="links flex gap-3 mt-4 justify-center">
          <Link className="btn btn-sm btn-secondary" to="moshify">
            Details
          </Link>

          <a
            href="https://the-theme-you-love.netlify.app/"
            className="btn btn-sm btn-primary"
          >
            Live Site
          </a>
          <a
            href="https://github.com/programmertariq/product-analysis-assignment"
            className="btn btn-sm btn-primary"
          >
            Client Repo
          </a>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Projects;
