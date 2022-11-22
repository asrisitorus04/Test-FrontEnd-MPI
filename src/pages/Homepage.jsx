import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import { changeActive } from "../utils/redux/navActive/navSlice";
import { IoIosArrowUp, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BsThreeDotsVertical, BsGraphUp } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActive("Homepage"));
  }, []);

  const dataCard = [
    {
      title: <p>Total Selling</p>,
      body: (
        <>
          <p className="font-semibold text-2xl">890</p>
          <div className="flex flex-col items-center font-bold text-[#66aff5]">
            <IoIosArrowUp />
            <p>20,5%</p>
          </div>
        </>
      ),
    },
    {
      title: <p>Expired Inventory</p>,
      body: <p className="font-semibold mt-2 text-2xl">5</p>,
    },
    {
      title: <p>Out of stock Inventory</p>,
      body: <p className="font-semibold mt-2 text-2xl">12</p>,
    },
  ];

  const dataTransaction = [
    {
      icon: <BsGraphUp color="#007af1" size={50} />,
      title: "Total Transaksi",
      sub: "Rp. 80.000.000",
    },
    {
      icon: <AiOutlineFileDone color="#007af1" size={50} />,
      title: "Sales",
      sub: "289",
    },
    {
      icon: <GiReceiveMoney color="#007af1" size={50} />,
      title: "Purchase",
      sub: "289",
    },
  ];
  const dataInventory = [
    {
      title: "New Order",
      value: 3,
    },
    {
      title: "Prepare Order",
      value: 5,
    },
    {
      title: "Waiting Pickup",
      value: 12,
    },
    {
      title: "Sent",
      value: 9,
    },
    {
      title: "Cancel",
      value: 7,
    },
    {
      title: "Done",
      value: 5,
    },
  ];

  return (
    <div className="px-6">
      <h1 className="font-bold text-xl mb-5">Order Statistic</h1>
      <div className="w-9/12 grid grid-cols-3 gap-x-5 mb-10">
        {dataCard.map((item, i) => {
          return (
            <Card key={i} height="h-24" className="px-5">
              <Card.Title className="mt-4 font-medium">{item.title}</Card.Title>
              <Card.Body className="flex justify-between items-center">
                {item.body}
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="flex mb-10">
        <Card width="w-8/12" height="h-96" className="border p-5">
          <Card.Title className="text-xl font-bold flex justify-between">
            <p>Sales & Purchase</p>
            <BsThreeDotsVertical size={26} />
          </Card.Title>
          <div>
            <div className="grid grid-rows-3 grid-flow-col">
              <div className="col-span-2">02</div>
              <div className="row-span-2 col-span-2  mt-40">
                <div className="grid grid-cols-4">
                  <div className="text-center font-semibold">Target</div>
                  <div className="text-center font-semibold">Last Week</div>
                  <div className="text-center font-semibold">Last Month</div>
                  <div className="text-center font-semibold">This Year</div>
                  <div className="">
                    <div className="grid grid-cols-2">
                      <div className="ml-12">
                        <IoMdArrowDropup className="h-6 w-6 text-cyan-500" />
                      </div>
                      <div className="text-cyan-500">231</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2">
                      <div className="ml-12">
                        <MdArrowDropDown className="h-6 w-6 text-red-500" />
                      </div>
                      <div className="text-red-500">224</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2">
                      <div className="ml-12">
                        <IoMdArrowDropup className="h-6 w-6 text-cyan-500" />
                      </div>
                      <div className="text-cyan-500">2132</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2">
                      <div className="ml-12">
                        <IoMdArrowDropup className="h-6 w-6 text-cyan-500" />
                      </div>
                      <div className="text-cyan-500">8123</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="grid grid-rows-3 w-3-12 mx-4 gap-y-5">
          {dataTransaction.map((item, i) => {
            return (
              <Card key={i} width="w-80" className="p-5 flex items-center">
                <Card.Body className="flex justify-between w-full">
                  {item.icon}
                  <div className="text-right">
                    <p className="text-xl">{item.title}</p>
                    <p className="font-bold text-2xl">{item.sub}</p>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <Card width="w-6/12" height="h-68 mb-10" className="border p-5 pb-8">
          <Card.Title className="text-xl font-bold flex justify-between">
            <p>Inventory</p>
            <BsThreeDotsVertical size={26} />
          </Card.Title>
          <Card.Body className="mt-10">
            {dataInventory.map((item, i) => {
              return (
                <div key={i} className="flex justify-between px-5 mt-2">
                  <p>{item.title}</p>
                  <p className="w-6 h-6 rounded-lg shadow bg-[#b9e2ff] text-[#3b4951] flex justify-center items-center font-semibold">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </Card.Body>
        </Card>
        <Card width="w-5/12" height="h-68 mb-10" className="border p-5 pb-8">
          <Card.Title className="text-xl font-bold">
            <p>Persentase Penjualan Obat</p>
          </Card.Title>
          <div>
            <div className="grid grid-rows-3 grid-flow-col">
              <div className="col-span-2">02</div>

              <div className="row-span-2 col-span-2 mt-24">
                <div className="grid grid-rows-2 grid-flow-col h-10">
                  <div className="col-span-2">
                    <div className="grid grid-rows-2 grid-flow-col">
                      <div className="col-span-2 h-4 w-6 rounded-sm bg-cyan-500 mt-1 ml-2"></div>
                      <div className="row-span-2 col-span-2 mr-2">Offline(40%)</div>
                    </div>
                  </div>
                  <div className="row-span-2 col-span-2">
                    <div className="grid grid-rows-2 grid-flow-col ml-20">
                      <div className="col-span-2 h-4 w-6 rounded-sm bg-emerald-500 mt-1 ml-2"></div>
                      <div className="row-span-2 col-span-2 mr-20 ml-2">GrabHealth(4%)</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-rows-2 grid-flow-col h-10">
                  <div className="col-span-2">
                    <div className="grid grid-rows-2 grid-flow-col">
                      <div className="col-span-2 h-4 w-6 rounded-sm bg-emerald-900 mt-1 ml-2"></div>
                      <div className="row-span-2 col-span-2 mr-20">AloDoc(10%)</div>
                    </div>
                  </div>
                  <div className="row-span-2 col-span-2">
                    <div className="grid grid-rows-2 grid-flow-col">
                      <div className="col-span-2 h-4 w-6 rounded-sm bg-lime-600 mt-1 ml-2"></div>
                      <div className="row-span-2 col-span-2 mr-24">Tokopedia(6%)</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-rows-2 grid-flow-col h-10">
                  <div className="col-span-2">
                    <div className="grid grid-rows-2 grid-flow-col">
                      <div className="col-span-2 h-4 w-6 rounded-sm bg-red-500 mt-1 ml-2"></div>
                      <div className="row-span-2 col-span-2 mr-20 ml-2">Halodoc(20%)</div>
                    </div>
                  </div>
                  <div className="row-span-2 col-span-2">
                    <div className="grid grid-rows-2 grid-flow-col mr-4">
                      <div className="col-span-2 h-4 w-6 rounded-sm bg-orange-600 mt-1 ml-2"></div>
                      <div className="row-span-2 col-span-2 mr-24 ml-2">Shopee(10%)</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-rows-2 grid-flow-col h-10">
                  <div className="col-span-2">
                    <div className="grid grid-rows-2 grid-flow-col">
                      <div className="col-span-2 h-4 w-6 rounded-sm bg-slate-400 mt-1 ml-2"></div>
                      <div className="row-span-2 col-span-2 mr-80">SehatQ(10%)</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Homepage;
