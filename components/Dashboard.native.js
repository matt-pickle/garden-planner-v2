import { useState, useEffect } from "react"
import { View } from "react-native"
import { logOut } from "../firebase/firebase-auth-methods"
import { updateUserData, deleteAccount } from "../firebase/firebase"
import admobKeys from "../admob/admob-keys"
import { InterstitialAd, TestIds, AdEventType } from "react-native-google-mobile-ads"
import SettingsModal from "./SettingsModal"
import ZoneModal from "./ZoneModal"
import CreateGardenModal from "./CreateGardenModal"
import DeleteModal from "./DeleteModal"
import DashTopBar from "./DashTopBar"
import GardenList from "./GardenList"
import GardenEditor from "./GardenEditor"
import Schedule from "./Schedule"
import styles from "../styles/DashboardStyles"

// const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL)
const interstitial = InterstitialAd.createForAdRequest(admobKeys.interstitialID)

export default function Dashboard({ user, userData, setScreen, orientation }) {
  const [zone, setZone] = useState(userData.zone)
  const [gardens, setGardens] = useState(userData.gardens)
  const [isZoneModalVisible, setIsZoneModalVisible] = useState(false)
  const [isSettingsVisible, setIsSettingsVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isCreateGardenModalVisible, setIsCreateGardenModalVisible] = useState(false)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const [gardenToDelete, setGardenToDelete] = useState({})
  const [displayedGarden, setDisplayedGarden] = useState(null)
  const [adIsLoaded, setAdIsLoaded] = useState(false)

  useEffect(() => {
    if (!zone) {
      setIsZoneModalVisible(true)
    }
  },[])
  
  useEffect(() => {
    if (Math.random() < .2) {
      const adListener = interstitial.addAdEventListener(AdEventType.LOADED, () => {
        setAdIsLoaded(true)
      })
      interstitial.load()
  
      return adListener
    }
  }, [isEditorOpen, isScheduleOpen])

  async function displayAd() {
    if (adIsLoaded) {
      interstitial.show()
      setAdIsLoaded(false)
    }
  }

  function changeZone(newZone) {
    setZone(newZone)
    updateUserData(user.uid, { zone: newZone })
  }

  function createNewGarden(gardenName) {
    const updatedGardensArr = [...gardens, {
      id: Date.now(),
      gardenName: gardenName,
      width: 4,
      height: 4,
      plantedArr: []
    }]
    const updatedUserData = {
      gardens: updatedGardensArr
    }
    setGardens(updatedGardensArr)
    updateUserData(user.uid, updatedUserData)
    setIsCreateGardenModalVisible(false)
  }

  async function openEditor(garden) {
    displayAd()
    setDisplayedGarden(garden)
    setIsEditorOpen(true)
  }

  function saveGarden(width, height, plantedArr) {
    const updatedGardensArr = gardens.filter(item => {
      return item.id !== displayedGarden.id
    })   
    updatedGardensArr.push({
      id: displayedGarden.id,
      gardenName: displayedGarden.gardenName,
      width: width,
      height: height,
      plantedArr: plantedArr
    })
    setGardens(updatedGardensArr)
    const updatedUserData = {
      gardens: updatedGardensArr
    }
    updateUserData(user.uid, updatedUserData)
  }

  function saveAndClose(width, height, plantedArr) {
    saveGarden(width, height, plantedArr)
    setIsEditorOpen(false)
    setDisplayedGarden(null)
  }

  function openDeleteModal(garden) {
    setGardenToDelete(garden)
    setIsDeleteModalVisible(true)
  }

  function deleteGarden(id) {
    const updatedGardensArr = gardens.filter(item => {
      return item.id !== id
    })
    setGardens(updatedGardensArr)
    const updatedUserData = {
      gardens: updatedGardensArr
    }
    updateUserData(user.uid, updatedUserData)
    setIsEditorOpen(false)
    setDisplayedGarden(null)
    setIsDeleteModalVisible(false)
  }

  function handleLogOut() {
    logOut()
    setScreen("Login")
  }

  function handleDeleteAccount() {
    deleteAccount(user.uid)
    handleLogOut()
  }

  const dashTopBar = <DashTopBar
    isScheduleOpen={isScheduleOpen}
    setIsScheduleOpen={setIsScheduleOpen}
    setIsSettingsVisible={setIsSettingsVisible}
    displayAd={displayAd}
  />

  const gardenList = <GardenList 
    gardens={gardens}
    openEditor={openEditor}
    setIsCreateGardenModalVisible={setIsCreateGardenModalVisible}
    openDeleteModal={openDeleteModal}
  />

  const gardenEditor = <GardenEditor
    displayedGarden={displayedGarden}
    zone={zone}
    saveAndClose={saveAndClose}
    openDeleteModal={openDeleteModal}
    orientation={orientation}
  />

  const schedule = <Schedule
    gardens={gardens}
    zone={zone}
  />

  return (
    <View style={styles.dashContainer}>
      {!isEditorOpen && dashTopBar}
      <ZoneModal
        isZoneModalVisible={isZoneModalVisible}
        setIsZoneModalVisible={setIsZoneModalVisible}
        zone={zone}
        changeZone={changeZone}
      />
      <SettingsModal
        isSettingsVisible={isSettingsVisible}
        setIsSettingsVisible={setIsSettingsVisible}
        name={user.displayName}
        zone={zone}
        changeZone={changeZone}
        handleLogOut={handleLogOut}
        handleDeleteAccount={handleDeleteAccount}
      />
      <CreateGardenModal 
        isCreateGardenModalVisible={isCreateGardenModalVisible}
        setIsCreateGardenModalVisible={setIsCreateGardenModalVisible}
        createNewGarden={createNewGarden}
      />
      <DeleteModal
        isDeleteModalVisible={isDeleteModalVisible}
        setIsDeleteModalVisible={setIsDeleteModalVisible}
        id={gardenToDelete.id}
        gardenName={gardenToDelete.gardenName}
        deleteGarden={deleteGarden}
      />
      {
        gardens && !isEditorOpen && !isScheduleOpen ?
        gardenList : 
        gardens && isEditorOpen ?
        gardenEditor :
        gardens && isScheduleOpen ?
        schedule :
        null
      }
    </View>
  )
}