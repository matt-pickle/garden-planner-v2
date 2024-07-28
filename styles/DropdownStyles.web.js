import { StyleSheet } from "react-native"
import { cream, darkCream, darkGreen, lightFont } from "./style-variables.js"

const styles = StyleSheet.create({
  dropdownContainer: {
    borderColor: darkCream,
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 0
  },

  dropdownLabelContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: cream,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },

  dropdownLabel: {
    fontFamily: lightFont,
    color: darkGreen
  },

  dropdownSelected: {
    fontFamily: lightFont,
    color: darkGreen
  },

  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    maxHeight: 0,
    backgroundColor: darkCream,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    transition: "max-height .25s ease",
    overflow: "hidden",
    elevation: 10,
    zIndex: 2
  },

  dropdownOpen: {
    maxHeight: 500
  },

  dropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },

  dropdownOptionText: {
    color: darkGreen,
    fontFamily: lightFont
  },

  hoveredOption: {
    backgroundColor: darkGreen
  },

  hoveredOptionText: {
    color: cream
  },

  dropdownIconWrapper: {
    transition: "transform .25s ease"
  },

  dropdownIcon: {
    color: darkGreen
  },

  rotatedDropdownIcon: {
    transform: [{ rotate: '180deg' }]
  }
})

export default styles