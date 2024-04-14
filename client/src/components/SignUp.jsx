import { Link } from "react-router-dom";
import {
  GoArrowDown,
  GoArrowDownLeft,
  GoArrowRight,
  GoArrowUpRight,
} from "react-icons/go";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormData({});
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="borderout my-2 backtheme2">
      <div className="m-3">
        <div className="p-3 borderout sm:gap-5 flex-col gap-2 w-full backtheme">
          <div className="flex gap-3">
            <div className="p-3 borderout flex gap-3 w-full md:w-72 items-center bg-indigo-800">
              <p className="text-center font-semibold">SignUp Below</p>
              <GoArrowDown size={16} />
            </div>
            <Link
              to="/contact"
              className="p-3 borderout flex gap-3 w-full md:w-72 items-center bg-indigo-800"
            >
              <p className="text-center font-semibold">
                Go Back to SignIn page
              </p>
              <GoArrowDownLeft size={16} />
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col my-5 w-full md:flex-row gap-3 bg-transparent"
          >
            <input
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email || ""}
              className="bg-transparent p-3 borderout"
            />
            <input
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password || ""}
              className="bg-transparent p-3 borderout"
            />
            <input
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Full Name"
              value={formData.name || ""}
              className="bg-transparent p-3 borderout"
            />
            <div>
              <button
                type="submit"
                className="p-3 my-1 borderout backtheme hover:bg-green-700 transition duration-300"
              >
                Sign Up
              </button>
              {error && <p className="text-red-500 verysmall">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
