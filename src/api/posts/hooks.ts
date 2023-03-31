import {useQuery} from 'react-query';

import {handleSelectors} from '../shared';
import {fetchPosts} from './requests';
import {getPosts} from './selectors';
import {PostsQueryKey} from './types';

export const useGetPosts = ({
  selectors = {posts: getPosts},
  params = {},
  ...options
} = {}) => {
  const postsQueryKey: PostsQueryKey = ['posts', params];
  return useQuery(postsQueryKey, fetchPosts, {
    select: handleSelectors(selectors),
    ...options,
  });
};
