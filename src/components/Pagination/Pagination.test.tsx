import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { archivoDeLasTormentasComidaPosts } from "../../post/fixtures/fixtures";
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

      const previousLink = screen.getByLabelText(/pagina anterior/i);
      const nextLink = screen.getByLabelText(/siguiente pagina/i);

      expect(previousLink).toBeVisible();
      expect(nextLink).toBeVisible();
    });
  });
});
