import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
const SocialLinksPage = () => {
  const navigate = useNavigate();
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSocialPlatforms();
  }, []);
  const getSocialPlatforms = () => {
    api
      .get("api/social-links/")
      .then((res) => res.data)
      .then((data) => {
        setPlatforms(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => toast.error(err));
  };

  const deleteLinks = (id) => {
    api
      .delete(`api/social-links/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("Item Deleted successful");
          getSocialPlatforms();
        }
      })
      .catch((err) => toast.error(err));
  };
  if (loading) return <Spinner />;
  return (
    <>
      <section>
        <div className="container md:px-0 px-8 max-w-screen-xl mx-auto text-center pt-12">
          <div className="flex space-x-6 items-center">
            <h1 className="md:text-4xl text-2xl">Social Platforms</h1>
            <a
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              href="/admin-backend/social-links/add"
            >
              Add New
            </a>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 my-8">
            {platforms.map((platform) => (
              <div
                className="shadow-lg rounded-lg text-left p-8 space-y-3 flex-wrap"
                key={platform.id}
              >
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">Platform</p>
                  <p className="font-semibold">{platform.name}</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm pb-2">URL</p>
                  <a href="{platform.link}" className="text-sm text-blue-500">
                    {platform.link}
                  </a>
                </div>

                <div className="px-4 py-2">
                  <button
                    type="button"
                    id="add-skill"
                    className="mt-1 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() =>
                      navigate(
                        `/admin-backend/social-links/edit/${platform.id}`
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    id="add-skill"
                    className="mt-1 ml-4 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => deleteLinks(platform.id)}
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

export default SocialLinksPage;
