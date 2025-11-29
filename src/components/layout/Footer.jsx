import { Link } from "react-router";
import { IoSendOutline } from "react-icons/io5";
import myImage from '../../assets/images/Qrcode 1.png'
import myImage2 from '../../assets/images/Googleplay.png'
import myImage3 from '../../assets/images/AppStore.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";



export default function Footer(){
  return(
    <div className=" text-white bg-black p-14 mt-28 flex gap-10 justify-between flex-wrap">
    
    <div>
      <h3 className="font-bold text-xl">Exclusive</h3>
      <Link className="relative top-2" to="/">Subscribe</Link>
      <p className="mt-4">Get 10% off your first order</p>
      <div className="search border flex items-center w-fit p-1 mt-3">
      <input className="border-none bg-black " type="serarch" typeof="search" placeholder="Enter your email"  />
      <IoSendOutline />
      </div>
    </div>

    <div>
      <h3 className="font-bold text-xl">Support</h3>
      <p className="relative top-2">111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
      <p className="mt-4">exclusive@gmail.com</p>
      <p className="mt-4">+88015-88888-9999</p>
    </div>

    <div>
      <h3 className="font-bold text-xl">Account</h3>
      <Link className="relative top-2 block" to="/HeaderWithAccount">My Account</Link>
      <Link className="mt-3 block" to="/Login">Login / Register</Link>
      <Link className="mt-3 block" to="/Cart">Cart</Link>
      <Link className="mt-3 block" to="/Wishlist">Wishlist</Link>
      <Link className="mt-3 block" to="/">Shop</Link>
    </div>

    <div>
      <h3 className="font-bold text-xl">Quick Link</h3>
    <Link className="relative top-2 block" to="/">Privacy Policy</Link>
     <Link className="mt-3 block" to="/">Terms Of Use</Link>
     <Link className="mt-3 block" to="/">FAQ</Link>
      <Link className="mt-3 block" to="/Contact">Contact</Link>
    </div>

    <div>
      <h3 className="font-bold text-xl">Download App</h3>
      <p className="mt-3">Save $3 with App New User Only</p>
      <div className="flex gap-3 mt-5">
      <div>
      <img src={myImage} alt="" />
       </div>
       <div>
      <img src={myImage2} alt="" />
      <img src={myImage3} alt="" />
      </div>
       </div>
<div className="flex gap-5 text-xl mt-5">
<FaFacebookF />
<FaTwitter />
<FaInstagram />
<FaLinkedinIn />
</div>



    </div>

    </div>
  )
}