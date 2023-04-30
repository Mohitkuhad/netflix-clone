import React, { useState } from "react";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="bg-[url('https://res.cloudinary.com/dlqpxszzo/image/upload/v1679340120/NetflixClone/homeBg_xsesfd.jpg')] ">
      <div className="w-screen h-[90vh] p-10 justify-center items-center flex ">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dlqpxszzo/image/upload/v1679339417/NetflixClone/logo_evhgwd.png"
            alt="Netflix Clone Header Logo"
            className="w-32 absolute top-10 left-10"
          />
        </Link>
        <div className="w-[500px] flex flex-col gap-10 bg-[rgba(0,0,0,0.8)] roundded p-20">
          <h1 className="text-white text-4xl font-bold">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 rounded-lg px-5 bg-[rgba(0,0,0,0.7)] border border-lightgrey text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 rounded-lg px-5 bg-[rgba(0,0,0,0.7)] border border-lightgrey text-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full h-14 rounded-lg bg-netflixRed text-white text-xl font-bold"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" defaultChecked />
              <p className="text-white">Remember me</p>
            </div>
            <p className="text-white">Need help?</p>
          </div>
          <p className="text-white">
            New to netflix?
            <Link to="/">
              <span className="text-white font-bold"> Sign up now.</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="w-screen bg-[rgba(0,0,0,0.8)]">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
