import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';

import Layout from '../components/layout';

const Player = _ => {
  const [loading, changeLoading] = useState(true);

  const onBuffer = ({isBuffering}) => {
    changeLoading(isBuffering);
  };

  const onLoad = () => {
    changeLoading(false);
  }

  return (
    <Layout
      loading={loading}
      video={
        <Video
          style={styles.video}
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          resizeMode="contain"
          onBuffer={onBuffer}
          onLoad={onLoad}
        />
      }
      loader={<ActivityIndicator color="red" />}
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
