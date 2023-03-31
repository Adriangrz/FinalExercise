import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';

import {useGetPosts} from '../../api/posts/hooks';
import {styles} from './styles';

import {LoadingIndicator} from '../../components/LoadingIndicator';
import {Post} from '../../components/Post';

export const PostsScreen = (): JSX.Element => {
  const {isLoading: isPostsLoading, data: postsData} = useGetPosts();

  const isLoading = isPostsLoading || !postsData;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={postsData.posts}
            renderItem={({item}) => <Post title={item.title} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
