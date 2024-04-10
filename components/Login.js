import { View } from "react-native"
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { logIn } from "../firebase/firebase-auth-methods"
import styles from "../styles/LoginStyles.js"

export default function Login() {
  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        onPress={logIn}
      />
    </View>
  )
}