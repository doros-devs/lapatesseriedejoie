import React from "react";

const Gallery = () => {
  const images = [
    "/images/gallery-1.png",
    "/images/gallery-2.webp",
    "/images/gallery-3.webp",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-8.webp",
    "/images/gallery-9.jpg",
    "/images/gallery-10.jpg",
    "/images/gallery-11.webp",
    "/images/gallery-12.jpg",
    "/images/gallery-13.jpg",
    "/images/gallery-14.webp",
    "/images/gallery-15.png",
  ];

  return (
    <div className="container mx-auto p-4 m-4">

      <div className="flex flex-wrap gap-8">
        <div className="flex-1">
          <img
            src={images[0]}
            alt="Gallery Portrait"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <div>
            <img
              src={images[1]}
              alt="Gallery Landscape 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[2]}
              alt="Gallery Landscape 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">
        <div className="flex flex-col flex-1 gap-8">
          <div>
            <img
              src={images[3]}
              alt="Gallery Landscape 3"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[4]}
              alt="Gallery Landscape 4"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="flex-1">
          <img
            src={images[5]}
            alt="Gallery Portrait 2"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">
        <div className="flex-1">
          <img
            src={images[6]}
            alt="Gallery Portrait 3"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <div>
            <img
              src={images[7]}
              alt="Gallery Landscape 5"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[8]}
              alt="Gallery Landscape 6"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">
        <div className="flex flex-col flex-1 gap-8">
          <div>
            <img
              src={images[9]}
              alt="Gallery Landscape 7"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[10]}
              alt="Gallery Landscape 8"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="flex-1">
          <img
            src={images[11]}
            alt="Gallery Portrait 4"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">
        <div className="flex-1">
          <img
            src={images[12]}
            alt="Gallery Portrait 5"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <div>
            <img
              src={images[13]}
              alt="Gallery Landscape 9"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src={images[14]}
              alt="Gallery Landscape 10"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
