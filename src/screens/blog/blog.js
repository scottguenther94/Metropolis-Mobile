import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default function BlogScreen({ navigation }) {
    // test data for blog screens
    const [blogs, setBlogs] = useState([
        { title: 'How to Negogiate your Physician Salary', length: 5, body: 'lorem ipsum md', key: '1'},
        { title: 'Practicing OBGYN in Atlanta, GA', length: 2, body: 'lorem ipsum obgyn', key: '2'},
        { title: 'Common Neuroscience interview questions', length: 10, body: 'lorem ipsum nero', key: '3'},
    ]);

    // edit button onpress function
    const openPressHandler = () => {
        navigation.push('IndividualBlog') // looks for name of key from profileStack screens
    }

    return (
        <View style={StyleSheet.container}>
            <Text>Test Blogs</Text>
            <FlatList
                data={blogs}
                renderItem={({ item }) => (
                    // send item through to IndividualBlog
                    <TouchableOpacity onPress={() => navigation.navigate('IndividualBlog', item)}>
                        <Text>{ item.title }</Text>
                    </TouchableOpacity>
                    // <Text>{ item.title }</Text>
                )}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})