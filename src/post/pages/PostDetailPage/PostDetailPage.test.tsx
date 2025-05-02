import { render, screen } from "@testing-library/react";
import PostsContextProvider from "../../context/PostsContextProvider";
import { MemoryRouter, Route, Routes } from "react-router";
import PostDetailPage from "./PostDetailPage";
import { huevosRotosBruc159PostDto } from "../../fixtures/fixturesDto";

describe("Given the PostDetailPage component", () => {
  describe("When it receives Huevos Rotos de Bruc, 159 🍳💔 post id", () => {
    test("Then it should show 'Huevos Rotos de Bruc, 159 🍳💔' inside a heading", async () => {
      const expectedTitleRegex = new RegExp(
        huevosRotosBruc159PostDto.title,
        "i",
      );

      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/post/159678901234567890123456"]}>
            <Routes>
              <Route path="/post/:id" element={<PostDetailPage />} />
            </Routes>
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postTitle = await screen.findByRole("heading", {
        name: expectedTitleRegex,
      });

      expect(postTitle).toBeVisible();
    });

    test("Then it should show an image of broken eggs served on a rustic plate at Bruc 159", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/post/159678901234567890123456"]}>
            <Routes>
              <Route path="/post/:id" element={<PostDetailPage />} />
            </Routes>
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postImage = await screen.findByAltText(
        huevosRotosBruc159PostDto.imageAlt,
      );

      expect(postImage).toBeVisible();
    });
  });
});
