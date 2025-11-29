import HeaderWithAccount from "../layout/HeaderWithAccount";
import { Link } from "react-router";
import { useCart } from "../../assets/CartContext";
import { useState } from "react";
import Footer from "../layout/Footer";


export default function Cart() {
  const { cart, removeItem, increaseQty, decreaseQty, clearCart, } = useCart();
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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <div>
      <HeaderWithAccount />

      <div className="mt-16 ml-14">
        <Link className="text-[--text-color]" to="/Home">Home /</Link>
        <Link className="ml-3" to="/Cart">Cart</Link>
      </div>

    
  <div
  className="cards flex mt-20 justify-between items-center border-b pb-4 font-medium w-full max-w-[1170px] mx-automt-10 px-4
    text-sm
    md:text-base
  "
>
  <p className="w-1/4 text-left">Product</p>
  <p className="w-1/4 text-center">Price</p>
  <p className="w-1/4 text-center">Quantity</p>
  <p className="w-1/4 text-right">Subtotal</p>
</div>
  
  
  
  
  

    
      <div className=" ml-40 mt-10  flex flex-col gap-6 ">
        {cart.length === 0 ? (
          <p className="text-center text-[--alt-text-color] text-xl">  !! السلة فارغة</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="cards flex justify-between items-center border-b py-6 w-[1170px] h-[102px]"
            >
              <div className="flex items-center gap-4 relative">
                <button
                  className="absolute top-0 left-[-10px] text-red-500 hover:text-red-700"
                  onClick={() => removeItem(index)}
                >
                  ❌
                </button>
                <img src={item.img} alt={item.name} width={50} className="rounded" />
                <h4 className="font-medium">{item.name}</h4>
              </div>
              <p>${item.price}</p>

              <div className="flex items-center border px-2 py-1 rounded">
                <button onClick={() => decreaseQty(index)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => increaseQty(index)}>+</button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))
        )}
    <div className="flex justify-between flex-wrap gap-3">
    <Link className="border p-2 px-4 border-zinc-950" to="/Wishlist">Return To Shop</Link>
   <button  onClick={clearCart} className="border p-2 px-4 border-zinc-950 mr-8" to="/">Update Cart</button>
    </div>
    <div className="form-list flex justify-between items-start flex-wrap gap-3">
      <div className="relative flex flex-wrap  gap-4 items-start mt-10">
      <input
        type="text" placeholder="Enter your coupon code"value={coupon} onChange={(e) => setCoupon(e.target.value)}
        className="border border-gray-400 p-2 rounded w-64 px-7 py-2 outline-none"
      />
      <button
        onClick={handleApplyCoupon}
        className="bg-[--alt-text-color] text-white p-2 rounded w-40 hover:opacity-90"
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
    </div>
<div className="border border-zinc-950  w-[350px] h-[280px] p-5 mt-10 mr-8">
  <h3 className="font-bold text-xl">Cart Total</h3>
  <div  className="flex justify-between items-center border-b-2 mt-5">
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
    <Link to="/CheckOut">
  <button className='bg-[--alt-text-color] text-white p-2 rounded  flex justify-center items-center m-auto w-52 mt-6'>Procees to checkout</button>
  </Link>
</div>
    </div>
      </div>
      <Footer />
    </div>
  );
}