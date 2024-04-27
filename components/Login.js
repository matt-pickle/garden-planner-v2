import { Text, View, Pressable, Image } from "react-native"
import { logIn } from "../firebase/firebase-auth-methods"
import { FontAwesome5 } from '@expo/vector-icons';
import createStyleSheet from "../styles/LoginStyles.js"

export default function Login() {
  const styles = createStyleSheet()

  return (
    <View style={styles.loginScreen}>
      <Image style={styles.loginScreenLogo} source={require("../assets/logo.png")} />
      <Pressable style={styles.loginButton} onPress={logIn}>
        <FontAwesome5 name="google" style={styles.googleIcon} />
        <Text style={styles.loginButtonText}>
          Sign In With Google
        </Text>
      </Pressable>
    </View>
  )
}