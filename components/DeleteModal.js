import { Modal, Text, View, Pressable } from "react-native";
import styles from "../styles/DeleteModalStyles";

export default function DeleteModal({ id, gardenName, isDeleteModalVisible, setIsDeleteModalVisible, deleteGarden }) {

  return (
    <Modal
      animationType="slide"
      visible={isDeleteModalVisible}
      transparent={true}
      onRequestClose={() => setIsDeleteModalVisible(false)}
    >
      <View style={[styles.modal, styles.centeredModal]}>
        <Text style={styles.modalText}>Do you want to delete{"\n"}"{gardenName}"?</Text>
        <View style={styles.modalButtonRow}>
          <Pressable
            onPress={() => deleteGarden(id)}
          >
            <Text style={[styles.modalButton, styles.yesButton]}>YES</Text>
          </Pressable>
          <Pressable
            onPress={() => setIsDeleteModalVisible(false)}
          >
            <Text style={styles.modalButton}>NO</Text>
          </Pressable>
        </View>        
      </View>
    </Modal>
  )
}