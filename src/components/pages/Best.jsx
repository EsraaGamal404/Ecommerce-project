import myImage from '../../assets/images/jacket.png'
import myImage2 from '../../assets/images/bag.png'
import myImage3 from '../../assets/images/meck.png'
import myImage4 from '../../assets/images/libarary.png'
import myImage5 from '../../assets/images/Frame 694.png'
import { useCart } from "../../assets/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";

import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { Link } from 'react-router'


export default function Best(){
    const {addToCart} = useCart();
  
  return(
    <div className="ml-32 mt-16">
    <div className="title flex gap-3 ">
   <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>
   <h2 className="text-[--alt-text-color] font-medium">This Month</h2>
   </div>
   <div className="flex justify-between">
    <h2 className="text-2xl font-medium mt-5">Best Selling Products</h2>
    <Link to="/Wishlist" className="bg-[--alt-text-color] text-white rounded w-28 text-center h-10 mr-32">View All</Link>
   </div>
   <div className="card-list mt-14 flex gap-5 flex-wrap">

       <div className="card w-fit relative group overflow-hidden rounded-lg shadow p-4">
     <div className='relative h-[245px]  bg-[--secondary-color] '>
        <img className='p-12 object-cover rounded-lg' src={myImage} alt="" />
        <p className='absolute top-4 left-48 bg-white rounded p-1 text-xl'>
        <CiHeart />
        </p>
        <p className='absolute bottom-40 left-48  bg-white rounded p-1 text-xl'>
        <CiRead />
         </p>
        </div>
        <h3 className='font-bold mt-2'>The north coat </h3>
        <div className='flex gap-3 font-bold mt-2' >
          <p className='text-[--alt-text-color]'>$260</p>
          <p className='text-[--text-color]'><del>$360</del></p>
        </div>
        <div className='flex gap-3 mt-3 items-center'>
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
     </div>
  <div
   onClick={() => addToCart("The north coat", 260, myImage)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer
   ">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
     <p className='text-[--text-color]'>(65)</p>
   </div>
      </div>

      <div className="card w-fit  relative group overflow-hidden rounded-lg shadow p-4">
     <div className='relative h-[245px]  bg-[--secondary-color] '>
        <img className='p-12 object-cover rounded-lg' src={myImage2} alt="" />
        <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
        <CiHeart />
        </p>
        <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
        <CiRead />
         </p>
        </div>
        <h3 className='font-bold mt-2'>Gucci duffle bag </h3>
        <div className='flex gap-3 font-bold mt-2'>
          <p className='text-[--alt-text-color]'>$960</p>
          <p className='text-[--text-color]'><del>$360</del></p>
        </div>
        <div className='flex gap-3 mt-3 items-center'>
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
     </div>
  <div
   onClick={() => addToCart("Gucci duffle bag", 960, myImage2)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
     <p className='text-[--text-color]'>(65)</p>
   </div>
      </div>

      <div className="card w-fit  relative group overflow-hidden rounded-lg shadow p-4">
     <div className='relative h-[245px]  bg-[--secondary-color] '>
        <img className='p-12  object-cover rounded-lg' src={myImage3} alt="" />
        <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
        <CiHeart />
        </p>
        <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
        <CiRead />
         </p>
        </div>
        <h3 className='font-bold mt-2'>RGB liquid CPU Cooler </h3>
        <div className='flex gap-3 font-bold mt-2' >
          <p className='text-[--alt-text-color]'>$160</p>
          <p className='text-[--text-color]'><del>$170</del></p>
        </div>
        <div className='flex gap-3 mt-3 items-center'>
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
     </div>
  <div
   onClick={() => addToCart("RGB liquid CPU Cooler",160, myImage3)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
     
     <p className='text-[--text-color]'>(65)</p>
   </div>
      </div>

      <div className="card w-fit relative group overflow-hidden rounded-lg shadow">
    <div className='relative h-[245px]  bg-[--secondary-color] '>
       <img className='p-12  ' src={myImage4} alt="" />
       <p className='absolute top-4 left-48 bg-white rounded p-1 text-xl'>
       <CiHeart />
       </p>
       <p className='absolute bottom-40 left-48  bg-white rounded p-1 text-xl'>
       <CiRead />
        </p>
       </div>
       <h3 className='font-bold mt-2'>Small BookSelf </h3>
       <div className='flex gap-3 font-bold mt-2' >
         <p className='text-[--alt-text-color]'>$</p>
       </div>
       <div className='flex gap-3 mt-3 items-center'>
       <div className='text-yellow-400 flex gap-1'>
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStar />
    </div>
      <div
   onClick={() => addToCart("Small BookSelf",360, myImage4)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
    <p className='text-[--text-color]'>(65)</p>
  </div>
  </div>
   </div>
   <div className='flex justify-around  bg-black p-8 mt-20 gap-5 rounded flex-wrap container m-auto'>
    <div className='info'>
      <span className='text-[--secand-text-color]'>Categories</span>
      <h1 className='text-white font-medium text-3xl mt-6'>Enhance Your <br /> Music Experience</h1>
        <div className='buttons flex gap-3 mt-10'>
          <div className='bg-white rounded-full  p-2 text-center'>
            <h3 className='font-bold text-xl'>23</h3>
            <p>Hours</p>
          </div>
          <div className='bg-white rounded-full w-fit p-2 text-center'>
        <h3 className='font-bold text-xl'>05</h3>
        <p>Days</p>
      </div>
      <div className='bg-white rounded-full  p-2 text-center'>
      <h3 className='font-bold text-xl'>59</h3>
      <p>Minutes</p>
    </div>
    <div className='bg-white rounded-full  p-2 text-center'>
      <h3 className='font-bold text-xl'>35</h3>
      <p>Seconds</p>
    </div>
        </div>
        <button  onClick={() => addToCart("Music Experience",360, myImage5)} className='bg-[--secand-text-color] text-white p-2 mt-10 rounded w-28'>Buy Now!</button>

    </div>
    <div className='image bg-black border-none outline-none'>
      <img className='w-[468px] h-[330px]  rounded-lg shadow-[0_0_50px_rgba(255,255,255,0.2)] ' src={myImage5} alt="" />
    </div>
   </div>
   </div>
  );
}