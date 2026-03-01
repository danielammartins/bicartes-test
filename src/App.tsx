import './App.css'
import Banner from './components/banner'
import Bicartes from './components/bicartes'
import Footer from './components/footer'
import Menu from './components/menu'
import Programacao from './components/programacao'

function App() {

  return (
   <div>
      <Menu /> 
      <Banner />
      <Bicartes></Bicartes>
      <Programacao />
      <Footer></Footer>
   </div>
  )
}

export default App
