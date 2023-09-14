import { Link } from "react-router-dom";
import Vison1 from "../assets/vision1.png";
import Vision2 from "../assets/vision2.png";
import Line from "../assets/line.png";

const Vision = () => {
  return (
    <div className="md:px-[90px] px-8 py-[33px] bg-[#FFFFFF]">
        <div className=" w-full flex  text-[#202223]  bg-[#FFFFFF]">
            <h2 className="text-[52px] w-1/2 uppercase">our vision</h2>
            <div className="w-1/2">
            <p className=" text-xl ">At Africa Cafe, our vision is simple: to transport you to the heart of Africa through the exquisite flavors of our cuisine, all while promoting sustainability and celebrating the continents culinary richness.</p>
            <a href="*" className="mt-6 font-semibold" >Learn more about our vision</a>
            </div>
        </div>
        <div className="flex gap-10 w-full my-16 ">
            <img src={Vison1} alt=""  className="w-1/2 object-cover" />
            <img src={Vision2} alt="" className="w-1/2 object-cover"  />
        </div>
        <div className="my-16 flex w-full gap-10 items-center ">
        <img src={Line} alt=""  className="w-[45%] h-[1px]"/>
        <Link to=""><button className="bg-[#03292C] text-xl items-center text-[#FFFFFF] w-[231px] h-[56px] border border-[#03292C] rounded-full">Book a reservation</button></Link>
        <img src={Line} alt="" className="w-[45%]  h-[1px]" />

       </div>
    </div>
  )
}

export default Vision