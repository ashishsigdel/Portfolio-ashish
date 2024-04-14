import { Link } from "react-router-dom";
import { GoArrowDown, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { signInSuccess, signOutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import MoreInfo from "./MoreInfo.jsx";

export default function Contact() {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: result.user.email,
          name: result.user.displayName,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
      } else {
        dispatch(signInSuccess(data));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await fetch("api/user/signout");
      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
      } else {
        dispatch(signOutSuccess());
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
    <div className="bg-gray-950 borderout p-1 sm:p-3 sm:mx-3 flex flex-col">
      <div className="m-1 sm:m-3">
        <div className="flex items-center gap-1 p-2 borderout backtheme">
          <div className="flex gap-1 items-center hover:text-blue-400 transition duration-500 p-2 borderout">
            <p className="text-center font-semibold">Contact</p>
            <GoArrowDown size={16} />
          </div>
          <Marquee className="m-2">
            <p className="text-center font-semibold verysmall text-gray-400">
              {" "}
              ⌘ Have a question, project inquiry, or just want to say hello?
              Feel free to drop me a message using the form below. I'll get back
              to you promptly. Looking forward to connecting! ⌘ Have a question,
              project inquiry, or just want to say hello? Feel free to drop me a
              message using the form below. I'll get back to you promptly.
              Looking forward to connecting!
            </p>
          </Marquee>
        </div>

        {currentUser ? (
          <div className="flex sm:flex-row flex-col gap-4 items-center">
            <div className="flex-1">
              <div className="w-full p-3 backtheme my-3 items-center borderout">
                <p className="text-center font-semibold text-3xl my-4 text-gray-400 w-full">
                  Get in touch{" "}
                </p>
                <form className="flex flex-col gap-3">
                  <div>
                    <span className="my-1 verysmall">Name</span>
                    <input
                      type="text"
                      placeholder={currentUser.name}
                      className="bg-transparent p-3 w-full borderout"
                      disabled
                    />
                  </div>
                  <div>
                    <span className="my-1 verysmall">Email</span>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder={currentUser.email}
                        className="bg-transparent p-3 w-full borderout"
                        disabled
                      />
                      <button
                        onClick={handleSignOut}
                        className="py-3 px-2 bg-red-600 borderout whitespace-nowrap"
                      >
                        Use different email
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="my-1 verysmall">Your message</span>
                    <textarea
                      id="message"
                      className="bg-transparent w-full borderactive p-3"
                      placeholder={`Hey ${currentUser.name}, Write message here...`}
                      required
                    />
                  </div>
                  <button className="p-3 h-12 whitespace-nowrap borderout backtheme hover:bg-green-800 transition duration-500">
                    Send message
                  </button>
                </form>
              </div>
            </div>
            <div className="flex-1 w-full">
              <MoreInfo />
            </div>
          </div>
        ) : (
          <div className="flex sm:flex-row flex-col gap-4 items-center my-3">
            <div className="flex-1">
              <div className="w-full p-3 backtheme my-3 items-center borderout">
                <p className="text-center font-semibold text-3xl my-4 text-gray-400 w-full">
                  Get in touch{" "}
                </p>
                <form className="flex flex-col gap-3">
                  <div>
                    <span className="my-1 verysmall">Name</span>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-transparent p-3 w-full borderout"
                      disabled
                    />
                  </div>
                  <div>
                    <span className="my-1 verysmall">Email</span>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="bg-transparent p-3 w-full borderout"
                        disabled
                      />
                      <button
                        onClick={handleSignIn}
                        className="py-3 px-2 bg-green-600 borderout whitespace-nowrap"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="my-1 verysmall">Your message</span>
                    <textarea
                      id="message"
                      className="bg-transparent w-full borderactive p-3"
                      placeholder="You have to sign in..."
                      disabled
                    />
                  </div>
                  <button
                    disabled
                    className="p-3 h-12 whitespace-nowrap borderout backtheme transition duration-500"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
            <div className="flex-1 w-full">
              <MoreInfo />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
