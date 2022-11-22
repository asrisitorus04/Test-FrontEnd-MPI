import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { changeActive } from "../utils/redux/navActive/navSlice";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("Login"));
  }, []);

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="ml-20 mt-20">
          <p className="text-2xl font-semibold">Selamat Datang di Solusi</p>
          <p className="text-2xl font-semibold">Perangkat Lunak Farmasi</p>
          <p className="font-medium">Sistem Manajemen Apotek Online</p>
        </div>

        <div className="text-center mt-20">
          <h5 className="text-lg font-bold mb-4">
            Silahkan masuk ke dalam akun anda dan kelola apotek anda.
          </h5>

          <div>
            <div className="ml-80">
              <h1 className="text-2md ml-52 text-left w-64 font-semibold">
                EMAIL
              </h1>
            </div>
            <Input
              id="Input Username Lgn"
              placeholder="Input username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <div className="ml-80">
              <h1 className="text-2md ml-52 text-left w-64  font-semibold">
                PASSWORD
              </h1>
            </div>
            <Input
              id="Input Password Lgn"
              placeholder="Input Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 items-center text-[13px] text-center">
            <div className="flex mt-8">
              <div className="flex-1 w-40">
                <div className="form-check mr-4">
                  <input
                    className="form-check-input h-4 w-4 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="flexCheckDefault"
                  >
                    Ingat Saya
                  </label>
                </div>
              </div>
              <div className="flex-none"></div>
              <div className="flex-1 w-32 pl-20">
                <div>
                  <label
                    htmlFor="my-modal-4"
                    className="text-red-600 font-semibold hover:underline cursor-pointer"
                  >
                    Lupa Password?
                  </label>
                </div>
              </div>
            </div>
            {/* <Login onClick={(e) => handleSubmit(e)} loading={loading || disabled}/> */}
          </div>

          <div className="flex space-x-2 justify-center">
            <Link
              to="/homepage"
              id="register"
              className="text-light text-base text-red-600 text-center"
            >
              <button
                onClick={() => dispatch(changeActive("Login"))}
                type="button"
                className="inline-block px-32 mt-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {" "}
                Masuk{" "}
              </button>
            </Link>
          </div>
          <div>
            <p className="text-light text-base text-center text-[#B4B4B4]">
              Belum Registrasi? Silahkan Klik
              <Link
                to="/inputdata"
                id="register"
                className="text-light text-base text-red-600 text-center"
              >
                &nbsp; Daftar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
