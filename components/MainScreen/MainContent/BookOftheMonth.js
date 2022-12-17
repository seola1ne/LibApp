import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

import BookContent from './BookContent';

import FirstBook from '../../../assets/1st_Book.png';
import ArrowRight from '../../../assets/Arrow_Right.png';

export default function BookOftheMonth() {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text>
                    이 달의 추천 도서
                </Text>
                <Image 
                    source={ArrowRight}
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
    )
}