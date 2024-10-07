strip-emoji
===========

###  (forked from [emoji-strip](https://github.com/khalifenizar/emoji-strip))

Use [`emoji-regex`](https://github.com/mathiasbynens/emoji-regex)
to Strip emoji from a string in Node.js and browsers.


Examples
--------

```typescript
import emojiStrip from "strip-emoji";

const cleaned = emojiStrip("unicorn 🦄 rainbow 🌈"); // "unicorn  rainbow "
```

API
---

### stripEmoji(string) ###

Returns a copy of `string` with any emoji characters removed.


Supported emoji
---------------

The `emojiStrip` function uses
the [`emoji-regex`](https://www.npmjs.org/package/emoji-regex) package
behind the scenes.
It can remove any of the emoji supported by that package.

Currently, it supports all emoji up to
[Unicode Version 10](http://emojipedia.org/unicode-10.0/)
except for emoji sequences.


Install
-------

### For Node.js ###

Install with [npm](https://www.npmjs.org/):
```bash
npm install --save strip-emoji
```

Require it in your program:
```js
var emojiStrip = require('strip-emoji')
```

### For browsers ###

Download one of the versions of `strip-emoji.js`:
- [strip-emoji.js](https://raw.githubusercontent.com/khalifenizar/strip-emoji/master/dist/strip-emoji.js) (uncompressed)
- [strip-emoji.min.js](https://raw.githubusercontent.com/khalifenizar/strip-emoji/master/dist/strip-emoji.min.js) (minified)

Link it in your HTML:
```html
<script src="strip-emoji.min.js"></script>
```


License
-------

ISC
