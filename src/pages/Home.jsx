import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import './home.css';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route) {
      if (route === location.pathname) {
        return true;
      }
    }
  return (
    <>
    <Carousel />
      <div className="about-us py-8">
          <div className="container mx-auto px-4">
            <h1 className="py-8">Who We Are</h1>
              <p className="py-10">Coldwater Shelter works tirelessly to create a better life for pets and their owners 
                through empathy, education and working together.
              </p>
            </div>
          <button className={`button-link cursor-pointer py-2 px-5 ${pathMatchRoute("/mission") }`} onClick={() => navigate("/mission")}>Learn More</button>
        </div>
        <div className="home-card container mx-auto ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 container mx-auto px-4">
            <div className="flex justify-center p-6 text-center rounded-xl">
              <div className="max-w-sm rounded overflow-hidden shadow-none py-4 px-5">
              <img className="w-full h-64" alt="black cat" src="https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/black-cat.jpg?alt=media&token=2a5df35f-2827-468a-a2b9-1246ab662357"/>
                <h3 className="text-center">It's Cat Month</h3>
                <p className="text-gray-700 text-justify">
                With 20% off all cat adoptions this month, it's a purrrfect time to welcome a feline to their forever home.
                  </p>
                <div className="text-center py-2">
                  <button className={`cursor-pointer py-2 px-5 ${pathMatchRoute("/cats") }`} onClick={() => navigate("/cats")}>Adoptions</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-6 text-center rounded-xl">
              <div className="max-w-sm rounded overflow-hidden shadow-none py-4 px-5">
              <img className="w-full h-64" alt="needed" src="https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/needed-2.jpg?alt=media&token=0621ce14-210c-4525-8f6c-fbe9c317425c" />
                <h3 className="text-center">Needed</h3>
                <p className="text-gray-700 text-justify">
                  Wanna help? Check our list of most needed items to see how you can brighten someone's day.
                  </p>
                <div className="text-center py-2">
                  <button className={`cursor-pointer  py-2 px-5 ${pathMatchRoute("/needed") }`} onClick={() => navigate("/needed")}>Needed</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
