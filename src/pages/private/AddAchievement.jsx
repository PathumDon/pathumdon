import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../utils/api";

const AddAchievement = () => {
  const navigate = useNavigate();
  // const [achievements, setAchievements] = useState([]);
  const [achievement, setAchievement] = useState("");
  const [description, setDescription] = useState("");

  const createAchievement = (e) => {
    e.preventDefault();
    api
      .post("/api/achievements/", { achievement, description })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Achievement added successfuly");
          setAchievement("");
          setDescription("");
          navigate("/admin-backend/achievements");
        } else toast.error("Failed to make achivements.");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24 p-6">
          <div className="bg-white px-8 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-4" onSubmit={createAchievement}>
              <h1 className="text-3xl font-bold text-center mb-10">
                Add Achievement
              </h1>
              <a href=""></a>
              <div>
                <label
                  htmlFor="achievement"
                  className="block text-lg font-medium text-gray-700"
                >
                  Achievement
                </label>
                <input
                  type="text"
                  id="achievement"
                  name="achievement"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a achievement"
                  onChange={(e) => setAchievement(e.target.value)}
                  value={achievement}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-gray-700"
                >
                  Achievement details
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Achievement details"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>
              <div className=" flex flex-row items-center space-x-4 pt-10">
                <button
                  type="submit"
                  id="add-skill"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="add-skill"
                  onClick={() => navigate("/admin-backend/achievements/")}
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

export default AddAchievement;
