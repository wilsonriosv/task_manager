import React from 'react'
import { Task } from '../../models/task_class'
import { LEVELS } from '../../models/levels_enum.js';
import { TaskComponent } from '../pure/task'

export const TaskListComponent = () => {

    const defaultTask = new Task('TareaEjemplo', 'Descripción Ejemplo', false, LEVELS.NORMAL);

    // eslint-disable-next-line no-unused-vars
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea ')
    }
  return (
    <div>
        <div>
            <h2>Your tasks</h2>
        </div>
        <TaskComponent task={defaultTask}></TaskComponent>

    </div>

  )
}
