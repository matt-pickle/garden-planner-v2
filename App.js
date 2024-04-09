import { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { onAuthStateChanged } from "firebase/auth"
import { auth, getUserData } from "./firebase/firebase"
import Login from "./components/Login"
import Main from "./components/Main"
import styles from "./styles/AppStyles.js"

export default function App() {
  const [user, setUser] = useState(auth.currentUser)
  const [userData, setUserData] = useState()
  const [screen, setScreen] = useState("Login")
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userObj) => {
      if (userObj) {
        setUser(userObj)
        setUserData(await getUserData(userObj.uid))
        setScreen("Main")
        console.log("logged in as " + userObj.uid)
      } else {
        setScreen("Login")
        console.log("logged out")
      }
    })
    return unsubscribe
  },[])

  let displayedScreen = null
  switch (screen) {
    case "Login":
      displayedScreen = <Login />
      break;
    case "Main":
      displayedScreen = <Main user={user} userData={userData} />
      break;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto"/>
      <SafeAreaView style={styles.container}>
        {displayedScreen}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
