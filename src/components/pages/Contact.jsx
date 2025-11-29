import HeaderWithContact from "../layout/HeaderWithContact";
import { Link } from "react-router";
import myImage from "../../assets/images/icons-phone.png"
import myImage2 from "../../assets/images/icons-mail.png"
import { useState } from "react";
import Footer from "../layout/Footer";



export default function Contact(){

    const [user, setUser] = useState({ name: "", email: "", number: "",message:"" });


  return(
    <div>
      <HeaderWithContact />
  <div className="mt-16 ml-14 flex gap-5">
  <Link className="text-[--text-color]" to="/Home">Home /</Link>
  <Link  to="/Contact">Contact </Link>
</div>
<div className="flex flex-wrap mt-10 px-4 md:px-10 lg:px-16 gap-10">
  <div className="cards w-full md:w-[320px] h-auto p-5 border rounded-lg">
    <div>
      <div className="flex items-center gap-3">
      <img src={myImage} alt="" />
      <h3 className="font-medium">Call To Us</h3>
     </div>
     <p className="mt-5">We are available 24/7, 7 days a week.</p>
     <p className="mt-2">Phone: +8801611112222</p>
    </div>
    <hr className="mt-7" />
       <div className="mt-7">
     <div className="flex items-center gap-3">
     <img src={myImage2} alt="" />
     <h3 className="font-medium">Write To US</h3>
    </div>
    <p className="mt-5">Fill out our form and we will contact <br /> you within 24 hours.</p>
    <p className="mt-2">Emails: customer@exclusive.com</p>
    <p className="mt-2">Emails: support@exclusive.com</p>
   </div>
  </div>
  <div className="w-full flex md:flex-1 justify-center">
  <div className="cards w-full max-w-[700px] flex flex-col gap-4">
    <div className="flex gap-4 flex-wrap">
  <div className="flex flex-col flex-1 min-w-[200px]">
 <label htmlFor="Your Name *"></label> <br />
 <input className="bg-[--secondary-color] outline-none rounded 
   p-2" id=" Last name"placeholder="Your Name *"  value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}
type="text" autoComplete="of" />
</div>
  <div className="flex flex-col flex-1 min-w-[200px]">
 <label htmlFor="Your Email *"></label> <br />
 <input className="bg-[--secondary-color] outline-none rounded 
   p-2" id="Your Email *"placeholder="Your Email *"  value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
type="text" autoComplete="of" />
 </div>
   <div className="flex flex-col flex-1 min-w-[200px]">
 <label htmlFor="Your Phone *"></label> <br />
 <input className="bg-[--secondary-color] outline-none rounded 
   p-2" id="Your Phone *"placeholder="Your Phone *"  value={user.number} onChange={(e) => setUser({ ...user, number: e.target.value })}
type="text" autoComplete="of" />
 </div>
 </div>
 <div>
      <textarea
        placeholder="Your Message"
        className="bg-[--secondary-color] outline-none w-full h-[200px] p-2 rounded resize-none"
        value={user.message}
        onChange={(e) => setUser({ ...user, message: e.target.value })}
      ></textarea>
    </div>


   <div className="flex justify-end">
      <button className="bg-[--alt-text-color] text-white rounded px-6 py-2 hover:opacity-90">
        Send Message
      </button>
    </div>



</div>
</div>
    </div>
    <Footer />
        </div>

    
  )
}