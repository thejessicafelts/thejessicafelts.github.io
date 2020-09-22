// Show/Hide Checkbox Selections
let selections = 2;

// Deprecated Tags
const deprecated = [...document.getElementsByClassName('deprecated')];
const showHideDeprecated = document.getElementById('show-deprecated');
showHideDeprecated.addEventListener("click", function(){
    showHide(showHideDeprecated, deprecated)
});

// Active Tags
const active = [...document.querySelectorAll('.tag:not(.deprecated)')];
const showHideActive = document.getElementById('show-active');
showHideActive.addEventListener("click", function(){
    showHide(showHideActive, active)
});

// Generic Function
function showHide(trigger, elements) {
    if(trigger.checked) {
        selections++;
        elements.map(el => el.style.display = "block");
    } else {
        selections--;
        elements.map(el => el.style.display = "none");
    }
    warningMsg(selections);
}

// Warning Message
function warningMsg(count){
    const warningMsg = document.getElementById('warning--no-tags');
    if (count === 0){
        warningMsg.style.display = "block";    
    } else {
        warningMsg.style.display = "none";
    }
}