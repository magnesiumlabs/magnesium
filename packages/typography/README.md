# Typography

The Magnesium Design typography system.

## Installing

```shell
npm install @magnesium/typography
```

## Usage

### Styles

```scss
@use "@magnesium/typography";
```

### Styles

You can define the typography style variables before importing any Magnesium components:

```scss
@use "@magnesium/typography" with (
    $styles: (
        body: (
            font-size: 20px
        )
    )
);
```

### Options

| Name           | Default                   | Description                  |
|----------------|---------------------------|------------------------------|
| `$styles`      | See `Scales` section.     | Sass map.                    |
| `$font-family` | `'Open Sans', sans-serif` | Sets the font family styles. |

### Scales

| Name         | Description                       |
|--------------|-----------------------------------|
| `body`       | Set the "body" properties.        |
| `headline-1` | Set the "headline 1" properties.  |
| `headline-2` | Set the "headline 2" properties.  |
| `headline-3` | Set the "headline 3" properties.  |
| `headline-4` | Set the "headline 4" properties.  |
| `headline-5` | Set the "headline 5" properties.  |
| `headline-6` | Set the "headline 6" properties.  |

You can also define new styles for typography:

```scss
@use "@magnesium/typography" with (
    $styles: (
        body-2: (
            font-size: 16px
        )
    )
);
```

The new key name `body-2` is now available like any other default typography keys.

## Style customization

### CSS custom properties

> The variable `{style}` correspond with the list of `$styles` [keys](#scales), do not hesitate to check it for
> more examples!

| CSS Custom property       | Description                  |
|---------------------------|------------------------------|
| `--mg-typography-{style}` | Override the selected style. |

### CSS classes

| CSS Class                | Description                                |
|--------------------------|--------------------------------------------|
| `mg-typography--{style}` | Sets the typography to the selected style. |

### Sass mixins

| Mixin                | Description                         |
|----------------------|-------------------------------------|
| `typography($style)` | Set the selected style on selector. |

#### Custom properties with `typography.typography()`

The following Sass...

```scss
@use "@magnesium/typography";

.foo {
    @include typography.typography(body);
}
```

...will produce the following CSS.

```css
.foo {
    font-family: var(--mg-typography-body-font-family, var(--mg-typography-font-family, 'Open Sans', sans-serif));
    line-height: 1.25rem;
    font-size: 100px;
    font-weight: var(--mg-typography-body-font-weight, var(--mg-typography-font-weight, 700));
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}
```

#### Default classes with `typography.core-styles`

The following Sass...

```scss
@use "@magnesium/typography";

@include typography.core-styles;
```

...will produce the following CSS.

```css
.mg-typography--body {
    font-family: var(--mg-typography-body-font-family, var(--mg-typography-font-family, 'Open Sans', sans-serif));
    line-height: 1.25rem;
    font-size: 100px;
    font-weight: var(--mg-typography-body-font-weight, var(--mg-typography-font-weight, 700));
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

/* ...and all others typography keys. */
```
