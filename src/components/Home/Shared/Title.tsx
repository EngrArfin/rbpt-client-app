import React from "react";

interface TitleProps {
  heading: string;
}

const Title: React.FC<TitleProps> = ({ heading }) => {
  return (
    <div className="max-auto text-center md:w-4/12 my-4">
      <h2 className="text-2xl uppercase border py-4">{heading}</h2>
    </div>
  );
};

export default Title;
