import Storage from "./storage.js";
import List from "./list.js";

export default function () {
    //Crear los objetos
    const storage = new Storage();
    const list = new List();

    //Conseguir datos de películas
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");

    //Recorrer películas mostradas
    pelis_viewed.forEach(peli => {

        //Seleccionar el boton de editar
        let edit_btn = peli.querySelector(".edit");

        //Asignar un evento click
        edit_btn.onclick = function () {

            //Conseguir id de la película a borrar 
            const id = this.getAttribute("data-id");

            //Eliminar los botones de borrar y editar 
            edit_btn.remove();
            peli.querySelector(".delete").remove;

            //Añadir un trozo de html debajo de los botones
            let peli_edit_html = `
                <div class="edit_form">
                    <hr>
                    <h3 class="title"> Editar pelicula </h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}" />
                    </form>
                </div>
                `;
            peli.innerHTML += peli_edit_html;
            //Seleccionar el boton de actualizar

            //Aplicar evento click

            //Buscar el indice de la pelicula a actualizar

            //Guardar objeto dentro de ese indice 

            //Actualizar LocalStorage

            //Volver a mostrar el listado 
        }








    });




}