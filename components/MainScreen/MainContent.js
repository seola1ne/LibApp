import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import NoticeCarousel from './MainContent/NoticeCarousel';
import BookOftheMonth from './MainContent/BookOftheMonth';

export default function MainContent() {
    return (
        <ScrollView>
            <NoticeCarousel />
            <BookOftheMonth />
            <BookOftheMonth />
        </ScrollView>
    );
}