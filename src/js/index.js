import "./import/modules";
import "./import/components";

//libraries
import $ from "jquery";
import Inputmask from "inputmask";
import { mobileInit } from "../blocks/components/mobileMenu/mobileMenu";
//components
/* import { initTabs } from "../blocks/components/tabs/tabs"; */

/* initTabs('.tabs', '.tab-buttons .btn', '.tab-content .content'); */

window.onload = function() {
    document.querySelector('body').classList.remove('perf-no-animation');
}

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});


mobileInit();

if (document.querySelector("input[type=tel]")) {
    const IMaskPhone = new Inputmask("+375 (99) 999-99-99")
    IMaskPhone.mask(document.querySelector("input[type=tel]"))
}