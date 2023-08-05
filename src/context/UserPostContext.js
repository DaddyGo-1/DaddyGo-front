import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const UserPostsContext = createContext();

export function useUserPosts() {
  return useContext(UserPostsContext);
}

export function UserPostsProvider({ children }) {
  const [userPosts, setUserPosts] = useState([]);
  const {currentUser, Uid} = useAuth()
  console.log(currentUser?.uid);

  useEffect(() => {
    const q = query(collection(db, 'posts'), where("creator_id", "==", 'giAvGUBi0JhoiPBxZ4U2sTxrQRp1'|| ""));
    const unsub = onSnapshot(q, (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUserPosts(list);
        console.log('successful');
      },
      (err) => {
        console.error('Error fetching posts:', err);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const value = {
    userPosts,
  };

  return (
    <UserPostsContext.Provider value={value}>
      {children}
    </UserPostsContext.Provider>
  );
}