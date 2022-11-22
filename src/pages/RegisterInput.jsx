import React from "react";
import NavbarRegis from "../components/NavbarRegis";
import { TbNotes } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { GoChecklist } from "react-icons/go";
import { TbMinusVertical } from "react-icons/tb";
import { Link } from "react-router-dom";

const RegisterInput = () => {
  return (
    <>
      <div className="bg-white">
        <NavbarRegis />
        <div>
          <div class="flex">
            <div class="flex-1 w-64">
              <div className="card w-96 bg-base-100 mt-10 ml-20">
                <div className="card-body">
                  <div>
                    <div className="flex">
                      <div className="flex-auto w-10">
                        {/* <IoPersonCircle /> */}
                        <ImLocation className="h-8 w-8 text-[#0ea5e9] bg-sky-200 rounded-full hover:bg-sky-700 s" />
                      </div>
                      <div className="flex-auto w-80 ml-4">
                        <h2 className="card-title">Pendaftaran Sarana</h2>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex-auto w-10">
                      {/* <IoPersonCircle /> */}
                      <TbMinusVertical className="h-8 w-8" />
                    </div>
                  </div>

                  <div>
                    <div class="flex ...">
                      <div class="flex-auto w-10">
                        <GoChecklist className="h-8 w-8 text-[#71717a]" />
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
              <div className="ml-10 card w-96 bg-base-100 shadow-md max-h-96 overflow-y-auto">
                <div className="card-body">
                  <div class="py6">
                    <h2 className="card-title font-bold">
                      Input Data Perusahaan
                    </h2>
                    <div class="mt-4 max-w-md">
                      <div class="grid grid-cols-1 gap-6">
                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Bidang Usaha*"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Nama Perusahaan*"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="NPWP Perusahaan*"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Alamat Sesuai NPWP*"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Provinsi"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Kota/Kabupaten"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Kecamatan"
                          />
                        </label>

                        <label class="block">
                          <input
                            type="text"
                            className="mt-1 px-2 h-10 border block w-full rounded-md shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Kode Pos*"
                          />
                        </label>

                        <h2 className="card-title font-bold mt-4">
                          Upload Kelengkapan Data
                        </h2>
                        <div class="flex justify-center">
                          <div class="max-w-2xl rounded-lg">
                            <div class="m-4">
                              <label class="inline-block h-8 py-1 w-full bg-[#38bdf8] mb-2 text-gray-500">
                                <div class="flex">
                                  <div class="flex w-6 h-6 py-1 ml-2">
                                    <TbNotes />
                                  </div>
                                  <div class="flex-none">NIB*</div>
                                </div>
                              </label>
                              <div class="flex items-center justify-center w-full">
                                <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                  <div class="flex flex-col items-center justify-center pt-7">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                      />
                                    </svg>
                                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                      Unggah NIB Valid
                                    </p>
                                  </div>
                                  <input type="file" class="opacity-0" />
                                </label>
                              </div>
                            </div>
                            <div class="justify-center w-72 ml-6">
                              <Link
                                to="/register"
                                id="register"
                                className="text-light text-base text-red-600 text-center"
                              >
                                <button class="w-full px-4 py-2 text-white bg-[#ea580c] rounded shadow-xl">
                                  Selanjutnya
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
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterInput;
