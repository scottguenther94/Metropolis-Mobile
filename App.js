import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Image,
  Text,
  Switch
} from "react-native";
import { useFonts } from 'expo-font';
import NavigationContainer from './src/routes/profileStack'
import ProfileScreen from './src/screens/profile/index'

// const renderPage = () => {
//   /*   const [text, onChangeText] = React.useState("Useless Text");
//     const [number, onChangeNumber] = React.useState(null); */
//   const [loaded] = useFonts({
//     FuturaBook: require('./assets/fonts/FuturaPTBook.otf'),
//     FuturaHeavy: require('./assets/fonts/FuturaPTHeavy.otf'),
//     FuturaLight: require('./assets/fonts/FuturaPTLight.otf'),
//     FuturaMedium: require('./assets/fonts/FuturaPTMedium.otf'),
//   });

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <View style={styles.body}>
//       <SafeAreaView style={styles.nav}>
//         <Text style={styles.userHeading}>Scott Edwards</Text>
//       </SafeAreaView>

//       <View style={styles.section}>
//         <Text style={styles.pageTitle}>Provider Details</Text>
//       </View>
//       <View>
//         <Text>Preferred Metro Areas</Text>
//         <Text>You will only be matched with opportunities in the locations you select</Text>
//       </View>
      
//       <View style={styles.section}>
//         <Text style={styles.pageTitle}>About You</Text>
//       </View>
//       <View>
//         <Text>First Name</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="John"></TextInput>
//         </View>
//         <Text>Last Name</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Doe"></TextInput>
//         </View>
//         <Text>Preferred Contact Method</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Cell"></TextInput>
//         </View>
//         <Text>Visa Sponsorship</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="No"></TextInput>
//         </View>
//         <Text>Title</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Dr."></TextInput>
//         </View>
//         <Text>Pronouns</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="They/Them"></TextInput>
//         </View>
//         <Text>Current City</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Athens"></TextInput>
//         </View>
//         <Text>Current State</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Georgia"></TextInput>
//         </View>
//         <Text>Provide a brief description of yourself</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="I have been a family care doctor for the past 15 years"></TextInput>
//         </View>
//         <Text>Organizations to be excluded from your matches</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Northwestern Hospital"></TextInput>
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.pageTitle}>Your Experience</Text>
//       </View>
//       <View>
//         <Text>Current Specialty</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="John"></TextInput>
//         </View>
//         <Text>What year did you complete your training?</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Doe"></TextInput>
//         </View>
//         <Text>Additional Language(s)</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Cell"></TextInput>
//         </View>
//         <Text>Licensed States</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="No"></TextInput>
//         </View>
//         <Text>Other Certifications</Text>
//         <View style={styles.inputForm}>
//           <TextInput placeholder="Dr."></TextInput>
//         </View>
//       </View>

//       <View>
//           <Text>Pause Matching?</Text>
//           <Switch></Switch>
//         </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//   },
//   nav: {
//     flex: .1,
//     top: 40,
//     height: 50,
//     paddingHorizontal: 20,
//     marginLeft: 10,
//     marginRight: 10,
//     justifyContent: 'center',
//     backgroundColor: '#93BCA2ff',
//     margin: 'auto'
//   },
//   userHeading: {
//     color: '#fff',
//     fontFamily: 'FuturaHeavy',
//     fontSize: 30,
//     textTransform: 'uppercase',
//     padding: 20
//   },
//   section: {
//     flex: 1,

//   },
//   pageTitle: {
//     color: '#93BCA2ff',
//     fontFamily: 'FuturaHeavy',
//     fontSize: 35,
//     textTransform: 'uppercase',
//     padding: 20,
//     position: 'relative',
//     top: 50,
//     textAlign: 'center'
//   },
//   inputForm: {
//     borderWidth: 1,
//     borderColor: 'black'
//   }
// });

function App() {
  return (
    <NavigationContainer />
  );
}

export default App;
