import React from "react";
import { Header } from "./Header";
import { Cards } from "./Cards";
import BarChart from "../Chart/BarChart";
import PieChart from "../Chart/PieChart";

export const Dashbourd = () => {
  return (
    <div>
      <div className="flex px-32  flex-col ">
        <Header />
      </div>
      <div className="px-32 py-12 bg-slate-100">
        <div>
          <Cards />
        </div>
        <div className="flex gap-10">
          <div className=" mt-10 bg-white rounded-3xl w-[50%]   p-4 ">
            <div className=" text p-6">Income - Expense</div>
            <hr />
            <div className="h-96">
              <BarChart />
            </div>
          </div>
          <div className=" mt-10 bg-white rounded-3xl w-[50%]   p-4 ">
            <div className=" text p-6">Income - Expense</div>
            <hr />
            <div className="h-96">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
