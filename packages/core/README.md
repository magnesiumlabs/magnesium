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

