---
title: 'Linux'
description: 'Modifying XKB'
author: 'Ryan Garant'
---

<article id="1">

## Modifying xkb

### Remapping arrow keys to Left Win + l, k, j, i

-   Show current config

```bash
setxkbmap -print -verbose 10
```

-   Add Left, Right, Up, Down to third level modifier

```
sudo nano /usr/share/X11/xkb/symbols/us
```

-   Example of the file above
    -   The spot after the 2nd comma is the "third level modifier"

```
    key <AD08> {        [         i,    I, Up           ]       };
    key <AD09> {        [         o,    O               ]       };
    key <AD10> {        [         p,    P               ]       };
    key <AD11> {        [ bracketleft,  braceleft       ]       };
    key <AD12> {        [ bracketright, braceright      ]       };

    key <AC01> {        [         a,    A               ]       };
    key <AC02> {        [         s,    S               ]       };
    key <AC03> {        [         d,    D               ]       };
    key <AC04> {        [         f,    F               ]       };
    key <AC05> {        [         g,    G               ]       };
    key <AC06> {        [         h,    H               ]       };
    key <AC07> {        [         j,    J, Left         ]       };
    key <AC08> {        [         k,    K, Down         ]       };
    key <AC09> {        [         l,    L, Right        ]       };
    key <AC10> {        [ semicolon,    colon, Home             ]       };
    key <AC11> {        [ apostrophe,   quotedbl, End   ]       };
```

-   Then restart `Alt + F2` and type `r` then hit `enter`

-   Finally, set Left Win as the Third Level Modifier

```bash
setxkbmap -layout us -option "lv3:lwin_switch"
```

</article>
