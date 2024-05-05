import { StyleSheet } from "react-native"
import { lightFont, boldFont, cream, darkCream, darkGreen } from "./style-variables.js"

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

  modalPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cream,
    borderWidth: 2,
    borderColor: darkCream,
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: -10,
    marginBottom: 5
  },

  modalPicker: {
    color: darkGreen,
    width: 90,
    marginRight: -5
  },

  modalInput: {
    textAlign: "center",
    width: "100%",
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    borderColor: darkCream,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 0,
    marginBottom: 25
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
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 15
  },

  okButton: {
    marginRight: 25
  },

  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: -15
  }
})

export default styles