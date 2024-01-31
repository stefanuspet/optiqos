import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      sessionStorage.setItem("token", uuidv4());
      sessionStorage.setItem("email", user.email);
      alert("Login berhasil " + user.email);
      navigate("/dashboard/about?");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login Error:", errorCode, errorMessage);
      alert("Login gagal");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard/about");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1 className="font-extrabold text-white text-3xl mb-4">
        OptiQoS server
      </h1>
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm">
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => onChangeEmail(e)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => onChangePass(e)}
            required
          />
          <div>
            <NavLink
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Belum punya akun? Register
            </NavLink>
          </div>
          <button
            className="bg-[#555]"
            type="submit"
            onClick={(e) => handleLogin(e)}
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
