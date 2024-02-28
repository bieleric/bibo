import React, { useState } from 'react';
import {View} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import { useSelector } from 'react-redux';
import { getAllBookData, getAllBookDataBySearchString, getNumberOfBooks } from '../redux/books/bookSelectors';


const BooksScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const books = useSelector(getAllBookData);

  const handleSearch = (searchString) => {
    setSearchText(searchString);
  };

  const handleReset = () => {
    setSearchText('');
  };

  const filteredBooks = books.filter(book => {
    return (
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.id.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <View>
      <NavigationBar navigation={navigation} />
      <SearchBar onSearch={ handleSearch } onReset= { handleReset } />
      <List books={filteredBooks} numberOfResults={filteredBooks.length} />
    </View>
  );
};

export default BooksScreen;
