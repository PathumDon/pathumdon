import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const EducationPage = () => {
  const navigate = useNavigate();
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getEducation();
  }, []);

  const getEducation = () => {
    api
      .get("api/education/")
      .then((res) => res.data)
      .then((data) => {
        setEducations(data);
        setLoading(false);
      });
  };

  const deleteEducation = (id) => {
    api
      .delete(`api/education/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("Item deleted successfuly");
          getEducation();
        } else {
          toast.error("Failed to delete the item");
          getEducation();
        }
      })
      .catch((err) => toast.error(err));
  };
  if (loading) return <Spinner />;
  return (
    <>
      <div className="container md:px-0 px-8 max-w-screen-xl mx-auto text-center pt-12">
        <div className="flex space-x-6 items-center">
          <h1 className="md:text-4xl text-2xl">Education</h1>
          <a
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="/admin-backend/education/add"
          >
            Add New
          </a>
        </div>

        <div className="flex md:flex-row flex-col md:space-x-8 space-y-8 md:space-y-0 my-8">
          {educations.map((education) => (
            <div
              className="shadow-lg rounded-lg text-left p-8 space-y-3"
              key={education.id}
            >
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm pb-2">Course Name</p>
                <p className="font-semibold">{education.title}</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm pb-2">Institute</p>
                <p className="font-semibold">{education.institute}</p>
              </div>
              <div className="pb-3 border-b border-gray-200">
                <p className="text-sm pb-2">Year</p>
                <p className="font-semibold">{education.year}</p>
              </div>

              <div className="px-4 py-2">
                <button
                  type="button"
                  id="add-skill"
                  className="mt-1 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() =>
                    navigate(`/admin-backend/education/edit/${education.id}`)
                  }
                >
                  Edit
                </button>
                <button
                  type="button"
                  id="add-skill"
                  className="mt-1 ml-4 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => deleteEducation(education.id)}
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

export default EducationPage;
