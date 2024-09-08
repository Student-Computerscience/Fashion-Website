

const Hero = () => {
  return (
    <div className="bg-[url(public/image/hero.jpg)] h-[calc(100vh-64px)] bg-cover bg-fixed bg-right sm:bg-top">
      <div className="container flex text-white flex-col justify-center h-full">
          <div>
            <p className="text-xl">Welcome</p>
            <h2 className="uppercase text-6xl font-bold">We Live Fashion</h2>
            <p className="text-xl ml-16 pt-2">Create Something beautiful & timeless </p>

            <div className="h-[4px] w-16 bg-white mt-4"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="border border-white px-16 py-2">View More</button>
              <button className="border border-white bg-white text-black px-16 py-2">Buy Now</button>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Hero
