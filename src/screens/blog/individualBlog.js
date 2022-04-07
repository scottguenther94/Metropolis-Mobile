import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function IndividualBlogScreen({ navigation }) {
    return (
        <View style={StyleSheet.container}>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('length') } min read</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})