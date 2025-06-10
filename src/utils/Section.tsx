import React, { ReactNode } from "react";
import { twMerge } from "tw-merge"; // Import twMerge

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  as?: keyof JSX.IntrinsicElements; // allows you to change the element type (e.g., 'section', 'article')
}

const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  ariaLabel,
  as = "section", // default to 'section' if no element type is provided
}) => {
  // Merge the provided className with the default 'section' class, ensuring no conflicts
  const mergedClassName = twMerge(
    `px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24 lg:px-16 ${className}`
  ); // Combine both class names into one string

  // Element to be rendered based on 'as' prop (could be 'section', 'article', etc.)
  const Tag = as;

  return (
    <Tag
      id={id}
      className={mergedClassName} // Use the merged class names
      aria-label={ariaLabel} // Improve accessibility
    >
      {children}
    </Tag>
  );
};

export default React.memo(Section);
