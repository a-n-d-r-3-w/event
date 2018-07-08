# event-enum
An enum for JavaScript events. Allows you to replace hard-coded strings like `"beforeunload"` with
 `ResourceEvent.BEFORE_UNLOAD`.
 
## How to install
`npm install --save event-enum`

## How to use

```
const { ResourceEvent } = require("event-enum");

window.addEventListener(ResourceEvent.BEFORE_UNLOAD, () => {
    // ...
});
```