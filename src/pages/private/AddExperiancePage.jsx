import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";

const AddExperiancePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");

  const createExperiance = (e) => {
    e.preventDefault();
    api
      .post("api/experiance/add/", {
        title,
        company,
        duration,
        description,
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Experiance added successfuly");
          setTitle("");
          setCompany("");
          setDuration("");
          setDescription("");
          setLogo("");
          navigate("/admin-backend/experiance");
        } else {
          toast.error("Failed to Experiance");
        }
      });
  };
  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-4" onSubmit={createExperiance}>
              <h1 className="text-3xl font-bold text-center mb-10">
                Add Experiance
              </h1>
              <a href=""></a>
              <div>
                <label
                  htmlFor="title"
                  className="block text-lg font-medium text-gray-700"
                >
                  Title
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
                  htmlFor="company"
                  className="block text-lg font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a company name"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </div>
              <div>
                <label
                  htmlFor="duration"
                  className="block text-lg font-medium text-gray-700"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a duration"
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-gray-700"
                >
                  Job Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div>
                <label
                  htmlFor="logo"
                  className="block text-lg font-medium text-gray-700"
                >
                  Company Logo
                </label>
                <div className="mt-2 py-2 px-2 flex items-center">
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => setLogo(e.target.files[0])} // Save file
                  />
                  <label
                    htmlFor="logo"
                    className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Choose file
                  </label>
                  <span
                    id="logoFileName"
                    className="ml-3 text-lg text-gray-500"
                  >
                    {logo ? logo.name : "No file chosen"}
                  </span>
                </div>
              </div>
              <div className=" flex flex-row items-center space-x-4 pt-10">
                <button
                  type="submit"
                  id="add-experiance"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="add-experiance"
                  onClick={() => navigate("/admin-backend/experiance/")}
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

export default AddExperiancePage;
