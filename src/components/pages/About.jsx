import HeaderWithAbout from "../layout/HeaderWithAbout"
import { Link } from "react-router";
import myImage from "../../assets/images/girls.png"
import myImage2 from "../../assets/images/Services (3).png"
import myImage3 from "../../assets/images/Services (4).png"
import myImage4 from "../../assets/images/Services (5).png"
import myImage5 from "../../assets/images/Services (6).png"
import myImage7 from "../../assets/images/Frame 875.png"
import myImage8 from "../../assets/images/Frame 876.png"
import myImage6 from "../../assets/images/Frame 874.png"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Services from "./Services";
import Footer from "../layout/Footer";






export default function About(){
  return(
    <div>
      <HeaderWithAbout />
  <div className="mt-16 ml-14  flex gap-5">
  <Link className="text-[--text-color]" to="/">Home /</Link>
  <Link  to="/About">About </Link>
</div>
<div className="mt-16 ml-14  flex gap-10 flex-wrap">
  <div>
    <h1 className="font-bold text-4xl">Our Story</h1>
    <p className="mt-5">Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
    <p className="mt-10">Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
  </div>
  <div>
    <img src={myImage} alt="" />
  </div>
</div>
<div className="mt-24 ml-32 flex items-center flex-wrap gap-10 ">
  <div className="border w-[200px] h-[170px] text-center p-1">
  <img className="flex items-center justify-center m-auto mt-2" src={myImage2} alt="" />
  <h3 className="font-bold text-xl mt-5">10.5k </h3>
  <p className="text-[--text-color]">Sallers active our site</p>
  </div>
   <div className="border w-[200px] h-[170px] text-center bg-[--alt-text-color] text-white p-1">
 <img className="flex items-center justify-center m-auto mt-2" src={myImage3} alt="" />
 <h3 className="font-bold text-xl mt-5">33k </h3>
 <p>Mopnthly Produduct Sale</p>
 </div>
  <div className="border w-[200px] h-[170px] text-center p-1">
  <img className="flex items-center justify-center m-auto mt-2" src={myImage4} alt="" />
  <h3 className="font-bold text-xl mt-5">45.5k</h3>
  <p className="text-[--text-color]">Customer active in our site</p>
  </div>
   <div className="border w-[200px] h-[170px] text-center p-1">
 <img className="flex items-center justify-center m-auto mt-2" src={myImage5} alt="" />
 <h3 className="font-bold text-xl mt-5">25k</h3>
 <p className="text-[--text-color]">Anual gross sale in our site</p>
 </div>
</div>
<div className="services-list mt-24 ml-32 flex items-center flex-wrap gap-10">
  <div className="services">
    <img className="w-[370px] h-[430px]" src={myImage6} alt="" />
    <h3 className="font-medium text-2xl mt-2">Tom Cruise</h3>
    <p>Founder & Chairman</p>
    <div className="flex gap-5 mt-2 ">
<FaTwitter />
<FaInstagram />
<FaLinkedinIn />
</div>
  </div>
    <div className="services">
    <img className="w-[370px] h-[430px]" src={myImage7} alt="" />
    <h3 className="font-medium text-2xl mt-2">Emma Watson</h3>
    <p>Managing Director</p>
    <div className="flex gap-5 mt-2 ">
<FaTwitter />
<FaInstagram />
<FaLinkedinIn />
</div>
  </div>
      <div className="services">
    <img className="w-[370px] h-[430px]" src={myImage8} alt="" />
    <h3 className="font-medium text-2xl mt-2">Will Smith</h3>
    <p>Product Designer</p>
    <div className="flex gap-5 mt-2 ">
<FaTwitter />
<FaInstagram />
<FaLinkedinIn />
</div>
  </div>
  <div className="flex items-center gap-2 justify-center m-auto mt-5">
    <div className="w-2 h-2 rounded bg-[--main-color]"></div>
     <div className="w-2 h-2 rounded bg-[--main-color]"></div>
      <div className="w-2 h-2 bg-[--alt-text-color] rounded"></div>
       <div className="w-2 h-2 rounded bg-[--main-color]"></div>
        <div className="w-2 h-2 rounded bg-[--main-color]"></div>
  </div>
</div>
<Services />
<Footer />
    </div>
  )
}
