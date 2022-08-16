import { Dispatch, SetStateAction } from 'react';
import { ITask } from '../interfaces';
import TaskBtn from './TaskBtn';

type Props = {
  id: ITask['id'];
  tasks: ITask[];
  taskName: ITask['taskName'];
  isCompleted: ITask['isCompleted'];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
};

const Task = ({ id, tasks, taskName, isCompleted, setTasks }: Props) => {
  console.log('hello world');

  return (
    <div
      className={`flex my-1 rounded ${
        !isCompleted
          ? 'bg-blue-100 hover:bg-blue-200'
          : 'bg-gray-100 hover:bg-gray-200 line-through'
      }`}
    >
      <h2 className='py-1 px-4'>{taskName}</h2>
      <TaskBtn
        btnType='check'
        tasks={tasks}
        id={id}
        setTasks={setTasks}
        isCompleted={isCompleted}
      />
      <TaskBtn
        btnType='close'
        tasks={tasks}
        id={id}
        setTasks={setTasks}
        isCompleted={isCompleted}
      />
    </div>
  );
};

export default Task;
