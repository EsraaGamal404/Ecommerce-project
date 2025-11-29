import HeaderWithAccount from "../layout/HeaderWithAccount";
import myImage from "../../assets/images/bag.png"
import myImage2 from "../../assets/images/meck.png"
import myImage3 from "../../assets/images/GP1.png"
import myImage4 from "../../assets/images/jack.png"
import myImage5 from "../../assets/images/ibade.png"
import myImage6 from "../../assets/images/image2.png"
import myImage7 from "../../assets/images/image1.png"
import myImage8 from "../../assets/images/image4.png"
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Footer from "../layout/Footer";
import { useCart } from "../../assets/CartContext";
import { Link } from "react-router";


export default function Wishlist({name}){

const {addToCart} = useCart();



  return(
    <div>
      <HeaderWithAccount />
      <div className="flex items-center mt-16 ml-32">
        <h3 className="text-xl">Wishlist (4)</h3>
        <button className="border p-2 move">Move All To Bag</button>
      </div>
      <div className="card-list mt-16 ml-32 flex flex-wrap items-start gap-28">
        <Link to={"/product/5"} className="card w-fit">
      <div className=" relative bg-[--secondary-color]  p-1">
      <div className="flex items-center">
      <p className="absolute text-white bg-[--alt-text-color]  border mt-8 ">-35%</p>
      <FaBasketShopping className="absolute bg-white ml-40 p-1 text-2xl mt-8" />
      </div>
      <img src={myImage} alt="" />
      <div onClick={() =>addToCart("Gucci duffle bag",960,myImage)} className="flex gap-2 bg-black text-white justify-center items-center cursor-pointer">
        <MdOutlineShoppingCart />
        Add To Cart
      </div>
      </div>
       <h3 className="mt-3">Gucci duffle bag</h3>
 <div className="flex gap-3">
 <p className="text-[--alt-text-color]">$960</p>
 <p className="delprice text-[--text-color]">$1160</p>
 </div>
  </Link>

          <Link to={"/product/6"} className="card w-fit">
      <div className=" relative bg-[--secondary-color]  py-11">
      <div className="flex items-center">
      <FaBasketShopping className="absolute bg-white ml-40 p-1 text-2xl mb-9" />
      </div>
      <img src={myImage2} alt="" />
      <div onClick={() =>addToCart("RGB liquid CPU Cooler",1960,myImage2)} className="flex gap-2 bg-black text-white justify-center items-center relative top-11 cursor-pointer">
        <MdOutlineShoppingCart />
        Add To Cart
      </div>
      </div>
       <h3 className="mt-3">RGB liquid CPU Cooler</h3>
 <p className="text-[--alt-text-color]">$1960</p>
 </Link>

         <Link to={"/product/7"} className="card w-fit">
     <div className=" relative bg-[--secondary-color]  py-2">
     <div className="flex items-center">
     <FaBasketShopping className="absolute bg-white ml-40 p-1 text-2xl mt-6" />
     </div>
     <img src={myImage3} alt="" />
     <div onClick={() =>addToCart("GP11 Shooter USB Gamepad",550,myImage3)} className="flex gap-2 bg-black text-white justify-center items-center mt-5 cursor-pointer">
       <MdOutlineShoppingCart />
       Add To Cart
     </div>
     </div>
      <h3 className="mt-3">GP11 Shooter USB Gamepad</h3>
<p className="text-[--alt-text-color]">$550</p>
</Link>

         <Link to={"/product/8"} className="card w-fit">
     <div className=" relative bg-[--secondary-color]  p-1">
     <div className="flex items-center">
     <FaBasketShopping className="absolute bg-white ml-40 p-1 text-2xl mt-8" />
     </div>
     <img src={myImage4} alt="" />
     <div onClick={() =>addToCart("Quilted Satin Jacket",750,myImage4)} className="flex gap-2 bg-black text-white justify-center items-center cursor-pointer">
       <MdOutlineShoppingCart />
       Add To Cart
     </div>
     </div>
      <h3 className="mt-3">Quilted Satin Jacket</h3>
<p className="text-[--alt-text-color]">$750</p>
</Link>
  </div>




      <div className="flex items-center mt-16 ml-32">
       <div className="flex items-center gap-5">
      <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>
        <h3 className="text-xl">Just For You</h3></div>
        <button className="border p-2 w-32 move mr-72">see all</button>
      </div>
      <div className="card-list mt-16 ml-32 flex flex-wrap items-start gap-28">
        <Link to={"/product/2"} className="card w-fit">
      <div className=" relative bg-[--secondary-color]  p-1">
      <div className="flex items-center">
      <p className="absolute text-white bg-[--alt-text-color]  border mt-8 ">-35%</p>
      <FaEye className="absolute bg-white ml-40 p-1 text-2xl mt-8" />
      </div>
      <img src={myImage5} alt="" />
      <div onClick={() =>addToCart("ASUS FHD Gaming Laptop",960,myImage5)} className="flex gap-2 bg-black text-white justify-center items-center cursor-pointer">
        <MdOutlineShoppingCart />
        Add To Cart
      </div>
      </div>
       <h3 className="mt-3">ASUS FHD Gaming Laptop</h3>
 <div className="flex gap-3">
 <p className="text-[--alt-text-color]">$960</p>
 <p className="delprice text-[--text-color]">$1160</p>
 </div>
 <div className="flex gap-3 items-center mt-3">
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <p className="text-[--text-color]">(65)</p>
     </div></div>
  </Link>

          <Link to={"/product/4"} className="card w-fit">
      <div className=" relative bg-[--secondary-color]  py-7">
      <div className="flex items-center">
      <FaEye className="absolute bg-white ml-40 p-1 text-2xl mt-8" />
      </div>
      <img src={myImage6} alt="" />
      <div onClick={() =>addToCart("IPS LCD Gaming Monitor",1160,myImage6)} className="flex gap-2 bg-black text-white justify-center items-center relative top-7 cursor-pointer">
        <MdOutlineShoppingCart />
        Add To Cart
      </div>
      </div>
       <h3 className="mt-3">IPS LCD Gaming Monitor</h3>
 <p className="text-[--alt-text-color]">$1160</p>
  <div className="flex gap-3 items-center mt-3">
  <div className='text-yellow-400 flex gap-1'>
  <FaStar />
  <FaStar />
<FaStar />
<FaStar />
<p className="text-[--text-color]">(65)</p>
</div></div>
</Link>
<Link to={"/product/1"}>
<div className="card w-fit">
<div className=" relative bg-[--secondary-color]  p-1">
<div className="flex items-center">
<p className="absolute text-white bg-[--secand-text-color]  border mt-8 ">-35%</p>
<FaEye className="absolute bg-white ml-40 p-1 text-2xl mt-8" />
</div>
<img src={myImage7} alt={name} /> 
<div onClick={() =>addToCart("HAVIT HV-G92 Gamepad",560,myImage7)} className="flex gap-2 bg-black text-white justify-center items-center cursor-pointer">
<MdOutlineShoppingCart />
Add To Cart
</div>
</div>
<h3 className="mt-3">HAVIT HV-G92 Gamepad</h3>
<p className="text-[--alt-text-color]">$560</p>
  <div className="flex gap-3 items-center mt-3">
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <p className="text-[--text-color]">(65)</p>
     </div></div>
</div></Link>

    <Link to={"/product/3"} className="card w-fit">
     <div className=" relative bg-[--secondary-color]  py-11">
     <div className="flex items-center">
     <FaEye className="absolute bg-white ml-40 p-1 text-2xl mb-7" />
     </div>
     <img src={myImage8} alt="" />
     <div onClick={() =>addToCart("AK-900 Wired Keyboard",200,myImage8)} className="flex gap-2 bg-black text-white justify-center items-center  relative top-11 cursor-pointer">
       <MdOutlineShoppingCart />
       Add To Cart
     </div>
     </div>
      <h3 className="mt-3">AK-900 Wired Keyboard</h3>
<p className="text-[--alt-text-color]">$200</p>
  <div className="flex gap-3 items-center mt-3">
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <p className="text-[--text-color]">(65)</p>
     </div></div>
</Link>
  </div>
  <Footer />
 </div>
  )
}