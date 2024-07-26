
import { gsap } from "gsap";
import { useEffect, useMemo, useState } from "react";

export default function ExpandHeader(props) {
  const [render, setRender] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setScroll(window.scrollY);
    const handleMouseLeave = () => {
      disappear();
      setRender(false);
    };
    const handleScroll = () => {
      if (window.scrollY > scroll) {
        disappear();
        setRender(false);
      }
      setScroll(window.scrollY);
    };
    
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const renderItems = () => {
    const elements = document.getElementsByClassName("info");
    if (elements) {
      Array.from(elements).forEach((el) => {
        let delay = 0.1;
        Array.from(el.childNodes).forEach((child) => {
          gsap.fromTo(
            child,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, delay: delay }
          );
          delay += 0.03;
        });
      });
    }
  };

  const disappear = () => {
    const elements = document.getElementsByClassName("info");
    if (elements) {
      Array.from(elements).forEach((el) => {
        let delay = 0;
        const children = Array.from(el.childNodes);
        for (let i = children.length - 1; i >= 0; i--) {
          gsap.fromTo(children[i], { opacity: 1 }, { opacity: 0, duration: 0.3, delay: delay });
          delay += 0.03;
          if (i === 1) {
            gsap.to("#main", {
              height: 0,
              duration: 0.5,
              delay: delay,
              onComplete: () => {
                gsap.set("#blur", { height: 0 });
              },
            });
          }
        }
      });
    }
  };

  useEffect(() => {
    if (props.animate) {
      disappear();
      setRender(false);
    } else if (props.hover && !render) {
      gsap.set("#blur", { height: "100vh" });
      gsap.fromTo(
        "#main",
        { height: 0 },
        {
          height: "auto",
          duration: 0.5,
          onComplete: () => {
            gsap.set("#main", {
              height: document.getElementById("main")?.offsetHeight,
            });
          },
        }
      );
      renderItems();
      setRender(true);
    } else if (render && props.hover) {
      gsap.set("#blur", { height: "100vh" });
      gsap.to("#main", {
        height: "auto",
        duration: 0.3,
        onComplete: () => {
          gsap.set("#main", {
            height: document.getElementById("main")?.offsetHeight,
          });
        },
      });
      renderItems();
    }
  }, [props, render]);

  return (
    <div>
      <div
        id="main"
        className={`h-0 z-40 relative w-full xl:px-[5%]   overflow-hidden font-xl bg-cardbg`}
      >
        {props.prop === "Store" && (
          <div className="flex-row flex w-auto overflow-hidden py-10 ml-[201px]">
            <ul className="text-xl mr-12 info">
              <p className="text-sm pb-4">Shop</p>
              <p className="mb-1 font-semibold">Shop the latest</p>
              <p className="mb-1 font-semibold">Mac</p>
              <p className="mb-1 font-semibold">iPad</p>
              <p className="mb-1 font-semibold">iPhone</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">Accessories</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">Quick links</p>
              <p className="mb-1 font-semibold">Quick</p>
              <p className="mb-1 font-semibold">Quick</p>
              <p className="mb-1 font-semibold">Quick</p>
              <p className="mb-1 font-semibold">Quick</p>
            </ul>
            <ul className="text-sm info">
              <p className="pb-4">Shop Special Stores</p>
              <p className="mb-1 font-semibold">Special</p>
              <p className="mb-1 font-semibold">Special</p>
              <p className="mb-1 font-semibold">Special</p>
              <p className="mb-1 font-semibold">Special</p>
              <p className="mb-1 font-semibold">Special</p>
            </ul>
          </div>
        )}
        {props.prop == "Mac" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Mac</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="font-semibold text-sm mt-4 mb-2">Explorec</p>
              <p className="font-semibold text-sm">Explore</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="mb-1 pb-4">Shop Mac</p>
              <p className="mb-1 font-semibold">Shop Mac</p>
              <p className="mb-1 font-semibold">AShop Mac</p>
              <p className="mb-1 font-semibold">Shop Mac</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">More from Mac</p>
              <p className="mb-1 font-semibold">More from Mact</p>
              <p className="mb-1 font-semibold">More from Mac</p>
              <p className="mb-1 font-semibold">More from Mac</p>
              <p className="mb-1 font-semibold">More from Mac</p>
              <p className="mb-1 font-semibold">More from Mac</p>
              <p className="mb-1 font-semibold">More from Mac</p>
              <p className="mb-1 font-semibold">More from Mac</p>
              <p className="mb-1 font-semibold">More from Mac</p>
            </ul>
          </div>
        )}
        {props.prop == "iPad" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore iPad</p>
              <p className="mb-1 font-semibold">Explore All iPad</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="mb-1 font-semibold">Explore</p>
              <p className="font-semibold text-sm mt-4 mb-2">Explore</p>
              <p className="font-semibold text-sm">Explore</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">Shop iPad</p>
              <p className="mb-1 font-semibold">Shop iPad</p>
              <p className="mb-1 font-semibold">iShop iPad</p>
              <p className="mb-1 font-semibold">iShop iPad</p>
              <p className="mb-1 font-semibold">iShop iPad</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">More from iPad</p>
              <p className="mb-1 font-semibold">More</p>
              <p className="mb-1 font-semibold">More</p>
              <p className="mb-1 font-semibold">More</p>
              <p className="mb-1 font-semibold">More</p>
              <p className="mb-1 font-semibold">More</p>
              <p className="mb-1 font-semibold">More</p>
            </ul>
          </div>
        )}
        {props.prop == "iPhone" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore iPhone</p>
              <p className="mb-1 font-semibold">Explore iPhone</p>
              <p className="mb-1 font-semibold">Explore iPhone</p>
              <p className="mb-1 font-semibold">Explore iPhone</p>
              <p className="mb-1 font-semibold">Explore iPhone</p>
              <p className="mb-1 font-semibold">Explore iPhone</p>
              <p className="mb-1 font-semibold">Explore iPhone</p>
              <p className="font-semibold text-sm mt-4 mb-2">Explore iPhone</p>
              <p className="font-semibold text-sm">Explore iPhone</p>
            </ul>
            <ul className="text-sm mr-12 info">
              <p className="pb-4">Shop iPhone</p>
              <p className="mb-1 font-semibold">Shop iPhone</p>
              <p className="mb-1 font-semibold">Shop iPhone</p>
              <p className="mb-1 font-semibold">Shop iPhone</p>
              <p className="mb-1 font-semibold">Shop iPhone</p>
              <p className="mb-1 font-semibold">Shop iPhone</p>
            </ul>
            <ul className="text-sm mr-12 info">
              <p className="pb-4">More From iPhone</p>
              <p className="mb-1 font-semibold">More From iPhonet</p>
              <p className="mb-1 font-semibold">More From iPhone</p>
              <p className="mb-1 font-semibold">More From iPhone</p>
              <p className="mb-1 font-semibold">More From iPhone</p>
              <p className="mb-1 font-semibold">More From iPhone</p>
              <p className="mb-1 font-semibold">More From iPhone</p>
            </ul>
          </div>
        )}
        {props.prop == "Watch" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="font-semibold text-sm mt-4 mb-2">Apple Watch</p>
              <p className="font-semibold text-sm">Apple Watch</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Shop Watch</p>
              <p className="mb-1 font-semibold">Shop Watch</p>
              <p className="mb-1 font-semibold">Shop Watch</p>
              <p className="mb-1 font-semibold">Shop Watch</p>
              <p className="mb-1 font-semibold">Shop Watch</p>
              <p className="mb-1 font-semibold">Shop Watch</p>
              <p className="mb-1 font-semibold">Shop Watch</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">More from Watch</p>
              <p className="mb-1 font-semibold">from Watch</p>
              <p className="mb-1 font-semibold">from Watch</p>
              <p className="mb-1 font-semibold">from Watch</p>
            </ul>
          </div>
        )}
        {props.prop == "Airpods" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore AirPods</p>
              <p className="mb-1 font-semibold">EExplore AirPods</p>
              <p className="mb-1 font-semibold">Explore AirPods</p>
              <p className="mb-1 font-semibold">Explore AirPods</p>
              <p className="mb-1 font-semibold">Explore AirPods</p>
              <p className="mb-1 font-semibold">Explore AirPods</p>
              <p className="text-sm font-semibold mt-4 mb-2">Explore AirPodsh</p>
              <p className="text-sm font-semibold">Explore AirPods</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Shop AirPods</p>
              <p className="mb-1 font-semibold">Shop AirPods</p>
              <p className="mb-1 font-semibold">Shop AirPods</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Shop AirPods</p>
              <p className="mb-1 font-semibold">Shop AirPods</p>
              <p className="mb-1 font-semibold">Shop AirPods</p>
            </ul>
          </div>
        )}
        {props.prop == "TV & Home" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore TV & Home</p>
              <p className="mb-1 font-semibold">Explore TV & Home</p>
              <p className="mb-1 font-semibold">Explore TV & Home</p>
              <p className="mb-1 font-semibold">Explore TV & Home</p>
              <p className="mb-1 font-semibold">Explore TV & Home</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Shop TV & Home</p>
              <p className="mb-1 font-semibold">Shop TV & Home</p>
              <p className="mb-1 font-semibold">Shop TV & Home</p>
              <p className="mb-1 font-semibold">Shop TV & Home</p>
              <p className="mb-1 font-semibold">Shop TV & Home</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">More from TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
              <p className="mb-1 font-semibold">TV & Home</p>
            </ul>
          </div>
        )}
        {props.prop == "Entertainment" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainment</p>
              <p className="mb-1 font-semibold">Entertainments</p>
              <p className="mb-1 font-semibold">Entertainment</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Support</p>
              <p className="mb-1 font-semibold">Support</p>
              <p className="mb-1 font-semibold">Support</p>
            </ul>
          </div>
        )}
        {props.prop == "Accessories" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Shop Accessories</p>
              <p className="mb-1 font-semibold">Accessories</p>
              <p className="mb-1 font-semibold">Accessories</p>
              <p className="mb-1 font-semibold">Accessories</p>
              <p className="mb-1 font-semibold">Accessories</p>
              <p className="mb-1 font-semibold">Accessories</p>
              <p className="mb-1 font-semibold">Accessories</p>
              <p className="mb-1 font-semibold">Accessories</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Explore Accessores</p>
              <p className="mb-1 font-semibold">Explore Accessores</p>
              <p className="mb-1 font-semibold">Explore Accessores</p>
              <p className="mb-1 font-semibold">Explore Accessores</p>
            </ul>
          </div>
        )}
        {props.prop == "Support" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Support</p>
              <p className="mb-1 font-semibold">Explore Support</p>
              <p className="mb-1 font-semibold">Explore Support</p>
              <p className="mb-1 font-semibold">Explore Support</p>
              <p className="mb-1 font-semibold">Explore Support</p>
              <p className="mb-1 font-semibold">Explore Support</p>
              <p className="mb-1 font-semibold">Explore Support</p>
              <p className="mb-1 font-semibold">Explore Support</p>
              <p className="text-sm mt-4 font-semibold pb-4">Explore Support</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Get Help</p>
              <p className="mb-1 font-semibold">Get Help</p>
              <p className="mb-1 font-semibold">Get Help</p>
              <p className="mb-1 font-semibold">Get Help</p>
             
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Helpful Topics</p>
              <p className="mb-1 font-semibold">Helpful Topics</p>
              <p className="mb-1 font-semibold">Helpful Topics</p>
             
            </ul>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => {
          disappear();
        }}
        id="blur"
        className="h-0 w-full z-40 backdrop-blur-sm absolute overflow-visible"
      ></div>
    </div>
  );
}
