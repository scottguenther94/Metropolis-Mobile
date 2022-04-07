import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ProfileScreen({ navigation }) {

    // edit button onpress function
    const editPressHandler = () => {
        navigation.push('EditProfile') // looks for name of key from profileStack screens
    }

    return (
        <View style={StyleSheet.container}>
            <Text>This is the Profile Screen</Text>
            <Button title='edit profile' onPress={editPressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})