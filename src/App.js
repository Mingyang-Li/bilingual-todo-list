/*
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
*/
import React, { useState } from "react";
import { nanoid } from "nanoid";
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  )
  );

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const tasksNoun = taskList.length > 1 ? 'tasks' : 'task';
  var headingText = `${taskList.length} ${tasksNoun} remaining`;
  var chnText = `还有${taskList.length}件事没做`;


  function translate(e) {
    var TranslateBtnText = e.innerHTML;
    TranslateBtnText = '点击查看英文';
    e.target.innerHTML = TranslateBtnText;

    var headline = document.getElementById('label__lg');
    headline.innerHTML = "今天干啥？"

    var addBtn = document.getElementById('btn__primary');
    addBtn.innerHTML = "添加"

    var deleteBtn = document.getElementById('delete-btn');
    deleteBtn.innerHTML = '删除';

    var editBtn = document.getElementById('edit-btn');
    editBtn.innerHTML = '修改';

    var ShowBtn = document.getElementById('visible-span');
    ShowBtn.innerHTML = '显示全部';

    var description = document.getElementById('list-heading');
    description.innerHTML = chnText;

  }


  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />

      <button className='translate-btn' onClick={translate} id='translate-btn'>Translate to Chinese</button>

      <div className="filters btn-group stack-exception">
        <FilterButton />

      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;