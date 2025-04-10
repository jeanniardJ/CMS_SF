/**
 * Welcome to your app's main JavaScript file!
 */

// any CSS you import will output into a single css file (app.css in this case)
// assets/app.js
const $ = require("jquery"); // import jQuery

require("bootstrap");

//import './styles/app.scss' // import the main css file
import "./bootstrap.js";

import("./_layouts/modals");
import("./_layouts/toasts");

function random() {
    return Math.random();
}

/* Génère 50 bulles aléatoires */
for (let i = 0; i < 10; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.classList.add("bubble" + ((i % 5) + 1));
    bubble.style.top = random() * 100 + "%";
    bubble.style.left = random() * 100 + "%";
    bubble.style.transform = "scale(calc(0.5 + 5 * " + random() + "))";
    document.body.appendChild(bubble);
}

// Vérifiez si le navigateur supporte les services workers
if ("serviceWorker" in navigator) {
    // Enregistrez le service worker
    navigator.serviceWorker
        .register("/build/service-worker.js")
        .then(function (registration) {
            console.debug("Service Worker enregistré avec succès");
        })
        .catch(function (err) {
            console.debug("L'enregistrement du Service Worker a échoué : ", err);
        });
}
