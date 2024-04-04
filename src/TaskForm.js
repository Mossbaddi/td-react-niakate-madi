// TaskForm.js

import React, { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  const handleChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskText.trim()) {
      onAddTask(taskText)
      setTaskText('')
    }
  }

  return (
    <form data-cy="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={taskText}
        onChange={handleChange}
        data-cy="task-input"
      />
      <button data-cy="add-task-btn" type="submit">
        Ajouter
      </button>
    </form>
  )
}

export default TaskForm
