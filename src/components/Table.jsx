import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
const Table = () => {
  let location = useLocation();
  const [datas, setData] = useState([]);
  // const [path, setPath] = useState("");
  // setPath(location.pathname.split("/")[3]);
  const data = [
    {
      id: 1,
      label: "Telkom Turangga - Telkom Cijawura",
    },
    {
      id: 2,
      label: "Telkom Cijawura - Telkom Tegalega",
    },
    {
      id: 3,
      label: "Telkom Tegalega - Telkom Rajawali",
    },
    {
      id: 4,
      label: "Telkom Rajawali - Telkom Banjaran",
    },
    {
      id: 5,
      label: "Telkom Banjaran - Telkom A Yani",
    },
    {
      id: 6,
      label: "Telkom A Yani - Telkom Kopo",
    },
    {
      id: 7,
      label: "Telkom Kopo - Telkom Lembang",
    },
    {
      id: 8,
      label: "Telkom Lembang - Telkom Gegerkalong",
    },
    {
      id: 9,
      label: "Telkom Gegerkalong - Telkom Dago",
    },
    {
      id: 10,
      label: "Telkom Dago - Telkom Turangga",
    },
  ];
  const fecthQuery = async () => {
    const q = query(
      collection(db, "DATA"),
      where("central_Office", "==", data[location.pathname.split("/")[3]].label)
    );
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(newData);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "DATA", id));
      alert("Data berhasil dihapus");
    } catch (e) {
      alert("Data gagal dihapus");
    }
  };

  useEffect(() => {
    fecthQuery();
  }, [location.pathname]);

  console.log(datas);
  return (
    <div>
      <h1 className="text-center p-2 font-bold text-xl mb-4">
        {data[location.pathname.split("/")[3]].label}
      </h1>
      <table className="w-full table-auto border text-center">
        <thead>
          <tr className="border">
            <th className="border">No</th>
            <th className="border">User</th>
            <th className="border">Date time</th>
            <th className="border">Availability</th>
            <th className="border">BER</th>
            <th className="border">Capacity</th>
            <th className="border">Maintenance</th>
            <th className="border">Performance</th>
            <th className="border">SPM Max</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td className="border">{index + 1}</td>
              <td className="border">{data.user}</td>
              <td className="border">{data.datetime}</td>
              <td className="border">{data.availability}</td>
              <td className="border">{data.ber}</td>
              <td className="border">{data.capacity}</td>
              <td className="border">{data.maintenance}</td>
              <td className="border">{data.performance}</td>
              <td className="border">{data.quality_of_service}</td>
              <td className="border p-1">
                <button
                  className="bg-red-800 p-1"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
