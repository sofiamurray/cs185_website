
back_to_top = document.getElementById("back_to_top");

window.onscroll = function() {scrollButtonFunc()};

function scrollButtonFunc() {
    console.log(document.documentElement.scrollTop)
    
  if (document.documentElement.scrollTop > (document.documentElement.scrollHeight/4)) {
    
    back_to_top.style.display = "block";

  } else {
    back_to_top.style.display = "none";
  }
}
