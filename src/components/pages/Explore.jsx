import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import myImage from '../../assets/images/dog.png'
import myImage2 from '../../assets/images/camera.png'
import myImage3 from '../../assets/images/ibade.png'
import myImage4 from '../../assets/images/craeem.png'
import myImage5 from '../../assets/images/car.png'
import myImage6 from '../../assets/images/Copa.png'
import myImage7 from '../../assets/images/GP1.png'
import myImage8 from '../../assets/images/jack.png'
import { useCart } from "../../assets/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Explore(){
  const {addToCart} = useCart();
  
  return(
    <div className="ml-32 mt-16">
    <div className="title flex gap-3 ">
  <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>
  <h2 className="text-[--alt-text-color] font-medium">Our Products</h2>
  </div>
  <div>
  <h2 className="text-2xl font-medium mt-5">Explore Our Products</h2>
  </div>
  <div className="cards-list mt-14 flex gap-5 flex-wrap ">
  <div className="card w-fit relative group overflow-hidden rounded-lg shadow p-4">
    <div className='relative h-[245px] w-[270px] bg-[--secondary-color]'>
       <img className='p-12 object-cover rounded-lg' src={myImage} alt="" />
       <p className='absolute top-4 left-56 bg-white rounded p-1 text-xl'>
       <CiHeart />
       </p>
       <p className='absolute bottom-40 left-56  bg-white rounded p-1 text-xl'>
       <CiRead />
        </p>
       </div>
       <div>
       <h3 className='font-bold mt-2 '>Breed Dry Dog Food</h3>
       <div className='flex gap-3 font-bold mt-2 items-center' >
         <p className='text-[--alt-text-color]'>$100</p>
       <div className='flex gap-3  items-center'>
       <div className='text-yellow-400 flex gap-1'>
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStar />
     <p className="text-gray-500 flex">
     <FaStar />
     <FaStar />
     </p>
    </div>
    <div
   onClick={() => addToCart("Breed Dry Dog Food",100, myImage)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
    <p className='text-[--text-color]'>(99)</p>
  </div>
  </div>
     </div>
     </div>

     <div className="card w-fit relative group overflow-hidden rounded-lg shadow ">
   <div className='relative h-[245px] w-[280px] bg-[--secondary-color]'>
      <img className='p-12  object-cover rounded-lg' src={myImage2} alt="" />
      <p className='absolute top-4 left-56 bg-white rounded p-1 text-xl'>
      <CiHeart />
      </p>
      <p className='absolute bottom-40 left-56  bg-white rounded p-1 text-xl'>
      <CiRead />
       </p>
      </div>
      <div>
      <h3 className='font-bold mt-2 '>CANON EOS DSLR Camera</h3>
      <div className='flex gap-3 font-bold mt-2 items-center' >
        <p className='text-[--alt-text-color]'>$360</p>
      <div className='flex gap-3  items-center'>
      <div className='text-yellow-400 flex gap-1'>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <p className="text-gray-500 flex">
    <FaStar />
    </p>
   </div>
  <div
   onClick={() => addToCart("CANON EOS DSLR Camera",360, myImage2)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
   <p className='text-[--text-color]'>(95)</p>
 </div>
 </div>
    </div>
    </div>

    <div className="card w-fit relative group overflow-hidden rounded-lg shadow">
   <div className='relative h-[245px]  bg-[--secondary-color]'>
      <img className='p-12 w-[280px] object-cover rounded-lg' src={myImage3} alt="" />
      <p className='absolute top-4 left-56 bg-white rounded p-1 text-xl'>
      <CiHeart />
      </p>
      <p className='absolute bottom-40 left-56  bg-white rounded p-1 text-xl'>
      <CiRead />
       </p>
      </div>
      <div>
      <h3 className='font-bold mt-2 '>ASUS FHD Gaming Laptop</h3>
      <div className='flex gap-3 font-bold mt-2 items-center' >
        <p className='text-[--alt-text-color]'>$700</p>
      <div className='flex gap-3  items-center'>
      <div className='text-yellow-400 flex gap-1'>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
   </div>
   <p className='text-[--text-color]'>(325)</p>
 </div>
  <div
  onClick={() => addToCart("ASUS FHD Gaming Laptop",700, myImage3)}
  className="
    flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
    absolute bottom-0 left-0 w-full opacity-0 translate-y-6
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300 cursor-pointer">
  <MdOutlineShoppingCart />
  Add To Cart
</div>
 </div>
    </div>
    </div>

    <div className="card w-fit relative group overflow-hidden rounded-lg shadow">
  <div className='relative h-[245px]  bg-[--secondary-color]'>
     <img className='p-12 w-[280px] object-cover rounded-lg' src={myImage4} alt="" />
     <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
     <CiHeart />
     </p>
     <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
     <CiRead />
      </p>
     </div>
     <div>
     <h3 className='font-bold mt-2 '>Quilted Satin Jacket </h3>
     <div className='flex gap-3 font-bold mt-2 items-center' >
       <p className='text-[--alt-text-color]'>$660</p>
     <div className='flex gap-3  items-center'>
     <div className='text-yellow-400 flex gap-1'>
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
   <p className="text-gray-500 flex">
 <FaStar />
 </p>
  </div>
    <div
   onClick={() => addToCart("Quilted Satin Jacket",660, myImage4)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
  <p className='text-[--text-color]'>(145)</p>
</div>
</div>
   </div>
   </div>

   <div className="card w-fit relative group overflow-hidden rounded-lg shadow">
  <div className='relative h-[245px]  bg-[--secondary-color]'>
     <img className='p-12  object-cover rounded-lg' src={myImage5} alt="" />
     <p className='absolute top-4 left-3 bg-[--secand-text-color] text-white rounded p-1'>New</p>
     <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
     <CiHeart />
     </p>
     <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
     <CiRead />
      </p>
     </div>
     <div>
     <h3 className='font-bold mt-2 '>Kids Electric Car </h3>
     <div className='flex gap-3 font-bold mt-2 items-center' >
       <p className='text-[--alt-text-color]'>$960</p>
     <div className='flex gap-3  items-center'>
     <div className='text-yellow-400 flex gap-1'>
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
  </div>
  <p className='text-[--text-color]'>(65)</p>
</div>
  <div
   onClick={() => addToCart("Kids Electric Car",960, myImage5)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
</div>
<div className="flex gap-3 mt-3">
  <p className="w-5 h-5 rounded-lg bg-[--third-color] border-4 border-black"></p>
  <p className="bg-[--alt-text-color] w-5 h-5 rounded-lg"></p>
</div>
  </div>
  </div>

  <div className="card w-fit relative group overflow-hidden rounded-lg shadow">
  <div className='relative h-[245px]  bg-[--secondary-color]'>
     <img className='p-12 object-cover rounded-lg' src={myImage6} alt="" />
     <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
     <CiHeart />
     </p>
     <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
     <CiRead />
      </p>
     </div>
     <div>
     <h3 className='font-bold mt-2 '>Jr. Zoom Soccer Cleats </h3>
     <div className='flex gap-3 font-bold mt-2 items-center' >
       <p className='text-[--alt-text-color]'>$1160</p>
     <div className='flex gap-3  items-center'>
     <div className='text-yellow-400 flex gap-1'>
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
  </div>
  <p className='text-[--text-color]'>(35)</p>
</div>
  <div
   onClick={() => addToCart("Jr. Zoom Soccer Cleats",1160, myImage6)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
</div>
<div className="flex gap-3 mt-3">
  <p className="w-5 h-5 rounded-lg bg-yellow-400 border-4 border-black"></p>
  <p className="bg-[--alt-text-color] w-5 h-5 rounded-lg"></p>
</div>
  </div>
  </div>

  <div className="card w-fit relative group overflow-hidden rounded-lg shadow">
  <div className='relative h-[245px]  bg-[--secondary-color]'>
     <img className='p-12 object-cover rounded-lg' src={myImage7} alt="" />
     <p className='absolute top-4 left-3 bg-[--secand-text-color] text-white rounded p-1'>New</p>
     <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
     <CiHeart />
     </p>
     <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
     <CiRead />
      </p>
     </div>
     <div>
     <h3 className='font-bold mt-2 '>GP11 Shooter USB Gamepad </h3>
     <div className='flex gap-3 font-bold mt-2 items-center' >
       <p className='text-[--alt-text-color]'>$660</p>
     <div className='flex gap-3  items-center'>
     <div className='text-yellow-400 flex gap-1'>
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
  </div>
  <p className='text-[--text-color]'>(55)</p>
</div>
  <div
   onClick={() => addToCart("GP11 Shooter USB Gamepad",660, myImage7)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
</div>
<div className="flex gap-3 mt-3">
  <p className="w-5 h-5 rounded-lg bg-white  border-4 border-black"></p>
  <p className="bg-[--alt-text-color] w-5 h-5 rounded-lg"></p>
</div>
  </div>
  </div>

  <div className="card w-fit relative group overflow-hidden rounded-lg shadow">
  <div className='relative h-[245px]  bg-[--secondary-color]'>
     <img className='p-12 object-cover rounded-lg' src={myImage8} alt="" />
     <p className='absolute top-4 left-3 bg-[--secand-text-color] text-white rounded p-1'>New</p>
     <p className='absolute top-4 left-60 bg-white rounded p-1 text-xl'>
     <CiHeart />
     </p>
     <p className='absolute bottom-40 left-60  bg-white rounded p-1 text-xl'>
     <CiRead />
      </p>
     </div>
     <div>
     <h3 className='font-bold mt-2 '>GP11 Shooter USB Gamepad </h3>
     <div className='flex gap-3 font-bold mt-2 items-center' >
       <p className='text-[--alt-text-color]'>$660</p>
     <div className='flex gap-3  items-center'>
     <div className='text-yellow-400 flex gap-1'>
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
  </div>
  <p className='text-[--text-color]'>(55)</p>
</div>
  <div
   onClick={() => addToCart("GP11 Shooter USB Gamepad",660, myImage8)}
   className="
     flex gap-2 bg-black text-white justify-center items-center py-2 rounded 
     absolute bottom-0 left-0 w-full opacity-0 translate-y-6
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-300 cursor-pointer">
   <MdOutlineShoppingCart />
   Add To Cart
 </div>
</div>
<div className="flex gap-3 mt-3">
  <p className="w-5 h-5 rounded-lg bg-lime-800  border-4 border-black"></p>
  <p className="bg-[--alt-text-color] w-5 h-5 rounded-lg"></p>
</div>
  </div>
  </div>
  </div>
  <button className='bg-[--alt-text-color] text-white p-2 rounded mt-20 flex justify-center items-center m-auto w-60'>View All Products</button>

    </div>
  )
}