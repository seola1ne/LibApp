import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import NoticeCarousel from './MainContent/NoticeCarousel';
import BookOftheMonth from './MainContent/BookOftheMonth';

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