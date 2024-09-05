import React from "react";
import { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddSkillPage = () => {
  const navigate = useNavigate();
  const [skill, setSkill] = useState("");
  const [proficiency, setProficiency] = useState("");

  const createSkill = (e) => {
    e.preventDefault();
    api
      .post("/api/skills/", { name: skill, proficiency })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Skill added Successfuly");
          setSkill("");
          setProficiency("");
        } else {
          toast.error("Failed to add skill");
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-4" onSubmit={createSkill}>
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
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
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
                  onChange={(e) => setProficiency(e.target.value)}
                  value={proficiency}
                />
              </div>
              <div className=" flex flex-row items-center space-x-4 pt-10">
                <button
                  type="submit"
                  id="add-skill"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add New
                </button>
                <button
                  type="button"
                  id="add-skill"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={() => navigate("/admin-backend/skills")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddSkillPage;
