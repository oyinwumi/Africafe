// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Home from "../assets/home.svg";
import Inventory from "../assets/inventory_2.svg";
import Order from "../assets/shopping_cart.svg";
import Customer from "../assets/home.svg";
import Transaction from "../assets/description.svg";
import Loyalty from "../assets/tabler_coins.svg";
import Report from "../assets/chart_data.svg";
import Settings from "../assets/settings.svg"
import Logout from "../assets/logouts.svg"
// import { FaBars } from 'react-icons/fa';


const Sidebar = () => {
//   const dispatch = useDispatch();
  // const [open, setOpen] = useState(true);
  // const toggle = () => {
  //   setOpen(!open);
  // };
  const menu = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <img src={Home} alt="" />,
    },
    {
      path: '/inventory',
      name: 'Inventory',
      icon: <img src={Inventory} alt="" />,
    },
    {
      path: '/order',
      name: 'Order',
      icon: <img src={Order} alt=""  />,
    },
    
  
    {
      path: '/customers',
      name: 'Customer',
      icon: <img src={Customer} alt="" />,
    },
    {
      path: '/transactions',
      name: 'Transactions',
      icon: <img src={Transaction} alt="" />,
    },
    {
      path: '/loyalty-reward',
      name: 'Loyalty reward',
      icon: <img src={Loyalty} alt="" />,
    },
    {
        path: '/report',
        name: 'Report',
        icon: <img src={Report} alt="" />,
      },
 
  ];

  return (
    <>
      <div
        className={` lg:border-r pl-3 md:border-r-none border-r-none border-pink h-full  lg:block md:hidden hidden transition-all ${
          open ? 'lg:w-[245px]' : 'lg:w-20'
        }`} >
        <div className='bg-white '>
          {/* <div className={`text-black text-3xl ml-2`}>
            <FaBars onClick={toggle} />
          </div> */}
          {menu.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className='px-4 md:text-center text-black'>
                <div className='flex hover:bg-[#F3F2F1]  p-1 hover:border-r-2-[#A77444]  text-lg items-center'>
                  <div className='mr-4 '>{item.icon}</div>
                  <div className={` ${open ? 'display:block ' : 'hidden '}`}>
                    {item.name}
                  </div>
                </div>
              </NavLink>
            );
          })}
          <div className='flex  flex-col  gap-8 text-lg  mt-[330px] cursor-pointer'  >
            <div className='flex  hover:bg-[#F3F2F1] p-1 hover:border-r-4 '>
            <img src={Settings} alt="" />
              <p className='ml-3'>Settings </p>
            </div>
            <div className='flex  hover:bg-[#F3F2F1] p-1 hover:border-r-4 '>
            <img src={Logout} alt="" />
              <p className='ml-3'>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
