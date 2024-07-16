document.addEventListener('DOMContentLoaded', function() {
    const taskItems = document.querySelectorAll('.task-checkbox');
    const completedTasksList = document.querySelector('.completed-tasks');

    taskItems.forEach(taskItem => {
        const input = taskItem.closest('tr').querySelector('.task-input');

        taskItem.addEventListener('change', function() {
            if (this.checked) {
                const taskText = input.value;
                if (taskText.trim()) {
                    const listItem = document.createElement('li');
                    listItem.textContent = taskText;
                    completedTasksList.appendChild(listItem);
                    input.value = '';
                    this.checked = false;
                } else {
                    alert('Please enter a task before checking it off.');
                    this.checked = false;
                }
            }
        });
    });
});
