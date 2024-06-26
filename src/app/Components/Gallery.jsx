"use client";

import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Gallery = () => {
  // Images Data
  const imageData = [
    { id: 0, src: "/Gallery/Image1.png" },
    { id: 1, src: "/Gallery/Image2.png" },
    { id: 2, src: "/Gallery/Image3.png" },
    { id: 3, src: "/Gallery/Image4.png" },
    { id: 4, src: "/Gallery/Image5.png" },
  ];

  const [currentImage, setCurrentImage] = useState(imageData[0]);

  // Handling right button to move next image
  const handleRight = () => {
    setCurrentImage((prev) =>
      prev.id === imageData.length - 1 ? imageData[0] : imageData[prev.id + 1]
    );
  };

  // Handling left button to move back previous image
  const handleLeft = () => {
    setCurrentImage((prev) =>
      prev.id === 0 ? imageData[imageData.length - 1] : imageData[prev.id - 1]
    );
  };
  return (
    <article className="margin my-5">
      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button className="galleryBtn bg-primary-dark font-poppins text-white font-semibold px-3 md:px-8 py-1">
          EXTERIORS
        </button>
        <button className="galleryBtn outline font-poppins text-primary-dark font-bold px-2 md:px-5 py-3">
          INTERIORS
        </button>
      </div>
      {/* Image Gallery  */}
      <div className="my-6 relative">
        <Image
          src={currentImage.src}
          alt="mainImage"
          width={1300}
          height={100}
        />
        {/* navigation buttons */}
        <button className="navBtn" onClick={handleLeft}>
          <MdKeyboardArrowLeft />{" "}
        </button>
        <button className="navBtn right-5" onClick={handleRight}>
          <MdKeyboardArrowRight />{" "}
        </button>
      </div>
      {/* Small images */}
      <div className="flex justify-between items-center gap-3">
        {imageData
          .filter((img) => img.id !== currentImage.id)
          .map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="small Images"
              width={335}
              height={100}
              className="rounded-md min-w-24 max-w-96 hover:scale-110 duration-300 cursor-pointer"
            />
          ))}
      </div>
    </article>
  );
};

export default Gallery;
