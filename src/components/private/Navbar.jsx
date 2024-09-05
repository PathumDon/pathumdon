import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ";

  const toggle = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500 ">
        <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-0">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              <NavLink
                className="flex flex-shrink-0 items-center mr-4 "
                to="/admin-backend/index"
              >
                {/* <img className="h-10 w-auto" src={logo} alt="React Jobs" /> */}
                <span className="md:block text-white text-2xl font-bold ml-2">
                  Settings
                </span>
              </NavLink>

              <div className="md:ml-auto">
                <div className="md:flex space-x-2 hidden">
                  <NavLink to="/admin-backend/index" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink
                    to="/admin-backend/personal-info"
                    className={linkClass}
                  >
                    Personal Info
                  </NavLink>
                  <NavLink to="/admin-backend/education" className={linkClass}>
                    Education
                  </NavLink>
                  <NavLink to="/admin-backend/experiance" className={linkClass}>
                    Experience
                  </NavLink>

                  <NavLink
                    to="/admin-backend/achievements"
                    className={linkClass}
                  >
                    Achievements
                  </NavLink>

                  <NavLink
                    to="/admin-backend/social-links"
                    className={linkClass}
                  >
                    Social Links
                  </NavLink>
                  <NavLink to="/admin-backend/gallery" className={linkClass}>
                    Gallery
                  </NavLink>
                  <NavLink to="/admin-backend/skills" className={linkClass}>
                    Skills
                  </NavLink>
                  <NavLink to="/admin-backend/theme" className={linkClass}>
                    Theme
                  </NavLink>
                  <NavLink to="/admin-backend/messages" className={linkClass}>
                    Messages
                  </NavLink>

                  <NavLink to="/logout" className={linkClass}>
                    <div className="pt-1">
                      <FaSignOutAlt />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="text-white text-2xl mr-3">
                {" "}
                <button
                  onClick={toggle}
                  id="menu-btn"
                  type="button"
                  className={`z-40 block hamburger md:hidden focus:outline-none ${
                    menu ? "open" : ""
                  }`}
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`bg-indigo-700 border-b border-indigo-500 ${
          menu ? "hidden" : ""
        } pb-10`}
      >
        <div className="mx-6 sm:px-6 lg:px-8 ">
          <div className="flex items-center">
            <div className="flex flex-1">
              <div className="w-full">
                <div className="flex flex-col text-center mt-4">
                  <NavLink
                    to="/admin-backend/index"
                    className={linkClass}
                    onClick={toggle}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    to="/admin-backend/personal-info"
                    className={linkClass}
                  >
                    Personal Info
                  </NavLink>
                  <NavLink
                    to="/admin-backend/education"
                    className={linkClass}
                    onClick={toggle}
                  >
                    Education
                  </NavLink>
                  <NavLink
                    to="/admin-backend/experiance"
                    className={linkClass}
                    onClick={toggle}
                  >
                    Experience
                  </NavLink>

                  <NavLink
                    to="/admin-backend/achievements"
                    onClick={toggle}
                    className={linkClass}
                  >
                    Achievements
                  </NavLink>

                  <NavLink
                    to="/admin-backend/social-links"
                    onClick={toggle}
                    className={linkClass}
                  >
                    Social Links
                  </NavLink>
                  <NavLink
                    to="/admin-backend/gallery"
                    className={linkClass}
                    onClick={toggle}
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    to="/admin-backend/skills"
                    className={linkClass}
                    onClick={toggle}
                  >
                    Skills
                  </NavLink>
                  <NavLink
                    to="/admin-backend/theme"
                    className={linkClass}
                    onClick={toggle}
                  >
                    Theme
                  </NavLink>
                  <NavLink
                    to="/admin-backend/messages"
                    className={linkClass}
                    onClick={toggle}
                  >
                    Messages
                  </NavLink>

                  <NavLink
                    to="/admin-backend/logout"
                    onClick=""
                    className={linkClass}
                  >
                    <div
                      className="flex mx-auto w-full justify-center"
                      onClick={toggle}
                    >
                      <FaSignOutAlt />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
