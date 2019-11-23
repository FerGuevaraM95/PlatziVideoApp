import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SuggestionListLayout({title, children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    marginBottom: 10,
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
});

export default SuggestionListLayout;
