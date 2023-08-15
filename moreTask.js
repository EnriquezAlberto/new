class Tarea {
  constructor(id, descripcion, completada) {
    this.id = id;
    this.descripcion = descripcion;
    this.completada = completada;
  }
}

class ListaDeTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(descripcion) {
    const nuevaTarea = new Tarea(this.tareas.length + 1, descripcion, false);
    this.tareas.push(nuevaTarea);
  }

  marcarTareaComoCompletada(id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = true;
    }
  }

  obtenerTareasPendientes() {
    return this.tareas.filter(t => !t.completada);
  }

  mergeCon(lista) {
    lista.tareas.forEach(tarea => {
      this.agregarTarea(tarea.descripcion);
      if (tarea.completada) {
        const tareaAgregada = this.tareas.find(t => t.descripcion === tarea.descripcion);
        if (tareaAgregada) {
          tareaAgregada.completada = true;
        }
      }
    });
  }
}

// Crear instancias de ListaDeTareas
const lista1 = new ListaDeTareas();
const lista2 = new ListaDeTareas();

// Agregar tareas a las listas
lista1.agregarTarea("Hacer compras");
lista1.agregarTarea("Limpiar casa");
lista2.agregarTarea("Terminar proyecto");
lista2.marcarTareaComoCompletada(1);

// Realizar el merge de listas
lista1.mergeCon(lista2);

// Mostrar las tareas resultantes
console.log("Lista 1 después del merge:");
console.log(lista1.tareas);

// Crear una tercera instancia de ListaDeTareas
const lista3 = new ListaDeTareas();

// Agregar tareas a la tercera lista
lista3.agregarTarea("Estudiar para el examen");
lista3.agregarTarea("Hacer ejercicio");

// Mostrar las tareas de la tercera lista
console.log("Lista 3:");
console.log(lista3.tareas);
