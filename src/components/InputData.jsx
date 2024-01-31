import { useState, useMemo, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const InputData = () => {
  const [data, setdata] = useState({
    packetloss: 0,
    throughput: 0,
    latency: 0,
    jitter: 0,
    preventive: 0,
    maintenance: 0,
    maintenanceCount: 0,
    availability: 0,
    capacity: 0,
    ber: 0,
    datetime: "",
    performance: 0,
    quality_of_service: 0,
  });

  const [isSubmit, setisSubmit] = useState(false);
  const [dataupdate, setdataupdate] = useState(false);
  const userRef = useRef();

  useEffect(() => {
    userRef.current = sessionStorage.getItem("email");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIsSubmit = () => {
    setisSubmit(false);
    // reset input html
    const input = document.querySelectorAll("input");
    input.forEach((item) => {
      item.removeAttribute("disabled");
      item.value = "";
    });
    // reset form
    setdata({
      packetloss: 0,
      throughput: 0,
      latency: 0,
      jitter: 0,
      preventive: 0,
      maintenance: 0,
      maintenanceCount: 0,
      availability: 0,
      capacity: 0,
      ber: 0,
      datetime: "",
      performance: 0,
      quality_of_service: 0,
    });

    //select form
    const form = document.querySelector("form");
    form.reset();
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setisSubmit(true);

    const currentDateTime = new Date().toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    });

    const formattedDateWithCustomReplacement = currentDateTime.replace(
      /[\/,]/g,
      (match) => {
        return match === "/" ? "-" : match === "," ? " " : match;
      }
    );

    const maintenanceCount =
      (Number(data.preventive) + Number(data.maintenance)) * 0.1;
    const performance =
      Number(data.packetloss) +
      Number(data.throughput) +
      Number(data.latency) +
      Number(data.jitter);
    const quality_of_service =
      Number(data.availability) * 0.8 +
      Number(data.maintenanceCount) +
      performance * 0.1;

    setdata((prevState) => ({
      ...prevState,
      datetime: formattedDateWithCustomReplacement,
      performance,
      maintenanceCount,
      quality_of_service: quality_of_service < 90 ? "Bad" : "Good",
      user: userRef.current,
    }));

    setdataupdate(true);
    alert("Data berhasil ditambahkan");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (dataupdate) {
        await setDoc(doc(db, "DATA", data.datetime), data);
      }
      setdataupdate(false);
    };

    fetchData();
  }, [data.quality_of_service]);

  useEffect(() => {
    if (isSubmit) {
      // disable input html
      const input = document.querySelectorAll("input");
      input.forEach((item) => {
        item.setAttribute("disabled", "disabled");
      });
    }
  }, [isSubmit]);

  return (
    <div className="px-48 mb-8 relative">
      <div>
        <h1 className="text-3xl font-extrabold text-center p-2">
          SPM Calculator
        </h1>
      </div>
      <form className="w-full pt-10" onSubmit={(e) => handleSumbit(e)}>
        <h1 className="text-2xl font-bold">Performance</h1>
        <div className="p-4">
          <div className="mb-2 ">
            <label htmlFor="packetloss" className="font-medium mb-2">
              Packet Loss
            </label>
            <input
              required
              onChange={(e) => handleChange(e)}
              type="number"
              name="packetloss"
              id="packetloss"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="throughput" className="font-medium mb-2">
              Throughput
            </label>
            <input
              required
              onChange={(e) => handleChange(e)}
              type="number"
              name="throughput"
              id="throughput"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="mb-2 ">
            <label htmlFor="latency" className="font-medium mb-2">
              Latency
            </label>
            <input
              required
              onChange={(e) => handleChange(e)}
              type="number"
              name="latency"
              id="latency"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="mb-2 ">
            <label htmlFor="jitter" className="font-medium mb-2">
              Jitter
            </label>
            <input
              required
              onChange={(e) => handleChange(e)}
              type="number"
              name="jitter"
              id="jitter"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
        </div>
        {/* maintenance */}
        <h1 className="text-2xl font-bold">Maintenance</h1>
        <div className="p-4">
          <div className="mb-2 ">
            <label htmlFor="preventive" className="font-medium mb-2">
              Preventive Maintenance
            </label>
            <input
              required
              onChange={(e) => handleChange(e)}
              type="number"
              name="preventive"
              id="preventive"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="maintenance" className="font-medium mb-2">
              Maintenance
            </label>
            <input
              required
              onChange={(e) => handleChange(e)}
              type="number"
              name="maintenance"
              id="maintenance"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
        </div>
        {/* Availability */}
        <h1 className="text-2xl font-bold">Availability</h1>
        <div className="p-4">
          <div className="mb-2 ">
            <label htmlFor="availability" className="font-medium mb-2">
              Availability
            </label>
            <input
              onChange={(e) => handleChange(e)}
              required
              type="number"
              name="availability"
              id="availability"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
        </div>
        {/*Capacity */}
        <h1 className="text-2xl font-bold">Capacity</h1>
        <div className="p-4">
          <div className="mb-2 ">
            <label htmlFor="capacity" className="font-medium mb-2">
              Capacity
            </label>
            <input
              onChange={(e) => handleChange(e)}
              required
              type="number"
              name="capacity"
              id="capacity"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
        </div>
        {/* Bit Error Rate */}
        <h1 className="text-2xl font-bold">Bit Error Rate</h1>
        <div className="p-4">
          <div className="mb-2 ">
            <label htmlFor="ber" className="font-medium mb-2">
              Bit Error Rate
            </label>
            <input
              onChange={(e) => handleChange(e)}
              required
              type="number"
              name="ber"
              id="ber"
              className="w-full p-1 border-2 border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
            />
          </div>
        </div>
        <p className={isSubmit ? "text-red-600 text-center py-3" : "hidden"}>
          Silahkan close Pop up untuk melakukan input data baru !
        </p>
        <div className="flex justify-center">
          <button
            className={isSubmit ? "hidden" : "w-20 p-1 m-0 bg-[#555]"}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div
        className={
          isSubmit
            ? "bg-[#808080] w-full rounded-md p-4 mt-6 relative"
            : "hidden"
        }
      >
        <table>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>
                <strong>Availability</strong>
              </td>
              <td>:</td>
              <td>{data.availability}</td>
            </tr>
            <tr>
              <td>
                <strong>Ber</strong>
              </td>
              <td>:</td>
              <td>{data.ber}</td>
            </tr>
            <tr>
              <td>
                <strong>Capacity</strong>
              </td>
              <td>:</td>
              <td>{data.capacity}</td>
            </tr>
            <tr>
              <td>
                <strong>DateTime</strong>
              </td>
              <td>:</td>
              <td>{data.datetime}</td>
            </tr>
            <tr>
              <td>
                <strong>Maintenance</strong>
              </td>
              <td>:</td>
              <td>{data.maintenanceCount}</td>
            </tr>
            <tr>
              <td>
                <strong>Performance</strong>
              </td>
              <td>:</td>
              <td>{data.performance}</td>
            </tr>
            <tr>
              <td>
                <strong>Quality_of_Service</strong>
              </td>
              <td>:</td>
              <td>{data.quality_of_service}</td>
            </tr>
            <tr>
              <td>
                <strong>User</strong>
              </td>
              <td>:</td>
              <td>{data.user}</td>
            </tr>
          </tbody>
        </table>
        <div
          className="absolute top-0 right-0 p-2"
          onClick={() => handleIsSubmit()}
        >
          <IoClose size={30} />
        </div>
      </div>
    </div>
  );
};

export default InputData;
