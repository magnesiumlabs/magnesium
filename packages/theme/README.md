# Theme

The Magnesium Design color system help you to create a color scheme who reflects your brand or style.

## Installing

```shell
npm install @magnesium/theme
```

## Usage

### Styles

```scss
@use "@magnesium/theme";
```

### Color scheme

You can define the theme color variables before importing any Magnesium components:

```scss
@use "@magnesium/theme" with (
    $colors: (
        primary: #6e5898
    )
);
```

### Options

| Name         | Default                | Description                                                        |
|--------------|------------------------|--------------------------------------------------------------------|
| `$colors`    | See `Colors` section.  | Sass map.                                                          |
| `$colors-bg` | `(primary, secondary)` | Sets a list of keys that will generate `background-color` classes. |
| `$prefix`    | `mg`                   | Sets custom properties and classes prefix, instead of default.     |

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

The new key name `invalid` is now available like any other default theme keys.

## Style customization

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

### Sass mixins

| Mixin                                     | Description                                          |
|-------------------------------------------|------------------------------------------------------|
| `property($property, $style, $important)` | Set CSS theme property, with optional `!important`.  |
| `core-styles`                             | Set default theme classes indexed on `$colors` keys. |
| `set-class-name($name)`                   | Set class name with prefix.                          |

#### Custom properties with `theme.property()`

The following Sass...

```scss
@use "@magnesium/theme";

.foo {
    @include theme.property(color, primary);
}
```

...will produce the following CSS.

```css
.foo {
    color: var(--mg-theme-primary, #6e5898);
}
```

#### Default classes with `theme.core-styles`

The following Sass...

```scss
@use "@magnesium/theme";

@include theme.core-styles;
```

...will produce the following CSS.

```css
.mg-theme--primary {
    color: var(--mg-theme-primary, #6e5898);
}

.mg-theme--primary-bg {
    background-color: var(--mg-theme-primary, #6e5898);
}

/* ...and all others theme keys. */
```

### Sass functions

| Function        | Description          |
|-----------------|----------------------|
| `color($color)` | Set CSS theme color. |

#### Color with `theme.color()`

The following Sass...

```scss
@use "@magnesium/theme";

.foo {
    color: theme.color(primary);
}
```

...will produce the following CSS.

```css
.foo {
    color: #6e5898;
}
```
