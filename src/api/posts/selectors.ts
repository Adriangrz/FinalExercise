import {AxiosResponse} from 'axios';

import {Post} from '../../types/post';

export const getPosts = (data: AxiosResponse<Post[]>): Post[] => data.data;
