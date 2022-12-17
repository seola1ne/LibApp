import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import CarouselImage from '../../../assets/1st_Carousel.png';
import CarouselDots from '../../../assets/Carousel_Dots.png';

export default function NoticeCarousel() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}} >
            <View style={styles.Imagecontainer}>
                <Image source={CarouselImage} style={{ width: 300, height: 148 }} />
            </View>
            <View>
                <Image 
                    source={CarouselDots}
                    style={{ marginTop: 12 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Imagecontainer: {
        width: '100%',
        height: 150
    }
})