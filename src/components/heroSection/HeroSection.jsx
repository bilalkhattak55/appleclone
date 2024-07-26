import { IpadProSection } from "../reusableComponents/ipadProSection/IpadProSection";
import { SeasonPassSection } from "../reusableComponents/SeasonPassSecction/SeasonPassSection";
import img1 from "../../assets/hero_ipadpro_1.jpg";
import img2 from "../../assets/hero_iphone_family.jpg";
import card1Img from '../../assets/card_1.jpg'
import card2Img from '../../assets/card_2.jpg'
import card3Img from '../../assets/card_3.jpg'
import card4Img from '../../assets/card_4.jpg'
import { Card } from "../reusableComponents/card/Card";
import Footer from "../footer/Footer";

export function HeroSection() {
  return (
    <section className="h-auto w-full ">

      <SeasonPassSection />
      <IpadProSection
        btnOneText={"Learn More"}
        btnTwoText={"Buy"}
        h2text="Ipad Pro"
        image={img1}
      />
      <IpadProSection
        btnOneText={"Learn More"}
        btnTwoText={"Shop Iphone"}
        h2text="Iphone"
        image={img2}
      />
      


    {/* Cards Start*/}
      <div className="2md:px-4 mt-4 gap-4 cards_section_1 flex flex-col 2md:flex-row w-full">
      <Card image={card1Img} clsName={'backGroundImage_11'} position={'top-3'} />
      <Card image={card2Img} clsName={'backGroundImage_2'} position={'top-3'} />
      </div>
      <div className="2md:px-4 mt-4 gap-4 cards_section_2 flex flex-col 2md:flex-row w-full">
      <Card image={card3Img} clsName={'backGroundImage_3'} position={'top-3'} />
      <Card image={card4Img} clsName={'backGroundImage_4'} position={'top-[20.5rem]'} />
      </div>
      <div className="h-4 w-full bg-white">

      </div>
    {/* Cards End*/}


    
    </section>
  );
}
