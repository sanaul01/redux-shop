import { useEffect, useState } from "react";
import initializeFirebase from "../Component/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, getIdToken, signOut,
    updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";


initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoding, setIsLoding] = useState(false);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const auth = getAuth();
    const registerUser = (email, password,name,location) =>{
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to database
            saveUser(email, name)
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });

            if(location.state?.from){
                navigate(location.state.from )
            }
            // history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message)
          })
          .finally(()=> setIsLoding(false));
    };

    const loginUser = (email, password, location) =>{
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(location.state?.from){
                navigate(location.state.from )
            }
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(()=> setIsLoding(false));
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken)
              })
            } else {
              setUser({});
            }
            setIsLoding(false)
          });
          return()=> unsubscribe;
    }, [auth]);

    useEffect(()=>{
        fetch(``)
        .then(res =>res.json())
        .then(data => setAdmin(data.admin))
      }, [user.email])
  
      const logOut = () =>{
          setIsLoding(true)
          signOut(auth).then(() => {
  
            }).catch((error) => {
  
            })
            .finally(()=> setIsLoding(false));
      };
  
      const saveUser = (email, displayName) =>{
        const user = {email, displayName}
        fetch('https://sleepy-chamber-69050.herokuapp.com/users', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then()
      }

    return {
        user,
        isLoding,
        admin,
        token,
        registerUser,
        loginUser,
        logOut,
        authError
    }
};

export default useFirebase;