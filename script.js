document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Adicionar nova tarefa
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.classList.add('task');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-button">Remover</button>
            `;

            // Marcar tarefa como concluída
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Remover tarefa
            const removeButton = li.querySelector('.remove-button');
            removeButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que a tarefa seja marcada como concluída
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Adicionar tarefa com Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});