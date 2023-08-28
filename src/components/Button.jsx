export const Button = ({label, iconURL}) => {
  return (
   <button className="flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none font-montserrat bg-coral-red rounded-full text-white border-coral-red">
      {label}

      <img src={iconURL} alt="arrow icon right" className="ml-2 rounded-full w-5 h-5"/>
   </button>
  )
}

