import React,{useState, useEffect} from 'react'
import MenteeNavbar from './MenteeNavbar'
import { getDocs, collection , doc} from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import Workshopcard from './Workshopcard';
import MentorCard from './MentorCard';

function Dashboard() {

  const [mentorList, setMentorList] = useState([]);
  const [userList, setUserList] = useState([]);

  const userCollectionRef = collection(db, "users");

  const mentorCollectionRef = collection(db, "Mentors");

  useEffect(() => {
    const getMentorList = async () => {
      try {
        const data = await getDocs(mentorCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setMentorList(filteredData);
      } catch (err) {
        console.log(err);
      }
    }
    const getUserList = async ()=>{
        try{
            const data = await getDocs(userCollectionRef);
            const filteredData = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            setUserList(filteredData);
        }catch(err){
            console.log(err);
        }
    }
    getMentorList();
    getUserList();
  }, [])

    const currentUserId = auth?.currentUser?.uid;
    const foundDocument = userList.find((doc) => doc.userId === currentUserId);
    const foundMentorId = foundDocument ? foundDocument.MentorId : null;
    
    return (
        <div className=' dark:bg-primary h-[100vh] overflow-hidden ' >
            <MenteeNavbar />
            <div className="dark:bg-primary   flex flex-col   ">
                <div>
                    <h1 className='dark:text-white text-[36px] w-[90%] ml-9 pl-9 pb-1 mb-9 border-b-4 dark:border-white border-black ' >Mentors</h1>
                    <div className='w-[full] flex justify-center flex-col items-center ' > 
                    {mentorList.filter(mentor=>mentor.id===foundMentorId).map(item=>(
                        <MentorCard
                        key={item.id}
                        props={item}
                        />
                    ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard;
