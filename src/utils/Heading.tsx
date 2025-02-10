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
  const baseStyles = "!text-white";

  // Define heading sizes for different levels, just an example of size scaling
  const headingSize = {
    1: "text-[calc(1.75rem+4vw)] leading-[calc(1.75rem+4vw)]",
    2: "text-[calc(1.5rem+3vw)] leading-[calc(1.5rem+3vw)]",
    3: "lg:text-2xl md:text-xl text-lg",
    4: "text-4xl",
    5: "text-3xl",
    6: "text-2xl",
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
