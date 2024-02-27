import './App.css'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import About from "./components/about/About"

function App() {

  return (
    <>
      <Header />
      <Navbar/>
      <About />
      <div id='projects'></div>
      <div id='contact'></div>
    </>
  )
}

export default App
