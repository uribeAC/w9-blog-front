import { useCallback, useMemo, useState } from "react";
import PostsContextStructure from "../context/types";
import PostClient from "../client/PostClient";
import { PostsData } from "../client/types";
import { Post, PostData } from "../types";

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

  const createPost = async (postData: PostData): Promise<Post> => {
    const newPost = await postClient.addPost(postData);

    const incrementNewPostNumber = 1;

    setPostsData((postsData) => ({
      posts: [...postsData.posts, newPost],
      postsTotal: postsData.postsTotal + incrementNewPostNumber,
    }));

    return newPost;
  };

  return { ...postsData, loadPostsByPage, createPost };
};

export default usePosts;
