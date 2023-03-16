import { React, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AdoptDropdown from "./AdoptDropdown";
import AdoptAccordion from "./AdoptAccordion";
import './header.css';

export default function Header() {
  const [showMessage, setShowMessage] = useState(false);
  window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};

  return (
    <div className='header border-blue-50'>
        <header className='flex justify-between items-center px-3 py-5 max-w-6xl mx-auto'>
            <a href="http://localhost:3000" className='logo text-2xl h-7 cursor-pointer'>Coldwater Rescue</a>
            <button className='md:hidden' onClick={() => setShowMessage(!showMessage)}>
              <hr className={showMessage ? "lineTop spin" : "lineTop"}></hr>
              <hr className={showMessage ? "lineMiddle spin" : "lineMiddle"}></hr>
              <hr className={showMessage ? "lineBottom spin" : "lineBottom"}></hr>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className='flex space-x-10'>
                <li className="centered-label">
                <AdoptDropdown />
              </li>
              <li>
                <a href="/mission" className="nav-button inline-flex justify-center rounded-md shadow-sm w-full px-4 py-2">
                  Mission</a>
              </li>
              <li>
                <a href="/needed" className="nav-button inline-flex justify-center rounded-md shadow-sm w-full px-4 py-2">
                  Needed</a>
              </li>
            </ul>
          </div>
        </header>
        <CSSTransition in={showMessage} timeout={300} classNames="side-slider" unmountOnExit>
          <div className="window">
            <ul className="list-reset flex flex-col lg:flex-row justify-center flex-1 items-center">
              <li className="py-1">
              <AdoptAccordion />
              </li>
              <li className="py-1 cursor-pointer accordion-link">
              <a href="/mission">Mission</a>
              </li>
              <li className="py-1 cursor-pointer accordion-link">
              <a href="/needed">Needed</a>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    )
  }