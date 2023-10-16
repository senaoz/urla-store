import React from "react";

const Section = ({
  children,
  className,
  backgroundColor,
  sectionClassName,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  sectionClassName?: string;
  backgroundColor?: string;
}) => {
  return (
    <section className={`${sectionClassName} ${backgroundColor}`}>
      <div className={`custom-container ${className}`} {...props}>
        {children}
      </div>
    </section>
  );
};

export default Section;
