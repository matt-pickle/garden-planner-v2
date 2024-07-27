import { useState } from "react"
import { View, Text, Pressable } from "react-native"
import { Entypo } from "@expo/vector-icons"
import styles from "../styles/DropdownStyles.js"

export default function Dropdown({ label, options, initialSelected, handleSelect }) {
  const [selected, setSelected] = useState(initialSelected)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredOption, setHoveredOption] = useState("")

  function handleSelectClick(option) {
    setSelected(option)
    setIsOpen(false)
    handleSelect(option)
  }

  const dropdownOptions = options.map((option, index) => {
    return (
      <Pressable
        style={hoveredOption === option ? [styles.dropdownOption, styles.hoveredOption] : styles.dropdownOption}
        key={index}
        onPress={() => handleSelectClick(option, index)}
        onHoverIn={() => setHoveredOption(option)}
        onHoverOut={() => setHoveredOption("")}
      >
        <Text style={hoveredOption === option && styles.hoveredOptionText}>
          {option}
        </Text>
      </Pressable>
    )
  })

  return (
    <View style={styles.dropdownContainer}>
      <Pressable
        style={styles.dropdownLabelContainer}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.dropdownLabel}>{label}:</Text>
        <Text style={styles.dropdownSelected}>
          {selected}&nbsp;
          <View style={isOpen ? [styles.dropdownIcon, styles.rotatedDropdownIcon] : styles.dropdownIcon}>
            <Entypo name="chevron-down" />
          </View>
        </Text>
      </Pressable>
      <View style={isOpen ? [styles.dropdown, styles.dropdownOpen] : [styles.dropdown, styles.dropdownClosed]}>
        {dropdownOptions}
      </View>
    </View>
  )
}