import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import CarouselImage from '../../../assets/1st_Carousel.png';
import CarouselDots from '../../../assets/Carousel_Dots.png';

export default function NoticeCarousel() {
    return (
        <View>
            <View style={styles.container}>
                <Image source={CarouselImage} />
            </View>
            <View>
                <Image 
                    source={CarouselDots}
                    style={{ marginTop: 12}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        width: 280,
        height: 148
    }
})