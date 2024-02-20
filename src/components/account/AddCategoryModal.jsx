import React, { useState } from "react";

const AddCategoryModal = ({ setCategore }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategoryClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: categoryName,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Category failed");
      }
    } catch (error) {
      console.log(error);
    }
    setCategore(false);
  };

  return (
    <div className="bg-white w-[494px] rounded-md">
      <div className="p-3 flex items-center justify-between">
        <p className="text-2xl ">Add Category</p>
        <button
          onClick={handleAddCategoryClick}
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
      <hr />
      <div className="flex p-4 gap-4 ">
        <select
          className="w-[84px] h-[48px] border-[2px] rounded-md bg-gray-100"
          name=""
          id=""
        >
          <option value=""></option>
        </select>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={handleCategoryChange}
          className=" p-2 mb-2 w-[350px] border-[2px] h-[48px] bg-gray-100 rounded-md"
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setCategore(false)}
          className="bg-green-500 text-white mb-4 rounded-full w-[446px] px-4 py-2 mr-2 "
        >
          Add Category
        </button>
      </div>
    </div>
  );
};

export default AddCategoryModal;
