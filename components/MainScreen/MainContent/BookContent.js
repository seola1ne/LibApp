import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

export default function BookContent(props) {
    return (
        <View style={styles.container}>
            <Image source={props.BookImage} />
            <Text style={styles.BookTitle}>{props.BookTitle}</Text>
            <Text style={styles.BookWriter}>{props.BookWriter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 150,
        marginHorizontal: 11
    },

    BookTitle: {
        fontWeight: '600',
        fontSize: 12
    },

    BookWriter: {
        color: 'gray',
        fontSize: 10
    }
})