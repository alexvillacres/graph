# Local development in Webflow

Paste this script into the `Before </body> tag` part of the Webflow custom code
in the project settings so that it loads on all pages.

```html
<script type="module" src="http://localhost:3000/@vite/client"></script>
<script type="module" src="http://localhost:3000/src/main.js"></script>
```
