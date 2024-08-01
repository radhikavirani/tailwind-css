import Card_slider from "@/componets/Card_slider"
import Chamicals from "@/componets/Chamicals"
import Drink from "@/componets/Drink"
import Food from "@/componets/Food"
import Footer from "@/componets/Footer"
import Fruits from "@/componets/Frults"
import Header from "@/componets/Header"
import Jams from "@/componets/Jams"
import Kid from "@/componets/Kid"
import Sidebar from "@/componets/Sidebar"
import Slider from "@/componets/Slider"
import Sweets from "@/componets/Sweets"
import Tea from "@/componets/Tea"

const App = () => {
  return (
    <div className='px-5'>
      <Header />
      <Sidebar />
      <Slider />
      <Card_slider />
      <Sweets />
      <Fruits />
      <Drink />
      <Tea />
      <Kid />
      <Jams />
      <Food />
      <Chamicals />
      <Footer />
    </div>
    
  )
}

export default App