import { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";



export default function Header(){
  const {t,i18n}=useTranslation();
  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng);
  }
 const [open, setOpen] = useState(false);

  return(
    <section>
        <div className="bg-black w-full p-2 flex flex-col md:flex-row items-center">
    <div className="flex flex-1 justify-center">
    <h1 className="text-[--title-color] flex gap-3 font-thin items-center">
      {t("saleBanner")}
      <strong className="text-white  font-bold">{t("ShopNow")}</strong>
    </h1></div>
    <div className="flex flex-col md:flex-row justify-center  items-center gap-2 md:mr-10">
      <div className="flex items-center justify-end mt-2 md:mt-0  gap-2">
        <select
          className="bg-black text-[--title-color] outline-none  p-1 rounded"
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language} >
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  </div>

<div className="container mx-auto px-4 mt-6">
  <div className="flex justify-between items-center">
  
    <a className="font-bold text-2xl" href="/Home">Exclusive</a>

    <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
      {open ? <MdOutlineRestaurantMenu /> : <CiMenuFries />}
    </button>

    <nav
      className={`absolute md:static bg-white w-full md:w-auto  left-0 shadow-md md:shadow-none 
      transition-all duration-300 md:flex md:items-center md:gap-10 px-6 py-4 md:p-0
      ${open ? "top-40" : "top-[-500px]"}`}
    >
      <ul className="md:flex gap-10 ">
        <li><Link to="/Home" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/Contact" onClick={() => setOpen(false)}>Contact</Link></li>
        <li><Link to="/About" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link className="active" to="/SignUp" onClick={() => setOpen(false)}>Sign Up</Link></li>
      </ul>
    </nav>
        <div>
      <div className="search flex p-2 justify-center items-center bg-[--secondary-color] rounded-md">
        <input
          className="bg-[--secondary-color] outline-none text-[--main-color]  w-52"
          placeholder="What are you looking for?"
          type="text"
        />
         <CiSearch />
      </div>
      </div>
      </div>
      </div>
    <hr className="mt-4" />
    </section>
  );
}


 
 
 
 










































