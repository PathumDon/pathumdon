import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";

const EditAchievement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [achievement, setAchievement] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch the achievement data when the component loads
  useEffect(() => {
    getAchievement();
  }, []);

  // Function to get the achievement data by id
  const getAchievement = () => {
    api
      .get(`/api/achievements/${id}/`)
      .then((res) => {
        setAchievement(res.data.achievement);
        setDescription(res.data.description);
        setLoading(false);
      })
      .catch((err) => {
        alert("Failed to fetch achievement data.");
        setLoading(false);
      });
  };

  // Function to update the achievement data
  const updateAchievement = (e) => {
    e.preventDefault();
    api
      .put(`/api/achievements/update/${id}/`, { achievement, description })
      .then((res) => {
        if (res.status === 200) {
          alert("Achievement updated successfully!");
          navigate("/admin-backend/achievements");
        } else {
          alert("Failed to update achievement.");
        }
      })
      .catch((err) => alert("Error: " + err));
  };

  // Display a loading message until the data is fetched
  if (loading) return <div>Loading...</div>;

  return (
    <section className="bg-indigo-50">
      <div className="flex flex-col items-center md:px-20 md:py-24">
        <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-10">
            Edit Achievement
          </h1>
          <form onSubmit={updateAchievement} className="space-y-6">
            <div>
              <label
                htmlFor="achievement"
                className="block text-sm font-medium text-gray-700"
              >
                Achievement
              </label>
              <input
                type="text"
                name="achievement"
                id="achievement"
                value={achievement}
                onChange={(e) => setAchievement(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={() => navigate("/admin-backend/achievements")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditAchievement;
