import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactUs } from "./ContactUs";
import { MemoryRouter } from "react-router-dom";

describe("tests", () => {
  const verifyText = async (text: string) => {
    await waitFor(() => {
      const message = screen.getByText(text);
      expect(message).toBeInTheDocument();
    });
  };
  test("render component", () => {
    render(
      <MemoryRouter>
        <ContactUs />
      </MemoryRouter>
    );
    const text = screen.getAllByText(/Have an enquiry?/i);
    expect(text.length).toEqual(2);
  });

  test("submit form without any data", async () => {
    render(
      <MemoryRouter>
        <ContactUs />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyText("first name is required");
    await verifyText("last name is required");
    await verifyText("email is required");
    await verifyText("phone is required");
    await verifyText("details is required");
  });
});
