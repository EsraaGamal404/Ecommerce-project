import SignUpHeader from "../layout/SignUpHeader";
import myImage from "../../assets/images/Silder.png";
import myImage2 from "../../assets/images/Google.png";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

export default function SignUp() {
  return (
    <div className="min-h-screen">
      <SignUpHeader />

      <main className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32 mt-10 sm:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[500px] lg:max-w-[600px] object-contain"
              src={myImage}
              alt="Sign up"
            />
          </div>

          {/* Form */}
          <div className="w-full max-w-md lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-medium">
              Create an account
            </h2>

            <p className="mt-3 text-gray-600">
              Enter your details below
            </p>

            {/* Name */}
            <input
              className="w-full border-b border-gray-400 outline-none py-3 mt-8 focus:border-black transition"
              type="text"
              placeholder="Name"
              autoComplete="name"
            />

            {/* Email */}
            <input
              className="w-full border-b border-gray-400 outline-none py-3 mt-5 focus:border-black transition"
              type="email"
              placeholder="Email or Phone Number"
              autoComplete="email"
            />

            {/* Password */}
            <input
              className="w-full border-b border-gray-400 outline-none py-3 mt-5 focus:border-black transition"
              type="password"
              placeholder="Password"
              autoComplete="new-password"
            />

            {/* Create Account */}
            <button
              className="
                bg-[--alt-text-color]
                text-white
                w-full
                py-3
                rounded
                mt-6
                hover:opacity-90
                transition
              "
            >
              Create Account
            </button>

            {/* Google */}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-3
                w-full
                border
                border-gray-300
                rounded
                py-3
                mt-4
                hover:bg-gray-50
                transition
              "
            >
              <img
                className="w-5 h-5 object-contain"
                src={myImage2}
                alt="Google"
              />

              <span>Sign up with Google</span>
            </a>

            {/* Login */}
            <p className="text-center mt-6 text-gray-600">
              Already have account?

              <Link
                className="ml-2 text-black border-b border-black"
                to="/Login"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
