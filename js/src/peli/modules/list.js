import deleteOfList from "./delete.js"
import edit from "./edit.js";
export default class List {

    constructor() {
        //Seleccionar elementos del DOM a usar 
        this.content = document.querySelector("#content");
    }

    pelitemplate(peli){
        return `
        <article class="peli-item" id="peli-${peli.id}>
        <h3 class="title">${peli.title}</h3>
        <p class="description"> ${peli.description} </p>

        <button class="edit" data-id="${peli.id}">Editar</button>
        <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>
        
        `;
    }

    show(pelis){
        //Vaciar dom del contenedor principal
        this.content.innerHTML = "";

        //Recorrer y mostrar todos los objetos del local Storage
        pelis.forEach(peli => {
            this.content.innerHTML += this.pelitemplate(peli);
        });

        // Funcionalidad botones de borrado
        deleteOfList();

        //Funcionalidad botones de edición 
        edit();
    }


}