import { Text, View, Pressable } from "react-native"
import { logIn } from "../firebase/firebase-auth-methods"
import styles from "../styles/LoginStyles.js"

export default function Login() {
  return (
    <View>
      <Pressable onPress={logIn}>
        <Text>Log In</Text>
      </Pressable>
    </View>
  )
}