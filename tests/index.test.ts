import { describe, expect, it } from "vitest";
import emojiStrip from "../src";

describe("strip-emoji", () => {
  it("should remove emojis", () => {
    const actual = emojiStrip("🦄🌈");

    expect(actual).toBe("");
  });

  it("should remove emojis with text", () => {
    const actual = emojiStrip("unicorn 🦄 rainbow 🌈");

    expect(actual).toBe("unicorn  rainbow ");
  });

  it("should not affect text without emojis", () => {
    const actual = emojiStrip("boring old sentence");

    expect(actual).toBe("boring old sentence");
  });

  it("should allow a replacement text", () => {
    const actual = emojiStrip("I need a ☕️", "tea");

    expect(actual).toBe("I need a tea");
  });

  it("should allow a replacement", () => {
    const actual = emojiStrip("This is a weird unicorn 🦄", "🐴");

    expect(actual).toBe("This is a weird unicorn 🐴");
  });

  it("should allow null values", () => {
    const actual = emojiStrip(null);

    expect(actual).toBe(null);
  });

  it("should allow undefined values", () => {
    const actual = emojiStrip(undefined);

    expect(actual).toBe(undefined);
  });

  it("should allow empty values", () => {
    const actual = emojiStrip("");

    expect(actual).toBe("");
  });
});
