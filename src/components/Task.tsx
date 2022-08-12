import { Dispatch, SetStateAction } from 'react';
import { ITask } from '../interfaces';
import { MdClose, MdCheck } from 'react-icons/md';
type Props = {
  taskName: ITask['taskName'];
  isCompleted: ITask['isCompleted'];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
};

const Task = ({ taskName, isCompleted, setTasks }: Props) => {
  console.log('hello world');

  return (
    <div className='flex my-1 bg-blue-100 hover:bg-blue-300 rounded'>
      <h2 className=' py-1 px-4 '>{taskName}</h2>
      <button className='bg-green-100 hover:bg-green-300 py-1 px-2'>
        <MdCheck />
      </button>
      <button className='bg-red-100 hover:bg-red-300 py-1 px-2 rounded-r'>
        <MdClose />
      </button>
    </div>
  );
};

export default Task;
