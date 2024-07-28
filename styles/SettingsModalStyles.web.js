import { StyleSheet } from "react-native"
import { lightFont, boldFont, darkGreen, cream, darkCream } from "./style-variables.js"

const styles = StyleSheet.create({
  modal: {
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "flex-start",
    backgroundColor: cream,
    borderColor: darkCream,
    borderWidth: 3,
    borderRadius: 5,
    width: "90%",
    maxWidth: 400,
    padding: 25,
    marginTop: 25,
    elevation: 5
  },

  modalLayer2: {
    marginTop: 55
  }, 

  centeredModal: {
    alignItems: "center"
  },

  modalTopRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },

  modalHeader: {
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 20,
    marginBottom: 25
  },

  modalX: {
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 24,
  },

  modalXButton: {
    marginTop: -45,
    marginRight: -10
  },

  modalText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    marginBottom: 25
  },

  modalPickerContainer: {
    marginTop: -10,
    marginBottom: 10
  },

  darkZoneLink: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 14,
    borderColor: darkGreen,
    borderBottomWidth: 1,
    marginBottom: 20
  },

  zoneModalZoneLink: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 14,
    borderColor: darkGreen,
    borderBottomWidth: 1
  },

  zoneLinkPressable: {
    marginBottom: 40,
    marginTop: -25
  },

  modalButton: {
    backgroundColor: darkCream,
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 25
  },

  deleteAccountButton: {
    borderColor: "red",
    color: "red",
    fontFamily: boldFont,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 2,
    paddingTop: 11,
    paddingBottom: 7,
    paddingHorizontal: 25,
    marginTop: 10
  },

  finalDeleteAccountButton: {
    backgroundColor: "red",
    color: cream,
    fontFamily: boldFont,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25
  },

  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },

  modalButtonInRow: {
    marginTop: 0,
    marginBottom: 0,
    marginHorizontal: 10
  },

  moveDown: {
    zIndex: -1
  }
})

export default styles