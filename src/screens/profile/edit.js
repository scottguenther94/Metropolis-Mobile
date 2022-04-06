import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function EditScreen({ navigation }) {
    // edit button onpress function
    const savePressHandler = () => {
        navigation.pop() // looks for name of key from profileStack screens
    }

    return (
        <View style={StyleSheet.container}>
            <Text>This is the Edit Screen</Text>
            <Button title='save profile' onPress={savePressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})