import client from './client';
import qs from 'qs';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  // ex) /api/posts?username=tester&page=2
  return client.get(`/api/posts?${queryString}`);
};
