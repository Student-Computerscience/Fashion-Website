
import Blogs from "./Components/Blogs"
import Category from "./Components/Category"
import Collection from "./Components/Collection"
import Feature from "./Components/Feature"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <Feature/>
      <Collection/>
      <Blogs/>
      <Footer/>
    </main>
  )
}

export default App
