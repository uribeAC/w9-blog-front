import { useCallback, useMemo, useState } from "react";
import PostsContextStructure from "../context/types";
import PostClient from "../client/PostClient";
import { PostsData } from "../client/types";
import { PostData } from "../types";

const usePosts = (): PostsContextStructure => {
  const [postsData, setPostsData] = useState<PostsData>({
    posts: [],
    postsTotal: 0,
  });

  const postClient = useMemo(() => new PostClient(), []);

  const loadPostsByPage = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const postsData: PostsData = await postClient.getPosts(pageNumber);

      setPostsData(postsData);
    },
    [postClient],
  );

  const createPost = async (postData: PostData): Promise<void> => {
    await postClient.addPost(postData);

    await loadPostsByPage();
  };

  const deletePost = async (postId: string): Promise<void> => {
    const deletedPost = await postClient.deletePost(postId);

    setPostsData((postsData) => ({
      posts: postsData.posts.filter((post) => post.id !== deletedPost.id),
      postsTotal: postsData.postsTotal - 1,
    }));
  };

  return { ...postsData, loadPostsByPage, createPost, deletePost };
};

export default usePosts;
