import { StyleSheet } from "react-native"
import { lightFont, boldFont, cream, darkGreen } from "./style-variables.js"

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 10
  },

  schedTextContainer: {
    flexDirection: "row",
    backgroundColor: darkGreen,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    elevation: 5
  },

  schedLeftColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: cream,
    paddingRight: 10
  },

  schedDate: {
    color: cream,
    fontFamily: boldFont,
    fontSize: 14,
    marginBottom: 5
  },

  schedIconContainer: {
    width: 40,
    height: 40
  },

  schedText: {
    flexShrink: 1,
    color: cream,
    fontFamily: lightFont,
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 10
  }
})

export default styles