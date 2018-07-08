# event-enum
An enum for JavaScript events. Allows you to replace hard-coded strings like `"beforeunload"` with
 `ResourceEvent.BEFORE_UNLOAD`.
 
## Example

```
const { ResourceEvent } = require("event-enum");

window.addEventListener(ResourceEvent.BEFORE_UNLOAD, () => {
    // ...
});
```