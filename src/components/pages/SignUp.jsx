import SignUpHeader from "../layout/SignUpHeader";
import myImage from "../../assets/images/Silder.png";
import myImage2 from "../../assets/images/Google.png";
import { Link } from "react-router";
import Footer from "../layout/Footer";

export default function SignUp() {
  return (
    <div>
      <SignUpHeader />
      <div className="container mt-20 flex justify-between flex-wrap gap-5">
        <div className="image">
          <img className="img" src={myImage} alt="" />
        </div>
        <div className="form mt-20 mr-24">
          <h2 className=" text-3xl">Create an account</h2>
          <p className="mt-4">Enter your details below</p>
          <input className="block input" type="text" placeholder="Name" autoComplete="off" />
          <input className="block input" type="text" placeholder="Email or Phone Number" autoComplete="off" />
          <input className="block input" type="text" placeholder="Password" autoComplete="off" />
          <button className="bg-[--alt-text-color] text-white p-2 rounded  w-60 mt-5">Create Account</button>
          <div className="flex gap-5 mt-4 border p-1">
            <img src={myImage2} alt="" />
            <Link to="/https://www.google.com">Sign up with Google</Link>
          </div>
          <p className="text-center mt-5">
            Already have account?
            <Link className="relative left-5 border-b-2" to="/Login">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
