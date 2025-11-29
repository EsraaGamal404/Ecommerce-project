import HeaderWithAccount from "../layout/HeaderWithAccount";
import { Link } from "react-router";
import { useState } from "react";
import myImage from "../../assets/images/icon-checkbox.png"
import myImage2 from "../../assets/images/Frame 834.png"

import { useCart } from "../../assets/CartContext";
import Footer from "../layout/Footer";




export default function CheckOut(){
  const [user, setUser] = useState({ name: "", email: "", number: "" });
    const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [coupon, setCoupon] = useState(""); 
 const [showAlert, setShowAlert] = useState(false); 
const handleApplyCoupon = () => {
   if (coupon.trim() === "") {
     alert("من فضلك أدخل كود الكوبون أولاً ❗");
     return;
   }
   setShowAlert(true);
 };
 const handleOk = () => {
   setShowAlert(false);   
   setCoupon("");         
 };

  return(
    <div>
      <HeaderWithAccount />
      <div className="mt-16 ml-32 flex gap-5">
      <Link className="text-[--text-color]" to="/Account">Account /</Link>
      <Link className="text-[--text-color]" to="/Account">My Account /</Link>
      <Link className="text-[--text-color]" to="/Wishlist">Product /</Link>
      <Link className="text-[--text-color]" to="/Cart">View Cart /</Link>
      <Link to="/">Check Out</Link>
    </div>
    <div className="Details mt-16 ml-32">
      <div>
      <h2 className="font-bold text-2xl ">Billing Details</h2>
      <div className="flex items-start  flex-wrap">
      <div className="form mt-10 text-[--text-color] ">
       <div>
  <label htmlFor="name">First Name*</label> <br />
  <input className="bg-[--secondary-color] w-60" id="name"  value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}
 type="text" />
        </div>
        <br />
          <div>
  <label htmlFor="name">Company Name</label> <br />
  <input className="bg-[--secondary-color] w-60" id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" />
        </div>
        <br />
        <div>
 <label htmlFor="name">Street Address*</label> <br />
 <input className="bg-[--secondary-color] w-60" id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" />
       </div>
       <br />
       <div>
 <label htmlFor="name">Apartment, floor, etc. (optional)</label> <br />
 <input className="bg-[--secondary-color] w-60" id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" />
       </div>
       <br />
    <div>
<label htmlFor="name">Town/City*</label> <br />
<input className="bg-[--secondary-color] w-60" id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" />
      </div>
      <br />
      <div>
<label htmlFor="number">Phone Number*</label> <br />
<input className="bg-[--secondary-color] w-60" id="number" value={user.number} onChange={(e) => setUser({ ...user, number: e.target.value })} type="text" />
      </div>
        <br />
          <div>
<label htmlFor="email">Email Address*</label> <br />
<input className="bg-[--secondary-color] w-60" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" />
      </div>
      <button className="flex items-center gap-3 mt-5 text-black">
        <img className="w-5" src={myImage} alt="" />
        <p>Save this information for faster check-out next time</p>
      </button>
      </div>
     
      <div className="details-pading  w-[350px]">

<div className="flex items-center gap-5 relative flex-col ">

  {cart.map((item, index) => (
    <div key={index} className="flex items-center gap-4 justify-between">
      <div className="flex gap-2 items-center">
      <img src={item.img} alt={item.name} width={50} className="rounded" />
      <h4 className="font-medium">{item.name}</h4>
      </div>
      <div className="ml-10">
 <p>${item.price}</p>
      </div>
    </div>
  ))}
</div>    

  <div  className="flex justify-between items-center border-b-2 mt-10">
   <p>Subtotal:</p>
   <p>${total.toFixed(2)}</p>
 </div>
 <div className="flex justify-between items-center border-b-2 mt-5">
   <p>Shipping:</p>
   <p>Free</p>
 </div>
 <div className="flex justify-between items-center mt-5">
 <p>Total:</p>
 <p> ${total.toFixed(2)}</p>
 </div>
 <div className="flex flex-col items-start gap-3 mt-5">
  <div className="flex items-center justify-between">
  <input  type="radio" name="Cash on delivery" id="Bank" />
  <label className="ml-3" htmlFor="Bank">Bank</label>
   <div>
 <img className="ml-28" src={myImage2} alt="" /></div>
  </div>
  <div>
  <input  type="radio" name="Cash on delivery" id="Cash on delivery" />
  <label  className="ml-3" htmlFor="Cash on delivery">Cash on delivery</label>
  </div>
 </div>
     <div className="relative flex  gap-4 items-start mt-10">
    <input
      type="text" placeholder="Enter your coupon code"value={coupon} onChange={(e) => setCoupon(e.target.value)}
      className="border border-gray-400 p-2 rounded w-64 px-7 py-2 outline-none"
    />
    <button
      onClick={handleApplyCoupon}
      className="bg-[--alt-text-color] text-white  rounded w-96 px-10 hover:opacity-90"
    >
      Apply Coupon
    </button>
    {showAlert && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center w-[300px]">
          <p className="text-green-600 font-semibold text-lg mb-4">
            تم الإرسال بنجاح ✅
          </p>
          <button
            onClick={handleOk}
          className="bg-[--alt-text-color] text-white px-4 py-2 rounded hover:opacity-90"
          >
            OK
          </button>
        </div>
      </div>
    )}
       <button
     onClick={handleApplyCoupon}
     className="bg-[--alt-text-color] text-white  rounded w-96 px-10 hover:opacity-90"
   >
   </button>
     </div>
     <Link to="/Account">
     <button
  className="bg-[--alt-text-color] text-white  rounded mt-5 px-5 py-2 hover:opacity-90">Place Order
</button></Link>
      </div>
    </div>
    </div>
    </div>
    <Footer />
     </div>
     
  )
}