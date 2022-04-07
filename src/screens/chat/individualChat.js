import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function IndividualChatScreen({ navigation }) {

    // edit button onpress function
    const editPressHandler = () => {
        navigation.push('EditProfile') // looks for name of key from profileStack screens
    }

    return (
        <View style={StyleSheet.container}>
            <Text>This is the IndividualChat Screen</Text>
            {/* <Button title='edit profile' onPress={editPressHandler}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})