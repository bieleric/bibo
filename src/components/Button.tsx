import React from 'react';
import {Button, View, Alert} from 'react-native';

const HelloWorldButton = () => {
  return (
    <View>
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Hello World 2"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
export default HelloWorldButton;
