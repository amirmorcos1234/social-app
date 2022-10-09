class Post {
  id: number;
  user_id: number;
  title: string;
  body: string;

  constructor(id: number, user_id: number, title: string, body: string) {
    this.body = body;
    this.id = id;
    this.user_id = user_id;
    this.title = title;
  }
}

export default Post;
