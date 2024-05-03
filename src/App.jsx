import Banner from "./components/banner/Banner"
import Customer from "./components/customer/Customer"
import Footer from "./components/footer/Footer"
import Nav from "./components/navbar/Nav"
import News from "./components/news/News"
import Protfolio from "./components/protfolio/Protfolio"
import Serv from "./components/servic/Serv"
import Team from "./components/team/Team"



function App() {

  return (
    <>
      <Nav/>
      <Banner/>
      <Serv/>
      <Protfolio/>
      <Team/>
      <Customer/>
      <News/>
      <Footer/>

    </>
  )
}

export default App
