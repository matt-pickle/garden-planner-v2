import { StyleSheet } from "react-native"
import { cream, darkGreen } from "./style-variables.js"

const styles = StyleSheet.create({
  dropdownContainer: {
    marginHorizontal: 10,
  },

  dropdownLabelContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: cream,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },

  dropdown: {
    position: "absolute",
    top: "86%",
    left: 0,
    width: "100%",
    backgroundColor: cream,
    paddingTop: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    transition: "max-height .25s ease",
    overflow: "hidden"
  },

  dropdownOpen: {
    maxHeight: 600
  },

  dropdownClosed: {
    maxHeight: 0
  },

  dropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },

  hoveredOption: {
    backgroundColor: darkGreen
  },

  hoveredOptionText: {
    color: cream
  },

  dropdownIcon: {
    transition: "transform .25s ease"
  },

  rotatedDropdownIcon: {
    transform: [{ rotate: '180deg' }]
  }
})

export default styles