const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(()=>{timerId=setInterval((()=>{!function(){function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}r.style.backgroundColor=`${t()}`}()}),1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(()=>{clearInterval(timerId),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.2584d3fd.js.map
