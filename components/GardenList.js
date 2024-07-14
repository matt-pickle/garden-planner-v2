import { View, ScrollView, Text, Pressable } from "react-native"
import GardenListItem from "./GardenListItem"
import createStyleSheet from "../styles/GardenListStyles.js"

export default function GardenList({ gardens, openEditor, openDeleteModal, setIsCreateGardenModalVisible }) {
  const styles = createStyleSheet()
  
  let gardenListItems = gardens.map(item => {
    return (
      <GardenListItem
        key={item.id}
        garden={item}
        openEditor={openEditor}
        openDeleteModal={openDeleteModal}
      />
    )
  })

  gardenListItems.push(<View style={styles.spacer} key={gardenListItems.length}></View>)

  return (
    <View style={styles.listContainer}>
      <ScrollView contentContainerStyle={styles.list}>
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