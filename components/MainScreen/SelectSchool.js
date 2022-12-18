import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import arrowDown from '../../assets/Arrow_Down.png';

// 학교 선택 부분
export default function SelectSchool() {
    return (
        <View>
            <TouchableOpacity style={styles.schoolTitle}>
                <Text style={styles.schoolName}>
                    부산소프트웨어마이스터고
                </Text>
                <Image 
                    source={arrowDown}
                    style={styles.arrowBtn}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    schoolTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
        marginLeft: 20,

        width: '100%',
        height: 55
    },

    schoolName: {
        fontSize: 20,
        fontWeight: '700'
    },

    arrowBtn: {
        marginLeft: 7
    }
})