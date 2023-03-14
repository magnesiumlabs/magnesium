<div align="center">

![Magnesium Design](.github/banner.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@magnesium/theme)](https://www.npmjs.com/package/@magnesium/theme)
[![Downloads](https://flat.badgen.net/npm/dt/@magnesium/theme)](https://www.npmjs.com/package/@magnesium/theme)
[![License](https://flat.badgen.net/npm/license/@magnesium/theme)](https://www.npmjs.com/package/@magnesium/theme)

## Introduction

Easily develop your Design System for the web, The Magnesium Sass Framework is here for that!

## Installing

```shell
npm install @magnesium/theme
```

# API

The theme component help you to easily manage theme styles with generate CSS custom properties declarations from
user-provided theme's tokens map.

## Mixins

### `emit-variable($theme, $token, $fallback, $prefix)`

```scss
@use "@magnesium/theme";

$theme: (
    "text-color": darkcyan
);

.foo {
    color: theme.emit-variable($theme, "text-color", false, "button");
}
```

### Result

```css
.foo {
    color: var(--mg-button-text-color);
}
```

### `emit-custom-props($theme, $prefix)`

```scss
@use "@magnesium/theme";

$theme: (
    "text-color": darkcyan
);

.foo {
    @include theme.emit-custom-props($theme, "button");
}
```

### Result

```scss
.foo {
    --mg-button-text-color: darkcyan;
}
```

## Functions

### `validation($reference, $tokens)`

```scss
@use "@magnesium/theme";

$reference: (
    "text-color": darkcyan
);

$theme: (
    "text-color": darkcyan
);

$theme: theme.validation($reference, $theme); // Return `$theme` map if true or error if false.
```
