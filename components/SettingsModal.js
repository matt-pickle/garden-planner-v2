import { useState } from "react"
import { Modal, Text, View, Pressable } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { Ionicons } from "@expo/vector-icons"
import * as WebBrowser from "expo-web-browser"
import DeleteAccountModal from "./DeleteAccountModal"
import styles from "../styles/SettingsModalStyles"

export default function SettingsModal({ name, zone, isSettingsVisible, setIsSettingsVisible, changeZone, handleLogOut, handleDeleteAccount }) {
  const [isDeleteAccountModalVisible, setIsDeleteAccountModalVisible] = useState(false)

  return (
    <Modal
      animationType="slide"
      visible={isSettingsVisible}
      transparent={true}
      onRequestClose={() => setIsSettingsVisible(false)}
    >
      <DeleteAccountModal
        isDeleteAccountModalVisible={isDeleteAccountModalVisible}
        setIsDeleteAccountModalVisible={setIsDeleteAccountModalVisible}
        handleDeleteAccount={handleDeleteAccount}
      />
      <View style={styles.modal}>
        <View style={styles.modalTopRowContainer}>
          <Text style={styles.modalHeader}>SETTINGS</Text>
          <Pressable
            style={styles.modalXButton}
            onPress={() => setIsSettingsVisible(false)}
          >
            <Ionicons
              name="close-sharp"
              style={styles.modalX}
            />
          </Pressable>
        </View>

        <Text style={styles.modalText}>Logged in as {name}</Text>

        <Text style={styles.modalText}>Change Plant Hardiness Zone: </Text>
        <View style={styles.modalPickerContainer}>
          <Picker
            style={styles.modalPicker}
            mode="dropdown"
            selectedValue={zone}
            onValueChange={value => changeZone(value)}
          >
            <Picker.Item
              label="1a"
              value="1a"
            />
            <Picker.Item
              label="1b"
              value="1b"
            />
            <Picker.Item
              label="2a"
              value="2a"
            />
            <Picker.Item
              label="2b"
              value="2b"
            />
            <Picker.Item
              label="3a"
              value="3a"
            />
            <Picker.Item
              label="3b"
              value="3b"
            />
            <Picker.Item
              label="4a"
              value="4a"
            />
            <Picker.Item
              label="4b"
              value="4b"
            />
            <Picker.Item
              label="5a"
              value="5a"
            />
            <Picker.Item
              label="5b"
              value="5b"
            />
            <Picker.Item
              label="6a"
              value="6a"
            />
            <Picker.Item
              label="6b"
              value="6b"
            />
            <Picker.Item
              label="7a"
              value="7a"
            />
            <Picker.Item
              label="7b"
              value="7b"
            />
            <Picker.Item
              label="8a"
              value="8a"
            />
            <Picker.Item
              label="8b"
              value="8b"
            />
            <Picker.Item
              label="9a"
              value="9a"
            />
            <Picker.Item
              label="9b"
              value="9b"
            />
            <Picker.Item
              label="10a"
              value="10a"
            />
            <Picker.Item
              label="10b"
              value="10b"
            />
            <Picker.Item
              label="11a"
              value="11a"
            />
            <Picker.Item
              label="11b"
              value="11b"
            />
            <Picker.Item
              label="12a"
              value="12a"
            />
            <Picker.Item
              label="12b"
              value="12b"
            />
            <Picker.Item
              label="13a"
              value="13a"
            />
            <Picker.Item
              label="13b"
              value="13b"
            />
          </Picker>
        </View>
        <Pressable onPress={() => WebBrowser.openBrowserAsync("https://planthardiness.ars.usda.gov")}>
          <Text style={styles.darkZoneLink}>https://planthardiness.ars.usda.gov</Text>
        </Pressable>

        <Pressable onPress={() => setIsDeleteAccountModalVisible(true)}>
          <Text style={styles.deleteAccountButton}>DELETE ACCOUNT</Text>
        </Pressable>

        <Pressable onPress={handleLogOut}>
          <Text style={[styles.modalButton, styles.noMarginBottom]}>LOG OUT</Text>
        </Pressable>
      </View>
    </Modal>
  )
}