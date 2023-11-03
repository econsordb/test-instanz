# How to add new components

In this directory, place all Components. Depending on your requirements, you can either choose to execute your component immediately or wait for the DOM to be fully loaded.

## 1. Immediate Execution:

Use this when you're certain that the DOM elements you're interacting with have been loaded.

Example for a component `header.js`:

```javascript
const Component_Header = () => {
  // JS Code
};

export default Component_Header;
```

## 2. Wait for DOM to Load:

Use this when you want to ensure that the DOM is fully loaded before executing any component code. This prevents any potential errors or unexpected behavior.

Example for a component `header.js`:

```javascript
const Component_Header = () => {
  // Ensure the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", (event) => {
    // JS Code
  });
};

export default Component_Header;
```

In both cases, add into `index.js`:

```javascript
import Component_Header from "./components/header.js";

Component_Header();
```
