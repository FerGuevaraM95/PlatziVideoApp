/**
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import API from './utils/api';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';

const App: () => React$Node = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  const [categoriesList, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const movies = await API.getSuggestion(10);
      const categories = await API.getMovies();
      setSuggestionList(movies);
      setCategories(categories);
    }
    getData();
  }, []);
  return (
    <>
      <Home>
        <Header />
        <Text>Buscador</Text>
        <CategoryList list={categoriesList} />
        <SuggestionList list={suggestionList} />
      </Home>
    </>
  );
};

export default App;
