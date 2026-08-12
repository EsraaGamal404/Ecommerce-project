import LoginHeader from "../layout/LoginHeader";
import Footer from "../layout/Footer";

import myImage from "../../assets/images/Silder.png";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">

      <LoginHeader />

      <main className="flex-1">

        <section
          className="
            w-full
            px-4
            sm:px-6
            md:px-10
            lg:px-16
            xl:px-20
            mt-10
            md:mt-16
            lg:mt-20
          "
        >

          <div
            className="
              max-w-[1200px]
              mx-auto
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-10
              lg:gap-16
            "
          >

            {/* Image */}
            <div
              className="
                w-full
                lg:w-1/2
                flex
                justify-center
              "
            >
              <img
                src={myImage}
                alt="Login"
                className="
                  w-full
                  max-w-[550px]
                  h-auto
                  object-contain
                "
              />
            </div>


            {/* Login Form */}
            <div
              className="
                w-full
                max-w-[420px]
                lg:w-1/2
              "
            >

              <h1
                className="
                  text-2xl
                  sm:text-3xl
                  font-medium
                "
              >
                Log in to Exclusive
              </h1>

              <p className="mt-3 text-gray-600">
                Enter your details below
              </p>


              {/* Form */}
              <form className="mt-8">

                {/* Email / Phone */}
                <div className="mb-6">

                  <label
                    htmlFor="email"
                    className="sr-only"
                  >
                    Email or Phone Number
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email or Phone Number"
                    autoComplete="username"
                    className="
                      w-full
                      border-b
                      border-gray-400
                      py-3
                      outline-none
                      bg-transparent
                      transition
                      focus:border-[--alt-text-color]
                    "
                  />

                </div>


                {/* Password */}
                <div className="mb-6">

                  <label
                    htmlFor="password"
                    className="sr-only"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className="
                      w-full
                      border-b
                      border-gray-400
                      py-3
                      outline-none
                      bg-transparent
                      transition
                      focus:border-[--alt-text-color]
                    "
                  />

                </div>


                {/* Login + Forgot Password */}
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    gap-4
                    sm:justify-between
                  "
                >

                  <button
                    type="submit"
                    className="
                      w-full
                      sm:w-auto
                      bg-[--alt-text-color]
                      text-white
                      px-8
                      py-3
                      rounded
                      transition
                      hover:opacity-90
                      active:scale-95
                    "
                  >
                    Log In
                  </button>

                  <button
                    type="button"
                    className="
                      text-[--third-color]
                      hover:underline
                      transition
                    "
                  >
                    Forgot Password?
                  </button>

                </div>

              </form>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

