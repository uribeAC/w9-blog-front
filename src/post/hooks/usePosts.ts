import { useCallback, useMemo, useState } from "react";
import PostsContextStructure from "../context/types";
import PostClient from "../client/PostClient";
import { PostsData } from "../client/types";

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

  return { ...postsData, loadPostsByPage };
};

export default usePosts;
