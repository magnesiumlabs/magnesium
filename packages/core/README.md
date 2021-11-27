# Core

The Magnesium Design core system.

## Installing

```shell
npm install @magnesium/core
```

## Usage

```scss
@use "@magnesium/core";
```

### Sass mixins

| Mixin                     | Description                  |
|---------------------------|------------------------------|
| `disabled-touch-screen`   | Disabled touch screen event. |
| `disabled-pointer-events` | Disabled pointer event.      |

#### Disabled touch screen with `core.disabled-touch-screen()`

The following Sass...

```scss
@use "@magnesium/core";

.foo {
    @include core.disabled-touch-screen {
        color: darkcyan;
    }
}
```

...will produce the following CSS.

```css
@media (pointer: fine) {
    .foo {
        color: darkcyan;
    }
}
```

#### Disabled touch screen with `core.disabled-pointer-events()`

The following Sass...

```scss
@use "@magnesium/core";

.foo {
    @include core.disabled-pointer-events;
}
```

...will produce the following CSS.

```css
.foo {
    cursor: default;
    pointer-events: none;
}
```
