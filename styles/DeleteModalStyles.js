import { StyleSheet } from "react-native"
import { lightFont, boldFont, cream, darkCream, darkGreen } from "./style-variables.js"

const styles = StyleSheet.create({
  modal: {
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
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

  modalText: {
    color: darkGreen,
    fontFamily: lightFont,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25
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

  yesButton: {
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