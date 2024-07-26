
import React from 'react';

export default function FooterHelperComponent({ text }) {
  return (
    <ul className="">
      {text.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <div key={index} className="mb-4">
              <li className="font-bold capitalize text-grey pb-2 mt-2">{item[0]}</li>
              <ul className="">
                {item.slice(1).map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            </div>
          );
        } else {
          return (
            <li key={index} className={`${index === 0 ? "font-bold capitalize pb-2" : ""} text-grey`}>
              {item}
            </li>
          );
        }
      })}
     
    </ul>
  );
}

