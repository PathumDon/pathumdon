import React from "react";
import api from "../../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [personal_info, setPersonalInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPersonalInfo();
  }, []);
  const getPersonalInfo = () => {
    api
      .get("/api/personal-info/")
      .then((res) => res.data)
      .then((data) => {
        setPersonalInfo(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => alert(err));
  };
  if (loading) return <Spinner />;
  return (
    <>
      <section>
        <div className="container md:px-0 px-8 max-w-screen-xl mx-auto text-center pt-12">
          <div className="flex space-x-6">
            <h1 className="md:text-4xl text-2xl">Personal Info</h1>
            <button
              onClick={() => navigate(`/admin-backend/personal-info/edit/${1}`)}
              type="button"
              id="add-skill"
              className="mr-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit Data
            </button>
          </div>

          <div>
            {personal_info.map((info) => (
              <div key={info.id}>
                <div className="mt-10 text-left items-center">
                  <p className="py-2 px-4">Heading</p>
                  <p className="py-2 px-4 border-b text-left text-xl">
                    {info.heading}
                  </p>

                  <p className="py-2 px-4">Hero Title</p>
                  <p className="py-2 px-4 border-b text-xl">
                    {info.hero_title}
                  </p>

                  <p className="py-2 px-4">Tag Line</p>
                  <p className="py-2 px-4 border-b text-xl">{info.tag_line}</p>

                  <p className="py-2 px-4">Full Name</p>
                  <p className="py-2 px-4 border-b text-xl">{info.full_name}</p>

                  <p className="py-2 px-4">Phone</p>
                  <p className="py-2 px-4 border-b text-xl">{info.phone}</p>

                  <p className="py-2 px-4">Email</p>
                  <p className="py-2 px-4 border-b text-xl">{info.email}</p>

                  <p className="py-2 px-4">About</p>
                  <p className="py-2 px-4 border-b text-xl">{info.about}</p>

                  <p className="py-2 px-4">Logo</p>
                  <p className="py-2 px-4 border-b text-xl">
                    <img
                      src={info.logo}
                      alt="Logo"
                      className="h-16 w-16 object-cover"
                    />
                  </p>

                  <p className="py-2 px-4">Hero Image</p>
                  <p className="py-2 px-4 border-b">
                    <img
                      src={info.hero_image}
                      alt="Hero-image"
                      className="h-16 w-16 object-cover"
                    />
                  </p>

                  <p className="py-2 px-4">About Image</p>
                  <p className="py-2 px-4 border-b">
                    <img
                      src={info.about_image}
                      alt="About-image"
                      className="h-16 w-16 object-cover"
                    />
                  </p>

                  <p className="py-2 px-4">CV</p>
                  <p className="py-2 px-4 border-b">
                    <a className="text-blue-400 underline" href={info.file}>
                      {info.file ? "Download CV" : ""}
                    </a>
                  </p>
                  <div className="py-2 px-4 border-b text-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
