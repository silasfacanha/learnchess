import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
function Alumni() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleIndexForwards = () => {
    setCurrentIndex(
      currentIndex === students.length - 1 ? 0 : currentIndex + 1
    );
  };
  const handleIndexBackwards = () => {
    setCurrentIndex(
      currentIndex === 0 ? students.length - 1 : currentIndex - 1
    );
  };
  const students = [
    "https://www.mastercard.com/news/media/azehxknk/fredjonny_magnuscarlsen_banner_1920x700.jpg?rnd=132766318521700000",
    "https://cdn.britannica.com/55/11855-050-82C30B02/Bobby-Fischer-1971.jpg",
    "https://softwarechess.com/images/post/garry-earnings/banner.jpg",
    "https://skrasnov.com/wp-content/uploads/2017/06/anatoly-karpov-2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Jos%C3%A9_Ra%C3%BAl_Capablanca_young.jpg/800px-Jos%C3%A9_Ra%C3%BAl_Capablanca_young.jpg",
    "https://en.chessbase.com/Portals/all/thumbs/068/68914.jpeg",
  ];
  return (
    <div className="h-[100vh] items-center">
      <p className="text-l p-4 flex justify-center text-2xl font-serif font-semibold">
        Check out some of the best students that went through our courses.
      </p>
      <div className="flex justify-center items-center  h-[80%]">
        <BsChevronCompactLeft onClick={handleIndexBackwards} size={40} />
        <div className="rounded-2xl  flex items-center duration-500  h-[80%] w-[80%] ">
          <div
            style={{ backgroundImage: `url(${students[currentIndex]})` }}
            className="h-[90%] w-[100%] rounded-2xl bg-center bg-cover  duration-500"
          ></div>
        </div>

        <BsChevronCompactRight onClick={handleIndexForwards} size={40} />
      </div>
    </div>
  );
}

export default Alumni;
