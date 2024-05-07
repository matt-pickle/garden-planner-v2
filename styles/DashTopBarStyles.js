import { StyleSheet } from "react-native"
import { lightFont, cream, darkGreen } from "./style-variables.js"

const styles = StyleSheet.create({
  dashTopBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: darkGreen,
    height: 45,
    paddingHorizontal: 15,
    elevation: 5
  },

  dashTopBarInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 580,
    width: "100%",
    marginHorizontal: "auto"
  },

  dashTabContainer: {
    flexDirection: "row"
  },

  dashTabBtn: {
    marginRight: 30
  },

  selectedTab: {
    borderColor: cream,
    borderBottomWidth: 1,
  },

  tabText: {
    color: cream,
    fontFamily: lightFont,
    fontSize: 16,
    paddingBottom: 2
  },

  dashIcon: {
    color: cream,
    fontSize: 20
  }
})

export default styles