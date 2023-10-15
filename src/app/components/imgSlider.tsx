"use client";

import { useState, useRef, useEffect } from "react";

export default function ImageSlider({ images }: { images: string[] }) {
  const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) {
      return;
    }

    // @ts-ignore
    const slides = sliderCurrent.querySelectorAll("div");
    const slidesArray = Array.from(slides);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slidesArray.indexOf(entry.target);
            setCurrentSlideIndex(index);
          }
        });
      },
      {
        root: sliderCurrent,
        threshold: 0.5,
      },
    );
    slides.forEach((slide: any) => observer.observe(slide));

    return () => slides.forEach((slide: any) => observer.unobserve(slide));
  }, []);

  return (
    <div className="w-full">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex w-full snap-x snap-mandatory flex-row overflow-x-scroll"
        style={{
          paddingBottom: "15px",
          clipPath: "inset(0 0 15px 0)",
        }}
      >
        {images.map((url) => {
          return (
            <div key={url} className="w-full flex-shrink-0 snap-start">
              <img src={url} />
            </div>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <div className="relative h-0.5 w-full bg-gray-300">
        <div
          className="absolute left-0 top-0 h-0.5 bg-gray-500"
          style={{
            width: `${indicatorWidthPercent}%`,
            left: `${indicatorWidthPercent * currentSlideIndex}%`,
            transition: "left 150ms ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
