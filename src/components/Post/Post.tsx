import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

type PostProps = {
  title: string;
};

export const Post = ({title}: PostProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};
