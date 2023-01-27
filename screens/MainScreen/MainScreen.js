import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import SelectSchool from "../../components/MainScreen/SelectSchool";
import MainContent from '../../components/MainScreen/MainContent';
import NavigationBar from '../../components/MainScreen/NavigationBar';

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <SelectSchool style={styles.SelectSchool} />
            <MainContent style={styles.MainContent} /> 
            <NavigationBar style={styles.NavigationBar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    
    SelectSchool: {
        flex: 1,
        marginTop: 10,
        marginLeft: 5
    },

    MainContent: {
        flex: 5
    },

    NavigationBar: {
        flex: 1,
    } 
})