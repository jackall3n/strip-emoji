import emojiRegex from "emoji-regex";

const regex = emojiRegex();

export default function emojiStrip(value: string): string {
  return value.replace(regex, "");
}
