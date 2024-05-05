import { StyleSheet } from "react-native"
import { lightFont, cream, darkGreen } from "./style-variables.js"

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: cream,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
    elevation: 5
  },

  listItemTitleButton: {
    flexGrow: 1,
    padding: 10,
  },

  listItemText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    marginLeft: 5
  },

  listItemDeleteButton: {
    justifyContent: "center",
    padding: 5
  },

  listItemIcon: {
    color: darkGreen,
    fontSize: 24,
    marginRight: 5,
  }
})

export default styles