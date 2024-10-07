import { describe, expect, it } from "vitest";
import stripEmoji from "../src";

describe("strip-emoji", () => {
  it("should remove emojis", () => {
    const actual = stripEmoji("🦄🌈");

    expect(actual).toBe("");
  });

  it("should remove emojis with text", () => {
    const actual = stripEmoji("unicorn 🦄 rainbow 🌈");

    expect(actual).toBe("unicorn  rainbow ");
  });

  it("should not affect text without emojis", () => {
    const actual = stripEmoji("boring old sentence");

    expect(actual).toBe("boring old sentence");
  });

  it("should allow a replacement text", () => {
    const actual = stripEmoji("I need a ☕️", "tea");

    expect(actual).toBe("I need a tea");
  });

  it("should allow a replacement", () => {
    const actual = stripEmoji("This is a weird unicorn 🦄", "🐴");

    expect(actual).toBe("This is a weird unicorn 🐴");
  });

  it("should allow null values", () => {
    const actual = stripEmoji(null);

    expect(actual).toBe(null);
  });

  it("should allow undefined values", () => {
    const actual = stripEmoji(undefined);

    expect(actual).toBe(undefined);
  });

  it("should allow empty values", () => {
    const actual = stripEmoji("");

    expect(actual).toBe("");
  });
});
