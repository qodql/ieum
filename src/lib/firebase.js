import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
import { getMessaging, getToken } from "firebase/messaging";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);



// let messaging;

// if(typeof window !=="undefined" && typeof window.navigator !== 'undefined'){
//   messaging = getMessaging();
// }

// export const getClientToken = async ()=> {
//   const key = 'BMwd0K0uf6qVvqBM_ufyOJjAL4HnDPr82TYwhj9HIDYGSJeHL2MVTGezhF8cUDMeMbYyQ9GjCgVMZRcGH3GYB1M';

//   const currentToken = await getToken(messaging, { vapidKey: key }) 
  
//   return currentToken;
// }

