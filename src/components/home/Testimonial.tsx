import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import { FaStar } from "react-icons/fa";

const clients = [
  { id: 1, name: "Client 1", logo: "/partnerLogo.png" },
  { id: 2, name: "Client 2", logo: "/partnerLogo-1.png" },
  { id: 3, name: "Client 3", logo: "/partnerLogo-2.png" },
  { id: 4, name: "Client 4", logo: "/partnerLogo-3.png" },
  { id: 5, name: "Client 5", logo: "/partnerLogo-4.png" },
  { id: 6, name: "Client 6", logo: "/partnerLogo-5.png" },
  { id: 7, name: "Client 7", logo: "/partnerLogo-6.png" },
  { id: 8, name: "Client 8", logo: "/partnerLogo-7.png" },
];

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    text: "I recently had the pleasure of working with [Agency Name], and I couldn’t be more impressed with their professionalism, creativity, and results-driven approach.",
    name: "John Garet",
    position: "Managing Director",
    avatar: "/Avatar.png",
  },
  {
    id: 2,
    rating: 5.0,
    text: "From the very first meeting, their team took the time to truly understand our business goals, target audience, and brand identity.",
    name: "Jane Doe",
    position: "CEO",
    avatar: "/Avatar.png",
  },
  {
    id: 3,
    rating: 5.0,
    text: "Their innovative strategies and execution exceeded our expectations, resulting in a significant boost to our brand's visibility and customer engagement.",
    name: "Michael Lee",
    position: "Product Manager",
    avatar: "/Avatar.png",
  },
  {
    id: 4,
    rating: 5.0,
    text: "I recently had the pleasure of working with [Agency Name], and I couldn’t be more impressed with their professionalism, creativity, and results-driven approach.",
    name: "John Garet",
    position: "Managing Director",
    avatar: "/Avatar.png",
  },
  {
    id: 5,
    rating: 5.0,
    text: "From the very first meeting, their team took the time to truly understand our business goals, target audience, and brand identity.",
    name: "Jane Doe",
    position: "CEO",
    avatar: "/Avatar.png",
  },
  {
    id: 6,
    rating: 5.0,
    text: "Their innovative strategies and execution exceeded our expectations, resulting in a significant boost to our brand's visibility and customer engagement.",
    name: "Michael Lee",
    position: "Product Manager",
    avatar: "/Avatar.png",
  },
];

const Testimonial = () => {
  return (
    <Section
      id="testimonial"
      ariaLabel="Introduction section"
      className="!p-0 md:space-y-24 sm:space-y-16 space-y-8"
    >
      <div>
        <Heading
          level={2}
          className="px-4 pt-12 sm:px-8 sm:pt-16 md:px-12 md:pt-24 lg:px-16"
        >
          Our <span className="text-[#9C9C9C]">Clients</span>
        </Heading>
        <div className="mt-6">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={20}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            loop={true}
            freeMode={true}
            className="h-fit flex items-center"
          >
            {[...clients, ...clients].map((client, index) => (
              <SwiperSlide
                key={`${client.id}-${index}`}
                style={{ width: "160px", flexShrink: 0 }}
                className="flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain w-24 h-24"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="px-4 pb-12 sm:px-8 sm:pb-16 md:px-12 md:pb-24 lg:px-16 md:space-y-24 sm:space-y-16 space-y-8">
        <Heading level={2}>
          Success stories - <br /> from
          <span className="text-[#9C9C9C]"> our Customers</span>
        </Heading>
        <Swiper
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1 }, // Equivalent to `sm:1`
            768: { slidesPerView: 2 }, // Equivalent to `md:2`
            1024: { slidesPerView: 3 }, // Equivalent to `lg:3`
          }}
          className="h-fit"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-black text-white flex flex-col justify-between gap-8 md:p-8 p-4 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    <span className="text-white ml-3">
                      {testimonial.rating}
                    </span>
                  </div>
                  <p className="text-sm">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 aspect-square rounded-full">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p>{testimonial.name}</p>
                    <span className="text-[#9C9C9C]">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Testimonial;
