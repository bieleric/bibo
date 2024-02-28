import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ID, TITLE, AUTHOR } from '../assets/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { changeSortBy } from '../redux/books/bookActions';
import { COLORS } from '../assets/colors';

const editBook = (id) => {
    console.log('Edit book with id:', id);
};

const List = ({ books, numberOfResults }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.foundEntries}>Gefundene Einträge: {numberOfResults}</Text>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => dispatch(changeSortBy(ID)) }>
                    <Text style={styles.headerText}>Buchnummer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(changeSortBy(TITLE)) }>
                    <Text style={styles.headerText}>Titel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(changeSortBy(AUTHOR)) }>
                    <Text style={styles.headerText}>Autor</Text>
                </TouchableOpacity>
                <View />
            </View>
            <ScrollView>
                {books.map(book => (
                    <View key={book.id} style={styles.row}>
                        <Text>{book.id}</Text>
                        <Text>{book.title}</Text>
                        <Text>{book.author}</Text>
                        <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => editBook(book.id)}>
                            <Icon name="edit" size={20} color="grey" style={styles.icon} />
                        </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    foundEntries: {
        fontSize: 12,
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lightgrey',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 10,
    },
});

export default List;
