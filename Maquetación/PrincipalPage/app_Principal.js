const buttonCategorias = document.getElementById("Categorias");
const buttonFarmacia = document.getElementById("Farmacia");
const buttonSalud = document.getElementById("Salud");
const buttonCuidado = document.getElementById("Cuidado");
const buttonBebé = document.getElementById("Bebé");

const openNavCategorias =(Categoria)=>{
    if(document.querySelector(`.ulNavCategorias${Categoria}`).style.display == "none"){
        document.querySelector(`.ulNavCategorias${Categoria}`).style.display = "initial"
    }else{
        document.querySelector(`.ulNavCategorias${Categoria}`).style.display = "none"
    }
}


buttonCategorias.addEventListener("click",(e)=>{openNavCategorias("");});
buttonFarmacia.addEventListener("click",(e)=>{openNavCategorias("-Farmacia");});
buttonSalud.addEventListener("click",(e)=>{openNavCategorias("-Salud");});
buttonCuidado.addEventListener("click",(e)=>{openNavCategorias("-Cuidado");});
buttonBebé.addEventListener("click",(e)=>{openNavCategorias("-Bebé");});
