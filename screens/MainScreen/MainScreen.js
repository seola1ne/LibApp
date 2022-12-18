import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import SelectSchool from "../../components/MainScreen/SelectSchool"; // '부산소프트웨어마이스터고', 학교 선택 부분
import MainContent from '../../components/MainScreen/MainContent'; // 캐러셀 ~ 이 달의 추천 도서 부분
import NavigationBar from '../../components/MainScreen/NavigationBar'; // 네비게이션 바(footer) 부분

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