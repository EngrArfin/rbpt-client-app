import React from "react";
import { Counter } from "../Shared/Counter";

const AboutUs = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-black">[Your Store Name]</span>,
          your one-stop destination for premium products, hand-picked just for
          you. We're passionate about offering high-quality items, unbeatable
          customer service, and a seamless shopping experience.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 mb-14">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600">
            Founded in [Year],{" "}
            <span className="font-medium text-black">[Your Store Name]</span>{" "}
            began with a vision to bridge the gap between quality and
            affordability. What started as a small passion project has now grown
            into a trusted platform serving thousands of customers worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To deliver the best-in-class shopping experience by providing
            high-quality, innovative, and sustainable products that bring value
            and joy to our customers' lives.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Why Choose Us?
        </h2>
        <ul className="text-gray-600 grid md:grid-cols-2 gap-4 list-disc pl-5">
          <li>Wide range of high-quality products</li>
          <li>Secure and fast checkout process</li>
          <li>Exceptional customer service</li>
          <li>Fast and reliable shipping</li>
          <li>Transparent return and refund policy</li>
          <li>Eco-friendly packaging and operations</li>
        </ul>
      </section>

      <section className="text-center mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Our Achievements
        </h2>
        <Counter />
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Thank You for Being Part of Our Journey
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’re grateful to have you with us. Whether you're a loyal customer or
          just getting to know us, we promise to keep innovating and improving
          to serve you better every day.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
