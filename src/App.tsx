import './App.css'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"

function App() {

  return (
    <>
      <Header />
      <Navbar/>
      <About />
      <Projects/>
      <div id='contact'></div>
    </>
  )
}

export default App
