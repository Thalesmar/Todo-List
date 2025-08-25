   const userInput = document.getElementById('input');
        const taskBtn = document.getElementById('taskBtn');
        const taskList = document.getElementById('taskList');

        const addingTask = () => {
            if(userInput.value.trim() !== ""){
                const newTask = document.createElement('li');
                newTask.classList.add('task-style');
                
                //task text
                const taskText = document.createElement('span');
                taskText.classList.add('task-text');
                taskText.textContent = userInput.value;

                //delete button
                const delBtn = document.createElement('button');
                delBtn.classList.add('delete-btn');
                delBtn.textContent = '✖';

                //append child
                newTask.appendChild(taskText);
                newTask.appendChild(delBtn);

                taskList.appendChild(newTask);

                userInput.value = "";

                delBtn.addEventListener('click', () => {
                    newTask.remove();
                });
            }
        };

        taskBtn.addEventListener('click', addingTask);
        
        // Add Enter key support
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addingTask();
            }
        });