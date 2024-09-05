import React from "react";

const Navbar = () => {
  return (
    <>
      <section id="hero">
        {/* Nav bar container */}
        <div className="bg-white mx-auto py-8">
          {/* Nav bar */}
          <nav className="container flex md:px-0 px-14 max-w-screen-xl mx-auto items-center justify-between font-bold bg-white">
            <div className="logo text-3xl text-red-500">
              <a href="#">Pathum Don</a>
            </div>

            <div className="md:flex text-blue-900 text-xl space-x-6 hidden">
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#home">
                  Home
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#intro">
                  My Intro
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#qualification">
                  Qualification
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#achievement">
                  Achievement
                </a>
              </div>
              <div className="group">
                <a className="hover:text-red-500 px-3" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>

            {/* Mobile menu */}
            <div
              id="menu"
              className="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-blue-900 uppercase bg-white"
            >
              <a href="#home" className="hover:text-pink-500">
                Home
              </a>
              <a href="#intro" className="hover:text-pink-500">
                My Intro
              </a>
              <a href="#qualification" className="hover:text-pink-500">
                Qualification
              </a>
              <a href="#achievement" className="hover:text-pink-500">
                Achievement
              </a>
              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>
            </div>
          </nav>
        </div>

        {/* Hero container */}
        <div className="bg-gray-100">
          <div className="container md:px-0 px-14 max-w-screen-xl flex md:flex-row space-x-10 items-center mx-auto h-screen flex-col justify-center">
            <div className="flex flex-col space-y-12 md:space-y-14">
              <h2 className="md:text-2xl text-xl text-red-500 font-semibold">
                Hi, I am
              </h2>
              <h1 className="md:text-6xl text-4xl">Pathum Don</h1>
              <h2 className="text-gray-600 md:text-3xl text-xl">
                Data Analyst | Web Developer
              </h2>
              <p className="md:text-xl text-md text-gray-600">
                Streamlining Telecommunications Operations with Data-Driven
                Automation and Customer-Centric Solutions
              </p>

              <div className="flex md:flex-row flex-col md:space-x-11 space-x-0 md:space-y-0 space-y-10">
                <button className="text-white text-lg font-bold bg-red-500 rounded-full px-8 py-4 hover:scale-110 duration-200">
                  Download CV
                </button>
                <button className="text-red-500 text-lg font-bold border border-red-500 rounded-full px-8 py-4 hover:scale-110 duration-200">
                  Contact Me
                </button>
              </div>
            </div>

            <div
              className="hidden md:block w-[400px] h-[400px] rounded-full bg-cover bg-top bg-no-repeat bg-local"
              style={{ backgroundImage: "url('/images/Pic.jpg')" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
