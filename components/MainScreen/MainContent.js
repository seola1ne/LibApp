import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import NoticeCarousel from './MainContent/NoticeCarousel';
import BookOftheMonth from './MainContent/BookOftheMonth';

// 공지 캐러셀 ~ 이 달의 추천 도서 부분
export default function MainContent() {
    return (
        <ScrollView >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <NoticeCarousel />
            </View>
            <BookOftheMonth />
            <BookOftheMonth />
        </ScrollView>
    );
}