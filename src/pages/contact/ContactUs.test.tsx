import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactUs } from "./ContactUs";
import { MemoryRouter } from "react-router-dom";

describe("tests", () => {
  const verifyTextIsPresent = async (
    text: string,
    shouldBePresent: boolean = true
  ) => {
    await waitFor(() => {
      const message = screen.queryByText(text);
      if (shouldBePresent) {
        expect(message).toBeInTheDocument();
      } else {
        expect(message).not.toBeInTheDocument();
      }
    });
  };

  const setValue = (field: string, value: string) => {
    //const item = screen.getByRole("textbox", { name: field });
    const item = screen.getAllByPlaceholderText(field);
    userEvent.type(item[0], value);
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <ContactUs />
      </MemoryRouter>
    );
  });
  test("render component", () => {
    const text = screen.getAllByText(/Have an enquiry?/i);
    expect(text.length).toEqual(2);
  });

  test("submit form without any data", async () => {
    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyTextIsPresent("first name is required");
    await verifyTextIsPresent("last name is required");
    await verifyTextIsPresent("email is required");
    await verifyTextIsPresent("phone is required");
    await verifyTextIsPresent("details is required");
  });

  test("submit form without any data", async () => {
    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyTextIsPresent("first name is required");
    await verifyTextIsPresent("last name is required");
    await verifyTextIsPresent("email is required");
    await verifyTextIsPresent("phone is required");
    await verifyTextIsPresent("details is required");
  });

  test("do not show validation error for firstname, when value is provided", async () => {
    setValue("First Name", "hello");
    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyTextIsPresent("first name is required", false);
    await verifyTextIsPresent("last name is required");
    await verifyTextIsPresent("email is required");
    await verifyTextIsPresent("phone is required");
    await verifyTextIsPresent("details is required");
  });

  test("do not show validation error for last name, when value is provided", async () => {
    setValue("Last Name", "hello");
    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyTextIsPresent("first name is required");
    await verifyTextIsPresent("last name is required", false);
    await verifyTextIsPresent("email is required");
    await verifyTextIsPresent("phone is required");
    await verifyTextIsPresent("details is required");
  });

  test("do not show validation error for email, when value is provided", async () => {
    setValue("Email address", "hello");
    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyTextIsPresent("first name is required");
    await verifyTextIsPresent("last name is required");
    await verifyTextIsPresent("email is required", false);
    await verifyTextIsPresent("phone is required");
    await verifyTextIsPresent("details is required");
  });

  test("do not show validation error for phone, when value is provided", async () => {
    setValue("Phone", "hello");
    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyTextIsPresent("first name is required");
    await verifyTextIsPresent("last name is required");
    await verifyTextIsPresent("email is required");
    await verifyTextIsPresent("phone is required", false);
    await verifyTextIsPresent("details is required");
  });

  test("do not show validation error for details, when value is provided", async () => {
    setValue("Enter your message here", "hello");
    const button = screen.getByRole("button", { name: "Submit - via hook" });
    userEvent.click(button);
    await verifyTextIsPresent("first name is required");
    await verifyTextIsPresent("last name is required");
    await verifyTextIsPresent("email is required");
    await verifyTextIsPresent("phone is required");
    await verifyTextIsPresent("details is required", false);
  });
});
