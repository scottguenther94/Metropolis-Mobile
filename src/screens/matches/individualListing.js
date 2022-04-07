import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function IndividualListingScreen({ navigation }) {

    // edit button onpress function
    const editPressHandler = () => {
        navigation.push('') // looks for name of key from profileStack screens
    }

    return (
        <View style={StyleSheet.container}>
            <Text>This is the IndividualListings Screen</Text>
            {/* <Button title='' onPress={editPressHandler}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})