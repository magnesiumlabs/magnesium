# Shape

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

> The variable `{style}` correspond with each key on the `$shapes` config, see [configuration](#Configuration).

| CSS Custom property  | Description                                          |
|----------------------|------------------------------------------------------|
| `--mg-shape-{style}` | Override the selected style.                         |
| `--mg-shape-radius`  | Global custom property. Override the selected style. |

### CSS classes

| CSS Class           | Description                                      |
|---------------------|--------------------------------------------------|
| `mg-shape--{style}` | Sets the color to the selected style.            |

## API

### Sass mixins

| Mixin              | Description                                        |
|--------------------|----------------------------------------------------|
| `radius($radius)`  | Sets shape radius from `$shapes` or custom values. |
| `property($value)` | Sets custom property shape radius custom value.    |

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
    border-radius: var(--mg-shape-medium, var(--mg-shape-radius, 25px));
}

.bar {
    border-radius: var(--mg-shape-radius, 5px);
}
```

#### Custom properties with `shape.property()`

The following Sass...

```scss
@use "@magnesium/shape";

.foo {
    @include shape.property(12px);
}
```

...will produce the following CSS...

```css
.foo {
    --mg-shape-radius: 12px;
}
```
