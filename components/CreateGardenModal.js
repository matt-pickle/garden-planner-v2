import { useState } from "react"
import { Modal, Text, View, Pressable, TextInput } from "react-native"
import styles from "../styles/CreateGardenModalStyles"

export default function CreateGardenModal({ createNewGarden, isCreateGardenModalVisible, setIsCreateGardenModalVisible }) {
  const [gardenName, setGardenName] = useState("")

  function handleOK() {
    createNewGarden(gardenName)
    setGardenName("");
  }

  function handleCancel() {
    setIsCreateGardenModalVisible(false)
    setGardenName("")
  }

  return (
    <Modal
      animationType="slide"
      visible={isCreateGardenModalVisible}
      transparent={true}
      onRequestClose={() => props.setIsCreateGardenModalVisible(false)}
    >
      <View style={[styles.modal, styles.centeredModal]}>
        <Text style={styles.modalHeader}>CREATE NEW GARDEN</Text>
        <TextInput
          style={styles.modalInput}
          placeholderTextColor="rgb(120,120,130)"
          placeholder="Garden Name"
          maxLength={20}
          value={gardenName}
          onChangeText={text => setGardenName(text)}
        />
        <View style={styles.modalButtonRow}>
          <Pressable
            onPress={handleOK}
          >
            <Text style={[styles.modalButton, styles.okButton]}>OK</Text>
          </Pressable>
          <Pressable
            onPress={handleCancel}
          >
            <Text style={styles.modalButton}>CANCEL</Text>
          </Pressable>
        </View>        
      </View>
    </Modal>
  )
}