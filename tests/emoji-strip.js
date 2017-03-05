var tape = require('tape')
var emojiStrip = require('..')

var emoji

tape('strip emoji', function (t) {
  emoji = 'thumbs-up👍 for staying strong💪 without emoji please🙏'
  t.equal(emojiStrip(emoji), 'thumbs-up for staying strong without emoji please')

  emoji = 'dealing with emoji😡 makes me feel like poop💩'
  t.equal(emojiStrip(emoji), 'dealing with emoji makes me feel like poop')

  t.end()
})

tape('strip emoji with skin tones', function (t) {
  emoji = 'skin tones🙌🏾 should be oka👌🏿y'
  t.equal(emojiStrip(emoji), 'skin tones should be okay')

  emoji = 'regardless of which tone we should be 👍🏽good'
  t.equal(emojiStrip(emoji), 'regardless of which tone we should be good')

  emoji = 'or else spock🖖🏻 will punch👊🏼 us'
  t.equal(emojiStrip(emoji), 'or else spock will punch us')

  t.end()
})

tape('don’t magically remove digits', function (t) {
  emoji = '9999 ways to die🔫 in the west'
  t.equal(emojiStrip(emoji), '9999 ways to die in the west')

  emoji = '⚡zero 0 🐗one 1 🐴two 2 🐋three 3 🎃four 4 🍌five 5 🍻six 6 💣seven 7 🍪eight 8 eight emoji ah ah ah'
  t.equal(emojiStrip(emoji), 'zero 0 one 1 two 2 three 3 four 4 five 5 six 6 seven 7 eight 8 eight emoji ah ah ah')

  t.end()
})
