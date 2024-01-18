import Navbar from "./Navbar";
import SignInclipart from "../assets/Mentor.png"
import line from "../assets/line.png"
import Google from "../assets/googleLogo.svg"
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function MentorRegister() {
    
    const userCollectionRef = collection(db, "users");
    const navigate = useNavigate();

    const {login} = useAuth();
    
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user,
            [name] : value
        })
    }

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password
              );

              localStorage.setItem('userEmail', user.email);
              localStorage.setItem('userName', user.displayName);
              localStorage.setItem('userRole', 'Mentor');
              localStorage.setItem('userId', auth?.currentUser?.uid);
      
              await addDoc(userCollectionRef,{
                email: user.email,
                userName: user.userName,
                role: "Mentor",
                userId: auth?.currentUser?.uid,
              })

              login();
              navigate("/");
      
              console.log('User registered successfully:', userCredential.user);
            
        } catch (error) {
            console.log(error);
        }
        
    }

    const signInWithGoogle = async()=>{
        try {
            const result = await signInWithPopup(auth, googleProvider);

            const user = result.user;

            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userName', user.displayName);
            localStorage.setItem('userRole', 'Mentor');
            localStorage.setItem('userId', user.uid);

            await addDoc(userCollectionRef, {
                email: user.email,
                userName: user.displayName, 
                role: 'Mentor',
                userId: user.uid,
            });

            login();
            console.log(user);

            navigate("/");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        < >
            <Navbar/>
            
            <div className="dark:bg-primary h-[87vh] w-[100%] flex justify-around font-playfair">
            <div className="dark:bg-primary h-[87.9vh] w-[100%] flex justify-around font-playfair">
                <div className="w-[50vw] h-[100%] lg:flex  justify-center hidden">
                {/* <img className="drop-shadow-2xl w-[90%] relative left-16 bottom-16" src={SignInclipart} alt="" /> */}
                <img className="drop-shadow-2xl w-[90%] h-[80%] relative  " src={SignInclipart} alt="" />

                </div>
                <div className="lg:w-[50vw] md:w-[60vw] sm:w-[75vw] w-[95vw] flex flex-col  pt-2  items-center justify-center">
                <div className="dark:text-white text-[25px] " > Create a Mentor Account </div>
                    <div className="rounded-[35px] bg-tertiary sm:w-[70%] w-[100%] h-[68vh] flex flex-col gap-1 p-8">
                        <form onSubmit={handleSubmit}>
                        <div className="">                            
                        <div className="pl-1 pb-2">Name</div>
                        <input className="rounded-lg h-[45px] w-[100%]" type="text" name="userName" onChange={handleInput} />
                        </div>

                        <div className="">                            
                        <div className="pl-1 pb-2">Email</div>
                        <input className="rounded-lg h-[45px] w-[100%]" type="text" name="email" onChange={handleInput} />
                        </div>
                        
                        <div>
                        <div className="pl-1 pb-2">Password</div>
                        <input className="h-[45px] w-[100%]  rounded-lg " type="text" name="password" onChange={handleInput} />
                        </div>
                        <button className=" ml-[37%] drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] px-4 py-3 w-[120px] bg-secondary text-white  rounded-3xl  self-center mt-4" >
                           Register
                        </button>
                        </form>
                        <img className=" drop-shadow-2xl " src={line} alt="" />
                        <button onClick={signInWithGoogle} className=" flex justify-center gap-4 rounded-3xl border-[2px] border-black items-center bg-white drop-shadow-2xl w-[80%] self-center p-2" >
                            <img className="h-[32px]" src={Google} alt="Google" />
                            <p className="">Register with Google</p>
                        </button>
                    </div>
                    <div className=" w-[80%] flex flex-col items-center  gap-1 pt-2">
                        <div className="dark:text-white  text-[18px] ">Already Have Account ?</div>
                        
                        <a href="/SignIn">
                            <button className=" flex    border-secondary drop-shadow-[0_5px_5px_rgba(58,163,159,0.8)] bg-secondary  rounded-3xl border-[2px] px-3 py-2 text-white " >
                                <p className=" pr-4 pl-4 ">SignIn</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default  MentorRegister