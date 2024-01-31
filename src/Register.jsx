import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password harus lebih dari 6 karakter");
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        alert("Registrasi berhasil " + user.email);
        navigate("/");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration Error:", errorCode, errorMessage);
      }
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard/about");
    }
  });
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
        <h2>Register</h2>
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
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              Sudah punya akun? Login
            </NavLink>
          </div>
          <button
            className="bg-[#555]"
            type="submit"
            onClick={(e) => handleRegister(e)}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
