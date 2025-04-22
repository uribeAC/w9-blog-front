import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Aliset comiendo por el mundo' inside a level 1 heading", () => {});
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const appTitle = screen.getByRole("heading", {
      name: /aliset comiendo por el mundo/i,
      level: 1,
    });

    expect(appTitle).toBeVisible();
  });
});
