import { useEffect, useState } from "react";
import Axios from "axios";
import { images } from "./Images.jsx";
import Loader from "./Loader.jsx";

export default function CatFactsCarousel() {
  const [catFacts, setCatFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFacts((prevFacts) => [...prevFacts, res.data.fact]);
    });
  };

  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      fetchFact();
    }
  }, []);

  const nextFact = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < catFacts.length - 1 ? prevIndex + 1 : 0
    );
    setLoading(true);
  };

  const prevFact = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : catFacts.length - 1
    );
    setLoading(true);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative max-w-lg mx-auto">
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={prevFact}
          className="z-10 p-3 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-300 mr-4"
        >
          &#8249;
        </button>
        {catFacts.length > 0 && (
          <div className="h-[400px] w-full flex flex-col justify-center items-center rounded-lg relative overflow-hidden border-4 border-yellow-400">
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="loader"></div> {<Loader></Loader>}
              </div>
            )}
            <img
              src={images[currentIndex % images.length] || "/fallback.jpg"}
              alt={`Cat Fact ${currentIndex + 1}`}
              className={`object-cover w-full h-full absolute inset-0 ${
                loading ? "hidden" : "block"
              }`}
              onLoad={handleImageLoad}
            />
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-center text-white">
                  {catFacts[currentIndex]}
                </p>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={nextFact}
          className="z-10 p-3 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-300 ml-4"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
