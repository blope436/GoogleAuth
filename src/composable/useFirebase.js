import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "firebaseConfig";

export const firebaseapp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseapp);

export const db = getFirestore();