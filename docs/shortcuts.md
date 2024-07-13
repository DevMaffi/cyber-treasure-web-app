# shortcuts

## snippets

**exportfrom**:

```ts
export { $ITEM$$END$ } from "$MODULE$"
```

**importdefault**:

```ts
import $ITEM$ from "$MODULE$"
$END$
```

**importitems**:

```ts
import { $ITEM$$END$ } from "$MODULE$"
```

**rcc**:

```tsx
"use client"

function $TM_FILENAME_BASE$() {
    return <div>$END$</div>
}

export default $TM_FILENAME_BASE$
```

**rccp**:

```tsx
"use client"

type $TM_FILENAME_BASE$Props = {
    $END$
}

function $TM_FILENAME_BASE$({}: $TM_FILENAME_BASE$Props) {
    return <div></div>
}

export default $TM_FILENAME_BASE$
```

**rsc**:

```tsx
function $TM_FILENAME_BASE$() {
    return <div>$END$</div>
}

export default $TM_FILENAME_BASE$
```

**rscp**:

```tsx
type $TM_FILENAME_BASE$Props = {
    $END$
}

function $TM_FILENAME_BASE$({}: $TM_FILENAME_BASE$Props) {
    return <div></div>
}

export default $TM_FILENAME_BASE$
```

**useState**:

```tsx
const [$state$, set$State$] = useState($END$)
```

**rca**:

```tsx
function on$NAME$() {
    $END$
}
```

## keymap

### navigation & search

```
⇧⇧
^+⇧+N
^+⇧+alt+N
^+⇧+A
^+⇧+F
^+F
^+R
^+⇧+E
^+E
```

### tool windows & tabs

```
⇧esc
^+f4
alt+←/→
```

### editor lines

```
^+alt+enter
^+⇧+enter
^+⇧+↑/↓
^+D
```

### suggestions

```
^+Q
^+J
^+space
alt+enter
```

### clipboard

```
^+⇧+V
```

### code selection

```
^+W
^+⇧+W
```

### reformat code

```
^+alt+L
^+⇧+alt+P
```

### explorer

```
f6
⇧+f6
```

### find usages

```
^+alt+f7
^+⇧+alt+f7
```

### version control

```
^+alt+A
^+D
f4
```
