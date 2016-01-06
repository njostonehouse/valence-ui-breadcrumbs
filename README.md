# vui-breadcrumbs
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains Sass mixins and CSS that you can use to style breadcrumbs.

## Installation

Install from NPM:
```shell
npm install vui-breadcrumbs
```

Install from Bower:
```shell
bower install vui-breadcrumbs
```

## Usage

**Using Ordered List:**

```html
<ol>
	<li>crumb 1</li>
	<li>crumb 2</li>
	<li>crumb 3</li>
</ol>
```

```scss
@import 'bower_components/vui-breadcrumbs/breadcrumbs.scss'; // or...

@import "node_modules/vui-breadcrumbs/breadcrumbs.scss";

.app {
	ol {
		@include vui-breadcrumbs;
	}
}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-breadcrumbs
[bower-image]: https://img.shields.io/bower/v/vui-breadcrumbs.svg
[npm-url]: https://www.npmjs.org/package/vui-breadcrumbs
[npm-image]: https://img.shields.io/npm/v/vui-breadcrumbs.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-breadcrumbs
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-breadcrumbs.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-breadcrumbs
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-breadcrumbs.svg
