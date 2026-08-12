import { useState } from "react";
import { Link } from "react-router";

import HeaderWithContact from "../layout/HeaderWithContact";
import Footer from "../layout/Footer";

import phoneIcon from "../../assets/images/icons-phone.png";
import mailIcon from "../../assets/images/icons-mail.png";

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    // هنا ممكن تضيفي API / Email service بعدين
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWithContact />

      <main className="flex-1">

        {/* Breadcrumb */}
        <div className="mt-10 px-4 sm:px-6 md:px-10 lg:px-16 flex gap-2">
          <Link
            className="text-[--text-color] hover:underline"
            to="/Home"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            className="hover:underline"
            to="/Contact"
          >
            Contact
          </Link>
        </div>

        {/* Contact Section */}
        <section className="mt-10 px-4 sm:px-6 md:px-10 lg:px-16 pb-16">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Contact Information */}
            <div className="cards w-full lg:w-[320px] p-5 sm:p-6 border rounded-lg h-fit">

              {/* Call To Us */}
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="w-8 h-8 object-contain"
                  />

                  <h3 className="font-medium text-lg">
                    Call To Us
                  </h3>
                </div>

                <p className="mt-5 text-sm sm:text-base">
                  We are available 24/7, 7 days a week.
                </p>

                <p className="mt-2 text-sm sm:text-base">
                  Phone: +8801611112222
                </p>
              </div>

              <hr className="my-7" />

              {/* Write To Us */}
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={mailIcon}
                    alt="Email"
                    className="w-8 h-8 object-contain"
                  />

                  <h3 className="font-medium text-lg">
                    Write To Us
                  </h3>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-6">
                  Fill out our form and we will contact you
                  within 24 hours.
                </p>

                <p className="mt-2 text-sm sm:text-base break-words">
                  Email: customer@exclusive.com
                </p>

                <p className="mt-2 text-sm sm:text-base break-words">
                  Email: support@exclusive.com
                </p>
              </div>

            </div>


            {/* Contact Form */}
            <div className="w-full flex-1">

              <form
                onSubmit={handleSubmit}
                className="cards w-full max-w-[900px] mx-auto flex flex-col gap-5"
              >

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="sr-only"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      value={user.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      className="
                        w-full
                        bg-[--secondary-color]
                        outline-none
                        rounded
                        p-3
                        transition
                        focus:ring-2
                        focus:ring-[--alt-text-color]
                      "
                    />
                  </div>


                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="sr-only"
                    >
                      Your Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      value={user.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="
                        w-full
                        bg-[--secondary-color]
                        outline-none
                        rounded
                        p-3
                        transition
                        focus:ring-2
                        focus:ring-[--alt-text-color]
                      "
                    />
                  </div>


                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="sr-only"
                    >
                      Your Phone
                    </label>

                    <input
                      id="phone"
                      name="number"
                      type="tel"
                      placeholder="Your Phone *"
                      value={user.number}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                      className="
                        w-full
                        bg-[--secondary-color]
                        outline-none
                        rounded
                        p-3
                        transition
                        focus:ring-2
                        focus:ring-[--alt-text-color]
                      "
                    />
                  </div>

                </div>


                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="sr-only"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={user.message}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      min-h-[200px]
                      bg-[--secondary-color]
                      outline-none
                      rounded
                      p-3
                      resize-none
                      transition
                      focus:ring-2
                      focus:ring-[--alt-text-color]
                    "
                  />
                </div>


                {/* Button */}
                <div className="flex justify-center sm:justify-end">
                  <button
                    type="submit"
                    className="
                      w-full
                      sm:w-auto
                      bg-[--alt-text-color]
                      text-white
                      rounded
                      px-8
                      py-3
                      transition
                      hover:opacity-90
                      active:scale-95
                    "
                  >
                    Send Message
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

