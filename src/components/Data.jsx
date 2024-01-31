import React, { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Data = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "DATA", id));
      alert("Data berhasil dihapus");
    } catch (e) {
      alert("Data gagal dihapus");
    }
  };

  useEffect(() => {
    const fetchData = onSnapshot(collection(db, "DATA"), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return () => {
      fetchData();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 p-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-[#808080] rounded-md p-4 flex justify-between"
        >
          <table>
            <tbody>
              <tr>
                <td style={{ width: "20%" }}>
                  <strong>Availability</strong>
                </td>
                <td>:</td>
                <td>{item.availability}</td>
              </tr>
              <tr>
                <td>
                  <strong>Ber</strong>
                </td>
                <td>:</td>
                <td>{item.ber}</td>
              </tr>
              <tr>
                <td>
                  <strong>Capacity</strong>
                </td>
                <td>:</td>
                <td>{item.capacity}</td>
              </tr>
              <tr>
                <td>
                  <strong>DateTime</strong>
                </td>
                <td>:</td>
                <td>{item.datetime}</td>
              </tr>
              <tr>
                <td>
                  <strong>Maintenance</strong>
                </td>
                <td>:</td>
                <td>{item.maintenance}</td>
              </tr>
              <tr>
                <td>
                  <strong>Performance</strong>
                </td>
                <td>:</td>
                <td>{item.performance}</td>
              </tr>
              <tr>
                <td>
                  <strong>Quality_of_Service</strong>
                </td>
                <td>:</td>
                <td>{item.quality_of_service}</td>
              </tr>
              <tr>
                <td>
                  <strong>User</strong>
                </td>
                <td>:</td>
                <td>{item.user}</td>
              </tr>
            </tbody>
          </table>
          <button className="w-fit h-fit" onClick={() => handleDelete(item.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Data;
