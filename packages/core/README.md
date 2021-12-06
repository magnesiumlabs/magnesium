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

## API

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
        color: #2674a2;
    }
}
```

...will produce the following CSS...

```css
@media (pointer: fine) {
    .foo {
        color: #2674a2;
    }
}
```

#### Disabled pointer events with `core.disabled-pointer-events()`

The following Sass...

```scss
@use "@magnesium/core";

.foo {
    @include core.disabled-pointer-events;
}
```

...will produce the following CSS...

```css
.foo {
    cursor: default;
    pointer-events: none;
}
```

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

