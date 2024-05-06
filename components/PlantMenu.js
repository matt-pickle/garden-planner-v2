import { useMemo } from "react"
import { View, ScrollView, Text, Image, Pressable, Dimensions } from "react-native"
import { useSelectedPlant } from "../context/SelectedPlantContext"
import plantData from "../database/plantData.js"
import iconPicker from "../functions/iconPicker"

export default function PlantMenu({ zone, styles }) {
  let isMenuHorizontal = true
  const dim = Dimensions.get("screen")
  if (dim.width > dim.height) {
    isMenuHorizontal = false
  }

  const { selectedPlant, setSelectedPlant } = useSelectedPlant()

  const plantableArr = useMemo(() => {
    return (
      plantData.filter(item => {
        return item.zones.includes(zone)
      })
    )
  }, [])
  
  const menu = useMemo(() => {
    return (
      plantableArr.map((item, index) => {
        const icon = iconPicker(item.name);
        return (
          <Pressable
            style={[styles.menuButton, (selectedPlant === item.name && styles.selectedPlantIcon)]}
            onPress={() => setSelectedPlant(item.name)}
            key={index}
          >
            <Image source={icon} style={{width: "100%", height: "100%"}}/>
            <Text style={styles.menuButtonText}>{item.name}</Text>
          </Pressable>
        );
      })
    )
  }, [plantableArr, selectedPlant])
  
  return (
    <View style={styles.menuContainer}>
      <ScrollView
        horizontal={isMenuHorizontal}
        contentContainerStyle={styles.contentContainer}
        persistentScrollbar={true}
      >
        {menu}
      </ScrollView>
    </View>
  )
}