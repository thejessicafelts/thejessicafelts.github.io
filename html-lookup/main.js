// Show/Hide Checkbox Selections
let selections = 3;

// Active Tags
const active = [...document.querySelectorAll('.tag:not(.deprecated):not(.non-standard)')];
const showHideActive = document.getElementById('show-active');
showHideActive.addEventListener("click", function(){
    showHide(showHideActive, active)
});

// Non-Standard Tags
const nonStandard = [...document.querySelectorAll('.non-standard')];
const showHideNonStandard = document.getElementById('show-non-standard');
showHideNonStandard.addEventListener("click", function(){
    showHide(showHideNonStandard, nonStandard)
});

// Deprecated Tags
const deprecated = [...document.querySelectorAll('.deprecated')];
const showHideDeprecated = document.getElementById('show-deprecated');
showHideDeprecated.addEventListener("click", function(){
    showHide(showHideDeprecated, deprecated)
});

// Generic Function
function showHide(trigger, elements){
    if(trigger.checked){
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