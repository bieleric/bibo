import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BooksScreen from './src/screens/booksScreen';
import CustomersScreen from './src/screens/customersScreen';
import RentalScreen from './src/screens/rentalScreen';
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Bücher" component={BooksScreen} />
          <Stack.Screen name="Kunden" component={CustomersScreen} />
          <Stack.Screen name="Verleih" component={RentalScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
});


