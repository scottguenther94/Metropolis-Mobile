import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"

import ChatScreen from '../screens/chat/chat.js'
import IndividualChatScreen from '../screens/chat/individualChat.js'

// create key value pairs
const screens = {
    Chats: {
        screen: ChatScreen
    },
    IndividualChat: {
        screen: IndividualChatScreen
    },
}

const ChatStack = createStackNavigator(screens);

// create AppContainer to render to App.js
export default ChatStack;