import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const NavbarRegis = () => {
  return (
    <div className="w-full h-14 bg-white border flex justify-end items-center text-[#8b8b8b] p-3 mb-10 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">OLIN</a>
      </div>
      <AiOutlineQuestionCircle size={30} className="mr-2" />
      <div className="flex items-center ">
        <div className="leading-tight">
          <p className="font-bold mr-10">Pusat Bantuan</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarRegis;
