import emojiRegex from "emoji-regex";

const regex = emojiRegex();

export default function stripEmoji(value?: string | null, replacement = "") {
  if (!value) {
    return value;
  }

  return value.replace(regex, replacement);
}
