import InstaLogo from "../assets/instagram2.svg";
import TwitterLogo from "../assets/feTwitter2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div  className="bg-[#03292C] text-[#FFFFFF] md:px-[90px] px-8 pt-[33px] pb-16">
        <h2 className="text-[36px] text-center uppercase"> journey to the heart of africa, one dish at a time</h2>
        <div className="flex justify-center gap-[700px]  pt-20">
           <div className=" text-center text-xl">
            <h6>Contact</h6>
            <p className="mt-2">Contact@africacafe.com</p>
           </div>
           <div className="flex gap-10 items-center text-center">
            <Link to="" className="flex flex-col items-center">
              <img src={TwitterLogo} alt="" />
              <p className="mt-2">Twitter</p>
            </Link>
            <Link to="" className=" flex flex-col  items-center"> 
              <img src={InstaLogo} alt="" />
              <p className="mt-2">Instagram</p>
            </Link>
           </div>
        </div>
    </div>
  )
}

export default Footer