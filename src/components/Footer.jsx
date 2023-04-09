import React from "react";

export const Footer = () => {
  return (
    <div
      className="w-full bg-black text-white text-sm md:text-base p-3"
      id="contact"
    >
      <div className="flex justify-around">
        <ul>
          <li>FAQs</li>
          <li>Terms and Conditions</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Learn More</li>
        </ul>
        <ul>
          <li>Get Help</li>
          <li>Blog</li>
          <li>Copyright</li>
          <li>Awards</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </div>
  );
};
