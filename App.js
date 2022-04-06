import React, { Component, useState } from "react";
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
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
// import { areaSelect } from "./components/areaSelector";

const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
  {
    item: 'PSG',
    id: 'PSG',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
  {
    item: 'Manchester City FC',
    id: 'MCI',
  },
  {
    item: 'Everton FC',
    id: 'EVE',
  },
  {
    item: 'Tottenham Hotspur FC',
    id: 'TOT',
  },
  {
    item: 'Chelsea FC',
    id: 'CHE',
  },
  {
    item: 'Liverpool FC',
    id: 'LIV',
  },
  {
    item: 'Arsenal FC',
    id: 'ARS',
  },

  {
    item: 'Leicester City FC',
    id: 'LEI',
  },
]

const renderPage = () => {

  const [loaded] = useFonts({
    FuturaBook: require('./assets/fonts/FuturaPTBook.otf'),
    FuturaHeavy: require('./assets/fonts/FuturaPTHeavy.otf'),
    FuturaLight: require('./assets/fonts/FuturaPTLight.otf'),
    FuturaMedium: require('./assets/fonts/FuturaPTMedium.otf'),
  });

  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.nav}>
        <Text style={styles.userHeading}>Scott Edwards</Text>
      </SafeAreaView>
      <View style={{ height: 100 }}>
        <Text style={styles.pageTitle}>Provider Details</Text>
      </View>
      <View>
        <Text style={styles.inputTitle}>Preferred Metro Areas</Text>
        <View style={{ margin: 30 }}>
          <View style={{ width: '100%', alignItems: 'center' }}>
          </View>
          <View style={{ height: 40 }} />
          <SelectBox 
            inputPlaceholder='Search for your city'
            arrowIconColor="#E8973Eff"
            searchIconColor="#E8973Eff"
            toggleIconColor="#E8973Eff"
            labelStyle={{fontFamily:'FuturaBook', fontSize: 15}}
            optionsLabelStyle={{fontFamily:'FuturaMedium', fontSize: 20}}
            multiOptionContainerStyle={{backgroundColor:'#E8973Eff'}}
            multiOptionsLabelStyle={{fontFamily:'FuturaMedium', fontSize:15}}
            inputFilterStyle={{fontFamily:'FuturaBook', fontSize: 15, }}
            selectedItemStyle={{fontFamily:'FuturaBook', backgroundColor:'#E8973Eff'}}
            label="Select as many as you'd like"
            options={K_OPTIONS}
            selectedValues={selectedTeams}
            onMultiSelect={onMultiChange()}
            onTapClose={onMultiChange()}
            isMulti
          /> 
        </View>
        <Text style={styles.smallText}>You will only be matched with opportunities in the locations you select</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About You</Text>
      </View>
       <View>
        <Text>First Name</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="John"></TextInput>
        </View>
        <Text>Last Name</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Doe"></TextInput>
        </View>
        <Text>Preferred Contact Method</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Cell"></TextInput>
        </View>
        <Text>Visa Sponsorship</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="No"></TextInput>
        </View>
        <Text>Title</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Dr."></TextInput>
        </View>
        <Text>Pronouns</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="They/Them"></TextInput>
        </View>
        <Text>Current City</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Athens"></TextInput>
        </View>
        <Text>Current State</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Georgia"></TextInput>
        </View>
        </View>
         {/* <Text>Provide a brief description of yourself</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="I have been a family care doctor for the past 15 years"></TextInput>
        </View>
        <Text>Organizations to be excluded from your matches</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Northwestern Hospital"></TextInput>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.pageTitle}>Your Experience</Text>
      </View>
      <View>
        <Text>Current Specialty</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="John"></TextInput>
        </View>
        <Text>What year did you complete your training?</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Doe"></TextInput>
        </View>
        <Text>Additional Language(s)</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Cell"></TextInput>
        </View>
        <Text>Licensed States</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="No"></TextInput>
        </View>
        <Text>Other Certifications</Text>
        <View style={styles.inputForm}>
          <TextInput placeholder="Dr."></TextInput>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.pageTitle}>Your Documents</Text>
      </View>
      <View>
        <Text>CV</Text>
        <Text>Upload your CV</Text>
        <Button title="Upload File"></Button>
      </View>
      <View>
        <Text>Avatar</Text>
        <Text>Upload a photo for your profile</Text>
        <Button title="Upload File"></Button>
      </View>
      <View>
        <Text>Video</Text>
        <Text>Upload a video for your profile</Text>
        <Button title="Record Video"></Button>
        <Button title="Upload Video"></Button>
      </View>

      <View style={styles.section}>
        <Text style={styles.pageTitle}>Profile Status</Text>
        <Text>How would you describe the current status of your job search?</Text>
      </View>

      <View>
          <Text>Pause Matching?</Text>
          <Switch></Switch>
        </View>
        <Button title="Save Changes"></Button>
        <View>
          <Image source= {require("./assets/images/Metropolis-TheMarketplace.png")}></Image>
        </View>  */}
    </View>
  );
  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  nav: {
    flex: .1,
    top: 40,
    height: 50,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#93BCA2ff',
    margin: 'auto'
  },
  userHeading: {
    color: '#fff',
    fontFamily: 'FuturaHeavy',
    fontSize: 30,
    textTransform: 'uppercase',
    padding: 20,
    alignItems: 'center'
  },
  section: {
    flex: 1,

  },
  sectionTitle: {
    color: '#93BCA2ff',
    fontFamily: 'FuturaMedium',
    fontSize: 35,
    textTransform: 'uppercase',
    padding: 20,
    position: 'relative',
    marginTop: 5,
    textAlign: 'center'
  },
  pageTitle: {
    color: '#93BCA2ff',
    fontFamily: 'FuturaHeavy',
    fontSize: 35,
    textTransform: 'uppercase',
    padding: 20,
    position: 'relative',
    top: 50,
    marginTop: 20,
    textAlign: 'center'
  },
  inputForm: {
    borderWidth: 1,
    borderColor: 'black'
  },
  inputTitle: {
    fontWeight: "bold",
    fontFamily: "FuturaMedium",
    fontSize: 20,
    top: 50,
    left: 20
  },
  smallText: {
    fontFamily: "FuturaBook",
    fontSize: 13,
    left: 20
  }
});

export default renderPage;
