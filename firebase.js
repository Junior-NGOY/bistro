/* 
import { initializeApp} from "firebase/app";
//import {getAuth} from "firebase/auth";
import {getFirestore,} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqIiDXeywJvqCEcq-bsqx4RNRAR8UQHqw",
  authDomain: "bistro-d8cd7.firebaseapp.com",
  projectId: "bistro-d8cd7",
  storageBucket: "bistro-d8cd7.appspot.com",
  messagingSenderId: "725500541312",
  appId: "1:725500541312:web:9ba944ff3046024e1a6965"
};


const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);

const db = getFirestore();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
//enableMultiTabIndexedDbPersistence(db)
export {auth,db}; */


import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqIiDXeywJvqCEcq-bsqx4RNRAR8UQHqw",
    authDomain: "bistro-d8cd7.firebaseapp.com",
    projectId: "bistro-d8cd7",
    storageBucket: "bistro-d8cd7.appspot.com",
    messagingSenderId: "725500541312",
    appId: "1:725500541312:web:9ba944ff3046024e1a6965"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();
 
//await db.enableMultiTabIndexedDbPersistence();
export {auth, db};