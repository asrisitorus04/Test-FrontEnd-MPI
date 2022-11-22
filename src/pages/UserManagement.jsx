import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeActive } from "../utils/redux/navActive/navSlice";

const UserManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("User Management"));
  }, []);

  return (
    <>
      <div className="">
        <div className="pt-2 ml-20 h-screen">
          <figure className="px-10">
            <img
              src="https://www.harmony.co.id/wp-content/uploads/2021/04/Tips-Membangun-User-Persona.jpg"
              alt="Shoes"
              className="rounded-lg h-60 w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-10">My Profile</h2>
            <div className="flex">
              <div className="flex-none"></div>
              <div className="flex-1 w-64">Nama Lengkap:</div>
              <div className="flex-1 w-32">Ramon Dimitri</div>
            </div>

            <div className="flex">
              <div className="flex-none"></div>
              <div className="flex-1 w-64">Jenis Kelamin:</div>
              <div className="flex-1 w-32">Perempuan</div>
            </div>

            <div className="flex">
              <div className="flex-none"></div>
              <div className="flex-1 w-64">Profesi:</div>
              <div className="flex-1 w-32">Suster</div>
            </div>

            <div className="flex">
              <div className="flex-none"></div>
              <div className="flex-1 w-64">Kontak:</div>
              <div className="flex-1 w-32">0816738295</div>
            </div>

            <div className="flex">
              <div className="flex-none"></div>
              <div className="flex-1 w-64">Email:</div>
              <div className="flex-1 w-32">ramon12@gmail.com</div>
            </div>

            <div className="flex">
              <div className="flex-none"></div>
              <div className="flex-1 w-64">Alamat Lengkap:</div>
              <div className="flex-1 w-32">Jakart Timur, Kemayoran no.05</div>
            </div>
            <h3 className="text-success border text-center font-bold w-20 bg-green-100">
              Active
            </h3>
            <div>
              <label htmlFor="my-modal-3" className="btn">
                Edit Profile
              </label>

              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold bg-green-200 h-10 py-2 text-center">
                    Edit My Profile
                  </h3>
                  <p className="py-4">
                    <div>
                      <div className="">
                        <h3 className="font-bold">Nama Lengkap</h3>
                      </div>
                      <input
                        className="w-full h-10 py-2 px-3 rounded-md border"
                        id="name"
                        placeholder="Your Name"
                        type="text"
                      />
                    </div>
                    <div>
                      <div className="">
                        <h3 className="font-bold">Jenis Kelamin</h3>
                      </div>
                      <input
                        className="w-full h-10 py-2 px-3 rounded-md border"
                        id="name"
                        placeholder="Jenis Kelamin"
                        type="text"
                      />
                    </div>

                    <div>
                      <div className="">
                        <h3 className="font-bold">Profesi</h3>
                      </div>
                      <input
                        className="w-full h-10 py-2 px-3 rounded-md border"
                        id="name"
                        placeholder="Profesi"
                        type="text"
                      />
                    </div>

                    <div>
                      <div className="">
                        <h3 className="font-bold">Kontak</h3>
                      </div>
                      <input
                        className="w-full h-10 py-2 px-3 rounded-md border"
                        id="name"
                        placeholder="Kontak"
                        type="text"
                      />
                    </div>

                    <div>
                      <div className="">
                        <h3 className="font-bold">Email</h3>
                      </div>
                      <input
                        className="w-full h-10 py-2 px-3 rounded-md border"
                        id="name"
                        placeholder="Your Email"
                        type="text"
                      />
                    </div>

                    <div>
                      <div className="">
                        <h3 className="font-bold">Alamat Lengkap</h3>
                      </div>
                      <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Alamat"
                      ></textarea>
                    </div>

                    <div className="card-actions justify-end">
                      <button className="btn btn-success w-40 h-8 mt-10">Save</button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
