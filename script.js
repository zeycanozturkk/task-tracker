const addBtn = document.querySelector('.btn');
const taskContainer = document.querySelector('.list-container');
const taskInput = document.querySelector('.task-input');
const markBox = document.querySelectorAll('.mark');
const dltBox = document.querySelectorAll('.dlt');

addBtn.addEventListener('click', addToDo);

function addToDo(event) {
    const toDodiv = document.createElement('div');
    toDodiv.className = 'task';
   
    const taskBox = document.createElement('div');
    taskBox.className = 'task-input';
    taskBox.style.display = 'inline-block'
    taskBox.textContent = taskInput.value;
    toDodiv.appendChild(taskBox); 
    
    const dltBtn = document.createElement('button');
    dltBtn.className = 'dlt';
    dltBtn.innerText ='\u2716';

    dltBtn.addEventListener('click', ()=> {
       taskContainer.removeChild(toDodiv);
    })
    toDodiv.appendChild(dltBtn);


    const markBtn = document.createElement('button');
    markBtn.className = 'mark';
    markBtn.innerText = '\u2705';

    markBtn.addEventListener('click', ()=> {
        taskBox.classList.toggle('strikethrough');
    })
    toDodiv.appendChild(markBtn);  

    taskContainer.appendChild(toDodiv);

    taskInput.value = '';
};






