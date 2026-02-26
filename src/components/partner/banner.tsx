import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
  "https://images.unsplash.com/photo-1586201375761-83865001e31c",
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-12">
      <div className="relative max-w-6xl h-32 overflow-hidden rounded-lg mx-auto mb-12">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
