import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router"; 
import { CiSearch, CiHeart, CiStar, CiMenuFries } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdAccountCircle, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { useCart } from "../../assets/CartContext";

export default function HeaderWithAccount() {
  const { t, i18n } = useTranslation();
  const [openMobileMenu, setOpenMobileMenu] = useState(false); 
  const [openAccount, setOpenAccount] = useState(false);

  const { count } = useCart();

  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section>
      <div className="bg-black w-full p-2 flex flex-col md:flex-row items-center">
        <div className="flex flex-1 justify-center">
          <h1 className="text-[--title-color] flex gap-3 font-thin items-center">
            {t("saleBanner")}
            <strong className="text-white font-bold">{t("ShopNow")}</strong>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:mr-10">
          <div className="flex items-center justify-end mt-2 md:mt-0 gap-2">
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
      </div>

     
      <div className="container mx-auto px-4 mt-6">
        <div className="flex justify-between items-center">
          <Link className="font-bold text-2xl" to="/">Exclusive</Link>

          <button
            className="md:hidden text-3xl"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            {openMobileMenu ? <MdOutlineRestaurantMenu /> : <CiMenuFries />}
          </button>
          <nav
            className={`absolute md:static bg-white w-full md:w-auto left-0 shadow-md md:shadow-none transition-all duration-300 md:flex md:items-center md:gap-10 px-6 py-4 md:p-0 ${
              openMobileMenu ? "top-40" : "top-[-500px]"
            }`}
          >
            <ul className="md:flex gap-10">
              <li>
                <Link to="/Home" onClick={() => setOpenMobileMenu(false)}>Home</Link>
              </li>
              <li>
                <Link className="active" to="/Contact" onClick={() => setOpenMobileMenu(false)}>Contact</Link>
              </li>
              <li>
                <Link to="/About" onClick={() => setOpenMobileMenu(false)}>About</Link>
              </li>
              <li>
                <Link to="/SignUp" onClick={() => setOpenMobileMenu(false)}>Sign Up</Link>
              </li>
            </ul>
          </nav>

          
          <div className="hidden md:flex items-center gap-5">
            <div className="search flex p-2 justify-center items-center bg-[--secondary-color] rounded-md">
              <input
                className="bg-[--secondary-color] outline-none text-[--main-color] w-52"
                placeholder="What are you looking for?"
                type="text"
              />
            </div>

            <div className="flex gap-3 text-xl">
              <div className="relative inline-block">
                <Link to="/Cart"><CiHeart className="text-2xl text-[--text-color]" /></Link>
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>

              <div className="relative inline-block">
                <Link to="/Cart"><BsCart3 className="text-2xl text-[--text-color]" /></Link>
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
            </div>


        <div className="relative mt-4 md:mt-0">
         <button
           onClick={() => setOpenAccount(!openAccount)}
           className="flex items-center gap-2 text-red-600 text-2xl focus:outline-none"
         >
           <MdAccountCircle />
         </button>
         {openAccount && (
           <div className="absolute right-0 mt-2 w-44 bg-zinc-600 border border-gray-200 rounded-lg shadow-lg backdrop-blur-sm z-50">
             <ul className="text-white text-sm">
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <MdAccountCircle className="text-2xl inline mr-2" />
                 Manage My Account
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <FaCalendar className="text-2xl inline mr-2" />
                 My Order
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <ImCancelCircle className="text-2xl inline mr-2" />
                 My Cancellations
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <CiStar className="text-2xl inline mr-2" />
                 My Reviews
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <IoIosLogOut className="text-2xl inline mr-2" />
                 Logout
               </li>
             </ul>
           </div>
         )}
       </div>


          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:hidden">
          <div className="search flex p-2 bg-[--secondary-color] rounded-md items-center gap-2">
            <input
              className="bg-[--secondary-color] outline-none text-[--main-color] w-full"
              placeholder="What are you looking for?"
              type="text"
            />
            <CiSearch className="text-xl" />
          </div>

          <div className="flex justify-center gap-6 text-2xl">
            <CiHeart />
            <BsCart3 />
              <MdAccountCircle />
          </div>
        </div>

     

      </div>
          <hr className="mt-4" />

    </section>
  );
}