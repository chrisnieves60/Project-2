import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Nav", () => {
  test("displays Home element", async () => {
    render(<Footer />);
    const homeElement = screen.getByText(/CSC436 2023 Project 2/);
    expect(homeElement).toBeTruthy();
  });
});
