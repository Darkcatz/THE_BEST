var hi = document.getElementById("food");
var no = function(){
    hi.textContent = "REDIRECTING";
};

hi.addEventListener("click",no);
