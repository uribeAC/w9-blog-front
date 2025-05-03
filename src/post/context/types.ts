import { Post, PostData } from "../types";

export interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsByPage: (pageNumber?: number) => Promise<void>;
  createPost: (postData: PostData) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  loadPostById: (postId: string) => Promise<Post>;
}

export interface ModalContextStructure {
  modal: boolean;
  modalText: string;
  activateModal: (text: string) => void;
  toggleModal: () => void;
}
export type ContextStructure = PostsContextStructure & ModalContextStructure;
