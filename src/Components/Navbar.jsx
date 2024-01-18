import React from 'react'
import NavLogo from '../assets/navLogo.svg'
import Ham from '../assets/ham.svg'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

function Navbar() {

  const { isLoggedIn , logout } = useAuth(); 
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


  const handleLogout = async() => {
    try{
        await signOut(auth);
        logout();
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userId');
    }catch(error){
        console.log(error);
    }
  };

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
  return (
    <>
   
    <div className='h-[12vh] bg-primary flex justify-between items-center text-white w-full md:p-8 pr-4 pl-2'>
      <div className='flex justify-start items-center'>
        <a href="/">
        <img src={NavLogo} alt="" />
        </a>
      </div>
      <div className='md:flex gap-[4vw] items-center hidden'>
        <a href="/">Home</a>
        {role === 'Mentor' ? (
          <>
          <a href="/Profile">Create Profile</a>
          <a href="/room-code">Create Meeting</a>
          </>
      ) : (
        <>
        <a href="/">Find a Mentor</a>
        <a href="/MentorRegister">Become a Mentor</a>
        </>
      )}
        
        {isLoggedIn ? (
          <a onClick={handleLogout} className='py-2 px-4 bg-secondary rounded-3xl cursor-pointer '>Logout</a>
        ):(
          <div className="md:flex gap-4 ">
          <a href="/SignIn" className='py-2 px-5 rounded-3xl border-[2px] border-secondary'>Log In</a>
          <a href="/MenteeRegister" className='py-2 px-4 bg-secondary rounded-3xl'>Register</a>
        </div>
        )}
        
      </div>
      <div className='md:hidden'>
       <button onClick={toggleDropdown}>
       <img src={Ham} className='h-[30px]' alt="" />
       </button>
      </div>

    </div>
    {isDropdownOpen && (
    <div className='w-full h-[88vh] bg-primary flex flex-col gap-6 pt-8'>
          <div>
            <a href="/" className='text-[18px] text-white pl-2'>
              Home
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div>
            <a href="/MentorRegister" className='text-[18px] text-white pl-2'>
              Find a mentor
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div>
            <a href="/" className='text-[18px] text-white pl-2'>
              Become a mentor
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          {isLoggedIn ? (
            <div className='self-center pt-8'> 
          
            <a onClick={handleLogout} className='py-2 px-4 bg-secondary rounded-3xl text-[18px] text-white'>Logout</a>
           
          </div>
          ) : (
            <>
            <div>
            <a href="/SignIn" className='text-[18px] text-white pl-2'>
              Log In
            </a>
            <hr className="absolute left-2 right-2 border-white lg:hidden my-2" />
          </div>
          <div className='self-center pt-8'> 
          
            <a href="/MenteeRegister" className='py-2 px-4 bg-secondary rounded-3xl text-[18px] text-white'>Register</a>
           
          </div>
            </>
          )}
    </div>
    )}
    
</>
    
  )
}

export default Navbar
              
              
              

