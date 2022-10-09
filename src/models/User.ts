class User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;

  constructor(
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string,
  ) {
    this.email = email;
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.status = status;
  }
}

export default User;
