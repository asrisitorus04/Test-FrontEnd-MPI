import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useSelector } from "react-redux"

const Login = () => {

  const navActive = useSelector((state) => state.navActive.value)
  console.log(navActive)

  return (
    <>
      {navActive === "Login" ? <></> : <div className="w-full h-14bg-[#bfdbfe] shadow-sm flex justify-end items-center text-[#8b8b8b] p-3 mb-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <AiOutlineQuestionCircle size={30} className="mr-2" />
        <div className="flex items-center ">
          <div className="leading-tight">
            <p className="font-bold mr-10">Pusat Bantuan</p>
          </div>
        </div>
      </div>}

    </>
  );
};

export default Login;
