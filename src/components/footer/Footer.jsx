import { footerTexts, footerTextForMobile } from "./footerText";
import FooterHelperComponent from "./FooterHelperComponent";
import FooterHelperComponentForMobile from "./FooterHelperComponentForMobile";

// const rowOneText = [...footerTexts[0], ...footerTexts[1]]
// console.log("rowOneText", rowOneText)
// // const rowTwoText = []

function Footer() {
  return (
    <footer className="h-auto flex justify-center w-full bg-cardbg pt-5 pb-10">
      <div className="px-5 w-full flex justify-center flex-col max-w-[1050px]">
        <p className="text-balance text-xs w-full">
          * Available for Qualified Purchasers only. Qualified Purchasers
          receive an Apple Gift Card when they purchase an Eligible Product at a
          Qualifying Location through September 30, 2024. Gift card values may
          vary by Eligible Product. Only one Apple Gift Card per Eligible
          Product per Qualified Purchaser. Offer subject to availability. While
          supplies last. Qualified Purchasers shall receive a discount equal to
          the value of the Apple Gift Card off the price of the Eligible
          Product, but will be charged for all items in their cart, including
          the Apple Gift Card. Important notice regarding the checkout receipt
          and monthly statement for Apple Card Monthly Installments (ACMI)
          purchases with this promotion: Qualified Purchasers selecting ACMI (a
          0% APR payment option available only in the U.S.) as payment type at
          checkout shall receive a discount equal to the value of the Apple Gift
          Card off the price of the Eligible Product. This will result in one
          ACMI installment plan over 12 months for the Eligible Product
          discounted by the instant credit, and a second ACMI installment plan
          over 12 months for the full price of the Apple Gift Card.
        </p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <div class="hidden pt-5 md:grid grid-cols-5 gap-4 w-full text-xs">
          {footerTexts.map((text, index) => (
            <div key={index} className="w-full ">
              <FooterHelperComponent text={text} />
            </div>
          ))}
        </div>

         {/* Mobile View */}
         <div className="md:hidden">
          {footerTextForMobile.map((text, index) => (
            <div key={index} className="w-full">
              <FooterHelperComponentForMobile text={text} />
            </div>
          ))}
        </div>

        <hr class="h-px my-8 bg-gray-200 border-0" />
        <div className="h-[24px] flex items-center ">
          <p className="text-xs">
            Copyright © 2024 Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
