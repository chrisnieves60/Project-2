import { describe, expect, test, vi, beforeEach } from "vitest";
import axios from "axios";
import assert from "assert";

describe("Home", () => {
  test("ensure that the api call is working correctly", async () => {
    const response = await axios.get("http://localhost:3001/v1/api/posts");
    const posts = response.data;
    console.log(posts);
    assert(Array.isArray(posts));
  });
});
