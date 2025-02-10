import React, { useRef, useState } from "react";
import Section from "../utils/Section";
import Heading from "../utils/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
const testimonials = [
  {
    name: "Tony",
    text: "Very good. Arrived when they said they would and did the job with the minimum of fuss, leaving it nice and tidy afterwards.Very pleased",
  },
  {
    name: "Daniel",
    text: "Alban and his team are friendly, clear in communication and punctual. We are happy with the quality of the work and how they started on time and finished when they said they would.",
  },
  {
    name: "Shane S",
    text: "Highly Recommended. A+++ Very Professional and Holnfull!",
  },
  {
    name: "Leonardo",
    text: "I recently had the pleasure of engaging with Eagle Eyes Built for a roofing project, and I must say, the experience was nothing short of exceptional. From the outset, their professionalism shone through. They were prompt in their responses and displayed exemplary communication skills which made the entire process seamless. I'm immensely pleased with the outcome and would highly recommend Eagle Eyes Built to anyone in need of roofing services.",
  },
];

const Testimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="testimonials" ariaLabel="Testimonials" className="space-y-16">
      <Heading level={2}>Testimonial</Heading>
      <div className="md:grid grid-cols-3 items-center">
        {/* Dynamic Client Name */}
        <p className="text-xl font-medium text-white md:mb-0 mb-4">
          {testimonials[activeIndex]?.name}
        </p>
        <div className="md:col-span-2 relative">
          {/* Swiper for Testimonials */}
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            loop
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <p className="md:text-xl md:font-light pb-16">
                  {testimonial.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Dynamic Progress Bar */}
          <div className="w-[calc(100%-4rem)] absolute bottom-0 left-8 right-0 h-0.5 bg-black/25">
            <div
              className="h-1 -mt-px bg-black rounded-full"
              style={{
                width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                transition: "width 0.5s ease-in-out",
              }}
            ></div>
          </div>
          {/* Navigation Buttons */}
          <button
            className="h-8 flex justify-center items-center hover:bg-black/75 transition aspect-square border rounded-full absolute -bottom-4 -right-0 text-xl"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoIosArrowRoundForward />
          </button>
          <button
            className="h-8 flex justify-center items-center hover:bg-black/75 transition aspect-square border rounded-full absolute -bottom-4 left-0 text-xl"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoIosArrowRoundBack />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
