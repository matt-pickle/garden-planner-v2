import { View, ActivityIndicator } from "react-native"
import styles from "../styles/LoadingStyles.js"

export default function Loading() {
  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator 
        style={styles.activityIndicator}
        size="large"
        color="rgb(200,200,210)"
      />
    </View>
  )
}