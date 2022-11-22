import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import { changeActive } from "../utils/redux/navActive/navSlice";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BsThreeDotsVertical, BsGraphUp } from "react-icons/bs";

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
      <div class="flex ...">
        <div class="flex-auto w-64">
          <div className="flex mb-10">
            <Card width="w-full" height="h-96" className="border p-5">
              <Card.Title className="text-xl ml-10 font-bold flex justify-between">
                <p>Inventory</p>
                <BsThreeDotsVertical size={26} />
              </Card.Title>
              <div className="ml-10">
              <div className="flex mt-8">
                <div className="flex-auto w-64">
                  <span>New Order</span>
                </div>
                <div className="flex-auto w-32 ml-56">
                  <span className="border border-sky-300 font-bold py-1 px-2 rounded-xl bg-sky-300">
                    3
                  </span>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex-auto w-64">
                  <span>Prepare Order</span>
                </div>
                <div className="flex-auto w-32 ml-56">
                  <span className="border border-sky-300 font-bold py-1 px-2 rounded-xl bg-sky-300">
                    5
                  </span>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex-auto w-64">
                  <span>Waiting Pickup</span>
                </div>
                <div className="flex-auto w-32 ml-56">
                  <span className="border border-sky-300 font-bold py-1 px-1 rounded-xl bg-sky-300">
                    12
                  </span>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="flex-auto w-64">
                  <span>Sent</span>
                </div>
                <div className="flex-auto w-32 ml-56">
                  <span className="border border-sky-300 font-bold py-1 px-2 rounded-xl bg-sky-300">
                    9
                  </span>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex-auto w-64">
                  <span>Cancel</span>
                </div>
                <div className="flex-auto w-32 ml-56">
                  <span className="border border-sky-300 font-bold py-1 px-2 rounded-xl bg-sky-300">
                    7
                  </span>
                </div>
              </div>

              <div className="flex mt-4">
                <div className="flex-auto w-64">
                  <span>Done</span>
                </div>
                <div className="flex-auto w-32 ml-56">
                  <span className="border border-sky-300 font-bold py-1 px-2 rounded-xl bg-sky-300">
                    5
                  </span>
                </div>
              </div>
              </div>
            </Card>
          </div>
        </div>
        <div class="flex-none"></div>
        <div class="flex-auto w-64 pl-32">
          <div className="flex mb-10">
            <Card width="w-8/12" height="h-96" className="border p-5 w-96">
              <Card.Title className="text-xl font-bold flex justify-between">
                <p>Persentase Penjualan Obat</p>
              </Card.Title>
            </Card>
          </div>

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
    ]

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
                    )
                })}
            </div>
            <div className="flex mb-10">
                <Card width="w-8/12" height="h-96" className="border p-5">
                    <Card.Title className="text-xl font-bold flex justify-between">
                        <p>Sales & Purchase</p>
                        <BsThreeDotsVertical size={26} />
                    </Card.Title>
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
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-between">
                <Card width="w-6/12" height="h-68 mb-10" className="border p-5 pb-8">
                    <Card.Title className="text-xl font-bold flex justify-between">
                        <p>Inventory</p>
                        <BsThreeDotsVertical size={26} />
                    </Card.Title>
                    <Card.Body className="mt-5">
                        {dataInventory.map((item, i) => {
                            return (
                                <div key={i} className="flex justify-between px-5 mt-2">
                                    <p>{item.title}</p>
                                    <p className="w-6 h-6 rounded-lg shadow bg-[#b9e2ff] text-[#3b4951] flex justify-center items-center font-semibold">{item.value}</p>
                                </div>
                            )
                        })}
                    </Card.Body>
                </Card>
                <Card width="w-5/12" height="h-68 mb-10" className="border p-5 pb-8">
                    <Card.Title className="text-xl font-bold">
                        <p>Persentase Penjualan Obat</p>
                    </Card.Title>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
