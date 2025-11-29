import LoginHeader from "../layout/LoginHeader";
import myImage from "../../assets/images/side Image.png";
import Footer from "../layout/Footer";

export default function SignUp() {
  return (
    <div>
      <LoginHeader />
      <div className="container mt-20 flex justify-between flex-wrap items-center gap-5">
        <div className="image">
          <img className="img" src={myImage} alt="" />
        </div>
        <div className="form  mr-24">
          <h2 className=" text-3xl">Log in to Exclusive</h2>
          <p className="mt-4">Enter your details below</p>
          <input className="block input" type="text" placeholder="Email or Phone Number" autoComplete="off" />
          <input className="block input" type="text" placeholder="Password" autoComplete="off" />
          <div className="flex items-center justify-between ">
          <button className="bg-[--alt-text-color] text-white p-2 rounded  w-20 mt-5">Log In</button>
          <p className="text-[--third-color] mt-6 ml-5">Forget Password?</p>
        </div>
         </div>
      </div>
      <Footer />
    </div>
  );
}
