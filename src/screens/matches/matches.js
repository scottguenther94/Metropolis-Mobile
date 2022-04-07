import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function MatchesScreen({ navigation }) {

    // edit button onpress function
    const openPressHandler = () => {
        navigation.push('IndividualListing') // looks for name of key from profileStack screens
    }

    return (
        <View style={StyleSheet.container}>
            <Text>This is the Matches Screen</Text>
            <Button title='listing' onPress={openPressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})