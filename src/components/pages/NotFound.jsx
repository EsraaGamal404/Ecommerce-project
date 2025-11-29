import Footer from "../layout/Footer";
import HeaderWithAccount from "../layout/HeaderWithAccount";
import { Link } from "react-router";

export default function NotFound(){
  return(
    <div>
      <HeaderWithAccount />
        <div className="mt-16 ml-32 flex gap-5">
  <Link className="text-[--text-color]" to="/">Home /</Link>
  <Link  to="/NotFound"> NotFound</Link>
</div>
<div className="info flex flex-col items-center justify-center mt-20">
  <h1 className="font-medium text-7xl">404 Not Found</h1>
  <p className="mt-7">Your visited page not found. You may go home page.</p>
   <Link to="/Home" className="">
     <button
 className="bg-[--alt-text-color] py-2 text-white  rounded mt-10 px-7 hover:opacity-90 ">Back to home page </button>
  </Link>
</div>
<Footer />
    </div>
  )
}