import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"

import MatchesScreen from '../screens/matches/matches.js'
import IndividualListingScreen from '../screens/matches/individualListing.js'

// create key value pairs
const screens = {
    Matches: {
        screen: MatchesScreen
    },
    IndividualListing: {
        screen: IndividualListingScreen
    },
}

const MatchesStack = createStackNavigator(screens);

// create AppContainer to render to App.js
export default MatchesStack;