import React, { useState } from "react";

const AmountInput = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    const regex = /^[0-9]*\.?[0-9]*$/;

    if (regex.test(event.target.value) || event.target.value === "") {
      setAmount(event.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="">Amount</label>
      <input
        type="text"
        placeholder="₮ 000.00"
        value={amount}
        onChange={handleAmountChange}
        className="w-[348px] h-[66px] border-[2px] bg-gray-100 p-4 rounded-lg "
      />
    </div>
  );
};

export default AmountInput;
