import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import {
  archivoDeLasTormentasComidaPosts,
  choutaKaladinPost,
  panLuzEstelarPost,
} from "../../fixtures/fixtures";
import PostsList from "./PostsList";
import PostsContextProvider from "../../context/PostsContextProvider";

describe("Given the PostsList component", () => {
  describe("When it receives 'Chouta callejero de Alethkar 🌯⚔️' and 'Pan de luz estelar de Kharbranth ✨🍞' posts", () => {
    test("Then it should show the titles 'Chouta callejero de Alethkar 🌯⚔️' and 'Pan de luz estelar de Kharbranth ✨🍞' posts", () => {
      const expectedChoutaTitle = new RegExp(choutaKaladinPost.title, "i");
      const expectedPanDeLuzTitle = new RegExp(panLuzEstelarPost.title, "i");

      render(
        <PostsContextProvider>
          <PostsList posts={archivoDeLasTormentasComidaPosts} />
        </PostsContextProvider>,
        { wrapper: MemoryRouter },
      );

      const chouteTitle = screen.getByRole("heading", {
        name: expectedChoutaTitle,
      });
      const panLuzTitle = screen.getByRole("heading", {
        name: expectedPanDeLuzTitle,
      });

      expect(chouteTitle).toBeVisible();
      expect(panLuzTitle).toBeVisible();
    });
  });
});
