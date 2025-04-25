import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { choutaKaladinPost } from "../../fixtures";

describe("Given the PostCard component", () => {
  describe("When it receives 'Chouta callejero de Alethkar 🌯⚔️' post", () => {
    test("Then it should show 'Chouta callejero de Alethkar 🌯⚔️' inside a heading", () => {
      const expectedTitle = /Chouta callejero de Alethkar 🌯⚔️/i;
      render(<PostCard post={choutaKaladinPost} />);

      const postTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(postTitle).toBeVisible();
    });

    test("Then it should show an image of shining bread with salt crystals and golden crust", () => {
      render(<PostCard post={choutaKaladinPost} />);

      const postImage = screen.getByAltText(choutaKaladinPost.imageAlt);

      expect(postImage).toBeVisible();
    });

    test("Then it should show only the first 100 words of the content", () => {
      const expectedWordTotal = 100;
      render(<PostCard post={choutaKaladinPost} />);

      const postContent = screen.getByRole("paragraph");
      const actualWordTotal = postContent.textContent?.split(" ").length;

      expect(actualWordTotal).toBe(expectedWordTotal);
    });
  });
});
