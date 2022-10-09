const ENDPOINTS = {
  posts: 'posts',
  users: 'users',
  comments: (postId: number) => `posts/${postId}/comments`,
};

export default ENDPOINTS;
