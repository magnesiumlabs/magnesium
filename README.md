# Magnesium

[![Version](https://flat.badgen.net/npm/v/@magnesium/theme)](https://www.npmjs.com/package/@magnesium/theme)
[![Downloads](https://flat.badgen.net/npm/dt/@magnesium/theme)](https://www.npmjs.com/package/@magnesium/theme)
[![License](https://flat.badgen.net/npm/license/@magnesium/theme)](https://www.npmjs.com/package/@magnesium/theme)

## Introduction

Sass toolkit for managing design tokens as CSS custom properties. The model is **define → emit → consume**: declare
tokens as plain Sass maps, emit them as scoped, prefixed custom properties, then reference them in your rules.

<div align="center">

![Magnesium](.github/banner.svg)

</div>

> **Full documentation:** [magnesium.dev](https://magnesium.dev) — this README is a summary; the site is the complete
> reference.

## Requirements

| Dependency | Version     |
|------------|-------------|
| Node.js    | `>= 18`     |
| Sass       | `>= 1.97.1` |

## Installing

```shell
npm install @magnesium/theme
```

## Playground

Try it live on StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/magnesiumlabs/magnesium)

Or run it locally:

```shell
npm run dev
```

## Usage

Configure the prefix once, at your compilation entry point, then define, emit and consume tokens:

```scss
@use "@magnesium/theme" with ($prefix: "ds");

$tokens: ("text-color": darkcyan);

:root {
    @include theme.emit($tokens, "button"); // --ds-button-text-color: darkcyan;
}

.button {
    color: theme.variable($tokens, "text-color", "button"); // var(--ds-button-text-color)
}
```

### Options

| Option    | Description                                                                        |
|-----------|------------------------------------------------------------------------------------|
| `$prefix` | Global prefix for all custom properties. Set to `false` to disable. Default: `mg`. |

> Configure `$prefix` once. Setting it in multiple files causes a Sass error. With the `pkg:` importer, use
> `@use "pkg:@magnesium/theme"`.

## Mixins

| Mixin                                                           | Description                                                                                                      |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `emit($tokens, $namespace, $include, $exclude, $layer)`         | Emits CSS custom property declarations. Filter keys with `$include` / `$exclude`, wrap in `@layer` via `$layer`. |
| `theme($refs, $tokens, $namespace, $include, $exclude, $layer)` | Validates tokens against a reference schema, then emits them in one call. Throws `@error` on unknown tokens.     |
| `scheme($scheme, $selector, $layer)`                            | Scopes declarations to a color scheme via `@media (prefers-color-scheme)`, or an explicit `$selector`.           |

## Functions

| Function                                           | Description                                                                   |
|----------------------------------------------------|-------------------------------------------------------------------------------|
| `name($name...)`                                   | Builds a hyphenated, prefixed name string.                                    |
| `ref($token)`                                      | Returns a `var()` reference for a token name, using the configured prefix.    |
| `refs($tokens, $namespace)`                        | Transforms a tokens map into `var()` references with fallback values.         |
| `validation($refs, $tokens)`                       | Validates tokens against a reference schema; throws `@error` on unknown keys. |
| `variable($tokens, $token, $namespace, $fallback)` | Returns a `var()` reference for a single token.                               |

See [magnesium.dev](https://magnesium.dev) for parameters and examples.

## Migration from v4

The v4 API is **deprecated** and will be removed in v6. Import the compatibility layer to keep it working while you
migrate — each deprecated call emits a `@warn`:

```scss
@use "@magnesium/theme/compat" as theme;
```

| v4                                                | v5                                             |
|---------------------------------------------------|------------------------------------------------|
| `config($prefix: "ds")`                           | `@use "@magnesium/theme" with ($prefix: "ds")` |
| `create-name("button", "color")`                  | `name("button", "color")`                      |
| `create-theme-vars($tokens, "button")`            | `refs($tokens, "button")`                      |
| `emit-variable($tokens, "token", true, "button")` | `variable($tokens, "token", "button", true)`   |
| `emit-custom-props($tokens, "button")`            | `emit($tokens, "button")`                      |
| `emit-theme-vars($refs)`                          | `emit($refs)`                                  |
| `emit-color-scheme("dark")`                       | `scheme("dark")`                               |

See the full [migration guide](https://magnesium.dev/guide/migration) for before/after examples.
