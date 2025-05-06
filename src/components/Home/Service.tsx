import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcOnlineSupport } from "react-icons/fc";
import { TbTruckReturn } from "react-icons/tb";

const services = [
  {
    title: "Fast Delivery",
    description:
      "Get your products delivered quickly and safely to your doorstep.",
    icon: <CiDeliveryTruck />,
  },
  {
    title: "Secure Payment",
    description: "We ensure secure transactions with end-to-end encryption.",
    icon: <RiSecurePaymentLine />,
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you.",
    icon: <FcOnlineSupport />,
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days for eligible products.",
    icon: <TbTruckReturn />,
  },
];

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-red-600 mb-10">Our Services</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 text-center"
          >
            <div className="text-5xl mb-4 flex justify-center">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
