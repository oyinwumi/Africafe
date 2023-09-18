import { Link } from "react-router-dom";
import DashboardTop from "./DashboardTop";
import Sidebar from "./Sidebar";
import Coin from "../assets/coin.svg";

const Africoin = () => {
  const walletDatas = [
    { title: 'africoin issued', amount: '710', percent: '+8%' },
    { title: 'africoin issued', amount: '560', percent: '+8%' },
  ];

  const recentActivities = [
    { phoneNumber: '0702345768', date: '14.09.2023', coin: '100' },
    { phoneNumber: '0702345768', date: '14.09.2023', coin: '100' },
    { phoneNumber: '0702345768', date: '14.09.2023', coin: '100' },
    { phoneNumber: '0702345768', date: '14.09.2023', coin: '100' },
    { phoneNumber: '0702345768', date: '14.09.2023', coin: '100' },
  ];

  return (
    <div className="flex flex-col font-fontb relative">
      <div>
        <DashboardTop />
      </div>
      <div className="flex text-[#202223]">
        <Sidebar />
        <div className="p-6 bg-[#F3F2F1] w-full">
          <h2 className="mt-6 py-4 text-[24px] font-bold border-b ">Africoin program</h2>
          <div className="border-b py-5 flex justify-between">
           <div className="flex gap-10">
           <p className="font-sm hover: border-b-2 hover:border-[#A77444]">Overview</p>
            <p className="font-sm hover: border-b-2 hoverborder-[#A77444] ">Activity</p>
           </div>
           <Link to="/edit-coin"><button className="bg-[#03292C] text-white border rounded-3xl w-[156px] h-[34px]">Edit Africoin program</button>
          </Link>
          </div>
          <div className="flex gap-10 my-6">
            {walletDatas.map((data, key) => (
              <div key={key} className="flex flex-col gap-6 border rounded bg-[#FFFFFF] p-4 w-[240px] text-[12px]">
                <div>
                  <h5 className="uppercase text-[#535353] font-medium">{data.title}</h5>
                </div>
                <div className="flex gap-1">
                  <img src={Coin} alt="" />
                  <p className="text-[#202223] font-bold">{data.amount}</p>
                </div>
              </div>
            ))}
            <select name="" className="w-[118px] h-[40px] text-[#535353]">
                <option value="">20.03.2023</option>
            </select>
          </div>

          <div className="bg-[#FFFFFF] h-[564px] p-6 mt-10">
            <h3 className="text-xl">Recent activities</h3>
            <div className=" mt-6">
              <table className=" w-[80%] text-justify">
                <thead className="">
                  <tr className="flex justify-between border-b ">
                    <th className=" py-3 ">Phone Number</th>
                    <th className=" py-3">Coin</th>
                    <th className=" py-3 mr-12">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivities.map((activity, key) => (
                    <tr key={key} className="flex justify-between border-b">
                      <td className=" my-3">{activity.phoneNumber}</td>
                      <td className=" my-3 ">{activity.coin}</td>
                      <td className=" my-3">{activity.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Africoin;
