<div align="center">

![Magnesium Design](.github/banner.svg)

</div>

[![Version](https://flat.badgen.net/npm/v/@magnesium/framework)](https://www.npmjs.com/package/@magnesium/framework)
[![Downloads](https://flat.badgen.net/npm/dt/@magnesium/framework)](https://www.npmjs.com/package/@magnesium/framework)
[![License](https://flat.badgen.net/npm/license/@magnesium/framework)](https://www.npmjs.com/package/@magnesium/framework)

## Introduction

Easily develop your Design System for the web, The Magnesium Sass Framework is here for that!

## Installing

```shell
npm install @magnesium/framework
```

## Theme

The theme component help you to easily manage theme styles with generate CSS custom properties declarations from
user-provided theme's tokens map.

```scss
@use "@magnesium/framework/theme";

.foo {
    $theme: theme.create-theme-vars((
        "text-color": darkcyan
    ), "button");

    @include theme.emit-theme-vars($theme);
}
```

### Output

```scss
.foo {
    --mg-button-text-color: darkcyan;
}
```
