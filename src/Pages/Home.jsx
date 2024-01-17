import React from "react"
import Navbar from "../Components/Navbar"
import Section1 from '../Section/Section1'
import Section2 from '../Section/Section2'
import Section4 from '../Section/Section4'
import MenteeNavbar from "../Mentee/MenteeNavbar"

function Home(){
    return (
        <>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section4/>
        <MenteeNavbar/>
        </>
    )
}
export default Home;