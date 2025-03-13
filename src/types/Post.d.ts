interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Commentary[];
}

interface Commentary {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
