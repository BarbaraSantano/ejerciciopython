let cajas = document.querySelectorAll('.contenedor div');
cajas.forEach(cajita => {
    cajita.addEventListener('click', Desaparecer)
})
function Desaparecer(){
    this.style.opacity=0;
}