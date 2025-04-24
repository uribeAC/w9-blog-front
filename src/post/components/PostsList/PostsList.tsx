import { Post } from "../../types";
import "./PostsList.css";

interface PostsListProps {
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post._id}></li>
      ))}
    </ul>
  );
};

export default PostsList;
