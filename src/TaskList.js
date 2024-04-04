// TaskList.js

import React from 'react'

function TaskList({ tasks, onToggleTaskCompletion }) {
  return (
    <ul data-cy="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={() => onToggleTaskCompletion(task.id)}
          data-cy="task-item"
        >
          {task.text}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
