import { Post, PostData } from "../types";

interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsByPage: (pageNumber?: number) => Promise<void>;
  createPost: (postData: PostData) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  loadPostById: (postId: string) => Promise<Post>;
  modal: boolean;
  modalText: string;
  activateModal: (text: string) => void;
  toggleModal: () => void;
}

export default PostsContextStructure;
