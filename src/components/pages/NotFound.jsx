import Footer from "../layout/Footer";
import HeaderWithAccount from "../layout/HeaderWithAccount";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">

      <HeaderWithAccount />

      <main className="flex-1">

        {/* Breadcrumb */}
        <div
          className="
            mt-8
            sm:mt-10
            px-4
            sm:px-6
            md:px-10
            lg:px-16
            xl:px-20
            flex
            items-center
            gap-2
            text-sm
            sm:text-base
          "
        >
          <Link
            to="/Home"
            className="
              text-[--text-color]
              hover:underline
              transition
            "
          >
            Home
          </Link>

          <span>/</span>

          <span>Not Found</span>
        </div>


        {/* 404 Content */}
        <section
          className="
            min-h-[500px]
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-4
            py-16
          "
        >

          <h1
            className="
              font-medium
              text-5xl
              sm:text-6xl
              md:text-7xl
            "
          >
            404 Not Found
          </h1>

          <p
            className="
              mt-6
              text-sm
              sm:text-base
              text-gray-600
              max-w-[500px]
            "
          >
            Your visited page was not found.
            You may go back to the home page.
          </p>


          <Link
            to="/Home"
            className="
              inline-flex
              items-center
              justify-center
              bg-[--alt-text-color]
              text-white
              rounded
              mt-8
              px-7
              py-3
              transition
              duration-200
              hover:opacity-90
              active:scale-95
            "
          >
            Back to Home Page
          </Link>

        </section>

      </main>

      <Footer />

    </div>
  );
}

