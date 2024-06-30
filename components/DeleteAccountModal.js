import { Modal, Text, View, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import styles from "../styles/SettingsModalStyles"

export default function DeleteAccountModal({ isDeleteAccountModalVisible, setIsDeleteAccountModalVisible, handleDeleteAccount }) {
  return (
    <Modal
      animationType="slide"
      visible={isDeleteAccountModalVisible}
      transparent={true}
      onRequestClose={() => setIsDeleteAccountModalVisible(false)}
    >
      <View style={[styles.modal, styles.modalLayer2]}>
        <View style={styles.modalTopRowContainer}>
          <Text style={styles.modalHeader}>DELETE YOUR ACCOUNT?</Text>
          <Pressable
            style={styles.modalXButton}
            onPress={() => setIsDeleteAccountModalVisible(false)}
          >
            <Ionicons
              name="close-sharp"
              style={styles.modalX}
            />
          </Pressable>
        </View>

        <Text style={styles.modalText}>Are you sure you want to permanently delete your account and all associated data?{'\n\n'}THIS ACTION CANNOT BE UNDONE.</Text>

        <View style={styles.modalButtonRow}>
          <Pressable onPress={handleDeleteAccount}>
            <Text style={[styles.finalDeleteAccountButton, styles.modalButtonInRow]}>DELETE ACCOUNT</Text>
          </Pressable>
          <Pressable onPress={() => setIsDeleteAccountModalVisible(false)}>
            <Text style={[styles.modalButton, styles.modalButtonInRow]}>CANCEL</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}