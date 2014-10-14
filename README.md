#VUI Breadcrumbs [![Build Status](https://travis-ci.org/Desire2Learn-Valence/valence-ui-breadcrumbs.svg?branch=master)](https://travis-ci.org/Desire2Learn-Valence/valence-ui-breadcrumbs)

This library contains a series of LESS mixins and CSS which can be used to
style breadcrumbs.

##Usage

Install as a development dependency:

```shell
npm install --save-dev vui-breadcrumbs
```

##LESS Mixins

Import the library into your LESS file:

```css
@import 'node_modules/vui-breadcrumbs/dist/breadcrumbs'
```

Breadcrumb styles can be applied using the `#vui.breadcrumb` mixin. This is best accomplished using an ordered list of breadcrumb items:

```css
ol.breadcrumbs {
  #vui.breadcrumbs();
}
```

```html
<ol class="breadcrumbs">
    <li><a>Crumb 1</a></li>
    <li><a>Crumb 2</a></li>
    <li>Crumb 3</li>
</ol>
```

##CSS

If you'd prefer to use CSS, bundle up the provided `breadcrumbs.css` file with
your application's CSS. Then apply the `vui-breadcrumbs` CSS class to your
`ol` element.

```html
<ol class="vui-breadcrumbs">
    <li><a>Crumb 1</a></li>
    <li><a>Crumb 2</a></li>
    <li>Crumb 3</li>
</ol>
```

##Building

After grabbing the source, [Gulp](http://gulpjs.com/) should be installed globally
using the `npm install -g gulp` command. Then install package dependencies:

```shell
npm install
```

To build, run:

```shell
gulp
```

To test using Karma:

```shell
gulp test
```

## Contributiing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them. See the valence-ui [Code Style wiki page](https://github.com/Desire2Learn-Valence/valence-ui-helpers/wiki/Code-Style) for details.
