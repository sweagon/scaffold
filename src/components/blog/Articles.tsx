import React from "react";
import { Link } from "react-router-dom";
import Section from "../../utils/Section";

// Category Filters
const categories = [
  "Latest",
  "SEO",
  "Marketing",
  "Development",
  "Design",
  "Business",
  "Tech",
  "AI",
];

// Dummy Blog Data (Replace with API data when needed)
const blogPosts = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `How to Check Website Traffic for Your Business`,
  category: "Marketing / SEO",
  image: "/path-to-image.jpg", // Replace with dynamic image URLs
  link: `/blog/${index + 1}`,
}));

const Articles = () => {
  return (
    <Section
      id="articles"
      ariaLabel="Blog Articles"
      className="md:space-y-24 sm:space-y-16 space-y-8"
    >
      {/* Category Filters */}
      <ul className="max-w-screen-lg mx-auto flex justify-center gap-2 font-bold flex-wrap">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-gray-200 py-1 px-4 rounded-full border border-black cursor-pointer hover:bg-gray-300 transition"
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Blog Grid */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {blogPosts.map(({ id, title, category, image, link }) => (
          <Link
            key={id}
            to={link}
            className="aspect-[2/3] p-4 flex items-end bg-black bg-cover bg-no-repeat rounded-2xl"
            style={{ backgroundImage: `url(${image})` }}
            aria-label={title}
          >
            <div className="p-4 bg-gray-700 bg-opacity-80 rounded-xl text-white">
              <span className="text-sm font-medium">{category}</span>
              <h4 className="text-lg font-semibold">{title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Articles;
