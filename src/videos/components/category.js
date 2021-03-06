import React from 'react';
import {Text, ImageBackground, StyleSheet, Platform} from 'react-native';

function Category({genres, background_image}) {
  return (
    <ImageBackground style={styles.wrapper} source={{uri: background_image}}>
      <Text style={styles.genre}>{genres ? genres[0] : 'No Category'}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    ...Platform.select({
      ios: {
        textShadowRadius: 0,
      },
      android: {
        textShadowRadius: 1,
      },
    }),
  }
});

export default Category;
