import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

import Layout from '../components/layout';

const Player = _ => {
  return (
    <Layout
      video={
        <Video
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          resizeMode="contain"
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
