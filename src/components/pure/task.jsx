
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task_class'
//importamos la hojs de estilo task.scss
//import '../../styles/task.scss'

export const TaskComponent = ({ task }) => {
    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

  return (
    <div>
        <h4 className='task-name'>Nombre: {task.name} </h4>
        <h4>Descripción: {task.description} </h4>
        <h4>Level: {task.level} </h4>
        <h4>Esta tarea está: {task.completed ? ' COMPLETA' : ' INCOMPLETA'} </h4>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}




