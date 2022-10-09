/* eslint-disable import/no-relative-parent-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import api from '@services/index';

import ENDPOINTS from '../Endpoints/Endpoints';

const getPosts = async () => {
  const res = await api.get(ENDPOINTS.posts);
  return res.data;
};

const getComments = async (postId: number) => {
  const res = await api.get(ENDPOINTS.comments(postId));
  return res.data;
};

export { getPosts, getComments };
