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
}

const lista = new ListaDeTareas();
lista.agregarTarea("Hacer compras");
lista.agregarTarea("Terminar proyecto");
lista.marcarTareaComoCompletada(1);

console.log(lista.obtenerTareasPendientes());
