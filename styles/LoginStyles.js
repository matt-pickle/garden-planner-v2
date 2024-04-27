import { StyleSheet, Dimensions } from "react-native"
import { cream } from "./style-variables.js"

export default function createStyleSheet() {
  const dim = Dimensions.get("screen")
  let logoMarginBottom = 100
  if (dim.width > dim.height) {
    logoMarginBottom = 25
  }

  return StyleSheet.create({
    loginScreen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    loginScreenLogo: {
      height: 210,
      width: 300,
      resizeMode: "contain",
      marginBottom: logoMarginBottom
    },
    loginButton: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: cream,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    loginButtonText: {
      color: cream,
      fontSize: 16
    },
    googleIcon: {
      color: cream,
      fontSize: 24,
      marginRight: 15
    }
  })
}