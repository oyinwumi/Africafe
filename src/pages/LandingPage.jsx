import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Location from "../components/Location"
import Navbar from "../components/Navbar"
import Testimony from "../components/Testimony"
import Vision from "../components/Vision";
import NavImg from "../assets/navimg.png"


const LandingPage = () => {
  return (
    <div className=' relative  '>
      <img src={NavImg} alt="" className='fixed min-w-full min-h-full  z-0 md:block hidden overflow-hidden' />
      <div className=' w-full absolute z-50 '>
        <Navbar/>
        <Hero/>
        <Vision/>
        <Testimony/>
        <Location/>
        <Footer/>
    </div>
    </div>

  )
}

export default LandingPage