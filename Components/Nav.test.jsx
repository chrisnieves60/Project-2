import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav", () => {
  test("displays Home element", async () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const homeElement = screen.getByText("Home");
    expect(homeElement).toBeTruthy();
  });
});
