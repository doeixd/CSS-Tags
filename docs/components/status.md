# Progress and Meter Documentation

## Overview
The status component layer provides token-driven defaults for native `progress` and `meter` elements.

## Progress
```html
<progress value="34" max="100">34%</progress>
<progress></progress>
```

### Selector API
- native `progress`
- `.progress`
- `[data-progress]`

### Tokens
- `--progress-height`
- `--progress-radius`
- `--progress-background`
- `--progress-border`
- `--progress-value-background`
- `--progress-indeterminate-background`

## Meter
```html
<meter min="0" max="100" low="30" high="75" optimum="90" value="68">68%</meter>
```

### Selector API
- native `meter`
- `.meter`
- `[data-meter]`

### Tokens
- `--meter-height`
- `--meter-radius`
- `--meter-background`
- `--meter-border`
- `--meter-optimum-background`
- `--meter-suboptimum-background`
- `--meter-even-less-good-background`

## Notes
- Native browser semantics are preserved.
- `progress` indeterminate state is animated and respects reduced motion.
