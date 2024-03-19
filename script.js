function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
    var taskList = document.getElementById("task-list");
    var listItem = document.createElement("li");
    listItem.innerHTML = '<span>' + taskText + '</span><button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
  
  function deleteTask(btn) {
    var listItem = btn.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
  