import { useLocation, useParams } from "react-router-dom";
import { Rocket } from "@/type/types";

const RocketDetails = () => {
  const { state } = useLocation();
  const { rocketId } = useParams();
  console.log("Rocket ID:", rocketId);

  const rocket = state as Rocket;

  if (!rocket) {
    return (
      <p className="text-center mt-20 text-gray-600">
        No rocket data found. Please check the URL or try again later.
        <br />
        <span className="text-blue-500">Rocket ID: {rocketId}</span>
      </p>
    );
  }

  const getPayload = (index: number) =>
    rocket.payload_weights[index]?.kg
      ? `${rocket.payload_weights[index].kg} kg`
      : "N/A";

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">
        {rocket.rocket_name}
      </h2>
      <img
        src={rocket.flickr_images[0]}
        alt={rocket.company}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-gray-700 mb-4 text-sm">{rocket.description}</p>
      <h3 className="text-xl font-semibold mb-2">Rocket Details</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Rocket ID:</strong> {rocket.rocket_id}
        </li>
        <li>
          <strong>Company:</strong> {rocket.company}
        </li>
        <li>
          <strong>Cost per Launch:</strong> ${rocket.cost_per_launch}
        </li>
        <li>
          <strong>Success Rate Percentage:</strong> {rocket.success_rate_pct}%
        </li>
        <li>
          <strong>First Flight:</strong> {rocket.first_flight}
        </li>
        <li>
          <strong>Country:</strong> {rocket.country}
        </li>
        <li>
          <strong>Height:</strong> {rocket.height?.meters ?? "N/A"} m
        </li>
        <li>
          <strong>Diameter:</strong> {rocket.diameter?.meters ?? "N/A"} m
        </li>
        <li>
          <strong>Mass:</strong> {rocket.mass?.kg ?? "N/A"} kg
        </li>
        <li>
          <strong>Payload to LEO:</strong> {getPayload(0)}
        </li>
        <li>
          <strong>Payload to GTO:</strong> {getPayload(1)}
        </li>
        <li>
          <strong>Payload to Mars:</strong> {getPayload(2)}
        </li>
        <li>
          <strong>Payload to Moon:</strong> {getPayload(3)}
        </li>
        <li>
          <strong>Active:</strong> {rocket.active ? "Yes" : "No"}
        </li>
        <li>
          <strong>Stages:</strong> {rocket.stages}
        </li>
        <li>
          <strong>Boosters:</strong> {rocket.boosters}
        </li>
        <li>
          <strong>Landing Legs:</strong> {rocket.landing_legs?.number ?? "N/A"}
        </li>
        <li>
          <strong>Wikipedia:</strong>{" "}
          <a
            href={rocket.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {rocket.wikipedia}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RocketDetails;
