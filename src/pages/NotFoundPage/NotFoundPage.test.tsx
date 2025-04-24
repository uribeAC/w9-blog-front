import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show a'Page not found' inside a heading", () => {
      render(<NotFoundPage />);

      const expectedPageTitle = screen.getByRole("heading", {
        name: new RegExp("Page not found", "i"),
      });

      expect(expectedPageTitle).toBeVisible();
    });

    test("Then it should show a gif with a egg yolk confused with animatedly appearing question marks", () => {
      render(<NotFoundPage />);

      const gifTextAlternative = screen.getByAltText(
        "Yema de huevo confundida con signos de interrogación que van apareciendo animadamente",
      );

      expect(gifTextAlternative).toBeVisible();
    });

    test("Then it should show a image with a Egg yolk confused for question marks", () => {
      render(<NotFoundPage />);

      const imageTextAlternative = screen.getByAltText(
        "Yema de huevo confundida con signos de interrogación",
      );

      expect(imageTextAlternative).toBeVisible();
    });
  });
});
