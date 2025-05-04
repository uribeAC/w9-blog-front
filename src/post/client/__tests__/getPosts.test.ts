import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import { mapPostsDtoToPosts } from "../../dto/mappers";
import { archivoDeLasTormentasComidaPostsDto } from "../../fixtures/fixturesDto";
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

    test("Then it should return 7 to as the total number of posts", async () => {
      const expectedPostsTotal = 7;

      const postClient = new PostClient();

      const postsPage = await postClient.getPosts();

      const postsTotal = postsPage.postsTotal;

      expect(postsTotal).toBe(expectedPostsTotal);
    });
  });

  describe("When it's called and response is not ok", () => {
    test("Then it should throw 'Error fetching posts'", () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/posts`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const postClient = new PostClient();

      const posts = postClient.getPosts();

      expect(posts).rejects.toThrow("Error fetching posts");
    });
  });
});
