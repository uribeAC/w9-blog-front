import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import PostsContextProvider from "../../post/context/PostsContextProvider";

const user = userEvent.setup();

beforeEach(() => {
  vitest.clearAllMocks();
});

describe("Given the Modal component", () => {
  describe("When it receives 'Post creado' and an action", () => {
    const action = vitest.fn();

    test("Then it should show 'Post creado' inside a heading", () => {
      render(<Modal action={action} text="Post creado" />, {
        wrapper: PostsContextProvider,
      });

      const modalText = screen.getByRole("heading", { name: /post creado/i });

      expect(modalText).toBeVisible();
    });

    test("Then it should show a 'X' inside a button with label 'cerrar modal'", () => {
      render(<Modal action={action} text="Post creado" />, {
        wrapper: PostsContextProvider,
      });

      const modalText = screen.getByRole("heading", { name: /post creado/i });

      const modal = modalText.parentElement!;

      const closeButton = within(modal).getByLabelText(/cerrar modal/i);

      expect(closeButton).toBeVisible();
      expect(closeButton.textContent).toBe("X");
    });

    describe("And the user clicks the X button", () => {
      test("Then it should call the received action", async () => {
        render(<Modal action={action} text="Post creado" />, {
          wrapper: PostsContextProvider,
        });

        const modalText = screen.getByRole("heading", { name: /post creado/i });

        const modal = modalText.parentElement!;

        const closeButton = within(modal).getByLabelText(/cerrar modal/i);

        await user.click(closeButton);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
