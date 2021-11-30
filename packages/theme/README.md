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
        primary: #6e5898
    )
);
```

### Options

| Name         | Default                | Description                                                                                             |
|--------------|------------------------|---------------------------------------------------------------------------------------------------------|
| `$colors`    | See `Colors` section.  | Sass map.                                                                                               |
| `$colors-bg` | `(primary, secondary)` | Sets a list of keys that will generate `background-color` classes.                                      |
| `$prefix`    | `mg`                   | Sets prefix to custom properties and classes. <br/>You can disable it with `$prefix: ""` configuration. |

### Colors

| Name        | Default   |
|-------------|-----------|
| `primary`   | `#2674a2` |
| `secondary` | `#3092cb` |
| `surface`   | `#111`    |
| `black`     | `#000`    |
| `white`     | `#fff`    |
| `dark`      | `""`      |
| `light`     | `""`      |

You can also define new colors for theme:

```scss
@use "@magnesium/theme" with (
    $colors: (
        invalid: #c9210e
    )
);
```

The new key named `invalid` is now available with any other default theme keys.

## Customization

### CSS custom properties

> The variable `{style}` correspond with the list of [colors](#colors), do not hesitate to check it for more examples!

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

| Mixin                                     | Description                                                                                                          |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| `property($property, $style, $important)` | Sets CSS theme property, with optional `!important`. The value may be a standard CSS value or a Magnesium theme key. |
| `selector($name)`                         | Sets class name with configured prefix.                                                                              |

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
    --mg-theme-primary: #6e5898;
    --mg-theme-primary: darkcyan;
    color: var(--mg-theme-primary, #6e5898);
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
    color: #6e5898;
}
```
