
document.addEventListener('DOMContentLoaded', init);

function init() {

	const addTask = document.getElementById('addTaskButton');
	const taskList = document.getElementById('taskList');
	const taskInput = document.getElementById('taskInput');
	const counter = document.getElementById('counter');
	const removeCompleted = document.getElementById('removeFinishedTasksButton');
	let toDoCounter = 0;
	counter.innerText = `Remaining tasks: ${toDoCounter}`;

	addTask.addEventListener('click', function() {

		if(taskInput.value.length > 1 && taskInput.value.length < 100) {

			const taskItem = document.createElement('li');

			const taskDesc = document.createElement('h1');
			taskDesc.innerText = taskInput.value;

			const deleteBtn = document.createElement('button');
			deleteBtn.innerText = 'Delete';

			const completeBtn = document.createElement('button');
			completeBtn.innerText = 'Complete';

			taskList.appendChild(taskItem);
			taskItem.appendChild(taskDesc);
			taskItem.appendChild(deleteBtn);
			taskItem.appendChild(completeBtn);

			taskInput.value = null;
			showRemainingTasks(taskItem);

			deleteBtn.addEventListener('click', function() {
				taskItem.remove();
				toDoCounter--;
				counter.innerText = `Remaining tasks: ${toDoCounter}`;
			});

			completeBtn.addEventListener('click', function() {
				if(this.parentElement.classList.value.includes('done')) {
					taskItem.classList.remove('done');
				}
				else {
					taskItem.classList.add('done');
				}

				showRemainingTasks(this.parentElement);
			});
		} else {
			alert('Task description should consist of 6-99 characters.');
		}
	});

	removeCompleted.addEventListener('click', function() {
		taskList.querySelectorAll('li.done').forEach(item => item.remove());
	});

	function showRemainingTasks(taskItem) {
		if(taskItem.classList.value.includes('done')) toDoCounter--;
		else toDoCounter++;
		counter.innerText = `Remaining tasks: ${toDoCounter}`;
	}
}
