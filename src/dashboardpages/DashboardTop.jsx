import { Link } from "react-router-dom"
import Logo from "../assets/Africafe.svg"
import Profile from "../assets/profileimage.svg";
import Notification from "../assets/notifications.svg";
import Email from "../assets/email.svg";

const DashboardTop = () => {
  return (
    <div className=" border-b p-6  flex justify-between items-center">
        <div>
           <Link to="/"> <img src={Logo} alt="" /></Link>
        </div>
        <div className="flex gap-10 items-center">
           <Link><img src={Notification} alt="" /></Link>
           <Link><img src={Email} alt="" /></Link>
           <Link><img src={Profile} alt="" /></Link>
        </div>
    </div>
  )
}

export default DashboardTop