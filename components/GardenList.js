import { View, ScrollView, Text, Pressable } from "react-native"
import GardenListItem from "./GardenListItem"
import styles from "../styles/GardenListStyles"

export default function GardenList({ gardens, openEditor, openDeleteModal, setIsCreateGardenModalVisible }) {
  const gardenListItems = gardens.map(item => {
    return (
      <GardenListItem
        key={item.id}
        garden={item}
        openEditor={openEditor}
        openDeleteModal={openDeleteModal}
      />
    )
  })

  return (
    <View style={styles.listContainer}>
      <ScrollView style={styles.list}>
        {gardenListItems}
      </ScrollView>
      <Pressable
        style={styles.newGardenButton}
        onPress={() => setIsCreateGardenModalVisible(true)}
      >
        <Text style={styles.newGardenButtonText}>+</Text>
      </Pressable>
    </View>
  )
}