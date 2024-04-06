import Storage from "./storage.js";
import List from "./list.js";
export default function () {

    //Crear objeto
    const storage = new Storage();
    const list = new List();

    // Datos de las películas disponibles
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    // Recorrer películas mostradas
    pelis_viewed.forEach(peli => {

        //Capturar el boton
        let delete_btn = peli.querySelector('.delete');

        //Aplicarle un evento click
        delete_btn.onclick = function () {

            //Conseguir el id de la película que quiero borrar
            const peli_id = this.getAttribute('data-id');

            //filtrar el array para que elimine la que no quiero
            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id));

            //Actualizar datos en LocalStorage
            storage.save(new_pelis_stored);

            //Volver a mostrar el listado
            list.show(new_pelis_stored);
        }
    });
}