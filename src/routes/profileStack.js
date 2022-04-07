import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"

import ProfileScreen from '../screens/profile/profile.js'
import EditProfileScreen from '../screens/profile/edit.js'

// create key value pairs
const screens = {
    Profile: {
        screen: ProfileScreen
    },
    EditProfile: {
        screen: EditProfileScreen
    },
}

const ProfileStack = createStackNavigator(screens);

// create AppContainer to render to App.js
export default ProfileStack;