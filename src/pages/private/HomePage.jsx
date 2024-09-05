import React from "react";
import api from "../../utils/api";
import { useState, useEffect } from "react";

import PersonalInfoPage from "./PersonalInfoPage";
import EducationPage from "./EducationPage";
import ExperiancePage from "./ExperiancePage";
import Achievements from "./AchievementsPage";
import SocialLinksPage from "./SocialLinksPage";
import ImageUpload from "./ImageUpload";
import SkillsPage from "./SkillsPage";
import MessagesPage from "./MessagesPage";

const HomePage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  const sections = [
    {
      section: "Personal Info",
      details: <PersonalInfoPage />,
    },
    {
      section: "Education",
      details: <EducationPage />,
    },
    {
      section: "Experience",
      details: <ExperiancePage />,
    },
    {
      section: "Achievements",
      details: <Achievements />,
    },
    {
      section: "Social Links",
      details: <SocialLinksPage />,
    },
    {
      section: "Gallery",
      details: <ImageUpload />,
    },
    {
      section: "Skills",
      details: <SkillsPage />,
    },

    {
      section: "Messages",
      details: <MessagesPage />,
    },
  ];
  return (
    <>
      <div className="py-24 px-8 md:max-w-screen-lg mx-auto flex gap-12">
        <ul className="">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={expanded === index}
                onClick={() => toggle(index)}
              >
                <span className="flex-1 text-base-content">
                  {section.section}
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      expanded === index ? "rotate-90" : ""
                    }`}
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      expanded === index ? "" : "rotate-90"
                    }`}
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{ maxHeight: expanded === index ? "1000px" : "0" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {section.details}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <PersonalInfoPage />
      <EducationPage />
      <ExperiancePage />
      <Achievements /> */}
    </>
  );
};

export default HomePage;
