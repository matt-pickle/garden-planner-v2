module.exports = {
  "expo": {
    "name": "garden-planner-v2",
    "slug": "garden-planner-v2",
    "version": "1.0.0",
    "orientation": "default",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#004B14"
      },
      "package": "com.mattpickle.gardenplanner",
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "493a4b40-6c20-4f1f-95a9-41eb2a23ab87"
      }
    },
    "plugins": [
      "@react-native-google-signin/google-signin"
    ]
  },
  "react-native-google-mobile-ads": {
    "android_app_id": 'ca-app-pub-5662395825140930~4170055589'
  }
}
