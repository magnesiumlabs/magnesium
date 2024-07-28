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

## Usage

The theme component help you to easily manage theme styles with generate CSS custom properties declarations from
user-provided theme's tokens map.

## Options

| Option    | Description                                                                                |
|-----------|--------------------------------------------------------------------------------------------|
| `$prefix` | Add global prefix name on any custom properties. Default `mg`. Set to `false` for disable. |

```scss
@use "@magnesium/theme" with (
    $prefix: "foo" // Set to `false` for disabled.
);
```

## Mixins

### `emit-custom-props($tokens, $prefix)`

Emits CSS custom properties declarations from a user-provided theme's.

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

### `emit-variable($tokens, $token, $fallback, $prefix)`

Emits CSS variable declaration from a user-provided theme's.

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

### `validation($reference, $tokens)`

Validates a user-provided theme's token and throws an error if tokens are invalid.

```scss
@use "@magnesium/theme";

$reference: (
    "text-color": darkcyan
);

$theme: (
    "text-color": darkorange
);

$theme: theme.validation($reference, $theme); // Return `$theme` map if true or error if false.
```

## Top-level config override

If variables are already configured on top-level using `@use ... with`, by another dependency for example, you can't use
this solution anymore, because the module can only be setup once, this is a Sass restriction with **Module System**, but
another solution exist for override the main configuration, with a mixin!

See [official documentation](https://sass-lang.com/documentation/at-rules/use#with-mixins) about override configuration
with mixins.

| Mixin             | Description                                |
|-------------------|:-------------------------------------------|
| `config($prefix)` | Override top-level `prefix` configuration. |

#### Configuration rule with `theme.config()`

The following Sass will configure new parameters:

```scss
@use "@magnesium/theme";

@include theme.config("fr");
```
