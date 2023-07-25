import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase'; // Replace with the correct path to your firebase.js file

const PostsContext = createContext();

export function usePosts() {
  return useContext(PostsContext);
}

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

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