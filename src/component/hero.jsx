"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/hero1.png", "/hero2.jpg", "/hero3.png"];

const texts = [
  "Build Your Career",
  "Learn New Skills",
  "Get Certified Today",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Typing Effect Reset on Slide Change
  useEffect(() => {
    setText("");
    setCharIndex(0);
  }, [index]);

  // Typing Animation
  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[100vh] pt-20 overflow-hidden">

      {/* IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={images[index]}
          alt="hero"
          fill
          priority
          className="object-cover transition-opacity duration-1000"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 md:p-10 max-w-3xl w-full">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-gray-200 mb-6 text-sm sm:text-base md:text-lg">
            Explore top courses, verify certificates, and unlock your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full w-full sm:w-auto">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;