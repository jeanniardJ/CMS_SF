/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// assets/app.js

// any CSS you import will output into a single css file (app.css in this case)
import "bootstrap-icons/font/bootstrap-icons.css";

const $ = require("jquery");

require("bootstrap/js/index.umd");

require("bootstrap-table/src/bootstrap-table");
require("bootstrap-table/src/extensions/mobile/bootstrap-table-mobile");
require("bootstrap-table/src/extensions/addrbar/bootstrap-table-addrbar");
require("bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh");
require("bootstrap-table/src/locale/bootstrap-table-fr-FR");

require("tinymce");

import "./bootstrap-admin";

import("./styles/admin/admin.scss");

import("./_layouts/modals");
import("./_layouts/toasts");
import("./_layouts/validationForm");
//import('./devis.js')
