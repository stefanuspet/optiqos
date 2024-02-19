import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "chart.js/auto";
import {
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import ChartComp from "./ChartComp";
import Table from "./Table";

const Data = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "DATA", id));
      alert("Data berhasil dihapus");
    } catch (e) {
      alert("Data gagal dihapus");
    }
  };

  const fecthQuery = async () => {
    const q = query(
      collection(db, "DATA"),
      where("central_Office", "==", "Telkom Rajawali - Telkom Banjaran")
    );
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(newData);
  };

  useEffect(() => {
    fecthQuery();
  }, []);

  console.log(data);

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-4">
      <div
        className="text-center py-10 px-5 border border-black mb-10 cursor-pointer"
        onClick={() => navigate("/dashboard/table/0")}
      >
        <ChartComp
          name={"Telkom Turangga - Telkom Cijawura"}
          color={"rgba(250, 192, 19, 0.8)"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/1")}
      >
        <ChartComp
          name={"Telkom Cijawura - Telkom Tegalega"}
          color={"#064FF0"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/2")}
      >
        <ChartComp
          name={"Telkom Tegalega - Telkom Rajawali"}
          color={"rgba(250, 192, 19, 0.8)"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/3")}
      >
        <ChartComp
          name={"Telkom Rajawali - Telkom Banjaran"}
          color={"#064FF0"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/4")}
      >
        <ChartComp
          name={"Telkom Banjaran - Telkom A Yani"}
          color={"rgba(250, 192, 19, 0.8)"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/5")}
      >
        <ChartComp name={"Telkom A Yani - Telkom Kopo"} color={"#064FF0"} />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/6")}
      >
        <ChartComp
          name={"Telkom Kopo - Telkom Lembang"}
          color={"rgba(250, 192, 19, 0.8)"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/7")}
      >
        <ChartComp
          name={"Telkom Lembang - Telkom Gegerkalong"}
          color={"#064FF0"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/8")}
      >
        <ChartComp
          name={"Telkom Gegerkalong - Telkom Dago"}
          color={"rgba(250, 192, 19, 0.8)"}
        />
      </div>
      <div
        className="text-center py-10 px-5 border mb-10 border-black cursor-pointer"
        onClick={() => navigate("/dashboard/table/9")}
      >
        <ChartComp name={"Telkom Dago - Telkom Turangga"} color={"#064FF0"} />
      </div>
    </div>
  );
};

export default Data;
