/**
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';

const App: () => React$Node = () => {
  const [suggestionList, getSuggestionList] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const movies = await API.getSuggestion(10);
      // console.log(movies);
      getSuggestionList(movies);
    }
    getMovies();
  }, []);
  return (
    <>
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <SuggestionList list={suggestionList} />
      </Home>
    </>
  );
};

export default App;
