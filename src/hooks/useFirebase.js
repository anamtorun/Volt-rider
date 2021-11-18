import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged , updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});
     const auth = getAuth();

     const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
     }

     const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
     }

     const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('https://thawing-fortress-96942.herokuapp.com/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }

     const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
     }
     

     useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        } else {
          setUser({});
        }
      });
     }, [])


     return {
         user,
         registerUser,
         loginUser,
         logOut
     }

}

export default useFirebase;