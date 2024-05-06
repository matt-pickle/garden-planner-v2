import { useState, useEffect } from "react"
import { Dimensions } from "react-native"
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, Solway_700Bold, Solway_400Regular } from "@expo-google-fonts/solway"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { onAuthStateChanged } from "firebase/auth"
import { auth, getUserData } from "./firebase/firebase"
import Loading from "./components/Loading"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import styles from "./styles/AppStyles.js"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [user, setUser] = useState(auth.currentUser)
  const [userData, setUserData] = useState()
  const [screen, setScreen] = useState("Loading")
  const [orientation, setOrientation] = useState("")
  
  useEffect(() => {
    const authListener = onAuthStateChanged(auth, async (userObj) => {
      setScreen("Loading")
      if (userObj) {
        setUser(userObj)
        setUserData(await getUserData(userObj.uid))
        setScreen("Dashboard")
        console.log("logged in as " + userObj.uid)
      } else {
        setScreen("Login")
        console.log("logged out")
      }
    })
    return authListener
  },[])

  useEffect(() => {
    const dimensionsListener = Dimensions.addEventListener("change", () => {
      const dim = Dimensions.get("screen")
      if (dim.width >= dim.height) {
        setOrientation("landscape")
      } else {
        setOrientation("portrait")
      }
    })
    return () => dimensionsListener.remove()
  }, [])

  let displayedScreen = null
  switch (screen) {
    case "Loading":
      displayedScreen = <Loading />
      break;
    case "Login":
      displayedScreen = <Login />
      break;
    case "Dashboard":
      displayedScreen = <Dashboard user={user} userData={userData} setScreen={setScreen} orientation={orientation} />
      break;
  }

  const [fontsLoaded] = useFonts({
    Solway_400Regular,
    Solway_700Bold
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light"/>
      <SafeAreaView style={styles.container}>
        {displayedScreen}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}