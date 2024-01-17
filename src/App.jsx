
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import SignIn from './Components/SignIn'
// import SignIn from './Components/SignIn'
import MentorRegister from './Components/ṂentorRegister'
import MenteeRegister from './Components/MenteeRegister'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/MenteeRegister' element={<MenteeRegister/>}/>
      <Route path='/MentorRegister' element={<MentorRegister/>}/>
    </Routes>
    </>
  )
}

export default App
