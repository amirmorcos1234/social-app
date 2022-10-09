class Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;

  constructor(
    id: number,
    post_id: number,
    name: string,
    email: string,
    body: string,
  ) {
    this.body = body;
    this.id = id;
    this.post_id = post_id;
    this.name = name;
    this.email = email;
  }
}

export default Comment;
