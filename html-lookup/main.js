// SHOW/HIDE ACTIVE AND DEPRECATED TAGS

const active = document.querySelectorAll('.tag:not(.deprecated)');
const deprecated = document.getElementsByClassName('deprecated');

const showHideDeprecated = document.getElementById('show-deprecated');
const showHideActive = document.getElementById('show-active');

console.log(active);

showHideDeprecated.addEventListener("click", function(){
    if(showHideDeprecated.checked){
        for(var i=0; i<deprecated.length; i+=1){
            deprecated[i].style.display = "block";
        }
    } else {
        for(var i=0; i<deprecated.length; i+=1){
            deprecated[i].style.display = "none";
        }
    }
});

showHideActive.addEventListener("click", function(){
    if(showHideActive.checked){
        for(var i=0; i<active.length; i+=1){
            active[i].style.display = "block";
        }
    } else {
        for(var i=0; i<active.length; i+=1){
            active[i].style.display = "none";
        }
    }
});
