import HeaderWithAccount from "../layout/HeaderWithAccount";
import { Link } from "react-router";
import { useState } from "react";
import Footer from "../layout/Footer";

export default function Account(){
    const [user, setUser] = useState({ name: "", email: "", number: "",num: "",num1: "",Address: "" });
  
  return(
    <div>
      <HeaderWithAccount />
      <div className="flex items-center justify-between">
    <div className="mt-16 ml-32 flex gap-5">
   <Link className="text-[--text-color]" to="/Home">Home /</Link>
   <Link  to="/Account">My Account </Link>
 </div>
 <div className="mt-16 mr-28">
  <p>Welcome! <strong className="text-[--alt-text-color]">Md Rimel</strong></p>
 </div>
 </div>
 <div className="mt-16 ml-32 flex gap-5 justify-between">
  <div>
  <div>
    <h3 className="font-medium text-xl">Manage My Account</h3>
    <Link className="text-[--alt-text-color] block ml-5 mt-2" to="/Account">My Profile</Link>
     <Link className="text-[--text-color] block ml-5 mt-2" to="/">Address Book</Link>
      <Link className="text-[--text-color] block ml-5 mt-2" to="/CheckOut">My Payment Options</Link>
  </div>
  <div>
    <h3 className="font-medium text-xl mt-5">My Orders</h3>
   <Link className="text-[--text-color] block ml-5 mt-2" to="/">My Returns</Link>
    <Link className="text-[--text-color] block ml-5 mt-2" to="/CheckOut">My Cancellations</Link>
    <h3 className="font-medium text-xl mt-6">My WishList</h3>
  </div></div>
  <div className="cards w-[800px] h-[550px]">
<div className="mt-5 ml-20">
    <h3 className="text-[--alt-text-color] font-medium text-xl" >Edit Your Profile</h3>
    <div className="flex items-center justify-between flex-wrap">
  <div className="mt-5">
  <label htmlFor="name">First Name</label> <br />
  <input autoComplete="of" className="bg-[--secondary-color] w-60 p-1  outline-none" id="name"placeholder="Md"  value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}
 type="text" />
  </div>
   <div className="mt-5 mr-8">
 <label htmlFor=" Last name">Last Name</label> <br />
 <input className="bg-[--secondary-color] outline-none 
  w-60 p-1" id=" Last name"placeholder="Rimel"  value={user.lastname} onChange={(e) => setUser({ ...user, name: e.target.value })}
type="text" autoComplete="of" />
 </div>
    <div className="mt-5">
 <label htmlFor="email">Email</label> <br />
 <input autoComplete="of" className="bg-[--secondary-color] w-60 p-1  outline-none" id="email"placeholder="rimel1111@gmail.com"  value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} 
type="text" />
 </div>
     <div className="mt-5 mr-8">
 <label htmlFor="Address">Address</label> <br />
 <input autoComplete="of" className="bg-[--secondary-color] w-60 p-1 outline-none " id="Address"placeholder="Kingston, 5236, United State"  value={user.Address} onChange={(e) => setUser({ ...user, Address: e.target.value })} 
type="text" />
 </div>
 </div>
 <div>
  <div className="mt-5">
 <label htmlFor="number">Password Changes</label> <br />
 <input  autoComplete="of" className="bg-[--secondary-color]  w-[650px]  p-1 outline-none " id="number"placeholder="Current Passwod"  value={user.number} onChange={(e) => setUser({ ...user, number: e.target.value })} 
type="text" />
 </div>
   <div className="mt-5">
 <label htmlFor="num">Password Changes</label> <br />
 <input  autoComplete="of" className="bg-[--secondary-color] w-[650px] p-1 outline-none" id="num"placeholder="New Passwod"  value={user.num} onChange={(e) => setUser({ ...user, num: e.target.value })} 
 type="text" />
 </div>
    <div className="mt-5">
 <label htmlFor="num1">Password Changes</label> <br />
 <input autoComplete="of" className="bg-[--secondary-color] w-[650px] p-1 outline-none" id="num1"placeholder="Confirm New Passwod"  value={user.num1} onChange={(e) => setUser({ ...user, num1: e.target.value })}
 type="text" />
  </div>
   </div>
   <div className="flex items-center gap-6 justify-end mt-8 mr-5">
   <button>Cancel</button>
     <button
    className="bg-[--alt-text-color] text-white  rounded py-2 px-10 hover:opacity-90" >
   Save Changes
  </button>
  </div>
   </div>
</div>
 </div>
 <Footer />
    </div>
  )
}