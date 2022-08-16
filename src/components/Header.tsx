import {
  useState,
  useEffect,
  MouseEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { ITask } from '../interfaces';

type componentProps = {
  title: string;
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
};

const Header = ({ title, tasks, setTasks }: componentProps) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!newTask) return;
    const tempTask = {
      id: new Date().valueOf(),
      taskName: newTask,
      isCompleted: false,
    };
    setTasks([...tasks, tempTask]);
    setNewTask('');
  };

  return (
    <div className='my-2'>
      <h1 className='p-3 mt-5 text-4xl font-bold'>{title}</h1>
      <form>
        <input
          className='border py-1 px-2'
          type='text'
          placeholder='write your task'
          value={newTask}
          onChange={handleChange}
        />
        <button className='border bg-gray-200 py-1 px-2' onClick={handleClick}>
          Add task
        </button>
      </form>
    </div>
  );
};

export default Header;
