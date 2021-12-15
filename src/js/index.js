import "./import/modules";
import "./import/components";

//libraries
import $, { each } from "jquery";
import Inputmask from "inputmask";
import { mobileInit } from "../blocks/components/mobileMenu/mobileMenu";

//Remove animations on load
window.onload = function() {
    document.querySelector('body').classList.remove('perf-no-animation');
}

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});


//Mobile menu init
mobileInit();

//Phone input mask init
if (document.querySelector("input[type=tel]")) {
    const IMaskPhone = new Inputmask("+375 (99) 999-99-99")
    IMaskPhone.mask(document.querySelector("input[type=tel]"))
}

//Browser-level image lazy-loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    const script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.1/lazysizes.min.js';
    document.body.appendChild(script);
    console.log('lazysizes load');
}