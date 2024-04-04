// App.js

import React, { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function App() {
  const storedTask = JSON.parse(localStorage.getItem('tasks'))
  const [tasks, setTasks] = useState(storedTask != null ? storedTask : [])
  const [filter, setFilter] = useState('all')

  // Fonction pour récupérer les tâches depuis le localStorage
  const getTasksFromLocalStorage = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))

    console.log('stored tasks')
    console.log(storedTasks)
    console.log('stored tasks')
    if (storedTasks) {
      setTasks(storedTasks)
    }
  }

  useEffect(() => {
    getTasksFromLocalStorage() // Appel de la fonction au montage initial
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    )
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed
    } else if (filter === 'uncompleted') {
      return !task.completed
    } else {
      return true
    }
  })

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TaskForm onAddTask={addTask} />
      <div className="task-filters">
        <button onClick={() => setFilter('all')} data-cy="filter-btn-all">
          Toutes
        </button>
        <button
          onClick={() => setFilter('completed')}
          data-cy="filter-btn-done"
        >
          Complétées
        </button>
        <button
          data-cy="filter-btn-undone"
          onClick={() => setFilter('uncompleted')}
        >
          Non complétées
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        onToggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  )
}

export default App
