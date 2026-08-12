import myImage from "../../assets/images/image1.png";
import myImage2 from "../../assets/images/image4.png";
import myImage3 from "../../assets/images/image2.png";
import myImage4 from "../../assets/images/image3.png";

import { FaStar } from "react-icons/fa";
import { CiHeart, CiRead } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../../assets/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: myImage,
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 5,
      reviews: 88,
    },
    {
      name: "AK-900 Wired Keyboard",
      image: myImage2,
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
    },
    {
      name: "IPS LCD Gaming Monitor",
      image: myImage3,
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 4,
      reviews: 99,
    },
    {
      name: "S-Series Comfort Chair",
      image: myImage4,
      price: 375,
      oldPrice: 395,
      discount: "-25%",
      rating: 4,
      reviews: 99,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32 mt-12 sm:mt-16 lg:mt-20">
      
      {/* Title */}
      <div className="flex items-center gap-3">
        <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>

        <h2 className="text-[--alt-text-color] font-medium">
          Today’s
        </h2>
      </div>

      {/* Heading + Countdown */}
      <div className="mt-5 flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
        
        <h2 className="font-medium text-2xl sm:text-3xl">
          Flash Sales
        </h2>

        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Days */}
          <div className="text-center">
            <h3 className="text-xs sm:text-sm">Days</h3>
            <p className="font-bold text-xl sm:text-2xl">03</p>
          </div>

          <span className="text-[--alt-text-color] text-2xl sm:text-4xl">
            :
          </span>

          {/* Hours */}
          <div className="text-center">
            <h3 className="text-xs sm:text-sm">Hours</h3>
            <p className="font-bold text-xl sm:text-2xl">23</p>
          </div>

          <span className="text-[--alt-text-color] text-2xl sm:text-4xl">
            :
          </span>

          {/* Minutes */}
          <div className="text-center">
            <h3 className="text-xs sm:text-sm">Minutes</h3>
            <p className="font-bold text-xl sm:text-2xl">19</p>
          </div>

          <span className="text-[--alt-text-color] text-2xl sm:text-4xl">
            :
          </span>

          {/* Seconds */}
          <div className="text-center">
            <h3 className="text-xs sm:text-sm">Seconds</h3>
            <p className="font-bold text-xl sm:text-2xl">56</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        
        {products.map((product) => (
          <div
            key={product.name}
            className="group relative overflow-hidden rounded-lg shadow p-4 bg-white"
          >
            
            {/* Image */}
            <div className="relative h-[230px] sm:h-[245px] bg-[--secondary-color] rounded-lg flex items-center justify-center overflow-hidden">
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Discount */}
              <p className="absolute top-3 left-3 bg-[--alt-text-color] text-white rounded px-2 py-1 text-sm">
                {product.discount}
              </p>

              {/* Heart */}
              <button
                className="absolute top-3 right-3 bg-white rounded p-2 text-xl hover:text-[--alt-text-color] transition"
              >
                <CiHeart />
              </button>

              {/* Read */}
              <button
                className="absolute top-14 right-3 bg-white rounded p-2 text-xl hover:text-[--alt-text-color] transition"
              >
                <CiRead />
              </button>
            </div>

            {/* Product Name */}
            <h3 className="font-bold mt-3 truncate">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex gap-3 font-bold mt-2">
              <p className="text-[--alt-text-color]">
                ${product.price}
              </p>

              <p className="text-[--text-color]">
                <del>${product.oldPrice}</del>
              </p>
            </div>

            {/* Rating */}
            <div className="flex gap-3 mt-3 items-center">
              
              <div className="text-yellow-400 flex gap-1">
                {[...Array(product.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="text-[--text-color] text-sm">
                ({product.reviews})
              </p>
            </div>

            {/* Add To Cart */}
            <button
              onClick={() =>
                addToCart(
                  product.name,
                  product.price,
                  product.image
                )
              }
              className="
                absolute bottom-0 left-0 w-full
                flex gap-2
                bg-black text-white
                justify-center items-center
                py-3 rounded-b-lg
                opacity-0 translate-y-full
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-300
                cursor-pointer
              "
            >
              <MdOutlineShoppingCart />
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className="
          bg-[--alt-text-color]
          text-white
          px-6 py-3
          rounded
          mt-12 sm:mt-16 lg:mt-20
          block mx-auto
          w-full sm:w-60
          hover:opacity-90
          transition
        "
      >
        View All Products
      </button>

      <hr className="mt-10" />
    </section>
  );
}

