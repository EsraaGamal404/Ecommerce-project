
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { CiSearch, CiHeart, CiStar, CiMenuFries } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import {
  MdAccountCircle,
  MdOutlineRestaurantMenu,
} from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { useCart } from "../../assets/CartContext";

export default function HeaderWithAccount() {
  const { t, i18n } = useTranslation();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const { count } = useCart();

  // تغيير اتجاه الصفحة حسب اللغة
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <header className="w-full bg-white">
      {/* ================= SALE BAR ================= */}
      <div className="bg-black w-full px-4 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <h1 className="text-[--title-color] text-sm sm:text-base flex items-center gap-2 text-center">
            {t("saleBanner")}

            <strong className="text-white font-bold">
              {t("ShopNow")}
            </strong>
          </h1>

          {/* Language */}
          <select
            className="bg-black text-[--title-color] outline-none text-sm cursor-pointer"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-xl sm:text-2xl whitespace-nowrap"
          >
            Exclusive
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              <li>
                <Link
                  to="/Home"
                  className="hover:text-red-600 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/Contact"
                  className="hover:text-red-600 transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/About"
                  className="hover:text-red-600 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/SignUp"
                  className="hover:text-red-600 transition"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">

            {/* Search */}
            <div className="flex items-center gap-2 p-2 bg-[--secondary-color] rounded-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-[--main-color] w-36 xl:w-48"
              />

              <CiSearch className="text-xl" />
            </div>

            {/* Heart */}
            <Link to="/Cart" className="relative">
              <CiHeart className="text-2xl text-[--text-color]" />

              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/Cart" className="relative">
              <BsCart3 className="text-2xl text-[--text-color]" />

              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            {/* Account */}
            <div className="relative">
              <button
                onClick={() => setOpenAccount(!openAccount)}
                className="text-red-600 text-2xl focus:outline-none"
              >
                <MdAccountCircle />
              </button>

              {openAccount && (
                <div
                  className="
                    absolute
                    right-0
                    top-full
                    mt-3
                    w-52
                    bg-zinc-700
                    rounded-lg
                    shadow-xl
                    z-50
                    overflow-hidden
                  "
                >
                  <ul className="text-white text-sm">

                    <li className="px-4 py-3 hover:bg-zinc-600 cursor-pointer flex items-center gap-3">
                      <MdAccountCircle className="text-xl" />
                      <span>Manage My Account</span>
                    </li>

                    <li className="px-4 py-3 hover:bg-zinc-600 cursor-pointer flex items-center gap-3">
                      <FaCalendar className="text-xl" />
                      <span>My Order</span>
                    </li>

                    <li className="px-4 py-3 hover:bg-zinc-600 cursor-pointer flex items-center gap-3">
                      <ImCancelCircle className="text-xl" />
                      <span>My Cancellations</span>
                    </li>

                    <li className="px-4 py-3 hover:bg-zinc-600 cursor-pointer flex items-center gap-3">
                      <CiStar className="text-xl" />
                      <span>My Reviews</span>
                    </li>

                    <li className="px-4 py-3 hover:bg-zinc-600 cursor-pointer flex items-center gap-3">
                      <IoIosLogOut className="text-xl" />
                      <span>Logout</span>
                    </li>

                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            {openMobileMenu ? (
              <MdOutlineRestaurantMenu />
            ) : (
              <CiMenuFries />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {openMobileMenu && (
          <div className="lg:hidden mt-5 border-t pt-5">

            {/* Mobile Navigation */}
            <nav>
              <ul className="flex flex-col gap-4 text-center">

                <li>
                  <Link
                    to="/Home"
                    onClick={closeMobileMenu}
                    className="block py-2 hover:text-red-600"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Contact"
                    onClick={closeMobileMenu}
                    className="block py-2 hover:text-red-600"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/About"
                    onClick={closeMobileMenu}
                    className="block py-2 hover:text-red-600"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/SignUp"
                    onClick={closeMobileMenu}
                    className="block py-2 hover:text-red-600"
                  >
                    Sign Up
                  </Link>
                </li>

              </ul>
            </nav>

            {/* Mobile Search */}
            <div className="mt-5 flex items-center gap-2 p-3 bg-[--secondary-color] rounded-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none w-full"
              />

              <CiSearch className="text-xl" />
            </div>

            {/* Mobile Icons */}
            <div className="flex justify-center items-center gap-7 mt-5">

              <Link to="/Cart" className="relative">
                <CiHeart className="text-2xl" />

                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>

              <Link to="/Cart" className="relative">
                <BsCart3 className="text-2xl" />

                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>

              {/* Mobile Account */}
              <div className="relative">
                <button
                  onClick={() => setOpenAccount(!openAccount)}
                  className="text-red-600 text-2xl"
                >
                  <MdAccountCircle />
                </button>

                {openAccount && (
                  <div className="absolute right-0 top-full mt-3 w-52 bg-zinc-700 rounded-lg shadow-xl z-50 overflow-hidden">

                    <ul className="text-white text-sm">

                      <li className="px-4 py-3 hover:bg-zinc-600 flex items-center gap-3">
                        <MdAccountCircle />
                        Manage My Account
                      </li>

                      <li className="px-4 py-3 hover:bg-zinc-600 flex items-center gap-3">
                        <FaCalendar />
                        My Order
                      </li>

                      <li className="px-4 py-3 hover:bg-zinc-600 flex items-center gap-3">
                        <ImCancelCircle />
                        My Cancellations
                      </li>

                      <li className="px-4 py-3 hover:bg-zinc-600 flex items-center gap-3">
                        <CiStar />
                        My Reviews
                      </li>

                      <li className="px-4 py-3 hover:bg-zinc-600 flex items-center gap-3">
                        <IoIosLogOut />
                        Logout
                      </li>

                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>

      <hr />
    </header>
  );
}

