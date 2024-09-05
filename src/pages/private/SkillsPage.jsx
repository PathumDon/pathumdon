import { useState, useEffect } from "react";
import api from "../../utils/api";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getSkills();
  }, []);
  const getSkills = () => {
    api
      .get("/api/skills/")
      .then((res) => res.data)
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const deleteSkills = (id) => {
    api
      .delete(`api/skills/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          toast.success("Skill Successfuly deleted");
          getSkills();
        } else {
          toast.error("Failed to delete");
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
            <h1 className="md:text-4xl text-2xl">Skills</h1>
            <a
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              href="/admin-backend/social-links/add"
            >
              Add New
            </a>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 my-8">
            {skills.map((skill) => (
              <div
                className="shadow-lg rounded-lg text-left p-6 space-y-3 flex-wrap"
                key={skill.id}
              >
                <div className="flex justify-between items-end">
                  {/* <p className="text-sm pb-2">Skill</p> */}
                  <p className="font-semibold mr-4">
                    {skill.name} :{" "}
                    <span className="text-red-700">{skill.proficiency}%</span>
                  </p>
                  <p className="font-semibold"></p>
                  <div>
                    <button
                      type="button"
                      id="add-skill"
                      className="mt-1 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() =>
                        navigate(`/admin-backend/skills/edit/${skill.id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      id="add-skill"
                      className="mt-1 ml-4 inline-flex items-center px-4 py-1 text-xs font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => deleteLinks(skill.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
