import { FaStar } from "react-icons/fa";
import { CiHeart, CiRead } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

import { useCart } from "../../assets/CartContext";

import dogImage from "../../assets/images/dog.png";
import cameraImage from "../../assets/images/camera.png";
import laptopImage from "../../assets/images/ibade.png";
import jacketImage from "../../assets/images/craeem.png";
import carImage from "../../assets/images/car.png";
import shoesImage from "../../assets/images/Copa.png";
import gamepadImage from "../../assets/images/GP1.png";
import gamepadImage2 from "../../assets/images/jack.png";


// ============================
// Products Data
// ============================

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    image: dogImage,
    rating: 4,
    reviews: 99,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: cameraImage,
    rating: 4,
    reviews: 95,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: laptopImage,
    rating: 5,
    reviews: 325,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 660,
    image: jacketImage,
    rating: 4,
    reviews: 145,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    image: carImage,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ["#166534", "#db4444"],
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: shoesImage,
    rating: 5,
    reviews: 35,
    colors: ["#facc15", "#db4444"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: gamepadImage,
    rating: 5,
    reviews: 55,
    isNew: true,
    colors: ["#ffffff", "#db4444"],
  },
  {
    id: 8,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: gamepadImage2,
    rating: 5,
    reviews: 55,
    isNew: true,
    colors: ["#365314", "#db4444"],
  },
];


// ============================
// Rating Component
// ============================

function Rating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={
              star <= rating
                ? "text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <span className="text-sm text-[--text-color]">
        ({reviews})
      </span>
    </div>
  );
}


// ============================
// Product Card
// ============================

function ProductCard({ product, addToCart }) {
  const {
    name,
    price,
    image,
    rating,
    reviews,
    isNew,
    colors,
  } = product;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-lg
        shadow
        bg-white
        w-full
        transition
        duration-300
        hover:-translate-y-1
      "
    >

      {/* Image Container */}
      <div
        className="
          relative
          w-full
          h-[245px]
          bg-[--secondary-color]
          overflow-hidden
        "
      >

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="
            w-full
            h-full
            object-contain
            p-8
            transition
            duration-300
            group-hover:scale-105
          "
        />


        {/* New Badge */}
        {isNew && (
          <span
            className="
              absolute
              top-3
              left-3
              bg-[--secand-text-color]
              text-white
              text-sm
              px-3
              py-1
              rounded
            "
          >
            New
          </span>
        )}


        {/* Heart + Read */}
        <div
          className="
            absolute
            top-3
            right-3
            flex
            flex-col
            gap-2
          "
        >

          <button
            type="button"
            aria-label={`Add ${name} to wishlist`}
            className="
              bg-white
              rounded-full
              p-2
              text-xl
              shadow-sm
              transition
              hover:bg-gray-100
            "
          >
            <CiHeart />
          </button>

          <button
            type="button"
            aria-label={`View ${name}`}
            className="
              bg-white
              rounded-full
              p-2
              text-xl
              shadow-sm
              transition
              hover:bg-gray-100
            "
          >
            <CiRead />
          </button>

        </div>


        {/* Add To Cart */}
        <button
          type="button"
          onClick={() =>
            addToCart(name, price, image)
          }
          className="
            absolute
            bottom-0
            left-0
            w-full
            flex
            gap-2
            justify-center
            items-center
            bg-black
            text-white
            py-3
            translate-y-0
            md:translate-y-full
            md:opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          <MdOutlineShoppingCart size={20} />
          Add To Cart
        </button>

      </div>


      {/* Product Information */}
      <div className="p-4">

        <h3
          className="
            font-bold
            text-base
            min-h-[24px]
            truncate
          "
          title={name}
        >
          {name}
        </h3>


        {/* Price + Rating */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-2
            mt-3
          "
        >

          <span
            className="
              text-[--alt-text-color]
              font-bold
            "
          >
            ${price}
          </span>

          <Rating
            rating={rating}
            reviews={reviews}
          />

        </div>


        {/* Colors */}
        {colors && (
          <div className="flex gap-2 mt-3">

            {colors.map((color, index) => (
              <span
                key={index}
                className={`
                  w-5
                  h-5
                  rounded-full
                  border
                  ${index === 0 ? "border-black border-2" : "border-transparent"}
                `}
                style={{
                  backgroundColor: color,
                }}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}


// ============================
// Explore Component
// ============================

export default function Explore() {
  const { addToCart } = useCart();

  return (
    <section
      className="
        w-full
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-20
        mt-12
        md:mt-16
        pb-16
      "
    >

      {/* Section Title */}
      <div className="flex items-center gap-3">

        <div
          className="
            bg-[--alt-text-color]
            w-4
            h-6
            rounded
          "
        />

        <h2
          className="
            text-[--alt-text-color]
            font-medium
          "
        >
          Our Products
        </h2>

      </div>


      {/* Main Title */}
      <h2
        className="
          text-2xl
          sm:text-3xl
          font-medium
          mt-5
        "
      >
        Explore Our Products
      </h2>


      {/* Products */}
      <div
        className="
          mt-10
          md:mt-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5
        "
      >

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>


      {/* View All Button */}
      <div className="flex justify-center mt-12 md:mt-20">

        <button
          type="button"
          className="
            bg-[--alt-text-color]
            text-white
            px-6
            py-3
            rounded
            w-full
            sm:w-60
            transition
            hover:opacity-90
            active:scale-95
          "
        >
          View All Products
        </button>

      </div>

    </section>
  );
}