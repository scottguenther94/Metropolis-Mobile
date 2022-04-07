import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ChatScreen({ navigation }) {

    // edit button onpress function
    const openPressHandler = () => {
        navigation.push('IndividualChat') // looks for name of key from profileStack screens
    }

    return (
        <View style={StyleSheet.container}>
            <Text>This is the Chats Screen</Text>
            <Button title='open chat' onPress={openPressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})