/* =============================================================================
    PROJECTS
============================================================================= */

/* Projects Layout Toggle */

let gridViewIcon = $("i#gridicon");
let gridViewContainer = $("#projects-grid");

let listViewIcon = $("i#listicon");
let listViewContainer = $("#projects-list");

gridViewIcon.click(function(){
  gridViewIcon.toggleClass('active');
  gridViewContainer.toggleClass('active');
  listViewIcon.toggleClass('active');
  listViewContainer.toggleClass('active');
})

listViewIcon.click(function(){
  listViewIcon.toggleClass('active');
  listViewContainer.toggleClass('active');
  gridViewIcon.toggleClass('active');
  gridViewContainer.toggleClass('active');
})

/* Border Radius Visualization */
const box = document.getElementById("box");
const slider = document.getElementById("slider");
let radius = document.getElementById("radius").value;
let currentRadius = document.getElementById("currentRadius");

currentRadius.innerHTML = radius;
slider.onchange = updateRadius;

function updateRadius(){
 let radius = document.getElementById("radius").value;
 currentRadius.innerHTML = radius;
 box.style.borderRadius = radius + "%";
};
