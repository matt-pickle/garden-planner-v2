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
    width: 300,
    padding: 15,
    paddingTop: 10,
    marginTop: 25,
    elevation: 5
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
    fontSize: 18,
    marginBottom: 15
  },

  modalX: {
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 24,
  },

  modalXButton: {
    marginTop: -15,
    marginRight: -5
  },

  modalText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    marginBottom: 20
  },

  modalPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cream,
    borderWidth: 2,
    borderColor: darkCream,
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 10
  },

  modalPicker: {
    color: darkGreen,
    width: 100,
    marginRight: -5
  },

  modalInput: {
    textAlign: "center",
    width: 230,
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    borderColor: darkCream,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 0,
    marginBottom: 15
  },

  darkZoneLink: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 14,
    borderColor: darkGreen,
    borderBottomWidth: 1,
    marginBottom: 20
  },

  modalButton: {
    backgroundColor: darkCream,
    color: darkGreen,
    fontFamily: boldFont,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 15
  },

  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
    marginBottom: -15
  }
})

export default styles