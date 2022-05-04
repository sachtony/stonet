import { loadScript } from "@paypal/paypal-js";
loadScript({ "client-id": ATVr_gSJ6V1ZZ79_5sFCZZJ_W-MGrV5UQpc45wT0oMv8iXluL7IzRLsLJHNGSYE4qVqamXNzrnxIGUro })
.then((paypal) => {
    // start to use the PayPal JS SDK script
})
.catch((err) => {
    console.error("failed to load the PayPal JS SDK script", err);
});
