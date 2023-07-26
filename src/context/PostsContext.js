import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
// import { useAuth } from './AuthContext';

const PostsContext = createContext();

export function usePosts() {
  return useContext(PostsContext);
}

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  // const {userData} = useAuth()
  // console.log(userData);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts")),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setPosts(list);
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
    posts,
  };

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
}