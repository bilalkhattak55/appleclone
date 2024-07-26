export function Button({bgColor, textColor, text, textSize}) {

    return(
        <>
        <button type="button" className={`text-${textColor} ${bgColor}  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full ${textSize ? textSize : 'text-sm'} px-5 py-2.5 text-center me-2 mb-2 `}>{text}</button>
        </>
    )
}