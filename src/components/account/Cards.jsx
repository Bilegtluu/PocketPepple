import React from "react";
import { LogoWhite } from "../logo/LogoWhite";
import { Ellipse } from "../logo/Ellipse";
import { UpArrow } from "../logo/UpArrow";
import { EllipseBlue } from "../logo/EllipseBlue";
import { DownArrow } from "../logo/DownArrow";

export const Cards = () => {
  return (
    <div className="flex gap-7">
      <div className=" flex flex-col gap-24 card p-8 bg-blue-600">
        <div className=" flex items-center text-white gap-2">
          <LogoWhite />
          <div className=" text-3xl">Pocket Pebble</div>
        </div>
        <div className=" flex flex-col content-end text-white">
          <div className="opacity-50 text-xl ">Cash</div>
          <div className=" text-4xl">10,000,000</div>
        </div>
      </div>
      <div className="card bg-white">
        <div>
          <div className=" flex items-center gap-4 p-6">
            <Ellipse />
            <div className=" text-3xl">Your Income</div>
          </div>
          <hr />
          <div className=" p-6  ">
            <div className=" text-5xl">1,200,000 ₮</div>
            <div className=" py-3 text-2xl text-gray-400 ">
              Your Income Amount
            </div>
          </div>
          <div className=" flex items-center gap-2 px-6">
            <div>
              <UpArrow />
            </div>
            <div className=" text-2xl">32% from last month</div>
          </div>
        </div>
      </div>
      <div className="card bg-white">
        <div>
          <div className=" flex items-center gap-4 p-6">
            <EllipseBlue />

            <div className=" text-3xl">Total Expenses</div>
          </div>
          <hr />
          <div className=" p-6  ">
            <div className=" text-5xl"> - 1,200,000 ₮</div>
            <div className=" py-3 text-2xl text-gray-400 ">
              Your Income Amount
            </div>
          </div>
          <div className=" flex items-center gap-2 px-6">
            <div>
              <DownArrow />
            </div>
            <div className=" text-2xl">32% from last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};
