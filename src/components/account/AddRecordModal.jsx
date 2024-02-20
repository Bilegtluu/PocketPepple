import React, { useState } from "react";
import AmountInput from "./AmountInput";

const AddRecordModal = ({ setRecord, handleButtonClick, activeButton }) => {
  const [records, setRecords] = useState([]);
  const [recordName, setRecordName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [clock, setClock] = useState("");
  const [payee, setPayee] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // const AmountInput = async () => {
  //   const handleAmountChange = (event) => {
  //     const regex = /^[0-9]*\.?[0-9]*$/;

  //     if (regex.test(event.target.value) || event.target.value === "") {
  //       setAmount(event.target.value);
  //     }
  //   };
  // };

  const handleRecordAdd = async () => {
    try {
      if (!recordName || !amount || !date || !clock || !payee || !note) {
        throw new Error("Please check your record.");
      }
      const response = await fetch("http://localhost:8000/record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recordName,
          amount,
          clock,
          payee,
          note,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Sign-up failed");
      }

      setSuccess(true);
      setError(null);
      setRecord(false);
    } catch (error) {
      setSuccess(false);
      setError(error.message || "record failed");
    }
  };

  return (
    <div className="bg-white flex  w-[792px] h-[512px] rounded-xl">
      <div>
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-2xl">Add Record</h2>
          <button
            onClick={() => setRecord(false)}
            className="btn border-none bg-white shadow-none btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr className="w-[792px]" />
        <div className="flex">
          <div className="flex p-6 gap-4 flex-col">
            <div className="w-[348px] gap-1 flex items-center justify-center rounded-full h-[40px] bg-gray-100">
              <button
                className={`w-[50%] py-2 rounded-full ${
                  activeButton === "expense"
                    ? "bg-blue-600 text-white"
                    : " text-gray-700"
                }`}
                onClick={() => handleButtonClick("expense")}
              >
                Expense
              </button>
              <button
                className={`w-[50%] py-2 rounded-full ${
                  activeButton === "income"
                    ? "bg-green-500 text-white"
                    : " text-gray-700"
                }`}
                onClick={() => handleButtonClick("income")}
              >
                Income
              </button>
            </div>

            <AmountInput />
            <div className="flex flex-col">
              <label htmlFor="">Category</label>
              <select className="  border-[2px] w-[348px]  bg-gray-100 p-3 rounded-lg">
                <option disabled selected>
                  Who shot first?
                </option>
              </select>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col">
                <label htmlFor="">Date</label>
                <input
                  className="  border-[2px] w-[168px]  bg-gray-100 p-3 rounded-lg"
                  type="date"
                  name=""
                  id=""
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="">Clock</label>
                <input
                  className="  border-[2px] w-[168px]  bg-gray-100 p-3 rounded-lg"
                  type="time"
                  name=""
                  id=""
                  value={clock}
                  onChange={(e) => setClock(e.target.value)}
                />
              </div>
            </div>
            <div className="w-[50%]">
              <button
                onClick={handleRecordAdd}
                className={`bg-${
                  activeButton === "income" ? "green-500" : "blue-600"
                } text-white px-4 py-2 w-[348px] rounded-full`}
              >
                Add Record
              </button>
            </div>
          </div>
          <div>
            <div className="flex p-6 gap-4 flex-col">
              <div className="flex gap-2 flex-col">
                <label htmlFor="">Payee</label>
                <input
                  placeholder="Write here"
                  type="text"
                  className="  border-[2px] w-[348px]  bg-gray-100 p-3 rounded-lg"
                  value={payee}
                  onChange={(e) => setPayee(e.target.value)}
                />
              </div>
              <div className=" flex flex-col gap-2">
                <label>Note</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Write here"
                  className=" border-[2px] rounded-lg p-2 bg-gray-100  h-[255px] w-[345px] "
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              {record.name}: ${record.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddRecordModal;
