import React from "react";
import { useState, useEffect } from "react";
import Testimonial from "../components/Testimonial";
import useWindowSize from "../hooks/useWindowSize";
const initialTestimonials = [
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    imgSrc: "./assets/images/image-john.jpg",
    text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    visible: true,
  },
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    imgSrc: "./assets/images/image-tanya.jpg",
    text: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    visible: false,
  },
];
export default function Main() {
  const [currentindex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const { width } = useWindowSize();
  const bgStyle = {
    backgroundImage: `url('./assets/images/pattern-curve.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: width > 768 ? "50% 25%" : "70% 10%",
    backgroundPosition: width > 768 ? "0% 100%" : "0% 100%",
  };
  useEffect(() => {
    const nextTestimonials = testimonials.map((testimonial, i) => ({
      ...testimonial,
      visible: i === currentindex,
    }));
    setTestimonials(nextTestimonials);
  }, [currentindex]);
  function handleNext() {
    if (currentindex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }
  function handlePrev() {
    if (currentindex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  }
  return (
    <main className="py-6 h-full relative" style={bgStyle}>
      <div className="container mx-auto h-full px-6 flex flex-col gap-14 items-center md:flex-row  md:px-0 md:gap-0">
        <Testimonial
          testimonial={testimonials[currentindex]}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </main>
  );
}
