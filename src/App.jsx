import { Route,Routes } from 'react-router-dom'
import { Header } from './Layout/Header/Header'
import { Home } from './Pages/Home/Home'
import { Footer } from './Layout/Footer/Footer'

export const App = () => {


  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
     
    </ Routes>
      <Header/>
      <Footer/>
      
    </>
  )
}


