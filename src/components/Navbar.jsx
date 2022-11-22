import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Login = () => {

  return (
    <>
      <div className="w-full h-14bg-[#bfdbfe] shadow-lg flex justify-end items-center text-[#8b8b8b] p-3 mb-10">
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

    </>
  );
};

export default Login;
