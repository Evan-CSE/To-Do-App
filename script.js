
    let FormElement = document.querySelector('#taskForm');
    FormElement.addEventListener('submit',addTask)
    let CompletedTask = document.querySelector('#completedTask');


    function createTask(taskTitle)
    {
        let taskContainer = document.createElement('li');
        let checkBox = document.createElement('input');
        let taskLabel = document.createElement('label');
        checkBox.type = 'checkbox';
        taskLabel.innerText = taskTitle;
        taskContainer.append(checkBox,taskLabel);
        return taskContainer;
    }


    function addTask(event){
        event.preventDefault();
        let item = createTask(document.querySelector('#taskTitle').value);
        document.querySelector('#tasks').appendChild(item);
        document.querySelector('#taskTitle').value='';
        //add listener to check box
        bindListener(item,CompleteTask);
    }


    function bindListener(item,CompleteTask){
        let checkBox = item.querySelector('input[type="checkbox"]');
        checkBox.onchange = CompleteTask;
    }

    function CompleteTask(event){
        event.preventDefault();
        let labelContainer = this.parentNode;
        let textContainer = labelContainer.querySelector('label');
        let item = document.createElement('li');
        item.innerText = textContainer.innerText;
        let deleteButton = document.createElement('button');
        deleteButton.className = 'btn-danger';
        deleteButton.innerText = 'Delete Task';
        deleteButton.onclick = DeleteTask;
        item.appendChild(deleteButton);
        CompletedTask.append(item);

        //remove from pending task
        let taskContainer = labelContainer.parentNode;
        console.log(taskContainer);
        taskContainer.removeChild(labelContainer);
    }

    function DeleteTask(event){
        let item = this.parentNode;
        let itemContainer = item.parentNode;
        let confirmation = window.confirm("Do you really want to delete this task?");
        if(confirmation){
            itemContainer.removeChild(item);
        }
    }