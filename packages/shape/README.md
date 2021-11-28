# Shape

The Magnesium Design shape system help you to create a shape who reflects your design or style.

## Installing

```shell
npm install @magnesium/shape
```

## Usage

### Configuration

You can define the shape variables before importing any Magnesium components:

```scss
@use "@magnesium/shape" with (
    $shapes: (
        medium: 25px,
        small: 10px
    )
);
```

### Options

| Name      | Default | Description |
|-----------|---------|-------------|
| `$shapes` | `()`    | Sass map.   |

## Customization

### CSS custom properties

> The variable `{style}` correspond with the list of your own [configuration](#Configuration).

| CSS Custom property  | Description                                          |
|----------------------|------------------------------------------------------|
| `--mg-shape-{style}` | Override the selected style.                         |
| `--mg-shape-radius`  | Global custom property. Override the selected style. |

### Sass mixins

| Mixin             | Description                                        |
|-------------------|----------------------------------------------------|
| `radius($radius)` | Sets shape radius from `$shapes` or custom values. |

#### Custom properties with `shape.radius()`

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

...will produce the following CSS.

```css
.foo {
    border-radius: var(--mg-shape-medium, var(--mg-shape-radius, 25px));
}

.bar {
    border-radius: var(--mg-shape-radius, 5px);
}
```
