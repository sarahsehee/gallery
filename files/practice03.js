var num = 1;

function gallery(num) {
  var imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "../imgs/img_" + num + ".jpg");
}
