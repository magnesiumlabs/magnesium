# @magnesium/shape

The Magnesium Design shape system help you to create a shape who reflects your design or style.

## Installing

```shell
npm install @magnesium/shape
```

## Usage

### Styles

```scss
@use "@magnesium/shape/styles";
```

> This will generate the default theme classes, see [CSS Classes](#css-classes) section for more.

### Configuration

You can define the shape variables before importing any Magnesium components:

```scss
@use "@magnesium/shape" with (
    $shapes: (
        large: 24px,
        medium: 12px,
        small: 6px
    )
);
```

### Options

| Name      | Default | Description                  |
|-----------|---------|------------------------------|
| `$shapes` | `()`    | Sets a list of theme shapes. |

## Customization

### CSS custom properties

| CSS custom property  | Description                                          |
|----------------------|------------------------------------------------------|
| `--mg-shape-radius`  | Global custom property. Override the selected style. |
| `--mg-shape-{style}` | Override the selected style.                         |

> The variable `{style}` correspond with each key on the `$shapes` config, see [configuration](#Configuration).

### CSS classes

| CSS Class           | Description                                      |
|---------------------|--------------------------------------------------|
| `mg-shape--{style}` | Sets the color to the selected style.            |

## API

### Sass mixins

| Mixin                                        | Description                                                                                                                   |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| `radius($radius, $no-var)`                   | Sets shape radius from `$shapes` or custom values. Set `$no-var` to `true` for generate only value without `var()`.           |
| `declaration($property, $style, $important)` | Sets CSS shape declaration, with optional `!important`. The value may be a standard CSS value or one of configured theme key. |

#### Radius with `shape.radius()`

The following Sass...

```scss
@use "@magnesium/shape";

.foo {
    @include shape.radius(medium);
}

.bar {
    @include shape.radius(5px);
}
```

...will produce the following CSS...

```css
.foo {
    border-radius: var(--mg-shape-medium, var(--mg-shape-radius, 12px));
}

.bar {
    border-radius: var(--mg-shape-radius, 5px);
}
```

#### Custom properties with `shape.declaration()`

The following Sass...

```scss
@use "@magnesium/shape";

.foo {
    @include shape.declaration(medium); // Will generate a CSS custom property with default shape.
    @include shape.declaration(medium, 16px); // Will generate a CSS custom property with new shape.
}
```

...will produce the following CSS...

```css
.foo {
    --mg-shape-medium: 12px;
    --mg-shape-medium: 16px;
}
```

### Sass functions

| Function          | Description                                          |
|-------------------|------------------------------------------------------|
| `exist($radius)`  | Return `true` if shape radius key exist.             |
| `radius($radius)` | Get CSS shape radius value, without custom property. |

#### Shape with `shape.radius()`

The following Sass...

```scss
@use "@magnesium/shape";

.foo {
    border-radius: shape.radius(medium);
}
```

...will produce the following CSS...

```css
.foo {
    border-radius: 12px;
}
```
