import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout({title, children}) {
  return (
    <ImageBackground
      source={require('../../../assets/backgronund.png')}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
});

export default CategoryListLayout;
