import { StyleSheet } from "react-native"
import { cream } from "./style-variables.js"

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginScreenLogo: {
    height: 210,
    width: 300,
    resizeMode: "contain",
    marginBottom: 100
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

export default styles