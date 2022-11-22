import React, { useEffect } from "react";
import NavbarRegis from "../components/NavbarRegis";
import { ImLocation } from "react-icons/im";
import { GoChecklist } from "react-icons/go";
import { TbMinusVertical } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeActive } from "../utils/redux/navActive/navSlice";


const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("Login"));
  }, []);
  return (
    <>
      <div>
        <NavbarRegis />
        <div>
          <div className="flex">
            <div className="flex-1 w-64">
              <div className="card w-96 bg-base-100 mt-10 ml-20">
                <div className="card-body">
                  <div>
                    <div className="flex">
                      <div className="flex-auto w-10">
                        {/* <IoPersonCircle /> */}
                        <ImLocation className="h-8 w-8 text-[#0ea5e9] bg-sky-200 rounded-full hover:bg-sky-700 " />
                      </div>
                      <div className="flex-auto w-80 ml-4">
                        <h2 className="card-title">Pendaftaran Sarana</h2>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex-auto w-10">
                      {/* <IoPersonCircle /> */}
                      <TbMinusVertical className="h-8 w-8 text-[#0ea5e9]" />
                    </div>
                  </div>

                  <div>
                    <div class="flex ...">
                      <div class="flex-auto w-10">
                        <GoChecklist className="h-8 w-8 text-[#0ea5e9] bg-sky-200 rounded-full hover:bg-sky-700 " />
                      </div>
                      <div className="flex-auto w-80 ml-4">
                        <h2 className="card-title">Register</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-none ..."></div>
            <div class="flex-1 w-64 ">
              <div className="ml-10 card w-96 bg-base-100 shadow-md">
                <div className="card-body">
                  <div class="py6">
                    <h2 className="card-title font-bold">Register Akun OLIN</h2>
                    <div class="mt-4 max-w-md">
                      <div class="grid grid-cols-1 gap-6">
                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Email*"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Kata Sandi*"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Konfirmasi Kata Sandi*"
                          />
                        </label>

                        <div class="block">
                          <div class="mt-2">
                            <div>
                              <label class="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0focus:ring-indigo-200 focus:ring-opacity-50"
                                  checked
                                />
                                <span className="ml-2 text-xs">
                                  Dengan membuat akun, Anda menyetujui{" "}
                                  <span className="text-[#f97316]">
                                    Ketentuan Penggunaan dan Pemberitahuan
                                    Privasi
                                  </span>{" "}
                                  <span>aplikasi OLIN</span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex mt-4">
                    <div class="flex-1 w-64">
                      <div className="card-actions justify-start">
                        <Link
                          to="/inputdata"
                          id="register"
                          className="text-light text-base text-red-600 text-center"
                        >
                          <button className="btn bg-white text-black w-36 border">
                            Kembali
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div class="flex-none"></div>

                    <div class="flex-1 w-64 ml-1">
                      <div className="card-actions justify-end">
                        <Link
                          to="/"
                          id="register"
                          className="text-light text-base text-red-600 text-center"
                        >
                          <button className="btn btn-warning w-36">
                            Register
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
