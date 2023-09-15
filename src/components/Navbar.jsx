import { Link } from "react-router-dom"
import Logo from "../assets/Africafe.svg"
import Cart from "../assets/shopping-bag.svg";
const Navbar = () => {
  return (
    <div className=" font-font bg-[#F2EFE8] md:px-[90px] px-8 py-[33px] flex justify-between items-center  text-lg text-[#202223] font-medium">
       <div className="flex gap-10 ">
       <Link to="/wallet" className="">Wallet</Link>
         <Link to="/shop" className="">Shop</Link>
         <Link to="" className="">Make reservation</Link>
       </div>
       <div>
        <Link to="/"><img src={Logo} alt="" /></Link>
       </div>
       <div className="flex gap-10">
       <Link to="" className="">Contact</Link>
       <Link to="/signup" className="underline">Login</Link>
       <Link to="" className="">
        <img src={Cart} alt="" />
       </Link>
       </div>

    </div>
  )
}

export default Navbar