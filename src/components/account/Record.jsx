import React, { useState } from "react";
import { Header } from "./Header";
import AddRecordModal from "./AddRecordModal";
import AddCategoryModal from "./AddCategoryModal";

export const Record = () => {
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categore, setCategore] = useState(false);
  const [record, setRecord] = useState(false);
  const [activeButton, setActiveButton] = useState("expense");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleAddCategoryClick = () => {
    setCategore((prevcategore) => !prevcategore);
  };
  const handleAddRecordClick = () => {
    setRecord((prevrecord) => !prevrecord);
  };

  return (
    <div>
      <div className="flex px-32  flex-col ">
        <Header />
      </div>
      <div className="px-32 py-12 bg-slate-100">
        <div className=" bg-white py-6 px-4 gap-12 rounded-xl inline-flex flex-col">
          <div className=" text-4xl">Record</div>
          <button
            className=" btn button text-white text-2xl"
            onClick={handleAddRecordClick}
          >
            + Add
          </button>
          <input type="search" className="input" placeholder="search" />
          <div>
            <div className="flex justify-between">
              <div className="text">Types</div>
              <button className="btn opacity-30 btn-ghost">Clear</button>
            </div>
            <div className=" flex flex-col px-3 gap-4 mt-5 ">
              <div className=" flex items-center gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-info"
                  checked
                />
                <label>All</label>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-info"
                  checked
                />
                <label>Income</label>
              </div>
              <div className=" flex items-center gap-2">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-info"
                  checked
                />
                <label>Expense</label>
              </div>
            </div>
          </div>
          <div>
            <ul className="menu  w-56 rounded-box">
              <li className="text">Category</li>
            </ul>
          </div>
          <div>
            <button
              className="  btn items-center w-[384px] rounded-full   text-2xl"
              onClick={handleAddCategoryClick}
            >
              + Add
            </button>
          </div>
        </div>
      </div>

      {categore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <AddCategoryModal setCategore={setCategore} />
        </div>
      )}
      {record && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <AddRecordModal
            setRecord={setRecord}
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
        </div>
      )}
    </div>
  );
};
