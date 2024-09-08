import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container flex items-center justify-between py-4 text-white">
        <h2 className="text-2xl ">Logo</h2>

        <ul className="items-center gap-8 hidden sm:flex">
          <li>Home</li>
          <li>Pages</li>
          <li>Portfoliyo</li>
          <li>Blog</li>
          <li>Shop</li>
        </ul>

        <IoMenuSharp className="text-2xl sm:hidden"/>
      </div>
    </div>
  )
}

export default Navbar
