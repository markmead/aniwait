# Aniwait

Wait for elements to be in the viewport before animating them, includes option
to toggle once 🛑

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/aniwait@latest/dist/aniwait.min.js"
></script>
```

### With a Package Manager

```shell
yarn add -D aniwait

npm install -D aniwait
```

```js
import aniwait from 'aniwait'

document.addEventListener('DOMContentLoaded', aniwait())
```

## Example

```html
<div>
  <div class="animated" data-aniwait></div>
  <div class="animated-once" data-aniwait="once"></div>
</div>
```

- `.animated` Will run the animations each time the element enters the viewport.
- `.animated-once` Will run the animations the first time the element enters the
  viewport.

## Stats

![](https://img.shields.io/bundlephobia/min/aniwait)
![](https://img.shields.io/npm/v/aniwait)
![](https://img.shields.io/npm/dt/aniwait)
![](https://img.shields.io/github/license/markmead/aniwait)
