import React, { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import LoadingIndicator from "../../components/private/LoadingIndicator";
import "../../index.css";

function LoginPage({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/admin-backend/index");
      } else {
        navigate("/admin-backend/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink
                className="flex flex-shrink-0 items-center mr-4"
                to="/admin-backend"
              >
                {/* <img className="h-10 w-auto" src={logo} alt="React Jobs" /> */}
                <span className=" text-white text-2xl font-bold ml-2">
                  My Web Profile
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {loading && <LoadingIndicator />}
            {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              {name}
            </button>
            <div className="text-center mt-6">
              <a
                className="text-gray-400 hover:text-blue-500 "
                href="/admin-backend/forgot-password"
              >
                Forgot Password
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
