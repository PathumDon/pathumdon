import React from "react";
import api from "../../utils/api";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";

const ColorPickerPage = () => {
  const [primary, setPrimaryColor] = useState("#000000");
  const [secondary, setSecondaryColor] = useState("#000000");
  const [tertiary, setTertiaryColor] = useState("#000000");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getColors();
  }, []);

  const getColors = () => {
    api
      .get(`/api/colors/${1}/`)
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setPrimaryColor(data.primary);
        setSecondaryColor(data.secondary);
        setTertiaryColor(data.tertiary);
      })
      .catch((err) => alert(err));
  };

  const updateColors = (e) => {
    e.preventDefault();
    api
      .put(`api/colors/${1}/`, { primary, secondary, tertiary })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Colors changed successfuly");
        } else {
          toast.error("Failed to change color");
        }
      })
      .catch((err) => toast.success(err));
  };
  // Function to update color hex code input
  const handleColorChange = (setColor, value) => {
    // Validate hex color format
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      setColor(value); // Valid hex, update state
    }
  };

  if (loading) return <Spinner />;
  return (
    <>
      <section className="bg-indigo-50">
        <div className="flex flex-col items-center md:px-20 md:py-24">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0 w-full max-w-full md:max-w-3xl">
            <form className="space-y-6" onSubmit={updateColors}>
              <h1 className="text-3xl font-bold text-center mb-10">
                Select Colors
              </h1>

              <div>
                <label
                  htmlFor="primary-color"
                  className="block text-lg font-medium text-gray-700"
                >
                  Primary Color
                </label>
                <input
                  type="color"
                  id="primary-color"
                  name="primary-color"
                  className="mt-2 w-full h-10 p-0 border-none cursor-pointer rounded-md"
                  value={primary}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                />
                <input
                  type="text"
                  id="primary-hex"
                  name="primary-hex"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={primary}
                  onChange={(e) =>
                    handleColorChange(setPrimaryColor, e.target.value)
                  }
                  placeholder="Primary Color Hex Code"
                />
              </div>

              {/* Secondary Color */}
              <div>
                <label
                  htmlFor="secondary-color"
                  className="block text-lg font-medium text-gray-700"
                >
                  Secondary Color
                </label>
                <input
                  type="color"
                  id="secondary-color"
                  name="secondary-color"
                  className="mt-2 w-full h-10 p-0 border-none cursor-pointer rounded-md"
                  value={secondary}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                />
                <input
                  type="text"
                  id="secondary-hex"
                  name="secondary-hex"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={secondary}
                  onChange={(e) =>
                    handleColorChange(setSecondaryColor, e.target.value)
                  }
                  placeholder="Secondary Color Hex Code"
                />
              </div>

              {/* Tertiary Color */}
              <div>
                <label
                  htmlFor="tertiary-color"
                  className="block text-lg font-medium text-gray-700"
                >
                  Tertiary Color
                </label>
                <input
                  type="color"
                  id="tertiary-color"
                  name="tertiary-color"
                  className="mt-2 w-full h-10 p-0 border-none cursor-pointer rounded-md"
                  value={tertiary}
                  onChange={(e) => setTertiaryColor(e.target.value)}
                />
                <input
                  type="text"
                  id="tertiary-hex"
                  name="tertiary-hex"
                  className="mt-2 py-2 px-2 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={tertiary}
                  onChange={(e) =>
                    handleColorChange(setTertiaryColor, e.target.value)
                  }
                  placeholder="Tertiary Color Hex Code"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-row items-center space-x-4 pt-10">
                <button
                  type="submit"
                  id="submit-colors"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColorPickerPage;
