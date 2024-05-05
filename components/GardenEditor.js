import { useState, useEffect, useMemo } from "react"
import { Text, View, Pressable, BackHandler } from "react-native"
import { Picker } from "@react-native-picker/picker"
import uuid from "react-native-uuid"
import { Ionicons } from '@expo/vector-icons'
import { SelectedPlantProvider } from "../context/SelectedPlantContext"
import Square from "./Square"
import PlantMenu from "./PlantMenu"
import createStyleSheet from "../styles/GardenEditorStyles"

export default function GardenEditor({ displayedGarden, garden, saveAndClose, openDeleteModal, zone }) {
  const [plantedArr, setPlantedArr] = useState(displayedGarden.plantedArr)
  const [width, setWidth] = useState(displayedGarden.width)
  const [height, setHeight] = useState(displayedGarden.height)
  const styles = createStyleSheet(width, height)

  //Make Android "Back" button save and close editor
  useEffect(() => {
    function backAction() {
      saveAndClose(width, height, plantedArr)
      return true
    }
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)
    return () => backHandler.remove()
  }, [])

  function createBlankPlantedArr(newWidth, newHeight) {
    let newPlantedArr = [];
    for (i = 0; i < (newWidth * newHeight); i++) {
      newPlantedArr.push("none")
    }
    setPlantedArr(newPlantedArr)
  }
  
  if (!plantedArr.length) {
    createBlankPlantedArr(width, height)
  }

  function changeWidth(newWidth) {
    setWidth(newWidth)
    createBlankPlantedArr(newWidth, height)
  }

  function changeHeight(newHeight) {
    setHeight(newHeight)
    createBlankPlantedArr(width, newHeight)
  }

  function changePlantInArr(index, newPlant) {
    let newPlantedArr = [...plantedArr]
    newPlantedArr[index] = newPlant
    setPlantedArr(newPlantedArr)
  }

  const pickerOptions = useMemo(() => {
    function populatePicker() {
      let optionsArr = [];
      for (i = 1; i <= 10; i++) {
        optionsArr.push(
          <Picker.Item
            label={i.toString() + " ft"}
            value={i}
            key={i}
          />
        );
      }
      return optionsArr;
    }
    return populatePicker()
  }, [])  

  const gridArr = useMemo(() => {
    return (
      plantedArr.map((item, index) => {
        return (
          <Square 
            id={index}
            style={styles.square}
            planted={item}
            changePlantInArr={changePlantInArr}
            key={uuid.v4()}
          />
        );
      })
    )
  }, [plantedArr])
  
  return (
    <SelectedPlantProvider>
      <View style={styles.editorContainer}>
        <View style={styles.topBar}>
          <Pressable
            onPress={() => saveAndClose(width, height, plantedArr)}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              style={styles.arrow}
            />
          </Pressable>
          <Text style={styles.gardenName}>{displayedGarden.gardenName}</Text>
          <Pressable
            style={styles.deleteButton}
            onPress={() => openDeleteModal(garden)}
          >
            <Ionicons
              name="trash-outline"
              style={styles.trashIcon}
            />
          </Pressable>
        </View>

        <View style={styles.everythingButTopBarContainer}>
          <View style={styles.pickerAndGridContainer}>
            <View style={styles.sizePickerRow}>
              <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Width: </Text>
                <Picker
                  style={styles.picker}
                  dropdownIconColor="rgb(0,75,20)"
                  mode="dropdown"
                  selectedValue={width}
                  onValueChange={value => changeWidth(value)}
                >
                  {pickerOptions}
                </Picker>
              </View>
              <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Height: </Text>
                <Picker
                  style={styles.picker}
                  dropdownIconColor="rgb(0,75,20)"
                  mode="dropdown"
                  selectedValue={height}
                  onValueChange={value => changeHeight(value)}
                >
                  {pickerOptions}
                </Picker>
              </View>
            </View>
            <View style={styles.gridContainer}>
              {gridArr}
            </View>
          </View>
          <PlantMenu
            styles={styles}
            zone={zone}
          />
        </View>
      </View>
    </SelectedPlantProvider>
  )
}