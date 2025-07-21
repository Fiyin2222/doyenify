import './App.css'
import Header from "./components/Header"
import Content from './components/Content'
import Footer from './components/Footer'
import WorkingMan from "./assets/Working Man.png"
import WorkingHands from "./assets/Working Hands.png"
import Tools from "./assets/Tools.png"
function App() {

  return (
    <>
        <Header />
        <Content 
          bgColor="#f1f0fc"
          img={WorkingMan}
          heading="RESPONSIVE AND CREATIVE"
          title="Web Design"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi nibh phasellus morbi. Sit interdum faucibus urna, aliquam risus erat nunc, nibh. Odio vitae"
        />
        <Content 
          bgColor="#f6fdff"
          img={Tools}
          heading="CREATIVE AND SMART"
          title="Graphic Design"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi nibh phasellus morbi. Sit interdum faucibus urna, aliquam risus erat nunc, nibh. Odio vitae"
        />
        <Content 
          bgColor="#f1f0fc"
          img={WorkingHands}
          heading="GOOD AND NICE"
          title="Video Editing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis nisi nibh phasellus morbi. Sit interdum faucibus urna, aliquam risus erat nunc, nibh. Odio vitae"
        />
        <Footer />
    </>
  )
}

export default App
