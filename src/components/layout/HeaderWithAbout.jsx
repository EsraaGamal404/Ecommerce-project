
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";
import { MdAccountCircle, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { CiHeart, CiStar, CiMenuFries, CiSearch } from "react-icons/ci";

import { useCart } from "../../assets/CartContext";

export default function HeaderWithAccount() {
  const { t, i18n } = useTranslation();
  const { count } = useCart();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  // Language direction
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full">

      {/* ================= Sale Banner ================= */}
      <div className="bg-black text-white min-h-[40px] px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base relative">

          <p className="text-center text-[--title-color]">
            {t("saleBanner")}
          </p>

          <strong className="font-bold">
            {t("ShopNow")}
          </strong>

          {/* Language */}
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="
              bg-black
              text-white
              outline-none
              cursor-pointer
              sm:absolute
              sm:right-0
            "
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* ================= Main Header ================= */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32 mt-5">
        <div className="max-w-7xl mx-auto">

          {/* Top Row */}
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link
              className="font-bold text-2xl sm:text-3xl shrink-0"
              to="/"
            >
              Exclusive
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-10">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[--alt-text-color] transition"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Contact"
                    className="hover:text-[--alt-text-color] transition"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-[--alt-text-color] transition"
                    to="/About"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/SignUp"
                    className="hover:text-[--alt-text-color] transition"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-4">

              {/* Search */}
              <div className="flex items-center gap-2 bg-[--secondary-color] rounded-md px-3 py-2">
                <input
                  className="
                    bg-transparent
                    outline-none
                    text-[--main-color]
                    w-32
                    lg:w-52
                    text-sm
                  "
                  placeholder="What are you looking for?"
                  type="search"
                />

                <CiSearch className="text-xl" />
              </div>

              {/* Wishlist */}
              <div className="relative">
                <Link to="/Wishlist">
                  <CiHeart
                    className="
                      text-2xl
                      text-[--text-color]
                      hover:text-[--alt-text-color]
                      transition
                    "
                  />
                </Link>
              </div>

              {/* Cart */}
              <div className="relative">
                <Link to="/Cart">
                  <BsCart3
                    className="
                      text-2xl
                      text-[--text-color]
                      hover:text-[--alt-text-color]
                      transition
                    "
                  />
                </Link>

                {count > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      bg-red-600
                      text-white
                      text-xs
                      font-bold
                      rounded-full
                      w-5
                      h-5
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {count}
                  </span>
                )}
              </div>

              {/* Account */}
              <div className="relative">

                <button
                  type="button"
                  onClick={() => setOpenAccount(!openAccount)}
                  className="
                    flex
                    items-center
                    text-red-600
                    text-2xl
                    focus:outline-none
                  "
                  aria-label="Account menu"
                >
                  <MdAccountCircle />
                </button>

                {/* Account Dropdown */}
                {openAccount && (
                  <div
                    className="
                      absolute
                      right-0
                      top-full
                      mt-3
                      w-56
                      bg-zinc-700
                      rounded-lg
                      shadow-xl
                      z-50
                      overflow-hidden
                    "
                  >
                    <ul className="text-white text-sm">

                      <li>
                        <Link
                          to="/Account"
                          onClick={() => setOpenAccount(false)}
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-zinc-600
                            transition
                          "
                        >
                          <MdAccountCircle className="text-xl" />
                          Manage My Account
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/Orders"
                          onClick={() => setOpenAccount(false)}
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-zinc-600
                            transition
                          "
                        >
                          <FaCalendar className="text-lg" />
                          My Order
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/Cancellations"
                          onClick={() => setOpenAccount(false)}
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-zinc-600
                            transition
                          "
                        >
                          <ImCancelCircle className="text-lg" />
                          My Cancellations
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/Reviews"
                          onClick={() => setOpenAccount(false)}
                          className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-zinc-600
                            transition
                          "
                        >
                          <CiStar className="text-xl" />
                          My Reviews
                        </Link>
                      </li>

                      <li>
                        <button
                          type="button"
                          onClick={() => setOpenAccount(false)}
                          className="
                            w-full
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-zinc-600
                            transition
                            text-left
                          "
                        >
                          <IoIosLogOut className="text-xl" />
                          Logout
                        </button>
                      </li>

                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-3xl"
              onClick={() =>
                setOpenMobileMenu(!openMobileMenu)
              }
              aria-label="Toggle menu"
            >
              {openMobileMenu ? (
                <MdOutlineRestaurantMenu />
              ) : (
                <CiMenuFries />
              )}
            </button>
          </div>

          {/* ================= Mobile Menu ================= */}
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300
              ${
                openMobileMenu
                  ? "max-h-[600px] opacity-100 mt-5"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <nav className="border-t pt-4">

              <ul className="flex flex-col gap-4">

                <li>
                  <Link
                    to="/"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Contact"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/About"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/SignUp"
                    onClick={() => setOpenMobileMenu(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    Sign Up
                  </Link>
                </li>

              </ul>
            </nav>

            {/* Mobile Search */}
            <div className="flex items-center gap-2 bg-[--secondary-color] rounded-md px-3 py-2 mt-5">
              <input
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-sm
                "
                placeholder="What are you looking for?"
                type="search"
              />

              <CiSearch className="text-xl" />
            </div>

            {/* Mobile Icons */}
            <div className="flex justify-center items-center gap-8 text-2xl mt-5 pb-5">

              {/* Wishlist */}
              <Link to="/Wishlist">
                <CiHeart />
              </Link>

              {/* Cart */}
              <Link
                to="/Cart"
                className="relative"
              >
                <BsCart3 />

                {count > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-3
                      bg-red-600
                      text-white
                      text-xs
                      font-bold
                      rounded-full
                      w-5
                      h-5
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {count}
                  </span>
                )}
              </Link>

              {/* Account */}
              <button
                type="button"
                onClick={() => setOpenAccount(!openAccount)}
                className="text-red-600"
              >
                <MdAccountCircle />
              </button>

            </div>

            {/* Mobile Account Dropdown */}
            {openAccount && (
              <div className="bg-zinc-700 rounded-lg overflow-hidden mb-5">

                <Link
                  to="/Account"
                  className="flex items-center gap-3 text-white px-4 py-3"
                  onClick={() => setOpenAccount(false)}
                >
                  <MdAccountCircle />
                  Manage My Account
                </Link>

                <Link
                  to="/Orders"
                  className="flex items-center gap-3 text-white px-4 py-3"
                  onClick={() => setOpenAccount(false)}
                >
                  <FaCalendar />
                  My Order
                </Link>

                <Link
                  to="/Cancellations"
                  className="flex items-center gap-3 text-white px-4 py-3"
                  onClick={() => setOpenAccount(false)}
                >
                  <ImCancelCircle />
                  My Cancellations
                </Link>

                <Link
                  to="/Reviews"
                  className="flex items-center gap-3 text-white px-4 py-3"
                  onClick={() => setOpenAccount(false)}
                >
                  <CiStar />
                  My Reviews
                </Link>

                <button
                  type="button"
                  className="w-full flex items-center gap-3 text-white px-4 py-3"
                  onClick={() => setOpenAccount(false)}
                >
                  <IoIosLogOut />
                  Logout
                </button>

              </div>
            )}
          </div>

        </div>
      </div>

      <hr className="mt-5" />
    </header>
  );
}

