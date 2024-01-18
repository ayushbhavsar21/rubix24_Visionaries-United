
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import SignIn from './Components/SignIn'
// import SignIn from './Components/SignIn'
import MentorRegister from './Components/ṂentorRegister'
import MenteeRegister from './Components/MenteeRegister'
import RoomCode from './Pages/RoomCode'
import RoomPage from './Pages/RoomPage'
import Notifications from './Pages/Notifications'
import Dashboard from './Mentee/Dashboard'
import Workshop from './Mentee/Workshop'
import MentorForm from './Components/MentorForm'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/MenteeRegister' element={<MenteeRegister/>}/>
      <Route path='/MentorRegister' element={<MentorRegister/>}/>
      <Route path='/room-code' element={<RoomCode/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>} />
      <Route path='/notifications-page' element={<Notifications/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Workshop' element={<Workshop/>}/>
      <Route path='/Profile' element={<MentorForm/>}/>
    </Routes>
    </>
  )
}

export default App
