

const Feature = () => {
  return (
    <div className="container pt-[180px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src="public/image/makeup.jpg" alt="makeup" />
        </div>
        <div>
          <h2 className="uppercase font-extrabold text-5xl">Makeup</h2>
          <p className="ml-8 italic text-gray-500 text-xl py-4">Lorem ipsum dolor sit amet consectetur.</p>

          <div className="bg-black h-[4px] w-[100px] mt-2 md-4"></div>

          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem velit, iste corrupti perferendis fuga vero. Ipsam dicta, accusantium quidem dolor a recusandae consequuntur suscipit qui exercitationem ullam iure necessitatibus eos, dolorum cumque ducimus ipsa. Nisi dolorum, odit veritatis exercitationem ab pariatur unde nam asperiores, reprehenderit, totam placeat atque voluptatibus in.
          </p>

          <button className="text-gray-500 border border-black py-2 px-16 mt-16 hover:bg-black hover:text-white">Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Feature
