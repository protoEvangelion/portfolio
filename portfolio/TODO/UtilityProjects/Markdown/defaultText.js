const text = `
### A few examples of Markdown woop woop!

> Note: HTML output along with javascript, vbscript, file & data links prohibited to prevent XSS attacks ;)

#### *Emojis*:
:stuck_out_tongue_closed_eyes: :gift_heart: :smiley_cat:

#### *Code*:

Inline \`code\` has \`back-ticks around\` it.

Code blocks have 3 ticks before and after like this:

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`


#### *Headers like this*:

#### H4
##### H5


#### *Images*:

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"


#### *Blockquotes*:

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.


#### *Links*:

[I'm an inline-style link](https://www.google.com)

[Here's a markdown cheetseet with more examples :)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)

`

export default text
