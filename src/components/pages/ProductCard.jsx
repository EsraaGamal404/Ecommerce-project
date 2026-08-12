import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import myImage7 from "../../assets/images/image1.png";
import { useCart } from "../../assets/CartContext";


// =====================================
// Products Data
// =====================================

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal pressure sensitive.",
    reviews: 65,
    stars: 4,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 200,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "AK-900 Wired Keyboard with comfortable keys and modern design.",
    reviews: 65,
    stars: 4,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "ASUS FHD Gaming Laptop with high performance and modern design.",
    reviews: 65,
    stars: 5,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 4,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "IPS LCD Gaming Monitor with high quality display and smooth performance.",
    reviews: 65,
    stars: 5,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 5,
    name: "Gucci Duffle Bag",
    price: 960,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "Gucci Duffle Bag with premium materials and elegant design.",
    reviews: 65,
    stars: 4,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 6,
    name: "RGB Liquid CPU Cooler",
    price: 1960,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "RGB liquid CPU Cooler designed for powerful and efficient cooling.",
    reviews: 65,
    stars: 5,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "GP11 Shooter USB Gamepad with responsive buttons and comfortable design.",
    reviews: 65,
    stars: 5,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 750,
    img: myImage7,
    images: [myImage7, myImage7, myImage7],
    desc: "Quilted Satin Jacket with a modern and comfortable design.",
    reviews: 65,
    stars: 4,
    colors: ["#000000", "#ffffff", "#ff0000"],
    sizes: ["S", "M", "L"],
  },
];


// =====================================
// Rating
// =====================================

function Rating({ stars, reviews }) {
  return (
    <div className="flex items-center gap-2">

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={
              star <= stars
                ? "text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <span className="text-sm text-gray-500">
        ({reviews})
      </span>

    </div>
  );
}


// =====================================
// Product Item
// =====================================

function ProductItem({ product }) {
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(
    product.img
  );

  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );

  return (
    <article
      className="
        group
        w-full
        sm:w-[280px]
        rounded-lg
        bg-white
        shadow
        overflow-hidden
        transition
        duration-300
        hover:-translate-y-1
      "
    >

      {/* Product Image */}
      <div
        className="
          relative
          w-full
          h-[260px]
          bg-[--secondary-color]
          flex
          items-center
          justify-center
        "
      >

        <img
          src={selectedImage}
          alt={product.name}
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

      </div>


      {/* Product Content */}
      <div className="p-4">

        {/* Name */}
        <h2
          className="
            font-bold
            text-lg
            truncate
          "
          title={product.name}
        >
          {product.name}
        </h2>


        {/* Price */}
        <p
          className="
            text-[--alt-text-color]
            font-bold
            text-lg
            mt-2
          "
        >
          ${product.price}
        </p>


        {/* Rating */}
        <div className="mt-2">
          <Rating
            stars={product.stars}
            reviews={product.reviews}
          />
        </div>


        {/* Description */}
        <p
          className="
            text-sm
            text-gray-500
            mt-3
            line-clamp-2
          "
        >
          {product.desc}
        </p>


        {/* Colors */}
        <div className="mt-4">

          <p className="font-medium text-sm mb-2">
            Colors:
          </p>

          <div className="flex gap-2">

            {product.colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                aria-label={`Select color ${color}`}
                className={`
                  w-6
                  h-6
                  rounded-full
                  transition
                  ${
                    selectedColor === color
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                  }
                `}
                style={{
                  backgroundColor: color,
                }}
              />
            ))}

          </div>

        </div>


        {/* Sizes */}
        <div className="mt-4">

          <p className="font-medium text-sm mb-2">
            Size:
          </p>

          <div className="flex gap-2">

            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`
                  w-9
                  h-9
                  border
                  rounded
                  text-sm
                  transition
                  ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {size}
              </button>
            ))}

          </div>

        </div>


        {/* Product Images */}
        <div className="flex gap-2 mt-4">

          {product.images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="
                w-14
                h-14
                border
                rounded
                overflow-hidden
                hover:border-black
              "
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </button>
          ))}

        </div>


        {/* Add To Cart */}
        <button
          type="button"
          onClick={() =>
            addToCart(
              product.name,
              product.price,
              selectedImage
            )
          }
          className="
            w-full
            mt-5
            flex
            items-center
            justify-center
            gap-2
            bg-[--alt-text-color]
            text-white
            py-3
            rounded
            transition
            hover:opacity-90
            active:scale-95
          "
        >
          <MdOutlineShoppingCart size={20} />
          Add To Cart
        </button>

      </div>

    </article>
  );
}


// =====================================
// Main Product Card Section
// =====================================

export default function ProductCard() {
  return (
    <section
      className="
        w-full
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-20
        mt-10
        pb-16
      "
    >

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          justify-items-center
        "
      >

        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

