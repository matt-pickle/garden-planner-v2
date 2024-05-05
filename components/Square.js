import { useState } from "react"
import { Image, Pressable } from "react-native"
import { useSelectedPlant } from "../context/SelectedPlantContext"
import iconPicker from "../functions/iconPicker"

export default function Square(props) {
  const [planted, setPlanted] = useState(props.planted)

  const { selectedPlant } = useSelectedPlant()

  function changePlant() {
    setPlanted(props.selectedPlant)
    props.changePlantInArr(props.id, selectedPlant)
  }

  const icon = iconPicker(planted)

  return (
    <Pressable
      style={props.style}
      onPress={changePlant}
    >
      <Image source={icon} style={{width: "100%", height: "100%"}}/>
    </Pressable>
  )
}