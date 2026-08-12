import { Link, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { CiHeart, CiRead } from "react-icons/ci";
import { useState } from "react";

import HeaderWithAccount from "../layout/HeaderWithAccount";
import Footer from "../layout/Footer";

import myImage from "../../assets/images/image1.png";
import myImage3 from "../../assets/images/delivary.png";
import myImage4 from "../../assets/images/return.png";
import myImage5 from "../../assets/images/image4.png";
import myImage6 from "../../assets/images/ibade.png";
import myImage7 from "../../assets/images/image2.png";
import myImage8 from "../../assets/images/bag.png";
import myImage9 from "../../assets/images/meck.png";
import myImage10 from "../../assets/images/GP1.png";
import myImage11 from "../../assets/images/jack.png";

export default function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Havic HV-G92 Gamepad",
      price: 192,
      images: [myImage, myImage, myImage],
      desc: "PlayStation 5 Controller - High quality wireless gamepad with ergonomic design.",
      reviews: 65,
      rating: 4,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 2,
      name: "ASUS FHD Gaming Laptop",
      price: 960,
      images: [myImage6, myImage6, myImage6],
      desc: "ASUS FHD Gaming Laptop with powerful performance and modern design.",
      reviews: 65,
      rating: 5,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 3,
      name: "AK-900 Wired Keyboard",
      price: 200,
      images: [myImage5, myImage5, myImage5],
      desc: "Comfortable wired keyboard with LED lighting and responsive keys. Perfect for office and gaming use.",
      reviews: 65,
      rating: 4,
      colors: ["#000000", "#00aaff"],
      sizes: ["S", "M"],
    },
    {
      id: 4,
      name: "IPS LCD Gaming Monitor",
      price: 1160,
      images: [myImage7, myImage7, myImage7],
      desc: "IPS LCD Gaming Monitor with high-quality display and excellent gaming performance.",
      reviews: 65,
      rating: 4,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 5,
      name: "Gucci Duffle Bag",
      price: 960,
      images: [myImage8, myImage8, myImage8],
      desc: "Stylish Gucci duffle bag with premium quality materials and modern design.",
      reviews: 65,
      rating: 4,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 6,
      name: "RGB Liquid CPU Cooler",
      price: 1960,
      images: [myImage9, myImage9, myImage9],
      desc: "RGB liquid CPU cooler designed for efficient cooling and modern gaming setups.",
      reviews: 65,
      rating: 5,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      images: [myImage10, myImage10, myImage10],
      desc: "GP11 Shooter USB Gamepad with comfortable grip and responsive controls.",
      reviews: 65,
      rating: 5,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
    {
      id: 8,
      name: "Quilted Satin Jacket",
      price: 750,
      images: [myImage11, myImage11, myImage11],
      desc: "Quilted Satin Jacket with a modern style and comfortable fit.",
      reviews: 65,
      rating: 5,
      colors: ["#000000", "#ffffff", "#ff0000"],
      sizes: ["S", "M", "L"],
    },
  ];

  const product = products.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div>
        <HeaderWithAccount />

        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Product not found
          </h2>

          <Link
            to="/Home"
            className="mt-6 bg-[--alt-text-color] text-white px-6 py-3 rounded hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const relatedProducts = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: myImage,
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      reviews: 88,
    },
    {
      name: "AK-900 Wired Keyboard",
      image: myImage5,
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      reviews: 75,
    },
    {
      name: "IPS LCD Gaming Monitor",
      image: myImage7,
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      reviews: 75,
    },
    {
      name: "Gucci Duffle Bag",
      image: myImage8,
      price: 960,
      oldPrice: 1160,
      discount: null,
      reviews: 65,
    },
  ];

  return (
    <div className="min-h-screen">
      <HeaderWithAccount />

      {/* Breadcrumb */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        <div className="flex flex-wrap gap-2 text-sm md:text-base">
          <Link
            className="text-[--text-color] hover:text-black"
            to="/Account"
          >
            Account /
          </Link>

          <Link
            className="text-[--text-color] hover:text-black"
            to="/"
          >
            Gaming /
          </Link>

          <span className="truncate max-w-[180px] sm:max-w-none">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

          {/* Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4">

            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg bg-[--secondary-color] border-2 transition ${
                    selectedImage === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 min-h-[300px] md:min-h-[450px] bg-[--secondary-color] rounded-lg flex items-center justify-center">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full max-w-[500px] h-[320px] sm:h-[400px] object-contain p-6"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full">

            <h1 className="text-2xl md:text-3xl font-semibold">
              {product.name}
            </h1>

            <p className="text-xl md:text-2xl mt-3">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <span className="text-gray-500 text-sm">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 text-gray-600 leading-7">
              {product.desc}
            </p>

            <hr className="my-6" />

            {/* Colors */}
            <div>
              <p className="font-medium mb-3">Colours:</p>

              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color ${color}`}
                    className={`w-8 h-8 rounded-full border-2 transition ${
                      selectedColor === color
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <p className="font-medium mb-3">Size:</p>

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-10 px-4 py-2 rounded border transition ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">

              <div className="flex items-center border rounded w-fit">
                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="w-10 h-10 hover:bg-gray-100"
                >
                  -
                </button>

                <span className="w-12 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 bg-[--alt-text-color] text-white"
                >
                  +
                </button>
              </div>

              <button className="flex-1 sm:flex-none bg-[--alt-text-color] text-white px-8 py-2.5 rounded hover:opacity-90 transition">
                Buy Now
              </button>

              <button className="border border-black px-6 py-2.5 rounded hover:bg-black hover:text-white transition">
                <CiHeart className="text-2xl" />
              </button>
            </div>

            {/* Delivery */}
            <div className="mt-8 border border-gray-300 rounded-lg">

              <div className="flex gap-4 p-5">
                <img
                  className="w-8 h-8 object-contain"
                  src={myImage3}
                  alt="Delivery"
                />

                <div>
                  <p className="font-medium">
                    Free Delivery
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <hr />

              <div className="flex gap-4 p-5">
                <img
                  className="w-8 h-8 object-contain"
                  src={myImage4}
                  alt="Return"
                />

                <div>
                  <p className="font-medium">
                    30-Day Return Guarantee
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">

        <div className="flex items-center gap-3">
          <div className="bg-[--alt-text-color] w-4 h-7 rounded" />

          <h2 className="text-lg md:text-xl font-medium">
            Related Items
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

          {relatedProducts.map((item, index) => (
            <div
              key={index}
              className="group relative min-w-0"
            >
              {/* Image */}
              <div className="relative bg-[--secondary-color] h-[250px] rounded-lg overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-8"
                />

                {item.discount && (
                  <span className="absolute top-3 left-3 bg-[--alt-text-color] text-white text-sm px-2 py-1 rounded">
                    {item.discount}
                  </span>
                )}

                <button className="absolute top-3 right-3 bg-white rounded-full p-2 text-xl hover:bg-gray-100">
                  <CiHeart />
                </button>

                <button className="absolute top-14 right-3 bg-white rounded-full p-2 text-xl hover:bg-gray-100">
                  <CiRead />
                </button>
              </div>

              {/* Info */}
              <h3 className="font-semibold mt-3">
                {item.name}
              </h3>

              <div className="flex flex-wrap gap-3 mt-2">
                <span className="text-[--alt-text-color] font-semibold">
                  ${item.price}
                </span>

                {item.oldPrice && (
                  <span className="text-gray-500">
                    <del>${item.oldPrice}</del>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mt-2">

                <div className="flex gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-gray-500 text-sm">
                  ({item.reviews})
                </span>
              </div>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}