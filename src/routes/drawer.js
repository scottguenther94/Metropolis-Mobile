import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import MatchesStack from './matchesStack'
import MatchesStack from './matchesStack'
import MatchesStack from './matchesStack'

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