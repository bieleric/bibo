import React, { useState,  useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import { COLORS } from '../assets/colors';

const SearchBar = ({ onSearch, onReset }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    const resetSearch = () => {
        setSearchText('');
        onReset();
    };

    useEffect(() => {
        console.log('searchText wurde geändert:', searchText);
      }, [searchText]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Suche..."
                onChangeText={text => setSearchText(text)}
                value={searchText} // TODO: update value after reset to empty string
            />
            <TouchableOpacity onPress={resetSearch}>
                <Text style={styles.searchButton}>Zurücksetzen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch}>
                <Text style={styles.searchButton}>Suchen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: COLORS.two,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        marginRight: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: COLORS.five,
        borderRadius: 5,
    },
    searchButton: {
        color: COLORS.four,
        marginLeft: 10,
    },
});

export default SearchBar;
