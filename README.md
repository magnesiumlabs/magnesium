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

## Theme

The theme component help you to easily manage theme styles with generate CSS custom properties declarations from
user-provided theme's tokens map.

```scss
@use "@magnesium/theme";

$theme: (
    "text-color": darkcyan
);

.foo {
    @include theme.emit-custom-props($theme, "button");
}
```

### Output

```scss
.foo {
    --mg-button-text-color: darkcyan;
}
```
