import React, {useCallback} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import {useGetPosts} from '../../api/posts/hooks';
import {styles} from './styles';

import {LoadingIndicator} from '../../components/LoadingIndicator';
import {Post} from '../../components/Post';
import {AddPost} from '../../components/AddPost';
import {AddPostForm} from '../../components/AddPost/AddPost';

export const PostsScreen = (): JSX.Element => {
  const headerHeight = useHeaderHeight();
  const {isLoading: isPostsLoading, data: postsData} = useGetPosts();

  const isLoading = isPostsLoading || !postsData;

  const addPost = useCallback(
    ({submitValues, setSubmitting}: AddPostForm) => {
      if (postsData) {
        postsData.posts.push({
          id: postsData.posts[postsData.posts.length - 1].id + 1,
          ...submitValues,
        });
      }
      setSubmitting(false);
    },
    [postsData],
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={headerHeight}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={postsData.posts}
            renderItem={({item}) => <Post title={item.title} />}
            keyExtractor={item => item.id.toString()}
          />
          <AddPost addPost={addPost} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
