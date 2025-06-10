import React from "react";

interface AdBannerProps {
  title: string;
  description: string;
  image: string;
  size?: "large" | "medium" | "small";
  discount?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  title,
  description,
  image,
  size = "medium",
  discount,
}) => {
  const sizeClasses = {
    large: "h-40 md:h-48",
    medium: "h-32 md:h-36",
    small: "h-24 md:h-28",
  };

  return (
    <div
      className={`relative bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg overflow-hidden ${sizeClasses[size]} cursor-pointer hover:shadow-lg transition-shadow group`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light"
      />

      <div className="relative h-full flex items-center justify-between p-4 md:p-6">
        <div className="flex-1">
          <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-700 mb-2">{description}</p>
          {discount && (
            <span className="inline-block bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              {discount}
            </span>
          )}
        </div>

        <div className="text-right ml-4">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
            Узнать больше
          </button>
        </div>
      </div>

      <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
        реклама
      </div>
    </div>
  );
};

export default AdBanner;
