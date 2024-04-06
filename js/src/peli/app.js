import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
export default class App {

    constructor() {

        //Inicializar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }

    load() {

        //Añadir películas
        this.add.peliSave();

        //Conseguir array objetos Local Storage
        const pelis = this.storage.getData();

        //Listar pelícuas
        this.list.show(pelis);

        //Buscar películas
        console.log("La aplicación de películas ha sido inicializada...");

    }
}