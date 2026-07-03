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
      <input class="input-task" type="checkbox" />
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
      alerta();
      removeAlert();
     
    }
  });
 
  itenspadrao.appendChild(li);
  inputItem.value = "";
   select()
});

const botaoDelete = document.querySelectorAll(".delete");
botaoDelete.forEach((button) => {
  button.addEventListener("click", (event) => {
    const pegandoItem = event.target.closest("li");
    if (pegandoItem) {
      pegandoItem.remove();
      alerta();
      removeAlert();
    }
  });
});

const p = document.querySelector(".warning");
//função para exibir alerta
function alerta() {
   p.style.display = "flex";
  setTimeout(() => {
    p.style.display = "none";
  }, 2000);
  
}
//funcção para remover alerta
function removeAlert() {
  const imgWarning = document.querySelector(".warning_remove");
  imgWarning.addEventListener("click", () => {
    p.style.display = "none";
  });
}

//Função para riscar o item da lista
function select(){
  const inputCheckbox = document.querySelectorAll(".input-task")
  const nameItem = document.querySelectorAll(".container_name_item")
  inputCheckbox.forEach((input)=>{
    input.addEventListener("change",()=>{
     if(input.checked){
       input.parentElement.style.textDecoration = "line-through"
     }else{
      input.parentElement.style.textDecoration = "none"
     }
    })
  })
   
}
select()