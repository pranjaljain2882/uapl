import React from "react";
import "./whyUs.css"; 

const GradientBox = () => {
  const text1 = "Why us ?";
  const text2 = "Over 12 Years of experience in handling, Transport and Storage of Fine Art"; // Define the next text here
  const text3 = "UAPL was the first company in india dedicatedly providing services such as Fine Art Logistics,";
  const text4 = "Handling, Packing & Crating and Transportation with international standards.";
  return (
    <div className="gradient-box">
      <p className="text">{text1}</p>
      <p className="text2">{text2}</p>
      <p className="text3">{text3}</p>
      <p className="text3">{text4}</p>
    </div>
  );
};

export default GradientBox;
