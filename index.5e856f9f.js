var e=function(e,t,n,i,o){var a=document.createElement("div");a.classList.add("notification",o);var s=document.createElement("h2");s.classList.add("title"),s.textContent=n;var c=document.createElement("p");c.textContent=i,a.appendChild(s),a.appendChild(c),a.style.position="absolute",a.style.top="".concat(e,"px"),a.style.right="".concat(t,"px"),a.style.width="320px",document.body.appendChild(a),setTimeout(function(){a.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.5e856f9f.js.map
