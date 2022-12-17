import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

export default function BookContent(props) {
    return (
        <View style={styles.container}>
            <Image source={props.BookImage} />
            <Text>{props.BookTitle}</Text>
            <Text>{props.BookWriter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 150,
        marginHorizontal: 11
    }
})