import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";
import Spinner from "../../components/Spinner";

const ImageUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUploads();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post(
        "api/gallery/",
        { title, description, image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      .then((res) => {
        if (res.status === 201) {
          setTitle("");
          setDescription("");
          setImage(null);
          toast.success("Uploaded successfuly");
          getUploads();
        } else {
          toast.error("Failed to upload image");
        }
      })
      .catch((err) => toast.error(err));
  };

  const getUploads = () => {
    api
      .get("api/gallery/")
      .then((res) => res.data)
      .then((data) => {
        setImages(data);
        setLoading(false);
        console.log(data);
      });
  };

  const deleteImage = (id) => {
    api
      .delete(`api/gallery/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("successfuly deleted");
          getUploads();
        } else {
          toast.error("failed to delte");
        }
      })
      .catch((err) => toast.error(err));
  };
  if (loading) return <Spinner />;
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center md:px-20 md:py-24 m-6">
          <div className="bg-white px-10 py-8 mb-4 shadow-md rounded-xl border md:m-0  w-full max-w-full md:max-w-3xl">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold text-center mb-10">
                Upload Image
              </h1>
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
                  placeholder="Enter a title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="mt-2 py-2 px-2 block w-full rounded-md border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter a description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-lg font-medium text-gray-700"
                >
                  Upload Image
                </label>
                <div className="mt-2 py-2 px-2 flex items-center">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <label
                    htmlFor="image"
                    className="cursor-pointer bg-white py-2 px-3 border rounded-md shadow-sm text-lg leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Choose file
                  </label>
                  <span
                    id="imageFileName"
                    className="ml-3 text-lg text-gray-500"
                  >
                    {image ? image.name : "No file chosen"}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4 pt-10">
                <button
                  type="submit"
                  id="upload-image"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 max-w-6xl md:mx-auto m-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex relative bg-gray-900 items-center justify-center"
            >
              <img src={image.image} alt="" className="w-full h-auto" />
              <button
                onClick={() => deleteImage(image.id)}
                type="button"
                className="absolute top-2 right-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageUpload;
