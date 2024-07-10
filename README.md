# color-luminance-brightness

### Calculates any colors luminance and decides it is *bright* or *dark*.

## How to Install

Just type `npm install color-luminance-brightness`

## Methods

### `isDark`
 - It is calculates color is dark.

#### Usage

```typescript
import {isDark} from "./isBright";

const colorIsDark = isDark('#123456') // true || false
```

### `isBright`
 - It is calculates color is bright.
 
#### Usage

```typescript
import {isBright} from "./isBright";

const colorIsBright = isBright('#123456') // true || false
```

### `calculateLuminance`
 - It is calculates and returns luminance value of color between 1 and 0.
 
#### Usage

```typescript
import {calculateLuminance} from "./calculateLuminance";

const calculated = calculateLuminance(255, 255, 255) // 1
```

### `hexToRgb`
 - It converts HEX code to RGB code.
 
#### Usage

```typescript
import {hexToRgb} from "./hexToRgb";

const getRGB = hexToRgb('#ffffff') // [255, 255, 255]
```

### `rgbToHex`
 - It converts RGB code to HEX code.
 
#### Usage

```typescript
import {rgbToHex} from "./rgbToHex";

const getHEX = rgbToHex(255, 255, 255) // #ffffff
```

### Constants
 - `WHITE_LUMINANCE`: Pre-calculated luminance of white
 - `BLACK_LUMINANCE`: Pre-calculated luminance of black