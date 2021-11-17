# `@magnesium/theme`

How to use the theme color system.

## Installing locally (Package Manager)

### NPM

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

| Name      | Default            | Description                                               |
|-----------|--------------------|-----------------------------------------------------------|
| `$colors` | See `Default keys` | Sass map.                                                 |
| `$prefix` | `mg`               | Custom properties prefix, will be insert juste after `--` |

### Default keys

| Name        | Default   |
|-------------|-----------|
| `primary`   | `#2674a2` |
| `secondary` | `#3092cb` |
| `surface`   | `#111`    |
| `black`     | `#000`    |
| `white`     | `#fff`    |
| `dark`      | `""`      |
| `light`     | `""`      |

You can also define new variables for theme:

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

| CSS Custom property  | Description                  |
|----------------------|------------------------------|
| `--mg-theme-{style}` | Override the selected style. |

### CSS classes

| CSS Class           | Description             |
|---------------------|-------------------------|
| `mg-theme--{style}` | Set the selected style. |

> The variable `{style}` correspond with the list of `$colors` [keys](#default-keys), do not hesitate to check it for 
> more examples!

### Sass mixins

| Mixin                                     | Description                                         |
|-------------------------------------------|-----------------------------------------------------|
| `property($property, $style, $important)` | Set CSS theme property, with optional `!important`. |

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
