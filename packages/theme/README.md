# Theme

The Magnesium Design color system help you to create a color scheme who reflects your brand or style.

## Installing

```shell
npm install @magnesium/theme
```

## Usage

### Styles

```scss
@use "@magnesium/theme/styles";
```

> This will generate the default theme classes, see [CSS Classes](#css-classes) section for more.

### Configuration

You can define the theme color variables before importing any Magnesium components:

```scss
@use "@magnesium/theme" with (
    $colors: (
        primary: #2674a2,
        secondary: #3092cb
    ),
    $bg-colors: (
        primary
    )
);
```

### Options

| Name         | Default | Description                                                                                                                                                        |
|--------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `$colors`    | `()`    | Sets a list of theme colors.                                                                                                                                       |
| `$bg-colors` | `()`    | Sets a list of theme background colors, who generate `background-color` classes. Work only with key declare on `$colors`. See [CSS Classes](#css-classes) section. |
| `$prefix`    | `mg`    | Sets prefix to custom properties and classes. You can disable it with `$prefix: ""` configuration.                                                                 |

## Customization

### CSS custom properties

> The variable `{style}` correspond with each key on the `$colors` config, see [configuration](#Configuration).

| CSS Custom property  | Description                  |
|----------------------|------------------------------|
| `--mg-theme-{style}` | Override the selected style. |

### CSS classes

| CSS Class              | Description                                      |
|------------------------|--------------------------------------------------|
| `mg-theme--{style}`    | Sets the color to the selected style.            |
| `mg-theme--{style}-bg` | Sets the background color to the selected style. |

## API

### Sass mixins

| Mixin                                     | Description                                                                                                                |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `selector($name)`                         | Sets class name with configured prefix.                                                                                    |
| `property($property, $style, $important)` | Sets CSS theme property, with optional `!important`. The value may be a standard CSS value or one of configured theme key. |
| `prefers-color-scheme($scheme)`           | Sets `prefers-color-scheme()` media feature for `light` or `dark` system mode.                                             |

#### Custom properties with `theme.property()`

The following Sass...

```scss
@use "@magnesium/theme";

.foo {
    @include theme.property(primary); // Will generate a CSS Custom Property with default color.
    @include theme.property(primary, darkcyan); // Will generate a CSS Custom Property with new color.
    @include theme.property(color, primary); // Will generate a `var()` CSS Function with default color.
}
```

...will produce the following CSS...

```css
.foo {
    --mg-theme-primary: #2674a2;
    --mg-theme-primary: darkcyan;
    color: var(--mg-theme-primary, #2674a2);
}
```

#### System color mode with `theme.prefers-color-scheme()`

The following Sass...

```scss
@use "@magnesium/theme";

@include theme.prefers-color-scheme {
    :root {
        color: #2674a2;
    }
}

@include theme.prefers-color-scheme(dark) {
    :root {
        color: #2674a2;
    }
}
```

...will produce the following CSS...

```css
@media (prefers-color-scheme: light) {
    :root {
        color: #2674a2;
    }
}

@media (prefers-color-scheme: dark) {
    :root {
        color: #2674a2;
    }
}
```

### Sass functions

| Function           | Description                                   |
|--------------------|-----------------------------------------------|
| `color($color)`    | Get CSS theme color, without custom property. |
| `is-color($color)` | Check if color key exist.                     |

#### Color with `theme.color()`

The following Sass...

```scss
@use "@magnesium/theme";

.foo {
    color: theme.color(primary);
}
```

...will produce the following CSS...

```css
.foo {
    color: #2674a2;
}
```
