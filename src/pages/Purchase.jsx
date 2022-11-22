import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeActive } from "../utils/redux/navActive/navSlice";
import { AiFillEdit } from "react-icons/ai";

const Purchase = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("Purchase"));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-center">
          Purchase Order OLIN
        </h1>
        <p className="mt-20">
          <div className="flex ...">
            <div className="flex-auto w-64 ml-10">
                <span>Alamat Perusahaan</span>
                <div>
                <span>Jalan, Kemayoran Timur</span>
                </div>
                <span>Jakarta Timur</span>
            </div>
            <div className="flex-none"></div>
            <div className="flex-auto w-64 ml-40">
                <div>Tanggal pemesanan:
                    <span className="ml-4">12/05/2019</span>
                </div>
                <div>Tanggal Pengiriman:
                <span className="ml-4">14/05/2019</span>
                </div>
            </div>
          </div>
        </p>

        <div>
        <section className="overflow-x-auto py-6 mr-11 mt-10">
          <table className="table ml-10 w-full">
            <thead>
              <tr>
                <th className="font-semibold text-base text-secondary">No</th>
                <th className="font-semibold text-base text-secondary">Items</th>
                <th className="font-semibold text-base text-secondary">
                    Price
                </th>
                <th className="font-semibold text-base text-secondary">
                  qty
                </th>
                <th className="font-semibold text-base text-secondary">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Obat</td>
                <td>Rp. 10.000</td>
                <td>2</td>
                <td>Rp. 20.000</td>
              </tr>

              <tr>
                <th>2</th>
                <td>Obat Suntik</td>
                <td>Rp. 20.000</td>
                <td>5</td>
                <td>Rp. 100.000</td>
              </tr>

              <tr>
                <th>3</th>
                <td>Obat Pening</td>
                <td>Rp. 10.000</td>
                <td>3</td>
                <td>Rp. 30.000</td>
              </tr>

              <tr>
                <th>4</th>
                <td>Obat</td>
                <td>Rp. 50.000</td>
                <td>3</td>
                <td>Rp. 150.000</td>
              </tr>

              <tr>
                <th>5</th>
                <td>Obat Sirup</td>
                <td>Rp. 60.000</td>
                <td>2</td>
                <td>Rp. 120.000</td>
              </tr>

              <tr>
                <th>6</th>
                <td>Obat</td>
                <td>Rp. 50.000</td>
                <td>1</td>
                <td>Rp. 50.000</td>
              </tr>

            </tbody>
          </table>
        </section>

        <p className="mt-8">
          <div className="flex ...">
            <div className="flex-auto w-64 ml-10 mt-20">
                <span className="text-warning">*syarat dan ketentuan</span>
            </div>
            <div className="flex-none"></div>
            <div className="flex-auto w-64 ml-40 mt-20 mb-40">
                <div>Sub Total:
                    <span className="ml-4">Rp. 470.000</span>
                </div>
                <div>PPN:
                <span className="ml-4">2%</span>
                </div>
                <div>Total Bayar:
                <span className="ml-4">Rp. 500.000</span>
                </div>
            </div>
          </div>
        </p>

        </div>
      </div>
    </>
  );
};

export default Purchase;
