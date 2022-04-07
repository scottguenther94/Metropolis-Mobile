import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import MatchesStack from './matchesStack'
import BlogStack from './blogStack'
import ChatStack from './chatStack'
import ProfileStack from './profileStack'

const RootDrawerNavigator = createDrawerNavigator({
    Matches: {
        screen: MatchesStack
    },
    Profile: {
        screen: ProfileStack
    },
    Chat: {
        screen: ChatStack
    },
    Blog: {
        screen: BlogStack
    }
});

export default createAppContainer(RootDrawerNavigator)