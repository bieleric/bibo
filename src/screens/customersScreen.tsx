import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '../components/NavigationBar';

const CustomersScreen = ({navigation}) => {
  return (
    <View>
      <NavigationBar navigation={navigation} />
      <Text>Kunden</Text>
    </View>
  );
};

export default CustomersScreen;
