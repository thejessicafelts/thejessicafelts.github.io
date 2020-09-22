// SHOW/HIDE DEPRECATED TAGS

const deprecated = document.getElementsByClassName('deprecated');
const showHideDeprecated = document.getElementById('show-deprecated');

showHideDeprecated.addEventListener("click", function(){
    if(showHideDeprecated.checked){
        for (var i=0; i<deprecated.length; i+=1){
            deprecated[i].style.display = "block";
        }
    } else {
        for (var i=0; i<deprecated.length; i+=1){
            deprecated[i].style.display = "none";
        }
    }
});