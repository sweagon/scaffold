import React, { ReactNode } from "react";
import { twMerge } from "tw-merge"; // Import twMerge for handling merged classnames

// Define types for the Heading component props
interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6; // Allow only h1 to h6 levels
  className?: string; // Optional className for custom styling
  id?: string; // Optional ID for referencing the heading
  as?: React.ElementType; // Allow overriding element type (for more flexibility)
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  className = "",
  id,
  as: Component = `h${level}`, // Default to the correct heading level (h1-h6)
}) => {
  // Define base styles for headings
  const baseStyles = "";

  const headingSize = {
    1: "font-bold text-[120px] xl:text-[96px] lg:text-[80px] md:text-[64px] sm:text-[48px] text-[36px] font-inter leading-[1.1]",
    2: "font-light text-[80px] xl:text-[72px] lg:text-[64px] md:text-[48px] sm:text-[36px] text-[28px] font-inter leading-[1.2]",
    3: "font-medium text-[36px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-inter leading-[1.3]",
    4: "font-medium text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-inter leading-[1.35]",
    5: "font-medium text-[24px] md:text-[20px] sm:text-[18px] text-[16px] font-inter leading-[1.4]",
    6: "font-bold text-[24px] md:text-[20px] sm:text-[18px] text-[16px] font-urbanist leading-[1.4]",
  };

  // Merge the base styles with level-specific size and any custom className passed
  const mergedClassName = twMerge(
    `${baseStyles} ${headingSize[level]} ${className}`
  );

  return (
    <Component className={mergedClassName} id={id}>
      {children}
    </Component>
  );
};

export default React.memo(Heading);
