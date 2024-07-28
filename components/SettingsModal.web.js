import { useState, useMemo } from "react"
import { Modal, Text, View, Pressable } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { Ionicons } from "@expo/vector-icons"
import * as WebBrowser from "expo-web-browser"
import Dropdown from "./Dropdown"
import DeleteAccountModal from "./DeleteAccountModal"
import styles from "../styles/SettingsModalStyles"

export default function SettingsModal({ name, zone, isSettingsVisible, setIsSettingsVisible, changeZone, handleLogOut, handleDeleteAccount }) {
  const [isDeleteAccountModalVisible, setIsDeleteAccountModalVisible] = useState(false)

  const zoneOptions = useMemo(() => {
    let optionsArr = []
    for (let i = 1; i <= 13; i++) {
      optionsArr.push(i.toString() + "a")
      optionsArr.push(i.toString() + "b")
    }
    return optionsArr
  },[])

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

        <Text style={styles.modalText}>Change Plant Hardiness Zone</Text>
        <View style={styles.modalPickerContainer}>
          <Dropdown
            label="Zone"
            initialSelected={zone}
            options={zoneOptions}
            handleSelect={changeZone}
          />
        </View>
        <Pressable
          style={styles.moveDown}
          onPress={() => WebBrowser.openBrowserAsync("https://planthardiness.ars.usda.gov")}
        >
          <Text style={styles.darkZoneLink}>https://planthardiness.ars.usda.gov</Text>
        </Pressable>

        <Pressable
          style={styles.moveDown}
          onPress={() => setIsDeleteAccountModalVisible(true)}
        >
          <Text style={styles.deleteAccountButton}>DELETE ACCOUNT</Text>
        </Pressable>

        <Pressable
          style={styles.moveDown}
          onPress={handleLogOut}
        >
          <Text style={[styles.modalButton, styles.noMarginBottom]}>LOG OUT</Text>
        </Pressable>
      </View>
    </Modal>
  )
}