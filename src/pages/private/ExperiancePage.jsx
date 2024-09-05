import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const ExperiancePage = () => {
  const navigate = useNavigate();
  const [experiance, setExperiance] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompanay] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExperiance();
  }, []);
  const getExperiance = () => {
    api
      .get("api/experiance/")
      .then((res) => res.data)
      .then((data) => {
        setExperiance(data);
        setLoading(false);
      })
      .catch((err) => toast.success(err));
  };

  const deleteExperiance = (id) => {
    api
      .delete(`api/experiance/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("Item deleted successfuly");
        } else {
          toast.error("Failed to delete the item");
        }
      })
      .catch((err) => toast.error(err));
  };
  if (loading) return <Spinner />;
  return (
    <>
      <div className="container md:px-0 px-8 max-w-screen-xl mx-auto text-center pt-10">
        <div className="flex space-x-6 items-center">
          <h1 className="md:text-4xl text-2xl">Experiance</h1>
          <a
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="/admin-backend/experiance/add"
          >
            Add New
          </a>
        </div>

        <div className="flex md:flex-row flex-col md:space-x-8 space-y-8 md:space-y-0 my-8">
          {experiance.map((experiance) => (
            <div
              className="shadow-lg rounded-lg text-left p-8 space-y-3 md:w-1/3"
              key={experiance.id}
            >
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm pb-2">Title</p>
                <p className="font-semibold">{experiance.title}</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm pb-2">Company</p>
                <p className="font-semibold">{experiance.company}</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm pb-2">Duration</p>
                <p className="font-semibold">{experiance.duration}</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm pb-2">Description</p>
                <p className="font-semibold">{experiance.description}</p>
              </div>

              <div className="px-4 py-2">
                <button
                  type="button"
                  id="add-skill"
                  className="mt-1 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() =>
                    navigate(`/admin-backend/experiance/edit/${experiance.id}`)
                  }
                >
                  Edit
                </button>
                <button
                  type="button"
                  id="add-skill"
                  className="mt-1 ml-4 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => deleteExperiance(experiance.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperiancePage;
