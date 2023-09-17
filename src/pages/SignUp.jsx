import { useState} from "react";
import { useDispatch } from "react-redux";
import AuthImage from "../assets/authimg.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { signUpUser } from "../redux/authSlice";


const SignUp = () => {

  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
   const[email, setEmail] = useState("");
   const[phoneNumber, setPhoneNumber] = useState("");
   const[password, setPassword] = useState("");
   const[role, setRole] = useState("");

   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();


   
  // useEffect(()=>{
  //   dispatch( signUpUser(bodySignUp))
  //  },[])

   const handleSignup = (e) =>{
    e.preventDefault()
    const bodySignUp = {
      firstName,
      lastName,
      email, 
      role: "Cashier", 
      password,
      phoneNumber
    }
    if( firstName&&
      lastName&&
      email&& 
      phoneNumber&&
      role&&
      password){
        alert("sign up successful")
      }
  
    console.log(`bodysign ${bodySignUp}`)
    dispatch( signUpUser(bodySignUp))
    //console.log(firstName,lastName, email, phoneNumber, password)
   }

  return (
   
      <div className="w-full h-full  flex overflow-x-hidden lg:py-0 py-6">
      <div className="w-1/2 lg:block hidden">
        <img src={AuthImage} alt="" className="w-full"/>
      </div>
      <div className=" lg:w-1/2 w-full lg:border border rounded lg:px-20 px-8 lg:pt-14 pt-0 bg-[#FFFFFF]">
        <h2 className="lg:text-[36px] text-[32px]  text-[#202223] pt-10">Welcome to Africafé!</h2>
        <p className="lg:text-[20px] text-sm pb-10">We are thrilled to see you</p>
         <form action="" className=" ">
         <label htmlFor="">First name</label><br />
          <input type="text" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br />
         <label htmlFor="">Last name</label><br />
          <input type="text" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br />
          <label htmlFor="">Email</label><br />
          <input type="email" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
          <label htmlFor="">Phone Number</label><br />
          <input type="email" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/><br />

          <label htmlFor="">Role</label><br />
          <select name="" className="p-2 w-full h-[48px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" value={role}
          onChange={(e) => setRole(e.target.value)}
          >
            <option value="">customer</option>
            <option value="">Admin</option>

          </select><br />
          <div>
      <label htmlFor="password">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="p-2 w-full h-[48px] border border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="absolute right-5 top-6">
          {showPassword ? (
            <FaEyeSlash onClick={togglePasswordVisibility} />
          ) : (
            <FaEye onClick={togglePasswordVisibility} />
          )}
        </span>
      </div>
    </div>
        <button className=" bg-[#03292C] hover:bg-white  text-[#FFFFFF] hover:tex-[#202223] text-xl w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl" onClick={handleSignup}>Sign up</button> <br />
        <Link to="/signin"> <button className=" hover:bg-bg-[#03292C] hover:text-white text-xl tex-[#202223] w-full h-[56px] border  border-[#A8AEB2] mt-2 mb-6 outline-none rounded-3xl">Cancel</button> <br />
        </Link>
         </form>
         <p className="text-center text-[14px] ">By clicking sign up you agree to Africafé <span className="text-[#A77444]">Terms and Condition</span></p>
      </div>
    </div>
    
  
  )
}

export default SignUp