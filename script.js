const listaTarea = document.getElementById('listaTareas');
const tareaInput = document.getElementById('tareaInput')


function agregartarea() {
    const tareaText = tareaInput.value.trim();

    const tarea = {
        //tiempo
        id: Date.now(),
        texto: tareaText
    };

    //crear un elemento lista
    const tareaItem = document.createElement('li');
    tareaItem.className = "tarea-item";
    tareaItem.id = tarea.id;

    //crear spam
    const tareaSpan = document.createElement('span');
    tareaSpan.textContent = tarea.texto;

    tareaItem.appendChild(tareaSpan);

    listaTarea.appendChild(tareaItem);
    guardarTarea()
};

function guardarTarea() {
    const tareas = [];
    document.querySelectorAll('.tareaItem');
    console.log(document.querySelectorAll('.tarea-item'));

    document.querySelectorAll('.tarea-item').forEach(

        item => {
            const tarea = {
                id: item.id,
                texto: item.querySelector('span').textContent
            };
            tareas.push(tarea);
        }

    );

    // pasamos el arreglo de tareas al localStorage y usamos stringify para que tenga formato string
    localStorage.setItem('tareas', JSON.stringify(tareas));
    console.log(localStorage);
}

//para la proxima clase
document.addEventListener('DOMContentLoaded', cargarTareas);

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.forEach(
        tarea => {
            // se crea el elemento de la lista
            const tareaItem = document.createElement('li');
            tareaItem.className = 'tarea-item';
            // creas el span
            const tareaSpan = document.createElement('span');
            tareaSpan.textContent = tarea.texto;



            // agregamos con appendChild lo que se encuentra en el span y tareaItem
            const btnEliminar = document.createElement('button');
            btnEliminar.innerText = "Eliminar";
            tareaItem.appendChild(tareaSpan);
            listaTarea.appendChild(tareaItem);
        }
    );
}



function eliminarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    const eliminarTarea = document.getElementById('btnEliminar');
    eliminarTarea.onclick = function(){
        
    }

    listaTarea.removeChild(tareaItem);
    localStorage.removeItem(tarea);
    tareaItem.removeChild(listaTarea);

}



