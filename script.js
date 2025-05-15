function abrirModal (src) {
  document.getElementById("modal-img").src = src;
  document.getElementById("modal").style.display = "flex";
}

function fecharModal () {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    fecharModal();
  }
};
