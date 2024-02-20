import React from 'react';
import {View, Text} from 'react-native';
import NavigationBar from '../components/NavigationBar';

const BooksScreen = ({navigation}) => {
  return (
    <View>
      <NavigationBar navigation={navigation} />
      <Text>Bücher</Text>
    </View>
  );
};

export default BooksScreen;
