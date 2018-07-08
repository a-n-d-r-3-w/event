// Reference: https://developer.mozilla.org/en-US/docs/Web/Events

exports.ResourceEvent = Object.freeze({
  CACHED: "cached",
  ERROR: "error",
  ABORT: "abort",
  LOAD: "load",
  BEFORE_UNLOAD: "beforeunload",
  UNLOAD: "unload"
});

exports.NetworkEvent = Object.freeze({
  ONLINE: "online",
  OFFLINE: "offline"
});

exports.FocusEvent = Object.freeze({
  FOCUS: "focus",
  BLUR: "blur"
});
