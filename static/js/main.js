"use strict";function initGrid(){$(".dream-grid").masonry({itemSelector:".dream-column"})}function savePostAsImg(){var t=$(".post-list"),e=t.prop("scrollWidth"),n=t.prop("scrollHeight"),o=$(".post-list .post-disqus-area").prop("scrollHeight"),a=document.createElement("canvas"),i=e,r=n-o;return a.width=2*i,a.height=2*r,a.getContext("2d").scale(2,2),html2canvas(document.querySelector(".post-single-main"),{canvas:a,width:i,height:r,scale:2,useCORS:!0}).then(function(t){var e=t.getContext("2d");e.mozImageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1,e.imageSmoothingEnabled=!1;var n=t.toDataURL("image/png"),o=document.createElement("a");o.href=URL.createObjectURL(dataURLtoBlob(n)),o.download="screenshot.png",o.click()}),!1}function dataURLtoBlob(t){for(var e=t.split(","),n=e[0].match(/:(.*?);/)[1],o=atob(e[1]),a=o.length,i=new Uint8Array(a);a--;)i[a]=o.charCodeAt(a);return new Blob([i],{type:n})}$(document).ready(function(){initFilp(),initGrid(),initTags(),initAccordion()});