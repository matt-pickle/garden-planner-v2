import { StyleSheet } from "react-native"
import { screenHeight, lightFont, cream, darkGreen } from "./style-variables.js"

const styles = StyleSheet.create({
  listContainer: {
    maxHeight: screenHeight - 70,
    paddingHorizontal: 5
  },

  list: {
    flexDirection: "column"
  },

  newGardenButton: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cream,
    width: 60,
    height: 60,
    borderRadius: 100,
    margin: 15,
    elevation: 5
  },

  newGardenButtonText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 70,
    lineHeight: 70
  }
})

export default styles