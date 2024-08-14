
const tasks = new Map(); // Map para almacenar todas las tareas
const completedTasks = new Map(); // Map para almacenar solo tareas completadas

const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn'); 
const newTaskInput = document.getElementById('new-task');

addTaskBtn.addEventListener('click', () => {
    const taskName = newTaskInput.value.trim();
    if (taskName !== "") {
        addTask(taskName);
        newTaskInput.value = "";
    }
});

function addTask(taskName) {
    const taskId = tasks.size + 1; // Genera un ID incremental basado en el tamaño del Map

    // Añadir una nueva entrada al Map principal
    tasks.set(taskId, { name: taskName, completed: false });

    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = taskName;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        const task = tasks.get(taskId);
        task.completed = checkbox.checked;

        if (task.completed) {
            completedTasks.set(taskId, task); // Agregar al Map de tareas completadas
            console.log(`Tarea "${task.name}" guardada y marcada como completada.`);
        } else {
            completedTasks.delete(taskId); // Eliminar del Map de tareas completadas si se desmarca
            console.log(`Tarea "${task.name}" desmarcada y eliminada de tareas completadas.`);
        }

        li.classList.toggle('completed', task.completed);
    });

    li.appendChild(checkbox);
    taskList.appendChild(li);
}
