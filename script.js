document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskCategory = document.getElementById("taskCategory");
    const taskText = taskInput.value;

    if (taskText) {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.textContent = `${taskText} (${taskCategory.value}) - ${taskDate.value}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = ""; // Limpiar el campo de entrada
        taskDate.value = ""; // Limpiar el campo de fecha
        taskCategory.selectedIndex = 0; // Reiniciar la selección
    } else {
        alert("Por favor, escribe una tarea.");
    }
});

// Función para mostrar consejos de estudio
function displayStudyTips() {
    const tips = [
        "Organiza tu tiempo con una lista de tareas.",
        "Estudia en un ambiente tranquilo y sin distracciones.",
        "Utiliza técnicas de memoria como la repetición y el resumen.",
        "Haz pausas regulares durante el estudio para mantener la concentración.",
        "Revisa tus notas regularmente."
    ];

    const studyTipsDiv = document.getElementById("studyTips");
    studyTipsDiv.innerHTML = tips.map(tip => `<p>${tip}</p>`).join('');
}

displayStudyTips(); // Llamar a la función para mostrar consejos al cargar la página
