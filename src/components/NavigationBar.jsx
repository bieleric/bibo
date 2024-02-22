import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../assets/colors';
import { switchTab } from '../redux/tabs/tabActions';

const NavigationBar = (props) => {
  return (
    <View
      style={ styles.navigationBar }>
      <TouchableOpacity onPress={() => {
        props.switchTab('books');
        props.navigation.navigate('Bücher');
      }}>
        <Text style={ props.currentTab === 'books' ? styles.activeTab : null }>Bücher</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.switchTab('customers');
        props.navigation.navigate('Kunden');
      }}>
        <Text style={ props.currentTab === 'customers' ? styles.activeTab : null }>Kunden</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.switchTab('rental');
        props.navigation.navigate('Verleih');
      }}>
        <Text style={ props.currentTab === 'rental' ? styles.activeTab : null }>Verleih</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    currentTab: state.root.tabs.currentTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchTab: (tab) => dispatch(switchTab(tab)),
  };
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: COLORS.three,
    paddingHorizontal: 200,
  },
  activeTab: {
    color: COLORS.one,
    textDecorationLine: 'underline',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
