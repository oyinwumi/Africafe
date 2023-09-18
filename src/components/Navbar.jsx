import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../assets/Africafe.svg"
import Cart from "../assets/shopping-bag.svg";
import Cart2 from "../assets/shopping_cart.svg";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full font-font bg-[#F2EFE8] md:px-[90px] px-8 py-[33px] flex justify-between items-center  text-lg text-[#202223] font-medium">
       <div className="lg:flex gap-10  hidden ">
       <Link to="/wallet" className="">Wallet</Link>
         <Link to="/shop" className="">Shop</Link>
         <Link to="" className="">Make reservation</Link>
       </div>
       <div>
        <Link to="/"><img src={Logo} alt="" /></Link>
        <div
            onClick={() => setOpen(!open)}
            className='text-[#A77444] text-5xl cursor-pointer md:hidden absolute right-8 top-6 text-center'
          >
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
       </div>
       <div className="lg:flex hidden gap-10  ">
       <Link to="" className="">Contact</Link>
       <Link to="/signin" className="underline">Login</Link>
       <Link to="" className="">
        <img src={Cart} alt="" />
       </Link>
       </div>
       <div
          className={` lg:hidden flex flex-col px-4 text-2xl md:text-center items-center  text-white md:z-auto z-50 md:static absolute w-full left-0 md:w-auto lg:pt-14 md:pt-10 pt-10
       lg:pb-0 lg:mb-12 md:pb-12 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-[#A77444]   transition-all ease-in duration-500 ${
         open ? 'top-20' : 'top-[-490px]'
       } `}
        >
       <Link to="/wallet" className=" pb-4 ">Wallet</Link>
         <Link to="/shop" className="pb-4">Shop</Link>
         <Link to="" className="pb-4">Make reservation</Link>
       <Link to="" className="pb-4">Contact</Link>
       <Link to="/signin" className="underline pb-4">Login</Link>
       <Link to="" className="pb-4">
        <img src={Cart2} alt="" />
       </Link>
       </div>
        </div>
    
  )
}

export default Navbar