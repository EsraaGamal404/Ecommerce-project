import myImage from '../../assets/images/image1.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import myImage2 from '../../assets/images/image4.png'
import myImage3 from '../../assets/images/image2.png'
import myImage4 from '../../assets/images/image3.png'
import { useCart } from "../../assets/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";




export default function Products(){
  const {addToCart} = useCart();
  
  return(
    <div className="ml-32 mt-20">
      <div className="title flex gap-3 ">
      <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>
      <h2 className="text-[--alt-text-color] font-medium">Today’s</h2>
      </div>
      <div className="flex items-baseline gap-24 flex-wrap">
        <div>
        <h2 className="font-medium text-2xl mt-5">Flash Sales</h2>
        </div>
        <div className="parent flex gap-2">
        <div className="flex gap-2">
        <div>
        <h3>Days</h3>
        <p className="font-bold text-xl">03</p>
        </div>
        <p className="text-[--alt-text-color] text-4xl">:</p>
        </div>
        <div className="flex gap-2">
       <div>
       <h3>Hours</h3>
       <p className="font-bold text-xl">23</p>
       </div>
       <p className="text-[--alt-text-color] text-4xl">:</p>
       </div>
       <div className="flex gap-2">
       <div>
       <h3>Minutes</h3>
       <p className="font-bold text-xl">19</p>
       </div>
       <p className="text-[--alt-text-color] text-4xl">:</p>
       </div>
       <div className="flex gap-2">
       <div>
       <h3>Seconds</h3>
       <p className="font-bold text-xl">56</p>
       </div>
       </div>
      </div>
      </div>
      <div className="card-list mt-5 flex gap-5 flex-wrap">
        <div className="card w-fit relative group overflow-hidden rounded-lg shadow p-4">
       <div className='relative'>
          <img className='p-8 bg-[--secondary-color] object-cover rounded-lg ' src={myImage} alt="" />
          <p className='absolute top-4 left-3 bg-[--alt-text-color] text-white rounded p-1'>-40%</p>
          <p className='absolute top-4 left-52 bg-white rounded p-1 text-xl'>
          <CiHeart />
          </p>
          <p className='absolute bottom-40 left-52  bg-white rounded p-1 text-xl'>
          <CiRead />
           </p>
          </div>
          <h3 className='font-bold mt-2'>HAVIT HV-G92 Gamepad</h3>
          <div className='flex gap-3 font-bold mt-2' >
            <p className='text-[--alt-text-color]'>$120</p>
            <p className='text-[--text-color]'><del>$160</del></p>
          </div>
          <div className='flex gap-3 mt-3 items-center'>
          <div className='text-yellow-400 flex gap-1'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
          </div>
          <div
    onClick={() => addToCart("HAVIT HV-G92 Gamepad", 200, myImage)}
    className="
      flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
      absolute bottom-0 left-0 w-full opacity-0 translate-y-6
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 cursor-pointer
    "
  >
    <MdOutlineShoppingCart />
    Add To Cart
  </div>
          <p className='text-[--text-color]'>(88)</p>
     </div>
        </div>


      <div className="card w-fit relative group overflow-hidden rounded-lg shadow p-4">
      <div className='relative bg-[--secondary-color] h-[245px]'>
         <img className='p-10  object-cover rounded-lg ' src={myImage2} alt="" />
         <p className='absolute top-4 left-3 bg-[--alt-text-color] text-white rounded p-1'>-35%</p>
         <p className='absolute top-4 left-56 bg-white rounded p-1 text-xl'>
         <CiHeart />
         </p>
         <p className='absolute bottom-40 left-56  bg-white rounded p-1 text-xl'>
         <CiRead />
          </p>
         </div>
         <h3 className='font-bold mt-2'>AK-900 Wired Keyboard</h3>
         <div className='flex gap-3 font-bold mt-2' >
           <p className='text-[--alt-text-color]'>$960</p>
           <p className='text-[--text-color]'><del>$1160</del></p>
         </div>
         <div className='flex gap-3 mt-3 items-center'>
         <div className='text-yellow-400 flex gap-1'>
       <FaStar />
       <FaStar />
       <FaStar />
       <FaStar />
      </div>
    <div
    onClick={() => addToCart("AK-900 Wired Keyboard", 960, myImage2)}
    className="
      flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
      absolute bottom-0 left-0 w-full opacity-0 translate-y-6
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 cursor-pointer
    "
  >
    <MdOutlineShoppingCart />
    Add To Cart
  </div>
      <p className='text-[--text-color]'>(75)</p>
    </div>
       </div>


       <div className="card w-fit relative group overflow-hidden rounded-lg shadow p-4">
      <div className='relative h-[245px]  bg-[--secondary-color]'>
         <img className='p-11 object-cover rounded-lg' src={myImage3} alt="" />
         <p className='absolute top-3 left-3 bg-[--alt-text-color] text-white rounded p-1'>-30%</p>
         <p className='absolute top-4 left-56 bg-white rounded p-1 text-xl'>
         <CiHeart />
         </p>
         <p className='absolute bottom-40 left-56  bg-white rounded p-1 text-xl'>
         <CiRead />
          </p>
         </div>
         <h3 className='font-bold mt-2'>IPS LCD Gaming Monitor</h3>
         <div className='flex gap-3 font-bold mt-2' >
           <p className='text-[--alt-text-color]'>$370</p>
           <p className='text-[--text-color]'><del>$400</del></p>
         </div>
         <div className='flex gap-3 mt-3 items-center'>
         <div className='text-yellow-400 flex gap-1'>
       <FaStar />
       <FaStar />
       <FaStar />
       <FaStar />
      </div>
    <div
    onClick={() => addToCart("AK-900 Wired Keyboard", 370, myImage3)}
    className="
      flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
      absolute bottom-0 left-0 w-full opacity-0 translate-y-6
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 cursor-pointer
    ">
    <MdOutlineShoppingCart />
    Add To Cart
  </div>
      <p className='text-[--text-color]'>(99)</p>
    </div>
       </div>

       <div className="card w-fit relative group overflow-hidden rounded-lg shadow p-4">
     <div className='relative h-[245px]  bg-[--secondary-color] '>
        <img className='p-12 object-cover rounded-lg' src={myImage4} alt="" />
        <p className='absolute top-3 left-3 bg-[--alt-text-color] text-white rounded p-1'>-25%</p>
        <p className='absolute top-4 left-40 bg-white rounded p-1 text-xl'>
        <CiHeart />
        </p>
        <p className='absolute bottom-40 left-40  bg-white rounded p-1 text-xl'>
        <CiRead />
         </p>
        </div>
        <h3 className='font-bold mt-2'>S-Series Comfort Chair </h3>
        <div className='flex gap-3 font-bold mt-2' >
          <p className='text-[--alt-text-color]'>$375</p>
          <p className='text-[--text-color]'><del>$395</del></p>
        </div>
        <div className='flex gap-3 mt-3 items-center'>
        <div className='text-yellow-400 flex gap-1'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
     </div>
    <div
    onClick={() => addToCart("S-Series Comfort Chair", 375, myImage4)}
    className="
      flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
      absolute bottom-0 left-0 w-full opacity-0 translate-y-6
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300 cursor-pointer
    ">
    <MdOutlineShoppingCart />
    Add To Cart
  </div>
     <p className='text-[--text-color]'>(99)</p>
   </div>
      </div>
      </div>
      <button className='bg-[--alt-text-color] text-white p-2 rounded mt-20 flex justify-center items-center m-auto w-60'>View All Products</button>
      <hr className='mt-10' />
    </div>
  )
}