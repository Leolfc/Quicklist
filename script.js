const form = document.querySelector("form");
const inputItem = document.querySelector("#input_item");
const itenspadrao = document.querySelector(".item-padrao");
let listaLimpa = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const apenasTexto = /^[a-zA-ZÀ-ÿ\s]+$/;
  if (!apenasTexto.test(inputItem.value)) {
    alert("Digite apenas texto!!");
    inputItem.value = "";
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="container_name_item">
      <input class="input-task" type="radio" />
      <span>${inputItem.value}</span>
    </div>

    <button class="delete" type="button">
      <img src="img/Frame-2.png" alt="" />
    </button>
  `;
  if (!listaLimpa) {
    itenspadrao.innerHTML = "";
    listaLimpa = true;
  }
  const botaoDeleteDinamico = li.querySelector(".delete");
  botaoDeleteDinamico.addEventListener("click", (event) => {
    const pegandoItem = event.target.closest("li");
    if (pegandoItem) {
      pegandoItem.remove();
    }
  });
  itenspadrao.appendChild(li);
  inputItem.value = "";
});

const botaoDelete = document.querySelectorAll(".delete");
botaoDelete.forEach((button) => {
  button.addEventListener("click", (event) => {
    const pegandoItem = event.target.closest("li");
    if (pegandoItem) {
      pegandoItem.remove();
    }
  });
});
