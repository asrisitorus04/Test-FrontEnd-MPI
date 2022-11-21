import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeActive } from "../utils/redux/navActive/navSlice";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("Login"));
  }, []);

  return (
    <>
      <div className="w-full h-14bg-[#bfdbfe] shadow-sm flex justify-end items-center text-[#8b8b8b] p-3 mb-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
