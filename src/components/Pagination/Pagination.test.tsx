import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { archivoDeLasTormentasComidaPosts } from "../../post/fixtures";
import Pagination from "./Pagination";

describe("Given the Pagination component", () => {
  describe("When it renders", () => {
    test("Then it should show a '<' and '>' link", () => {
      render(
        <Pagination
          postsTotal={archivoDeLasTormentasComidaPosts.length}
          currentPage={1}
        />,
        { wrapper: MemoryRouter },
      );

      const previousLink = screen.getByRole("link", { name: /</i });
      const nextLink = screen.getByRole("link", { name: />/i });

      expect(previousLink).toBeVisible();
      expect(nextLink).toBeVisible();
    });
  });
});
