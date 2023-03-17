import React, { useState } from 'react'
import { Task } from '../../models/task_class'
import { LEVELS } from '../../models/levels_enum.js';
import { TaskComponent } from '../pure/task'
import { Taskform } from '../pure/forms/taskForm';

export const TaskListComponent = () => {

    const defaultTask1 = new Task('TareaEjemplo1', 'Descripción Ejemplo1', true, LEVELS.BLOCKING);
    const defaultTask2 = new Task('TareaEjemplo2', 'Descripción Ejemplo2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('TareaEjemplo3', 'Descripción Ejemplo3', false, LEVELS.NORMAL);
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [ loading, setLoading] = useState(true);

    // eslint-disable-next-line no-unused-vars
    function completeTask(task) {
        console.log('Complete this task: ', task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
        console.log('Complete this task: ', tasks[index])
    }

    function deleteTask(task) {
      console.log('Delete this task: ', task)
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks.splice(index,1);
      setTasks(tempTasks);
    }

    function addTask(task) {
      console.log('Add this task: ', task)
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks.push(task);
      setTasks(tempTasks);
    }

  return (
    <div>
        <div className='col-12'>
          <div className='card'>
            {/* Card Header (title) */}
            <div className='card-header p-3'>
              <h5>Your tasks</h5>
            </div>
            {/* Card Body (content) */}
            <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
              <table>
                <thead>
                  <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* TODO Iterar sobre una lista de tareas */}
                  { tasks.map((task, index) => {
                    return (
                      <TaskComponent
                        key={index}
                        task={task}
                        complete={completeTask}
                        remove={deleteTask}>
                      </TaskComponent>
                      )
                    } 
                  )}
                </tbody>
              </table>
            </div>
            <Taskform add={addTask}></Taskform>
          </div>
        </div>
    </div>
  )
}
