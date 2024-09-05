import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const EditEducationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [institute, setInstitute] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEducation();
  }, []);
  const getEducation = () => {
    api
      .get(`api/education/${id}/`)
      .then((res) => {
        setTitle(res.data.title);
        setInstitute(res.data.institute);
        setYear(res.data.year);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  };

  const updateEducation = (e) => {
    e.preventDefault();
    api
      .put(`api/education/update/${id}/`, { title, institute, year })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Successfuly edit the details");
          navigate("/admin-backend/education");
        } else {
          toast.error("Failed to edit the details");
        }
      })
      .catch((err) => toast.error(err));
  };
  if (loading) return <Spinner />;
  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-4" onSubmit={updateEducation}>
              <h1 className="text-3xl font-bold text-center mb-10">
                {" "}
                Add Education Details
              </h1>
              <a href=""></a>
              <div>
                <label
                  htmlFor="title"
                  className="block text-lg font-medium text-gray-700"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a course name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div>
                <label
                  htmlFor="institute"
                  className="block text-lg font-medium text-gray-700"
                >
                  Institute
                </label>
                <input
                  type="text"
                  id="institute"
                  name="institute"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a institute name"
                  onChange={(e) => setInstitute(e.target.value)}
                  value={institute}
                />
              </div>
              <div>
                <label
                  htmlFor="year"
                  className="block text-lg font-medium text-gray-700"
                >
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a year"
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                />
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
                  onClick={() => navigate("/admin-backend/education/")}
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

export default EditEducationPage;
