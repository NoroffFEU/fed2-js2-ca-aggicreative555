console.log("Current pathname:", window.location.pathname)

import "./css/style.css";

import router from "./js/router/index.js";

await router(window.location.pathname);

