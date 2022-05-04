import { loadScript } from "@paypal/paypal-js";
loadScript({ "client-id": AWTLLk5AOiwREYI7SM2SDhc7D9Rpg0TkDoOykTOglupbu0s37kF4b4p_FR-gH7UKaUs2z6hRYlJ9WK0u })
.then((paypal) => {
    // start to use the PayPal JS SDK script
})
.catch((err) => {
    console.error("failed to load the PayPal JS SDK script", err);
});
