interface propsType {
  topHeading: string
  mainHeading: string
  subHeading: string
}

const SectionTitle = ({topHeading, mainHeading, subHeading}: propsType) => {
  return (
    <div className="text-center space-y-3">
      <p className="text-gray-400 italic">{topHeading}</p>
      <h2 className="font-extrabold text-5xl">{mainHeading}</h2>
      <p className="text-gray-500 text-xl italic">{subHeading}</p>
      <div className="bg-black h-[5px] w-[100px] mx-auto"></div>
    </div>
  )
}

export default SectionTitle
