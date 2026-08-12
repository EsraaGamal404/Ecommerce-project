
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Language direction
  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full bg-white">

      {/* ================= SALE BAR ================= */}
      <div className="bg-black w-full px-4 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">

          <h1 className="text-[--title-color] flex items-center gap-2 text-sm sm:text-base text-center">
            {t("saleBanner")}

            <strong className="text-white font-bold">
              {t("ShopNow")}
            </strong>
          </h1>

          {/* Language */}
          <select
            className="bg-black text-[--title-color] outline-none p-1 rounded text-sm"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="container mx-auto px-4 py-5">

        {/* Logo + Menu Button */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-xl sm:text-2xl"
          >
            Exclusive
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-10">

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

          {/* Desktop Search */}
          <div className="hidden md:flex items-center gap-2 p-2 bg-[--secondary-color] rounded-md">

            <input
              className="bg-transparent outline-none text-[--main-color] w-32 lg:w-52"
              placeholder="What are you looking for?"
              type="text"
            />

            <CiSearch className="text-xl" />

          </div>

          {/* Mobile Menu Button */}
          <button
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

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden mt-5 border-t pt-5">

            {/* Navigation */}
            <nav>
              <ul className="flex flex-col items-center gap-5">

                <li>
                  <Link
                    to="/Home"
                    onClick={() => setOpen(false)}
                    className="hover:text-red-600 transition"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Contact"
                    onClick={() => setOpen(false)}
                    className="hover:text-red-600 transition"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/About"
                    onClick={() => setOpen(false)}
                    className="hover:text-red-600 transition"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/SignUp"
                    onClick={() => setOpen(false)}
                    className="hover:text-red-600 transition"
                  >
                    Sign Up
                  </Link>
                </li>

              </ul>
            </nav>

            {/* Mobile Search */}
            <div className="mt-5 flex items-center gap-2 p-3 bg-[--secondary-color] rounded-md">

              <input
                className="bg-transparent outline-none text-[--main-color] w-full"
                placeholder="What are you looking for?"
                type="text"
              />

              <CiSearch className="text-xl" />

            </div>

          </div>
        )}

      </div>

      <hr />
    </header>
  );
}

