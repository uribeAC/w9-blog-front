import { mapPostsDtoToPosts } from "../../dto/mappers";
import { archivoDeLasTormentasComidaPostsDto } from "../../dto/fixturesDto";
import PostClient from "../PostClient";

describe("Given the getPosts method of PostClient", () => {
  describe("When it's called", () => {
    test("Then it should return Chouta callejero de Alethkar 🌯⚔️ and Pan de luz estelar de Kharbranth ✨🍞 posts", async () => {
      const postClient = new PostClient();

      const postsPage = await postClient.getPosts();

      const posts = postsPage.posts;

      expect(posts).toStrictEqual(
        mapPostsDtoToPosts(archivoDeLasTormentasComidaPostsDto),
      );
    });

    test("Then it should return 2 to as the total number of posts", async () => {
      const postClient = new PostClient();

      const postsPage = await postClient.getPosts();

      const posts = postsPage.posts;
      const postsTotal = postsPage.postsTotal;

      expect(postsTotal).toBe(posts.length);
    });
  });
});
