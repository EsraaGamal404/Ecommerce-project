
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const currentLang = i18n.language;

    document.documentElement.dir =
      currentLang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section>

      {/* ================= TOP BAR ================= */}
      <div className="bg-black w-full p-2 flex flex-col md:flex-row items-center">

        <div className="flex flex-1 justify-center">
          <h1 className="text-[--title-color] flex gap-3 font-thin items-center text-sm md:text-base">
            {t("saleBanner")}

            <strong className="text-white font-bold">
              {t("ShopNow")}
            </strong>
          </h1>
        </div>

        <div className="flex justify-center items-center gap-2 md:mr-10 mt-1 md:mt-0">

          <select
            className="bg-black text-[--title-color] outline-none p-1 rounded"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>

        </div>
      </div>

      {/* ================= HEADER ================= */}
      <div className="container mx-auto px-4 mt-6">

        {/* Logo + Menu Button */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            className="font-bold text-2xl"
            to="/"
          >
            Exclusive
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">

            <ul className="flex gap-10">

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
                  className="active hover:text-red-600 transition"
                >
                  Sign Up
                </Link>
              </li>

            </ul>

          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block">

            <div className="search flex p-2 justify-center items-center bg-[--secondary-color] rounded-md">

              <input
                className="bg-[--secondary-color] outline-none text-[--main-color] w-52"
                placeholder="What are you looking for?"
                type="text"
              />

              <CiSearch className="text-xl" />

            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
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
          <div className="md:hidden mt-5 bg-white shadow-md p-5">

            <nav>

              <ul className="flex flex-col gap-5 text-center">

                <li>
                  <Link
                    to="/Home"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Contact"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/About"
                    onClick={() => setOpen(false)}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/SignUp"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>

              </ul>

            </nav>

            {/* Mobile Search */}
            <div className="search flex p-2 mt-5 justify-center items-center bg-[--secondary-color] rounded-md">

              <input
                className="bg-[--secondary-color] outline-none text-[--main-color] w-full"
                placeholder="What are you looking for?"
                type="text"
              />

              <CiSearch className="text-xl" />

            </div>

          </div>
        )}

      </div>

      <hr className="mt-4" />

    </section>
  );
}

