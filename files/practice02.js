///////////
var color = ["white", "yellow", "blue", "aqua", "purple", "black", "orange"];

var i = 0;
function changeColor() {
  i++;
  if (i >= color.length) {
    i = 0;
  }

  var bodyTag = document.getElementById("galleryZone");
  galleryZone.style.backgroundColor = color[i];
}

//////////////

var num = 1;

function gallery(direct) {
  if (direct) {
    if (num == 7) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }

  var imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "../imgs/pic_" + num + ".jpg");
}
