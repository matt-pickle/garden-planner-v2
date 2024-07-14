import { StyleSheet, Dimensions } from "react-native"
import { lightFont, cream, darkGreen } from "./style-variables.js"

export default function createStyleSheet() {
  const screenHeight = Dimensions.get('window').height

  return StyleSheet.create({
    listContainer: {
      maxHeight: screenHeight - 60,
      paddingHorizontal: 5
    },

    list: {
      maxWidth: 600,
      width: "100%",
      alignSelf: "center"
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
    },

    spacer: {
      height: 50
    }
  })
}