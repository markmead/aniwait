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

Here there are two elements `.animated` and `.animated-once` which will have the
class `.aniwait-visible` added when they enter the viewport. Therefore, you can
write CSS like this:

```css
.animated {
  animation: example 1s;
  animation-play-state: paused;
}

.aniwait-visible {
  animation-play-state: running !important;
}

@keyframes example {
  100% {
    background: red;
  }
}
```

_`!important` might not be needed in your use case._

The `.animated-once` element will animate when it enters the viewport for the
first time. However, the `.animated` element will animate each time it enters
the viewport.

## Stats

![](https://img.shields.io/bundlephobia/min/aniwait)
![](https://img.shields.io/npm/v/aniwait)
![](https://img.shields.io/npm/dt/aniwait)
![](https://img.shields.io/github/license/markmead/aniwait)
