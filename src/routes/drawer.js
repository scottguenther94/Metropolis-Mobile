import { NavigatorContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import * as React from 'react';
import { View, Text } from 'react-native';

// screems
import MatchesStack from './matchesStack'
import BlogStack from './blogStack'
import ChatStack from './chatStack'
import ProfileStack from './profileStack'

// const RootDrawerNavigator = createDrawerNavigator({
//     Matches: {
//         screen: MatchesStack
//     },
//     Profile: {
//         screen: ProfileStack
//     },
//     Chat: {
//         screen: ChatStack
//     },
//     Blog: {
//         screen: BlogStack
//     }
// });

// export default createAppContainer(RootDrawerNavigator)

// Screen names
const matchesName = 'Matches';
const profileName = 'Profile';
const blogName = 'Blog';
const chatName = 'Chat';

const Tab = createBottomTabNavigator();

export default function RootDrawerContainer() {
    return (
        <NavigatorContainer>
            <Tab.Navigator
                initialRouteName={matchesName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === matchesName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === profileName) {
                            iconName = focused ? 'profile' : 'profile-outline'
                        } else if (rn === blogName) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn === chatName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }

                        return <Icon name={iconName} />
                    },
            })}>

            <Tab.Screen name={matchesName} component={MatchesStack}/>
                
            </Tab.Navigator>
        </NavigatorContainer>
    );
}