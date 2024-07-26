import React, { useRef, useState } from "react";
import ExpandHeader from "../expandHeader/ExpandHeader";

export default function Header(props) {
  const [hover, setHover] = useState(false);
  const [item, setItem] = useState("");
  const [AnimateOut, setAnimateOut] = useState(false);
  const [mobileNav, setMobileNav] = useState();

  const ref = useRef();
  const navLinks = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Airpods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <>
      {mobileNav ? (
        <div className="w-full z-20 flex gap-4 flex-col h-screen fixed overflow-hidden bg-white px-5 py-10 ">
          <div className="w-full relative">
          <span
          onClick={() => setMobileNav(false)}
          className="material-symbols-outlined absolute right-[-12px] top-[-30px] cursor-pointer text-grey text-[22px] ">
                  close
          </span>
          </div>
         
          {navLinks.map((nav) => {
            return <p className="text-grey text-[20px] font-bold">{nav}</p>;
          })}
        </div>
      ) : (
        <div className={`w-full `}>
          {/* for small screen */}
          <div className="h-[44px]  bg-white fixed w-full">
            <div className="flex h-full  justify-between w-full items-center px-2">
              <img
                id="start"
                className="flex w-[16.6px] h-[18px] mx-4"
                src="/Apple_logo_black.png"
              />

              <div className="flex  gap-6">
                <span className="material-symbols-outlined cursor-pointer text-grey text-[22px] ">
                  search
                </span>
                <span className="material-symbols-outlined cursor-pointer text-grey text-[20px] ">
                  local_mall
                </span>
                <span
                  onClick={() => setMobileNav(true)}
                  className="material-symbols-outlined cursor-pointer text-grey text-[20px]"
                >
                  menu
                </span>
              </div>
            </div>
          </div>

          {/* for large screen */}
          <div className="hidden md:h-[44px] max-w-[1800px] z-50 bg-white md:block md:fixed md:w-full">
            <ul
              onMouseOverCapture={() => setAnimateOut(true)}
              className={`flex h-full md:text-xs items-center justify-center ${props.textColor}`}
            >
              <img
                id="start"
                className="flex w-[16.6px] h-[18px] mx-4 cursor-pointer"
                src="/Apple_logo_black.png"
              />

              {navLinks.map((menuItem) => (
                <p
                  key={menuItem}
                  onMouseOverCapture={() => {
                    setHover(true);
                    setAnimateOut(false);
                    setItem(menuItem);
                  }}
                  className="md:px-4 cursor-pointer "
                >
                  {menuItem}
                </p>
              ))}

              <div className="flex mx-4 gap-6">
                <span className="material-symbols-outlined cursor-pointer text-grey text-[22px] ">
                  search
                </span>
                <span className="material-symbols-outlined cursor-pointer text-grey text-[20px] ">
                  local_mall
                </span>
              </div>
            </ul>
            {hover && (
              <ExpandHeader
                background={props.background}
                textColor={props.textColor}
                hover={hover}
                setHover={setHover}
                prop={item}
                setItem={setItem}
                animate={AnimateOut}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
