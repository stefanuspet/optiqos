import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ChartComp = ({ name, color }) => {
  const [datas, setData] = useState([]);
  const [averageData, setAverageData] = useState([]);

  const fetchQuery = async () => {
    const q = query(
      collection(db, "DATA"),
      where("central_Office", "==", name)
    );
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(newData);
  };

  const calculateAverageData = (data) => {
    // Mengelompokkan data berdasarkan tanggal
    const groupedData = data.reduce((result, current) => {
      const date = current.id.split(" ")[0]; // Menggunakan tanggal sebagai kunci
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(current);
      return result;
    }, {});

    // Menghitung rata-rata quality_of_serviceCount untuk setiap tanggal yang memiliki lebih dari satu entri
    return Object.keys(groupedData).map((date) => {
      const entries = groupedData[date];
      if (entries.length > 1) {
        const totalquality_of_serviceCount = entries.reduce(
          (sum, entry) => sum + entry.quality_of_serviceCount,
          0
        );
        const averagequality_of_serviceCount =
          totalquality_of_serviceCount / entries.length;

        console.log(
          `Rata-rata quality_of_serviceCount untuk tanggal ${date}: ${averagequality_of_serviceCount}`
        );

        return {
          date,
          rataquality_of_serviceCount: averagequality_of_serviceCount,
        };
      } else {
        return {
          date,
          rataquality_of_serviceCount: entries[0].quality_of_serviceCount, // Jika hanya satu entri, gunakan nilai aslinya
        };
      }
    });
  };

  useEffect(() => {
    fetchQuery();
  }, []);

  useEffect(() => {
    // Menghitung dan menyimpan data rata-rata ke state baru
    setAverageData(calculateAverageData(datas));
  }, [datas]);

  // Menampilkan data setelah diurutkan dan nilai quality_of_serviceCount dirata-ratakan
  console.log("Updated Data:", datas);
  console.log("Average Data:", averageData);

  return (
    <div>
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: averageData.map((data) => data.date),
            datasets: [
              {
                label: name,
                data: averageData.map(
                  (data) => data.rataquality_of_serviceCount
                ),
                backgroundColor: color,
                borderColor: color,
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
      <h1 className="font-bold">{name}</h1>
    </div>
  );
};

export default ChartComp;
