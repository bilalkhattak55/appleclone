// import img from "../../../assets/hero_ipadpro_1.jpg";
// import { Button } from "../buttons/Button";

// export function IpadProSection() {
//   return (
//     <div className="hero_section bg-black overflow-hidden mt-2  w-full h-[580px]">
//       <div className="relative z-[1] top-[3rem] w-full flex justify-center">
//         <div className="max-w-[300px] flex justify-center gap-3 flex-col">
//           <div className="text-white flex flex-col justify-center ">
//             <h2 className="text-[34px]  text-center md:text-[44px] font-black">
//               Ipad Pro
//             </h2>
//             <p className="text-[18px] text-center">
//               Lorem ipsum repellat vero minus.
//             </p>
//           </div>

//           <div className="text-center">
//             <Button bgColor="blue" textColor="white" text="Learn More" />
//             <Button bgColor="grey" textColor="white" text="Buy" />
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center items-center w-full h-full">
//         <img
//           className="w-full h-full text-center content-center   object-cover"
//           src={img}
//           alt="hero_1_img"
//         />
//       </div>
//     </div>
//   );
// }


import img from "../../../assets/hero_ipadpro_1.jpg";
import { Button } from "../buttons/Button";

export function IpadProSection({btnOneText, btnTwoText, h2text, image}) {
  return (
    <div className="hero_section bg-black overflow-hidden mt-2  w-full h-[400px]">
      <div className="relative z-[1] top-[3rem] w-full flex justify-center">
        <div className="max-w-[300px] flex justify-center gap-3 flex-col">
          <div className="text-white flex flex-col justify-center ">
            <h2 className="text-[34px]  text-center md:text-[44px] font-black">
              {h2text}
            </h2>
            <p className="text-[18px] text-center">
              Lorem ipsum repellat vero minus.
            </p>
          </div>

          <div className="text-center">
          <Button bgColor="bg-blue" textColor="white" text={btnOneText} />
          <Button bgColor="bg-grey" textColor="white" text={btnTwoText} />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-full">
        <img
          className="w-full h-full text-center content-center relative top-[-90px]  object-cover"
          src={image}
          alt="heroImage"
        />
      </div>
    </div>
  );
}

