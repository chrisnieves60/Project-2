import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import { describe, test } from "vitest";

describe("Blog", () => {
  test("displays the blog post when a valid ID is provided in the URL", () => {
    const blogPost = {
      id: 1,
      title: "Test Post",
      originally_published: "2022-05-01T00:00:00Z",
      last_updated: "2022-05-01T00:00:00Z",
      content: "This is a test post",
    };

    const { getByText } = render(
      <Routes initialEntries={[`/posts/${blogPost.id}`]}>
        <Route path="/posts/:id" element={<Blog />} />
      </Routes>
    );

    fireEvent.click(getByText(blogPost.title));

    expect(getByText(blogPost.title)).toBeInTheDocument();
    expect(getByText(blogPost.originally_published)).toBeInTheDocument();
    expect(getByText(blogPost.last_updated)).toBeInTheDocument();
    expect(getByText(blogPost.content)).toBeInTheDocument();
  });
});
