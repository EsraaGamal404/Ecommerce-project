
import { Link } from "react-router-dom";
import { IoSendOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import myImage from "../../assets/images/Qrcode 1.png";
import myImage2 from "../../assets/images/GooglePlay.png";
import myImage3 from "../../assets/images/AppStore.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div
        className="
          w-full
          px-5 sm:px-8 lg:px-12 xl:px-20 2xl:px-32
          py-12 sm:py-14 lg:py-16
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-10
            lg:gap-8
          "
        >

          {/* Exclusive */}
          <div>
            <h3 className="font-bold text-xl">
              Exclusive
            </h3>

            <Link
              className="inline-block mt-3 hover:underline"
              to="/"
            >
              Subscribe
            </Link>

            <p className="mt-4 text-sm">
              Get 10% off your first order
            </p>

            {/* Email */}
            <div
              className="
                flex items-center
                border border-white
                rounded
                w-full
                max-w-[230px]
                p-2
                mt-4
              "
            >
              <input
                className="
                  bg-transparent
                  outline-none
                  border-none
                  text-white
                  placeholder-gray-400
                  w-full
                  text-sm
                "
                type="email"
                placeholder="Enter your email"
              />

              <button
                type="button"
                className="ml-2 hover:text-gray-300 transition"
              >
                <IoSendOutline className="text-xl" />
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-xl">
              Support
            </h3>

            <p className="mt-4 text-sm leading-6">
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </p>

            <p className="mt-4 text-sm">
              exclusive@gmail.com
            </p>

            <p className="mt-3 text-sm">
              +88015-88888-9999
            </p>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-bold text-xl">
              Account
            </h3>

            <div className="flex flex-col gap-3 mt-4 text-sm">
              <Link
                to="/HeaderWithAccount"
                className="hover:underline"
              >
                My Account
              </Link>

              <Link
                to="/Login"
                className="hover:underline"
              >
                Login / Register
              </Link>

              <Link
                to="/Cart"
                className="hover:underline"
              >
                Cart
              </Link>

              <Link
                to="/Wishlist"
                className="hover:underline"
              >
                Wishlist
              </Link>

              <Link
                to="/"
                className="hover:underline"
              >
                Shop
              </Link>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-bold text-xl">
              Quick Link
            </h3>

            <div className="flex flex-col gap-3 mt-4 text-sm">
              <Link
                to="/"
                className="hover:underline"
              >
                Privacy Policy
              </Link>

              <Link
                to="/"
                className="hover:underline"
              >
                Terms Of Use
              </Link>

              <Link
                to="/"
                className="hover:underline"
              >
                FAQ
              </Link>

              <Link
                to="/Contact"
                className="hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold text-xl">
              Download App
            </h3>

            <p className="mt-3 text-sm">
              Save $3 with App New User Only
            </p>

            {/* QR + Stores */}
            <div className="flex gap-3 mt-5">

              {/* QR Code */}
              <img
                src={myImage}
                alt="QR Code"
                className="w-20 h-20 object-contain"
              />

              {/* Store Buttons */}
              <div className="flex flex-col gap-2">
                <img
                  src={myImage2}
                  alt="Google Play"
                  className="w-28 h-auto"
                />

                <img
                  src={myImage3}
                  alt="App Store"
                  className="w-28 h-auto"
                />
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-5 text-xl mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-400 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-400 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-400 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <p className="text-center text-gray-500 text-sm py-5 px-4">
          © Copyright Exclusive 2026. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

