# @magnesium/core

The Magnesium Design core system.

## Installing

```shell
npm install @magnesium/core
```

## Usage

```scss
@use "@magnesium/core";
```

### Configuration

You can extend default options before importing any Magnesium components:

```scss
@use "@magnesium/core" with (
    $extend: (
        // ...
    )
);
```

### Options

| Name      | Default                                | Description                                  |
|-----------|----------------------------------------|----------------------------------------------|
| `screens` | `()`                                   | Sets a map of token rules for media queries. |
| `core`    | `("responsive": true, "states": true)` | Sets a map of token rules for core rules.    |

### Screens

```scss
@use "@magnesium/core" with (
    $extend: (
        "screens": (
            "lg": 1024px
        )
    )
);
```

### Core

```scss
@use "@magnesium/core" with (
    $extend: (
        "core": (
            "responsive": false
        )
    )
);
```

## API

### Sass functions

| Function                       | Description                   |
|--------------------------------|-------------------------------|
| `create-var($name, $fallback)` | Sets new CSS Custom Property. |

#### Color with `core.create-var()`

The following Sass...

```scss
@use "@magnesium/core";

.foo {
    color: core.create-var(foo, #2674a2);
}
```

...will produce the following CSS...

```css
.foo {
    color: var(--mg-foo, #2674a2);
}
```

