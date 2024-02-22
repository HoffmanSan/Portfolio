import './App.css'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"

function App() {

  return (
    <>
      <Header />
      <Navbar/>
      <div id='about'></div>
      <div id='projects'></div>
      <div id='contact'></div>
    </>
  )
}

export default App
