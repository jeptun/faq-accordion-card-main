"use strict";const testString="Javascript test!";console.log(testString);const fruits=["😀","✨","💀"];fruits.map((t=>{console.log(t)}));const acc=document.getElementsByClassName("accordion-button");let i;for(i=0;i<acc.length;i++)acc[i].addEventListener("click",(function(){this.classList.toggle("active");let t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}));
//# sourceMappingURL=script.js.map