import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeActive } from "../utils/redux/navActive/navSlice";
import { AiFillEdit } from "react-icons/ai";

const Sales = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("Sales"));
  }, []);

  return (
    <>
      <div className="mb-10 w-full">
        <div className="overflow-x-auto">
          <div className="mt-9 mb-6">
            <h5 className="font-semibold ml-10 text-lg text-secondary mb-2">
              Customer OLIN
            </h5>
            <p className="font-light ml-10 text-base text-[#B5B5C3]">
              More than 20+ Customer
            </p>
          </div>
        </div>

        <section className="overflow-x-auto py-6 mr-11">
          <table className="table ml-10 w-full">
            <thead>
              <tr>
                <th className="font-semibold text-base text-secondary">No</th>
                <th className="font-semibold text-base text-secondary">NAME</th>
                <th className="font-semibold text-base text-secondary">
                  PHONE NUMBER
                </th>
                <th className="font-semibold text-base text-secondary">
                  STATUS
                </th>
                <th className="font-semibold text-base text-secondary">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Morin</td>
                <td>0812768459</td>
                <td className="text-success">Active</td>
                <td>
                  <AiFillEdit
                    className="text-2xl"
                    id="button-edit"
                    label="Edit"
                  />
                </td>
              </tr>

              <tr>
                <th>2</th>
                <td>Arin</td>
                <td>0812768124</td>
                <td className="text-warning">Non-active</td>
                <td>
                  <AiFillEdit
                    className="text-2xl"
                    id="button-edit"
                    label="Edit"
                  />
                </td>
              </tr>

              <tr>
                <th>3</th>
                <td>mina</td>
                <td>0812761082</td>
                <td className="text-success">Active</td>
                <td>
                  <AiFillEdit
                    className="text-2xl"
                    id="button-edit"
                    label="Edit"
                  />
                </td>
              </tr>

              <tr>
                <th>4</th>
                <td>willy</td>
                <td>0812765043</td>
                <td className="text-black">Non</td>
                <td>
                  <AiFillEdit
                    className="text-2xl"
                    id="button-edit"
                    label="Edit"
                  />
                </td>
              </tr>

              <tr>
                <th>5</th>
                <td>Mariam</td>
                <td>0812768459</td>
                <td className="text-success">Active</td>
                <td>
                  <AiFillEdit
                    className="text-2xl"
                    id="button-edit"
                    label="Edit"
                  />
                </td>
              </tr>

              <tr>
                <th>6</th>
                <td>Alein</td>
                <td>0812768459</td>
                <td className="text-warning">Non-active</td>
                <td>
                  <AiFillEdit
                    className="text-2xl"
                    id="button-edit"
                    label="Edit"
                  />
                </td>
              </tr>

            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Sales;
