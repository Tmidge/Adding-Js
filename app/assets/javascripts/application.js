// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function disableButton(){
  var updateButton = document.getElementById("update_button");
  updateButton.disabled = true;
  updateButton.value = "Updating";
}

function showGrade(){
  var parent = document.getElementsByClassName("associations")[0];
  var lastChild = parent.lastElementChild;
  lastChild.style.display = "block"
  var addGradeButton = document.getElementById("grade_button");
  addGradeButton.style.display = "none";

}

function deleteRow(obj){
  var id = obj.id;
  var row = document.getElementById("row_"+id);
  row.style.display = "none";
}
