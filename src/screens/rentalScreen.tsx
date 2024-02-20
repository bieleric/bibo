import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '../components/NavigationBar';

const RentalScreen = ({navigation}) => {
  return (
    <View>
      <NavigationBar navigation={navigation} />
      <Text>Verleih</Text>
    </View>
  );
};

export default RentalScreen;
