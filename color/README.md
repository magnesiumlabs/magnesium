# Color

The color component help you to easily manage color schemes who reflect your brand or style.

## Usage

```scss
@use "@magnesium/theme/color";
```

## Functions

### `emit-variable($token, $fallback)`

Emits CSS variable declaration from a user-provided theme's color.

```scss
@use "@magnesium/theme" with (
    $colors: (
        "primary": darkcyan
    )
);
@use "@magnesium/theme/color";

.foo {
    color: color.emit-variable("primary"); // Or theme.color-emit-variable("primary");
}
```

### Result

```css
.foo {
    color: var(--mg-color-primary);
}
```
