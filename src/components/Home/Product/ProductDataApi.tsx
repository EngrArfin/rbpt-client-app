import { Rocket } from "@/type/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDataApi = () => {
  const [data, setData] = useState<Rocket[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => res.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        SpaceX Rocket Data
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((rocket) => (
          <div
            key={rocket.rocket_id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.company}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">
                {rocket.company}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {rocket.description}
              </p>

              <button
                onClick={() =>
                  navigate(`/rockets/${rocket.rocket_id}`, { state: rocket })
                }
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDataApi;
