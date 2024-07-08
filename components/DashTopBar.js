import { View, Text, Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons'
import styles from "../styles/DashTopBarStyles"

export default function DashTopBar({ isScheduleOpen, setIsScheduleOpen, setIsSettingsVisible, displayAd }) {    

  async function openSchedule() {
    displayAd()
    setIsScheduleOpen(true)
  }

  async function closeSchedule() {
    setIsScheduleOpen(false)
  }

  return (
    <View style={styles.dashTopBar}>
      <View style={styles.dashTopBarInner}>
        <View style={styles.dashTabContainer}>
          <Pressable
            style={[styles.dashTabBtn, (!isScheduleOpen && styles.selectedTab)]}
            onPress={closeSchedule}
          >
            <Text
              style={[styles.tabText, (!isScheduleOpen && styles.selectedTab)]}
            >
              GARDENS
            </Text>
          </Pressable>
          <Pressable
            style={[styles.dashTabBtn, (isScheduleOpen && styles.selectedTab)]}
            onPress={openSchedule}
          >
            <Text
              style={[styles.tabText, (isScheduleOpen && styles.selectedTab)]}
            >
              SCHEDULE
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => setIsSettingsVisible(true)}
        >
          <Entypo
            name="dots-three-vertical"
            style={styles.dashIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}