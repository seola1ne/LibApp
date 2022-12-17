import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Library from '../../assets/Library_Icon.png';
import LibraryFilled from '../../assets/Library_Filled_Icon.png';
import BookSearch from '../../assets/Book_Search_Icon.png';
import BookSearchFilled from '../../assets/Book_Search_Filled_Icon.png';
import BookBorrow from '../../assets/Book_Borrow_Icon.png';
import BookBorrowFilled from '../../assets/Book_Borrow_Filled_Icon.png';
import Person from '../../assets/Person_icon.png';
import PersonFilled from '../../assets/Person_Filled_Icon.png';

export default function NavigationBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={Library} />
                <Text>내 서재</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={BookSearch} />
                <Text>도서 검색</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={BookBorrow} />
                <Text>대출 현황</Text>  
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={Person} />
                <Text>내 정보</Text>  
            </TouchableOpacity>          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 58,
        width: '100%'
    }
})