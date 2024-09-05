import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const Achievements = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);
  const [achievement, setAchievement] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAchievements();
  }, []);

  const getAchievements = () => {
    api
      .get("/api/achievements/")
      .then((res) => res.data)
      .then((data) => {
        setAchievements(data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  };

  const deleteAchievement = (id) => {
    api

      .delete(`/api/achievements/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("Achivement deleted!");
        } else toast.error("Failed to delete achivement.");
        getAchievements();
      })
      .catch((error) => toast.error(error));
  };
  if (loading) return <Spinner />;
  return (
    <>
      <section>
        <div className="container md:px-0 px-8 max-w-screen-xl mx-auto text-center pt-12">
          <div className="flex space-x-8 items-center">
            <h1 className="md:text-4xl text-2xl">Achievements</h1>
            <a
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              href="/admin-backend/achievements/add"
            >
              Add New
            </a>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 my-8">
            {achievements.map((achievements) => (
              <div
                className="shadow-lg rounded-lg text-left p-8 space-y-3 flex-wrap"
                key={achievements.id}
              >
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">Achivement</p>
                  <p className="font-semibold">{achievements.achievement}</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">Decription</p>
                  <p className="font-semibold">{achievements.description}</p>
                </div>

                <div className="px-4 py-2">
                  <button
                    type="button"
                    id="add-skill"
                    className="mt-1 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() =>
                      navigate(
                        `/admin-backend/achievements/update/${achievements.id}`
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    id="add-skill"
                    className="mt-1 ml-4 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => deleteAchievement(achievements.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
