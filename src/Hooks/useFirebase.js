import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.initialize';


initializeAuthentication();

const useFirebase = () => {
 const [user,setUser] = useState({});
 const auth = getAuth();

 const signInUsingGoogle = () =>{
   const googleProvider = new GoogleAuthProvider();
     return signInWithPopup(auth, googleProvider)
  
}

const CreateEmailAndPassword = (formData) =>{
  console.log('fromData',formData)
  return createUserWithEmailAndPassword(auth,formData?.email,formData?.password)
}

const SignInWithUserEmailAndPassword =({email,password}) =>{
   return signInWithEmailAndPassword(auth,email,password);
}







//observe user state change
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth,user=>{
         if(user){
            setUser(user)
         }
         else{
            setUser({})
         }
      });
      return () => unsubscribed;
   },[])

   const logOut = () =>{
      signOut(auth)
      .then(()=>{});
   }


   return {

      user,
      signInUsingGoogle,
      logOut,
      SignInWithUserEmailAndPassword,
      CreateEmailAndPassword 


   }
      
    
       
   
};

export default useFirebase;