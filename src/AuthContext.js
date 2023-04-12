import { createContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userRef, setUserRef] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (user) {
        const currentUserRef = db.collection("Users").doc(user.uid);
        setUserRef(currentUserRef);

        currentUserRef.get().then((doc) => {
          if (doc.exists) {
            setUserData({ id: doc.id, ...doc.data() });
          } else {
            console.log("No such document!");
          }
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, userData, setUserData, userRef, setUserRef }}>
      {children}
    </AuthContext.Provider>
  );
};

// // import { auth, db } from "@/firebase";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { auth, db } from "./firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export default function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const userInfo = useRef();

//   function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logout() {
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   });

//   const value = {
//     currentUser,
//     signup,
//     login,
//     logout,
//     userInfo,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
