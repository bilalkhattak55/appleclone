import { Button } from "../buttons/Button"
import "./card.css"

export function Card({clsName, position}) {
    return(
        <div className={`${clsName}  w-full 2md:basis-[50%] h-[500px]`}>
            <div className="relative flex w-full h-auto justify-center">

            
        <div className={`max-w-[300px] absolute ${position ? position : 'top-0'} w-[200px] flex justify-center gap-2 flex-col`}>
          <div className="text-grey flex flex-col justify-center ">
            <h2 className="text-[26px]   text-center md:text-[32px] font-bold tracking-wide">
              {'h2text'}
            </h2>
            <p className="text-[18px] text-center tracking-wide">
              Lorem ipsum repellat vero minus.
            </p>
          </div>

          <div className="text-center flex gap-4 justify-center">
          <Button bgColor="bg-blue" textColor="white" text={'Learn More'} textSize='text-[12px]' />
          <Button bgColor="bg-grey" textColor="white" text={'Text'} textSize='text-[12px]' />
          </div>
        </div>
        </div>
        </div>
    )
}