import { render, screen } from "@testing-library/react";
import Edit from "./Edit";
import axios from "axios";
import { describe, test, expect } from "vitest";
describe("Edit component", () => {
  test("edit component renders", async () => {
    render(<Edit />);
    const editElement = screen.getByText("Submit");
    expect(editElement).toBeTruthy();
  });
});
