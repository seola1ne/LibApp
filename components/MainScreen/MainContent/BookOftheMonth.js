import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

import BookContent from './BookContent';

import FirstBook from '../../../assets/1st_Book.png';
import ArrowRight from '../../../assets/Arrow_Right.png';

export default function BookOftheMonth() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.container}>
                <View style={styles.MonthBookTextArea}>
                    <Text style={styles.MonthBookText}>
                        이 달의 추천 도서
                    </Text>
                    <Image 
                        source={ArrowRight}
                        style={styles.MonthBookIcon}
                    />
                </View>

                <ScrollView horizontal={true}>
                    <BookContent 
                        BookImage={FirstBook}
                        BookTitle="Clean Code 클린 코드"
                        BookWriter="로버트 C. 마틴 저"
                    />
                    <BookContent 
                        BookImage={FirstBook}
                        BookTitle="Clean Code 클린 코드"
                        BookWriter="로버트 C. 마틴 저"
                    />
                    <BookContent 
                        BookImage={FirstBook}
                        BookTitle="Clean Code 클린 코드"
                        BookWriter="로버트 C. 마틴 저"
                    />
                    <BookContent 
                        BookImage={FirstBook}
                        BookTitle="Clean Code 클린 코드"
                        BookWriter="로버트 C. 마틴 저"
                    />
                    <BookContent 
                        BookImage={FirstBook}
                        BookTitle="Clean Code 클린 코드"
                        BookWriter="로버트 C. 마틴 저"
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        marginVertical: 10,
        width: 350
    },

    MonthBookTextArea: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    MonthBookText: {
        fontSize: '16',
        fontWeight: '700'
    },

    MonthBookIcon: {
        justifyContent: 'flex-end',
        marginRight: 18
    }
})