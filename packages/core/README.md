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

### Styles

```scss
@use "@magnesium/core/styles";
```

### Configuration

You can define the theme color variables before importing any Magnesium components:

```scss
@use "@magnesium/core";

@include core.configure($options);
```

### Options

| Name      | Default                           | Description                                                                              |
|-----------|-----------------------------------|------------------------------------------------------------------------------------------|
| `$prefix` | `mg`                              | Sets prefix to custom properties and classes. Set at `false` for disable prefixed names. |
| `$theme`  | `("colors": (), "bg-colors": ())` | Sets theme options Available options keys `colors` and `bg-colors`.                      |

#### Sets `$theme` colors

Sets a list of theme colors.

```scss
@use "@magnesium/core";

@include core.configure($theme: (
    "colors": (
        primary: #2674a2,
        secondary: #6e5898
    )
));
```

#### Sets `$theme` background colors

Sets automatically a list of background colors classes from `$theme->colors` option. Set at `false` for disable
background colors classes or add list of keys from `$colors` for filters only the background you want.

```scss
@use "@magnesium/core";

@include core.configure($theme: (
    "bg-colors": (
        primary
    )
));
```



