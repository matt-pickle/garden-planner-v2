import { View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/GardenListItemStyles";

export default function GardenListItem({ openEditor, garden, openDeleteModal }) {
  return (
    <View style={styles.listItemContainer}>
      <Pressable 
        style={styles.listItemTitleButton}
        onPress={() => openEditor(garden)}
      >
        <Text style={styles.listItemText}>{garden.gardenName}</Text>
      </Pressable>
      <Pressable
        style={styles.listItemDeleteButton}
        onPress={() => openDeleteModal(garden)}
      >
        <Ionicons
          name="trash-outline"
          style={styles.listItemIcon}
        />
      </Pressable>
    </View>
  );
}