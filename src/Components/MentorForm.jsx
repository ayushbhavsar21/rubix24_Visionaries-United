import React,{ useState} from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import { useNavigate } from "react-router-dom";
import { storage } from '../config/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navbar from './Navbar';

function MentorForm() {

    const [mentor, setMentor] = useState({
        name:"",
        email: "",
        phone: "",
        price: "",
        bio: "",
        qualification: "",
        availability: "",
        domain: "",
    })

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const mentorCollectionRef = collection(db, "Mentors");

    const handleInput = (e)=>{
      const name = e.target.name;
      const value = e.target.value;

      setMentor({
        ...mentor,
        [name]: value
      })
    }
    const handleImageChange = (e) => {
      if (e.target.files.length > 0) {
        setImage(e.target.files.item(0));
      }
    };

    const handleSubmit = async(e) =>{
      e.preventDefault();
      try {

          // console.log(auth?.currentUser?.uid)
          // await addDoc(mentorCollectionRef,{
          //   name: mentor.name,
          //   email: mentor.email,
          //   phone: mentor.phone,
          //   price: mentor.price,
          //   bio: mentor.bio,
          //   qualification: mentor.qualification,
          //   availability: mentor.availability,
          //   domain: mentor.domain,
          //   userId: auth?.currentUser?.uid,
          // })

          // navigate("/");
  
          // console.log('Mentor Profile Created successfully:', userCredential.user);
          if (!auth.currentUser) {
            console.error('User not authenticated');
            return;
          }
    
          console.log('Starting form submission...');
    
          let imageUrl = ''; // Initialize imageUrl here
    
          if (image) {
            try {
              const storageRef = getStorage();
              const imageRef = ref(
                storageRef,
                `images/${auth.currentUser.uid}/${image.name}`
              );
    
              console.log('Uploading image...');
    
              await uploadBytes(imageRef, image);
    
              console.log('Image uploaded successfully.');
    
              imageUrl = await getDownloadURL(imageRef);
    
              console.log('Image URL:', imageUrl);
    
              alert('Image uploaded successfully!');
            } catch (imageError) {
              console.error('Error uploading image:', imageError);
              alert('Error uploading image. Please try again.');
              return; // Return early if there's an error with image upload
            }
          }
    
          console.log('Adding mentor data to Firestore...');
    
          const mentorData = {
            name: mentor.name,
            email: mentor.email,
            phone: mentor.phone,
            price: mentor.price,
            bio: mentor.bio,
            qualification: mentor.qualification,
            availability: mentor.availability,
            domain: mentor.domain,
            imageUrl: imageUrl,
            userId: auth.currentUser.uid,
          };
    
          // Add mentor data to Firestore
          const docRef = await addDoc(mentorCollectionRef, mentorData);
    
          console.log(
            'Mentor Profile Created successfully. Document ID:',
            docRef.id
          );
    
          navigate('/');
        
    } catch (error) {
        console.log(error);
    }
    }

  return (
    <>
      <Navbar/>


<form onSubmit={handleSubmit} className="p-8 h-[88vh] bg-primary font-playfair">
<div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="name" id="names" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  value={mentor.name} onChange={handleInput}/>
        <label for="names" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="email" id="emails" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={mentor.email} onChange={handleInput}/>
        <label for="emails" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="phone" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={mentor.phone} onChange={handleInput}/>
        <label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="price" id="price" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={mentor.price} onChange={handleInput}/>
        <label for="price" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price / Class</label>
    </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="bio" name="bio" id="bio" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={mentor.bio} onChange={handleInput} required />
      <label for="bio" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Biodata</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="qualification" id="Quality" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={mentor.qualification} onChange={handleInput} required />
      <label for="Quality" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qualifications</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="availability" id="floating-availability" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={mentor.availability} onChange={handleInput} />
      <label for="floating-availability" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Availibility</label>
  </div>
  <div>
  <label for="Domains" class="block mb-2 text-sm font-medium text-gray-500">Select your Domain</label>
  <select id="Domains" name="domain" value={mentor.domain} onChange={handleInput}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

    <option>DSA</option>
    <option>Development</option>
    <option>AI/ML</option>
    <option>Blockchain</option>
  </select>
  </div>
 
 {/*<div className='mt-4'>
 <label class="block mb-2 text-sm font-medium text-gray-500" for="user_avatar">Upload file</label>
  <input class="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
  
 </div>
  */}
   <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-500" htmlFor="user_avatar">
          Upload Image
        </label>
        <input
          onChange={handleImageChange}
          className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2"
          type="file"
          accept="image/*"
          id="user_avatar"
        />
      </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">Submit</button>
</form>
</>

  )
}

export default MentorForm
