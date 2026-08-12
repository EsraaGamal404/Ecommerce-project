
import HeaderWithAccount from "../layout/HeaderWithAccount";

import myImage from "../../assets/images/bag.png";
import myImage2 from "../../assets/images/meck.png";
import myImage3 from "../../assets/images/GP1.png";
import myImage4 from "../../assets/images/jack.png";
import myImage5 from "../../assets/images/ibade.png";
import myImage6 from "../../assets/images/image2.png";
import myImage7 from "../../assets/images/image1.png";
import myImage8 from "../../assets/images/image4.png";

import { FaEye, FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

import Footer from "../layout/Footer";
import { useCart } from "../../assets/CartContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { addToCart } = useCart();

  const wishlistProducts = [
    {
      id: 5,
      name: "Gucci duffle bag",
      image: myImage,
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
    },
    {
      id: 6,
      name: "RGB liquid CPU Cooler",
      image: myImage2,
      price: 1960,
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      image: myImage3,
      price: 550,
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      image: myImage4,
      price: 750,
    },
  ];

  const recommendedProducts = [
    {
      id: 2,
      name: "ASUS FHD Gaming Laptop",
      image: myImage5,
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      reviews: 65,
      rating: 4,
    },
    {
      id: 4,
      name: "IPS LCD Gaming Monitor",
      image: myImage6,
      price: 1160,
      reviews: 65,
      rating: 4,
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      image: myImage7,
      price: 560,
      discount: "-35%",
      reviews: 65,
      rating: 5,
    },
    {
      id: 3,
      name: "AK-900 Wired Keyboard",
      image: myImage8,
      price: 200,
      reviews: 65,
      rating: 5,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product.name, product.price, product.image);
  };

  return (
    <div className="min-h-screen">
      <HeaderWithAccount />

      <main className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32">

        {/* ================= Wishlist ================= */}
        <section className="mt-10 sm:mt-14 lg:mt-16">

          {/* Wishlist Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-xl font-medium">
              Wishlist ({wishlistProducts.length})
            </h3>

            <button className="border border-gray-400 px-5 py-2 rounded hover:bg-black hover:text-white transition">
              Move All To Bag
            </button>
          </div>

          {/* Wishlist Products */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {wishlistProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative bg-[--secondary-color] rounded-lg overflow-hidden">

                  {/* Discount */}
                  {product.discount && (
                    <p className="absolute top-3 left-3 z-10 text-white bg-[--alt-text-color] px-2 py-1 rounded text-sm">
                      {product.discount}
                    </p>
                  )}

                  {/* Bag Icon */}
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full text-lg hover:text-[--alt-text-color] transition"
                  >
                    <FaBasketShopping />
                  </button>

                  {/* Product Image */}
                  <div className="h-[240px] flex items-center justify-center p-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Add To Cart */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="
                      w-full
                      flex gap-2
                      bg-black text-white
                      justify-center items-center
                      py-3
                      opacity-0
                      translate-y-full
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all duration-300
                    "
                  >
                    <MdOutlineShoppingCart />
                    Add To Cart
                  </button>
                </div>

                {/* Product Info */}
                <h3 className="mt-3 font-medium truncate">
                  {product.name}
                </h3>

                <div className="flex gap-3 mt-1">
                  <p className="text-[--alt-text-color] font-medium">
                    ${product.price}
                  </p>

                  {product.oldPrice && (
                    <p className="text-gray-500 line-through">
                      ${product.oldPrice}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= Just For You ================= */}
        <section className="mt-16 sm:mt-20 lg:mt-24">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex items-center gap-3">
              <div className="bg-[--alt-text-color] w-4 h-6 rounded"></div>

              <h3 className="text-xl font-medium">
                Just For You
              </h3>
            </div>

            <button className="border border-gray-400 px-5 py-2 rounded hover:bg-black hover:text-white transition">
              See All
            </button>
          </div>

          {/* Recommended Products */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {recommendedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative bg-[--secondary-color] rounded-lg overflow-hidden">

                  {/* Discount */}
                  {product.discount && (
                    <p className="absolute top-3 left-3 z-10 text-white bg-[--alt-text-color] px-2 py-1 rounded text-sm">
                      {product.discount}
                    </p>
                  )}

                  {/* Eye */}
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full text-lg hover:text-[--alt-text-color] transition"
                  >
                    <FaEye />
                  </button>

                  {/* Image */}
                  <div className="h-[240px] flex items-center justify-center p-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Add To Cart */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="
                      w-full
                      flex gap-2
                      bg-black text-white
                      justify-center items-center
                      py-3
                      opacity-0
                      translate-y-full
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all duration-300
                    "
                  >
                    <MdOutlineShoppingCart />
                    Add To Cart
                  </button>
                </div>

                {/* Product Info */}
                <h3 className="mt-3 font-medium truncate">
                  {product.name}
                </h3>

                <p className="text-[--alt-text-color] font-medium mt-1">
                  ${product.price}
                </p>

                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(product.rating)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>

                    <span className="text-gray-500 text-sm">
                      ({product.reviews})
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

