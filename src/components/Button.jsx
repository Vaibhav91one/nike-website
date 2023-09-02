export const Button = ({ label, iconURL, borderColor, backgroundColor, textColor, fullWidth }) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:scale-105 transition-all
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && 'w-full'}}`}
  >
    {label}

    {iconURL && (
      <img
        src={iconURL}
        alt='arrow right icon'
        className='ml-2 rounded-full bg-white w-5 h-5'
      />
    )}
  </button>
  )
}

