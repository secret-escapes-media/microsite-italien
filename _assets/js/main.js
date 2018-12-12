// general js for the project that wouldn't be a reuseable component

function toggle(){}

var coll = document.getElementsByClassName("bv-collapsible");
var collb = document.getElementsByClassName("bv-collapsible2");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("bv-active");
    var content = this.previousElementSibling;
    //alert(content);
    if (content.style.maxHeight){
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = content.scrollHeight + "px";

    }
  });
}
