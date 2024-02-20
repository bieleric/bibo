import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../assets/colors';

const NavigationBar = ({navigation}) => {
  return (
    <View
      style={styles.navigationBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Bücher')}>
        <Text>Bücher</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Kunden')}>
        <Text>Kunden</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Verleih')}>
        <Text>Verleih</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: COLORS.two,
    paddingHorizontal: 200,
  },
});





export default NavigationBar;
