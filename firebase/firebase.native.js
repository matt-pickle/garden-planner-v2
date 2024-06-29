import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase-keys"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db = getFirestore(firebaseApp)

export async function createDocument(userId) {
  await setDoc(doc(db, "users", userId), {
    zone: "",
    gardens: []
  })
  .catch(error => console.log(error))
}

export async function getUserData(userId) {
  const userData = await getDoc(doc(db, "users", userId))
  .catch(error => console.log(error))

  if (userData.data()) {
    return userData.data()
  } else {
    await createDocument(userId)
    return await getUserData(userId)
  }
}

export async function updateUserData(userId, userData) {
  await setDoc(doc(db, "users", userId), userData, { merge: true })
  .catch(error => console.log(error))
}