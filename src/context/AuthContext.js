import React, { useContext, useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { doc, getDoc } from '@firebase/firestore';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [userData, setUserData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [Uid, setUid] = useState([]);

    const signUp = async (email, password) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        Uid.push(res.user.uid)
        console.log(Uid);
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // setLoading(false);
        })
        return () => {
            unsub();
        }
    }, []);
    useEffect(() => {
        const getData = async () => {
          try {
            if (currentUser) {
              const docRef = doc(db, "users", currentUser?.uid);
              const docSnap = await getDoc(docRef);
    
              if (docSnap.exists()) {
                setUserData(docSnap.data());
              } else {
                console.log("No such document!");
              }
            }
          } catch (err) {
            console.log(err);
          }
        };
    
        getData();
      }, []);

      console.log(userData);

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
        Uid,
        userData


    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;