
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
// import SignIn from './Components/SignIn'
// import MentorRegister from './Components/ṂentorRegister'
// import MenteeRegister from './Components/MenteeRegister'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
    
    {/* <SignIn/> */}
    {/* <MenteeRegister/> */}
    {/* <MentorRegister/> */}
    </Routes>
    </>
  )
}

export default App
