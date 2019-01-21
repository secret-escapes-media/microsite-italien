// general js for the project that wouldn't be a reuseable component


var coll = document.getElementsByClassName("bv-collapsible");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("bv-active");
    var content = this.previousElementSibling;
    //alert(content);
    if (content.style.maxHeight){
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = "500px";
      content.style.overflow = "auto";
    }
  });
}
