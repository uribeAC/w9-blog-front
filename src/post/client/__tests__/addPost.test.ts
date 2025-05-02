import { huevosRotosBruc159PostDto } from "../../fixtures/fixturesDto";
import { mapPostDtoToPost } from "../../dto/mappers";
import { huevosRotosBruc159PostData } from "../../fixtures/fixtures";
import PostClient from "../PostClient";

describe("Given the addPost method to PostClient", () => {
  describe("When it's called with 'Huevos rotos de Bruc,159' data", () => {
    test("Then it should return Huevos rotos de Bruc,159 post", async () => {
      const postClient = new PostClient();

      const newPost = await postClient.addPost(huevosRotosBruc159PostData);

      const postHuevos = mapPostDtoToPost(huevosRotosBruc159PostDto);

      expect(newPost).toStrictEqual(postHuevos);
    });
  });
});
