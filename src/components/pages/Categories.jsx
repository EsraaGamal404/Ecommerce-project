import { MdOutlinePhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { LuGamepad } from "react-icons/lu";



export default function Categories(){
  return(
    <div className="ml-32 mt-16">
    <div className="title flex gap-3 ">
     <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>
     <h2 className="text-[--alt-text-color] font-medium">Categories</h2>
     </div>
     <div>
      <h2 className="text-2xl font-medium mt-5">Browse By Category</h2>
     </div>
     <div className="Categories-list mt-14 flex gap-5 flex-wrap">
      <div className="Categories border w-[140px] h-[125px] border-gray-300 flex justify-center flex-col items-center">
      <p className="text-6xl"><MdOutlinePhoneIphone /></p>
      <h3>Phones</h3>
      </div>
      <div className="Categories border w-[140px] h-[125px] border-gray-300 flex justify-center flex-col items-center">
  <p className="text-6xl"><RiComputerLine /></p>
  <h3>Computers</h3>
  </div>
  <div className="Categories border w-[140px] h-[125px] border-gray-300 flex justify-center flex-col items-center">
  <p className="text-6xl"><BsSmartwatch /></p>
  <h3>SmartWatch</h3>
  </div>
 <div className="bg-[--alt-text-color] text-white Categories border w-[140px] h-[125px] border-gray-300 flex justify-center flex-col items-center">
<p className="text-6xl"><FaCamera /></p>
<h3>Camera</h3>
</div>
<div className="Categories border w-[140px] h-[125px] border-gray-300 flex justify-center flex-col items-center">
<p className="text-6xl"><FaHeadphones /></p>
<h3>HeadPhones</h3>
</div>
<div className="Categories border w-[140px] h-[125px] border-gray-300 flex justify-center flex-col items-center">
<p className="text-6xl"><LuGamepad /></p>
<h3>Gaming</h3>
</div>
     </div>
     <hr className='mt-10' />
    </div>
  )
}