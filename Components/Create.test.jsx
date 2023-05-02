import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Create from "./Create";

describe("Create", () => {
  test("submits a post successfully", async () => {
    render(<Create />);

    // Fill out the form
    const titleInput = screen.getByPlaceholderText(/title/i);
    fireEvent.change(titleInput, { target: { value: "Test Post Title" } });
    const contentInput = screen.getByPlaceholderText(/content/i);
    fireEvent.change(contentInput, { target: { value: "Test Post Content" } });

    // Submit the form
    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    // Wait for the success message to appear
    await waitFor(() => {
      const successMessage = screen.getByText(/submit successful/i);
      expect(successMessage).toBeTruthy();
    });
  });
});
