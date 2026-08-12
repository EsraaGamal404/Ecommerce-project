import { useState } from "react";
import myImage from "../../assets/images/slide.png";

export default function Hero() {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    {
      name: "Women's Fashion",
      hasArrow: true,
    },
    {
      name: "Men's Fashion",
      hasArrow: true,
    },
    {
      name: "Electronics",
    },
    {
      name: "Home & Lifestyle",
    },
    {
      name: "Medicine",
    },
    {
      name: "Sports & Outdoor",
    },
    {
      name: "Baby's & Toys",
    },
    {
      name: "Groceries & Pets",
    },
    {
      name: "Health & Beauty",
    },
  ];

  return (
    <section
      className="
        w-full
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-20
        mt-6
        md:mt-10
      "
    >

      {/* Mobile Categories Button */}
      <button
        type="button"
        onClick={() => setShowCategories(!showCategories)}
        className="
          md:hidden
          w-full
          flex
          justify-between
          items-center
          bg-black
          text-white
          px-5
          py-3
          rounded-lg
          mb-4
        "
      >
        <span>Categories</span>

        <span
          className={`transition-transform duration-300 ${
            showCategories ? "rotate-90" : ""
          }`}
        >
          &gt;
        </span>
      </button>


      {/* Main Hero Layout */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-5
          lg:gap-8
          items-stretch
        "
      >

        {/* Sidebar */}
        <aside
          className={`
            w-full
            md:w-[220px]
            lg:w-[240px]
            xl:w-[260px]
            shrink-0
            bg-white
            border
            rounded-lg
            p-5
            shadow-sm

            ${showCategories ? "block" : "hidden md:block"}
          `}
        >

          <ul className="space-y-4">

            {categories.map((category) => (
              <li key={category.name}>

                <button
                  type="button"
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    text-left
                    text-sm
                    lg:text-base
                    transition
                    duration-200
                    hover:text-[--alt-text-color]
                  "
                >

                  <span>
                    {category.name}
                  </span>

                  {category.hasArrow && (
                    <span className="text-lg">
                      &gt;
                    </span>
                  )}

                </button>

              </li>
            ))}

          </ul>

        </aside>


        {/* Hero Image */}
        <div
          className="
            relative
            flex-1
            min-w-0
            overflow-hidden
            rounded-lg
            bg-black
          "
        >

          <img
            src={myImage}
            alt="Exclusive products"
            className="
              block
              w-full
              h-auto
              min-h-[220px]
              md:min-h-[300px]
              lg:min-h-[350px]
              object-cover
              object-center
            "
          />

        </div>

      </div>

    </section>
  );
}

