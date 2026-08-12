import myImage from "../../assets/images/Services.png";
import myImage2 from "../../assets/images/hitphone.png";
import myImage3 from "../../assets/images/ok.png";

export default function Services() {
  const services = [
    {
      image: myImage,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      image: myImage2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      image: myImage3,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-32 mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="h-20 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="max-h-20 w-auto object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="font-bold mt-5 text-lg sm:text-xl">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
