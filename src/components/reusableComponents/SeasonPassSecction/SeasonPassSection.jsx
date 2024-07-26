import "./SeasonPassSection.css"
import img1 from '../../../assets/hero-1.png'
import { Button } from "../buttons/Button"

export function SeasonPassSection () {
    return(
       
        <div className="hero_section backGroundImage_1 overflow-hidden  w-full h-[580px]">
          

            
            <div className="flex justify-center items-center w-full h-[580px]" >
            {/* <img className="w-full h-full text-center content-center   object-cover" src={img1} alt="hero_1_img" /> */}
            </div>


            <div className="relative z-10 bottom-[9rem] w-full flex justify-center">
                <div className="max-w-[300px] flex justify-center gap-3 flex-col">

                
                <p className="text-[18px] text-center">Lorem ipsum dolor sit <br /> Esse nostrum repellat vero minus. ?</p>
          <Button 
          bgColor='bg-grey'
          textColor='white'
          text='Learn More'
          />

            </div>
            </div>
         
        </div>
    )
}