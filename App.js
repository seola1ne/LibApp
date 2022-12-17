import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import MainScreen from './screens/MainScreen/MainScreen';

export default function App() {
  return (
    <SafeAreaView>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
