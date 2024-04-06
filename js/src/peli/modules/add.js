import Storage from "./storage.js";
import List from "./list.js";
export default class Add {

    constructor() {
        //Crear objetos
        this.storage = new Storage();
        this.list = new List();

        // Conseguir elementos del DOM a utilizar
        this.title_field = document.querySelector("#title");
        this.description_field = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    peliSave() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            //Conseguir datos actualizados 
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);

            //Datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            // Validación 
            if (title != "" || description != "") {

                //Crear objeto a guardar
                let peli = {
                    id: 1,
                    title,
                    description
                };
                //Añadir al array de objetos 
                pelis.push(peli);

                //Guardar en el LocalStorage
                this.storage.save(pelis);

                //Actualizar listado
                //this.list.addToList(peli, pelis);
                this.list.show(pelis);

            }
            else {
                alert("Introducir datos en el formulario");
            }


            console.log("acabas de enviar el formulario de add", title, description)
            return false;
        }
    }
}