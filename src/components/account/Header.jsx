import React from "react";
import { Logo } from "../logo/Logo";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex justify-between items-center p-4">
      <div className="flex gap-6">
        <div>
          <Logo />
        </div>
        <button className=" text-3xl">
          <Link href="/account">Dashbourd</Link>
        </button>
        <button className="  text-3xl">
          <Link href="/record">Record</Link>
        </button>
      </div>
      <div className="flex ">
        <div className=" bg-blue-600 btn text-white flex  items-center rounded-full">
          <button className="  text-2xl"> + Record</button>
        </div>
      </div>
    </div>
  );
};
