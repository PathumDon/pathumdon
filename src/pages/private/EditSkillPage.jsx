import { useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../components/Spinner";

const EditSkillPage = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills();
  }, []);
  const getSkills = () => {
    api
      .get("/api/skills/")
      .then((res) => res.data)
      .then((data) => {
        setSkills(data);
      });
  };
  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-4">
              <h1 className="text-3xl font-bold text-center mb-10">Skills</h1>
              <div>
                <label
                  htmlFor="skill"
                  className="block text-lg font-medium text-gray-700"
                >
                  Skill
                </label>
                <input
                  type="text"
                  id="skill"
                  name="skill"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a skill"
                />
              </div>
              <div>
                <label
                  htmlFor="percentage-1"
                  className="block text-lg font-medium text-gray-700"
                >
                  Proficiency
                </label>
                <input
                  type="number"
                  id="percentage"
                  name="percentage"
                  min="0"
                  max="100"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter proficiency 0 - 100"
                />
              </div>
              <div>
                <button
                  type="button"
                  id="add-skill"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditSkillPage;
