
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task_class'
//importamos la hojs de estilo task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels_enum'

export const TaskComponent = ({ task, complete, remove }) => {
    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)
            default:
                break;
        }
    }

    /** 
     * Function that returns icon dependin on completion of the task
     */
    function taskCompletedIcon() {
        if (task.completed) {
            return (<i onClick={ () => complete(task)} className='bi-toggle-on' style={{color:'green'}}></i>)
        }else{
            return (<i onClick={ () => complete(task)} className='bi-toggle-off' style={{color:'grey'}}></i>)
        }
    }

    /** 
     * Function that delete the task
     */
    function deleteTask(task) {
        return (<i onClick={ () => deleteTask(task)} className='bi-toggle-off' style={{color:'grey'}}></i>)
    }

  return (
    <tr className='fw-normal'>
        <th>
            <span className='ms=2'>{task.name}</span>
        </th>
        <td className='align-midle'>
            <span>{task.description}</span>
        </td>
        <td className='align-midle'>
            {/* Execution of function to return badge element depending of level */}
            {taskLevelBadge()}
        </td>
        <td className='align-midle task-action'>
            {/* Execution of function to return icon depending on completion */}
            {taskCompletedIcon()}
            <i onClick={ () => remove(task)} className='bi-trash' style={{color:'tomato'}}></i>
        </td>
    </tr>
    // <div>
    //     <h4 className='task-name'>Nombre: {task.name} </h4>
    //     <h4>Descripción: {task.description} </h4>
    //     <h4>Level: {task.level} </h4>
    //     <h4>Esta tarea está: {task.completed ? ' COMPLETA' : ' INCOMPLETA'} </h4>
    // </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}




