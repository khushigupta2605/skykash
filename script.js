function openSidebar() {
  document.getElementById("sidebar").style.width = "400px";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("page").classList.add("blur");
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("page").classList.remove("blur");
}
