const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const todoContainer = document.querySelector(".todo-container");

addBtn.addEventListener("click", function () {
  const value = input.value.trim();
  if (value) {
    input.value = "";
    const html = `<div class="todo-list">
    <p class="todo-item">${value}</p>
    <button class="edit">EDIT</button>
    <button class="delete">DELETE</button>
  </div>`;
    todoContainer.insertAdjacentHTML("beforeend", html);
    const deleteBtn = document.querySelectorAll(".delete");

    deleteBtn.forEach((e) => {
      e.addEventListener("click", function () {
        e.parentElement.remove();
      });
    });

    const editBtn = document.querySelectorAll(".edit");

    editBtn.forEach((e) => {
      e.addEventListener("click", function () {
        const editValue = prompt("Edit the Task ");
        e.parentElement.firstElementChild.textContent = editValue;
      });
    });
  }
  if (!value) alert("Enter the Task");
});
