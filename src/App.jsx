import Hero from "./components/Hero/Hero"
import Counter from "./components/counter/Counter"
import Navbar from "./components/navbar/Navbar"
import NavbarBanner from "./components/navbar/NavbarBanner"
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs"



function App() {
 

  return (
    <>
    <main className="overflow-x-hidden">
     <Navbar/>
     <NavbarBanner/>
     <Hero/>
     <Counter/>
     <WhyChooseUs/>
     </main>
    </>
  )
}

export default App
