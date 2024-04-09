import { useState } from "react"
import { Text, View, Pressable } from "react-native"
import { logOut } from "../firebase/firebase-auth-methods"
import styles from "../styles/MainStyles.js"

export default function Main({ user, userData }) {
  return (
    <View>
      <Text>{user.displayName}</Text>
      <Pressable onPress={logOut}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  )
}