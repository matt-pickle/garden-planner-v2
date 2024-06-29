import { StyleSheet } from "react-native"
import { lightFont, cream, darkGreen } from "./style-variables.js"

const styles = StyleSheet.create({
  listItemContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginHorizontal: "auto"
  },

  listItemInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: cream,
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
    elevation: 5
  },

  listItemTitleButton: {
    flexGrow: 1,
    padding: 15,
  },

  listItemText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    marginLeft: 5
  },

  listItemDeleteButton: {
    justifyContent: "center",
    padding: 10
  },

  listItemIcon: {
    color: darkGreen,
    fontSize: 24,
    marginRight: 5,
  }
})

export default styles