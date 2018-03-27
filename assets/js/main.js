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
