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
    const newPost = await postClient.addPost(postData);

    setPostsData((postsData) => ({
      posts: [...postsData.posts, newPost],
      postsTotal: postsData.postsTotal + 1,
    }));
  };

  return { ...postsData, loadPostsByPage, createPost };
};

export default usePosts;
