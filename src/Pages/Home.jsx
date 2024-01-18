import React, {useState, useEffect} from "react"
import { useAuth } from "../context/AuthContext"
import Navbar from "../Components/Navbar"
import Section1 from '../Section/Section1'
import Section2 from '../Section/Section2'
import Section4 from '../Section/Section4'
import Section3 from "../Section/Section3"
import Workshop from "../Mentee/Workshop"
import RoomCode from "./RoomCode"
import Payment from "./Payment"

function Home(){

    const { isLoggedIn} = useAuth(); 
  const [role, setRole] = useState('');

  useEffect(() => {
    const checkUserRole = () => {
      if (isLoggedIn) {
        const storedRole = localStorage.getItem('userRole');
        setRole(storedRole);
      }
    };

    checkUserRole();
  }, [isLoggedIn]);
    return (
        <>
        <Navbar/>
        <Section1/>
        <Section2/>
        {role==="Mentee" && <Section3/> }
        <Section4/>
        <Workshop/>
        <RoomCode/>
        <Payment/>
        </>
    )
}
export default Home;