import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SelectSchool from "../../components/SelectSchool";
import NoticeCarousel from "../../components/NoticeCarousel";

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <SelectSchool style={styles.SelectSchool} />
            <NoticeCarousel style={styles.NoticeCarousel} />
            <MainContent style={styles.MainContent} />
            <NavigationBar style={styles.NavigationBar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    SelectSchool: {
        flex: 1,
        marginTop: 10,
        marginLeft: 5
    },

    NoticeCarousel: {
        flex: 3,
    },

    MainContent: {

    },

    NavigationBar: {
        
    }
})