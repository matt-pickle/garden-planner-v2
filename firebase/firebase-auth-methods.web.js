import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "./firebase"

export function logIn() {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
}

export function logOut() {
  signOut(auth)
}