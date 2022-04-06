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

const [selectedTeam, setSelectedTeam] = useState({})
const [selectedTeams, setSelectedTeams] = useState([])

export class areaSelect extends Component {
    render() {
        return (
            <SelectBox
                inputPlaceholder='Search for your city'
                arrowIconColor="#E8973Eff"
                searchIconColor="#E8973Eff"
                toggleIconColor="#E8973Eff"
                labelStyle={{ fontFamily: 'FuturaBook', fontSize: 15 }}
                optionsLabelStyle={{ fontFamily: 'FuturaMedium', fontSize: 20 }}
                multiOptionContainerStyle={{ backgroundColor: '#E8973Eff' }}
                multiOptionsLabelStyle={{ fontFamily: 'FuturaMedium', fontSize: 15 }}
                inputFilterStyle={{ fontFamily: 'FuturaBook', fontSize: 15, }}
                selectedItemStyle={{ fontFamily: 'FuturaBook', backgroundColor: '#E8973Eff' }}
                label="Select as many as you'd like"
                options={K_OPTIONS}
                selectedValues={selectedTeams}
                onMultiSelect={onMultiChange()}
                onTapClose={onMultiChange()}
                isMulti
            />)
        function onMultiChange() {
            return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
        }

        function onChange() {
            return (val) => setSelectedTeam(val)
        }
    }
};