
import React, { useState } from 'react';

const FooterHelperComponentForMobile = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4">
      <div 
        className="flex items-center cursor-pointer pb-2"
        onClick={toggleOpen}
      >
        <span className={`font-bold capitalize ${isOpen ? 'text-blue-600' : 'text-grey'}`}>
          {Array.isArray(text) ? text[0] : text}
        </span>
        
        <span className="ml-auto text-grey">
          {isOpen ? (
            <span className="material-symbols-outlined">expand_less</span>
          ) : (
            <span className="material-symbols-outlined">expand_more</span>
          )}
        </span>
      </div>
      {isOpen && (
        <ul className="ml-4">
          {Array.isArray(text) && text.slice(1).map((subItem, index) => (
            <li key={index} className="text-grey">
              {subItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterHelperComponentForMobile;

