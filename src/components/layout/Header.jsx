
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { CiSearch, CiHeart, CiMenuFries } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { useCart } from "../../assets/CartContext";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { count } = useCart();

  const [open, setOpen] = useState(false);

  // Change direction according to language
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
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">

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
              sm:right-5
              md:right-10
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
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl"
            >
              Exclusive
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-10">
                <li>
                  <Link
                    className="hover:text-[--alt-text-color] transition"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="hover:text-[--alt-text-color] transition"
                    to="/Contact"
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
                    className="hover:text-[--alt-text-color] transition"
                    to="/SignUp"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Desktop Search + Icons */}
            <div className="hidden md:flex items-center gap-5">

              {/* Search */}
              <div className="flex items-center gap-2 bg-[--secondary-color] rounded-md px-3 py-2">
                <input
                  className="
                    bg-transparent
                    outline-none
                    text-[--main-color]
                    w-36 lg:w-52
                    text-sm
                  "
                  placeholder="What are you looking for?"
                  type="search"
                />

                <CiSearch className="text-xl" />
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4">

                {/* Wishlist */}
                <div className="relative">
                  <Link to="/Wishlist">
                    <CiHeart
                      className="
                        text-2xl
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

              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-3xl"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
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
                open
                  ? "max-h-[500px] opacity-100 mt-5"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <nav className="border-t pt-4 pb-3">
              <ul className="flex flex-col gap-4">

                <li>
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Contact"
                    onClick={() => setOpen(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/About"
                    onClick={() => setOpen(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/SignUp"
                    onClick={() => setOpen(false)}
                    className="block hover:text-[--alt-text-color]"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* ================= Mobile Search ================= */}
          <div className="md:hidden mt-4">

            <div className="flex items-center gap-2 bg-[--secondary-color] rounded-md px-3 py-2">
              <input
                className="
                  bg-transparent
                  outline-none
                  text-[--main-color]
                  w-full
                  text-sm
                "
                placeholder="What are you looking for?"
                type="search"
              />

              <CiSearch className="text-xl" />
            </div>

            {/* Mobile Icons */}
            <div className="flex justify-center gap-8 mt-5 text-2xl">

              <Link to="/Wishlist">
                <CiHeart />
              </Link>

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

            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5" />
    </header>
  );
}

