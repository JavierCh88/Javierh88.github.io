function resaltarDiv(idDiv) {
  var mdiv = document.getElementsByClassName(idDiv);
  var div = mdiv[0];
  var intervalId = setInterval(function () {
    div.style.backgroundColor =
      div.style.backgroundColor == "rgb(43, 130, 136)" ? "rgba(0, 0, 0, 0)" : "rgb(43, 130, 136)";
  }, 500);
  setTimeout(function () {
    clearInterval(intervalId);
    div.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }, 2000);
}
