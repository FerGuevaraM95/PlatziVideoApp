import React, {useState} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';

import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

const Player = _ => {
  const [loading, changeLoading] = useState(true);
  const [paused, togglePaused] = useState(false);

  const onBuffer = ({isBuffering}) => {
    changeLoading(isBuffering);
  };

  const onLoad = () => {
    changeLoading(false);
  };

  const playPause = () => {
    togglePaused(!paused);
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
          paused={paused}
        />
      }
      loader={<ActivityIndicator color="red" />}
      controls={
        <ControlLayout>
          <PlayPause onPress={playPause} paused={paused} />
          <Text>progress bar | </Text>
          <Text>time left | </Text>
          <Text>fullscreen | </Text>
        </ControlLayout>
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
