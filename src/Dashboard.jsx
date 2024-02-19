import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Data from "./components/Data";
import About from "./components/About";
import Formula from "./components/Formula";
import InputData from "./components/InputData";
import Table from "./components/Table";
const Dashboard = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(true);
  let location = useLocation();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-full h-dvh bg-white overflow-y-hidden">
      <nav className="flex justify-between text-white bg-[#800000] place-items-center py-2 px-4">
        <div className="flex">
          <IoMenu
            size={40}
            className="cursor-pointer"
            onClick={() => handleSideBar()}
          />
          <h1 className="text-3xl font-bold px-5">Server OptiQoS Dashboard</h1>
        </div>
        <button className="w-20 p-1 m-0" onClick={handleLogout}>
          logout
        </button>
      </nav>
      <div className="h-full flex">
        <div
          className={
            sideBar
              ? "w-1/4 bg-[#303030] text-white"
              : "w-1/4 hidden bg-[#303030] text-white"
          }
        >
          <ul className="flex flex-col py-5 px-3">
            <li
              className="mt-3 px-2 flex place-items-center cursor-pointer"
              onClick={() => navigate("/dashboard/about")}
            >
              <IoMdArrowDroprightCircle />
              <p className="px-1">About OPTIQOS</p>
            </li>
            <li
              className="mt-3 px-2 flex place-items-center cursor-pointer"
              onClick={() => navigate("/dashboard/formula")}
            >
              <IoMdArrowDroprightCircle />
              <p className="px-1">Formula</p>
            </li>
            <li
              className="mt-3 px-2 flex place-items-center cursor-pointer"
              onClick={() => navigate("/dashboard/data")}
            >
              <IoMdArrowDroprightCircle /> <p className="px-1">Data</p>
            </li>
            <li
              className="mt-3 px-2 flex place-items-center cursor-pointer"
              onClick={() => navigate("/dashboard/inputData")}
            >
              <IoMdArrowDroprightCircle /> <p className="px-1">Input Data</p>
            </li>
          </ul>
        </div>
        <div className={sideBar ? "w-3/4 p-3" : "w-3/4 mx-auto p-3"}>
          <div className="max-h-[93%] overflow-y-scroll no-scrollbar">
            {location.pathname === "/dashboard/data" && <Data />}
            {location.pathname === "/dashboard/about" && <About />}
            {location.pathname === "/dashboard/formula" && <Formula />}
            {location.pathname === "/dashboard/inputData" && <InputData />}
            {location.pathname === "/dashboard/table/0" && <Table />}
            {location.pathname === "/dashboard/table/1" && <Table />}
            {location.pathname === "/dashboard/table/2" && <Table />}
            {location.pathname === "/dashboard/table/3" && <Table />}
            {location.pathname === "/dashboard/table/4" && <Table />}
            {location.pathname === "/dashboard/table/5" && <Table />}
            {location.pathname === "/dashboard/table/6" && <Table />}
            {location.pathname === "/dashboard/table/7" && <Table />}
            {location.pathname === "/dashboard/table/8" && <Table />}
            {location.pathname === "/dashboard/table/9" && <Table />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
