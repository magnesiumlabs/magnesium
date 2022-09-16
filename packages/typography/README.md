# @magnesium/typography

The Magnesium Design typography system help you to define your typographic styles.

## Installing

```shell
npm install @magnesium/typography
```

## Usage

### Styles

```scss
@use "@magnesium/typography/styles";
```

> This will generate the default typography classes, see [CSS Classes](#css-classes) section for more.

### Configuration

You can define the typography style variables before importing any Magnesium components:

```scss
@use "@magnesium/typography" with (
    $extend: (
        "styles": (
            body: (
                font-size: 20px
            )
        )
    )
);
```

### Options

| Name             | Default                   | Description                              |
|------------------|---------------------------|------------------------------------------|
| `styles`         | See `Scales` section.     | Sets a list of theme scales.             |
| `font-family`    | `"Open Sans", sans-serif` | Sets the font family styles.             |
| `font-baseline`  | `16px`                    | Sets the font baseline for `rem` styles. |
| `font-smoothing` | `true`                    | Sets the font smoothing default styles.  |

### Scales

| Name         | Description                       |
|--------------|-----------------------------------|
| `body`       | Sets the "body" properties.       |
| `headline-1` | Sets the "headline 1" properties. |
| `headline-2` | Sets the "headline 2" properties. |
| `headline-3` | Sets the "headline 3" properties. |
| `headline-4` | Sets the "headline 4" properties. |
| `headline-5` | Sets the "headline 5" properties. |
| `headline-6` | Sets the "headline 6" properties. |

You can also define new styles for typography:

```scss
@use "@magnesium/typography" with (
    $extend: (
        "styles": (
            body-2: (
                font-size: 16px
            )
        )
    )
);
```

The new key named `body-2` is now available with any other default typography keys.

## Customization

### CSS custom properties

> The variable `{style}` correspond with the list of `$styles` [keys](#scales), do not hesitate to check it for
> more examples!

| CSS Custom Property       | Description                  |
|---------------------------|------------------------------|
| `--mg-typography-{style}` | Override the selected style. |

### CSS classes

| CSS Class                | Description                                |
|--------------------------|--------------------------------------------|
| `mg-typography--{style}` | Sets the typography to the selected style. |

## API

### Sass mixins

| Mixin                                   | Description                                                           |
|-----------------------------------------|-----------------------------------------------------------------------|
| `base`                                  | Sets base styles.                                                     |
| `typography($style, $exclude-props...)` | Sets the selected style on selector, with excluded properties option. |
| `font-smoothing`                        | Sets the font smoothing rules.                                        |
| `ellipsis`                              | Sets the ellipsis rules.                                              |
| `ellipsis-multiline($line, $orient)`    | Sets the ellipsis-multiline rules.                                    |

#### Typography rule with `typography.base()`

The following Sass...

```scss
@use "@magnesium/typography";

.foo {
    @include typography.base;
}
```

...will produce the following CSS...

```css
.foo {
    font-family: var(--mg-typography-font-family, 'Open Sans', sans-serif);
    font-size: 100%;
}
```

#### Typography rule with `typography.typography()`

The following Sass...

```scss
@use "@magnesium/typography";

.foo {
    @include typography.typography(body);
}

.bar {
    // With excluded properties options.
    @include typography.typography(body, font-size, line-height, text-decoration, text-transform);
}
```

...will produce the following CSS...

```css
.foo {
    line-height: var(--mg-typography-body-line-height, 1.25rem);
    font-family: var(--mg-typography-body-font-family, var(--mg-typography-font-family, 'Open Sans', sans-serif));
    font-size: var(--mg-typography-body-font-size, 1rem);
    font-weight: var(--mg-typography-body-font-weight, 400);
    letter-spacing: var(--mg-typography-body-letter-spacing, normal);
    text-decoration: var(--mg-typography-body-text-decoration, inherit);
    text-transform: var(--mg-typography-body-text-transform, inherit);
}

.bar {
    font-family: var(--mg-typography-body-font-family, var(--mg-typography-font-family, 'Open Sans', sans-serif));
    font-weight: var(--mg-typography-body-font-weight, 400);
    letter-spacing: var(--mg-typography-body-letter-spacing, normal);
}
```

#### Font smoothing with `typography.font-smoothing()`

The following Sass...

```scss
@use "@magnesium/typography";

.foo {
    @include typography.font-smoothing;
}
```

...will produce the following CSS...

```css
.foo {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}
```

#### Ellipsis with `typography.ellipsis()`

The following Sass...

```scss
@use "@magnesium/typography";

.foo {
    @include typography.ellipsis;
}
```

...will produce the following CSS...

```css
.foo {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
```

#### Ellipsis multiline with `typography.ellipsis-multiline()`

The following Sass...

```scss
@use "@magnesium/typography";

.foo {
    @include typography.ellipsis-multiline(2, vertical);
}
```

...will produce the following CSS...

```css
.foo {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```
