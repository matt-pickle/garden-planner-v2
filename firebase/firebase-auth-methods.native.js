import { GoogleAuthProvider, signInWithCredential, signOut } from "firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { auth } from "./firebase"

GoogleSignin.configure({ webClientId: "568982109492-inrg6098g9jg5crfcjclnbalphaqg18p.apps.googleusercontent.com" })

export function logIn() {
  GoogleSignin.signIn()
  .then(result => {
    const idToken = result.idToken
    const credential = GoogleAuthProvider.credential(idToken)
    signInWithCredential(auth, credential)
  })
}

export function logOut() {
  GoogleSignin.signOut()
  signOut(auth)
}