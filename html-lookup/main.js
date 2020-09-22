// SHOW/HIDE DEPRECATED TAGS

const deprecated = document.getElementsByClassName('deprecated');
const showHideDeprecated = document.getElementById('show-deprecated');

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
    warningMessage()
});

// SHOW/HIDE ACTIVE TAGS

const active = document.querySelectorAll('.tag:not(.deprecated)');
const showHideActive = document.getElementById('show-active');

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
    warningMessage()
});

// DISPLAY MESSAGE WHEN NO TAGS ARE DISPLAYED

function warningMessage(){
    const checked = document.querySelectorAll('input:checked');
    const warningMsg = document.getElementById('warning--no-tags');

    if (checked.length === 0){
        warningMsg.style.display = "block";    
    } else {
        warningMsg.style.display = "none";
    }
}