import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../utils/api";

const AddSocialLinkPage = () => {
  const navigate = useNavigate();
  const [link, setSocialLink] = useState("");
  const [name, setPlatform] = useState("");

  const createSocialLink = (e) => {
    e.preventDefault();
    api
      .post("api/social-links/add/", { link, name })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Social Platform added successfuly");
          setSocialLink("");
          setPlatform("");
        } else {
          toast.error("Failed");
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-4" onSubmit={createSocialLink}>
              <h1 className="text-3xl font-bold text-center mb-10">
                Add Social Media Links
              </h1>

              <div>
                <label
                  htmlFor="social-link"
                  className="block text-lg font-medium text-gray-700"
                >
                  Social Media URL
                </label>
                <input
                  type="url"
                  id="social-link"
                  name="social-link"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a social media link"
                  onChange={(e) => setSocialLink(e.target.value)}
                  value={link}
                />
              </div>

              <div>
                <label
                  htmlFor="platform"
                  className="block text-lg font-medium text-gray-700"
                >
                  Platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setPlatform(e.target.value)}
                  value={name}
                >
                  <option value="">Select a platform</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="YouTube">YouTube</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Snapchat">Snapchat</option>
                  <option value="Pinterest">Pinterest</option>
                  <option value="Reddit">Reddit</option>
                </select>
              </div>

              <div className="flex flex-row items-center space-x-4 pt-10">
                <button
                  type="submit"
                  id="add-social-link"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="cancel"
                  onClick={() => navigate("/admin-backend/social-links")}
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

export default AddSocialLinkPage;
