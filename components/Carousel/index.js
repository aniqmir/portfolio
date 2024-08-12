import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (slideIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsAnimating(false), 500); // Adjust the timing to match your transition duration
  };

  return (
    <div className='relative mx-auto'>
      {/* Slides Container */}

      {/* Dots */}
      <div className='flex sm:hidden justify-center pb-5'>
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-2 w-4 h-4 bg-white rounded-full ${
              index === currentIndex
                ? 'bg-teal-600 dark:bg-teal:400'
                : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>

      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className='flex-shrink-0 w-full'>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className='hidden sm:flex justify-center pt-5'>
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-2 w-4 h-4 bg-white rounded-full ${
              index === currentIndex
                ? 'bg-teal-600 dark:bg-teal:400'
                : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
