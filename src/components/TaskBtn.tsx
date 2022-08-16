import { Dispatch, SetStateAction } from 'react';
import { MdClose, MdCheck } from 'react-icons/md';
import { ITask } from '../interfaces';

type Props = {
  btnType: 'check' | 'close';
  tasks: ITask[];
  id: ITask['id'];
  isCompleted: ITask['isCompleted'];

  setTasks: Dispatch<SetStateAction<ITask[]>>;
};

function TaskBtn({ btnType, tasks, id, isCompleted, setTasks }: Props) {
  const handlers = {
    check: () => {
      setTasks(() =>
        tasks.map((t) => {
          if (t.id === id) {
            return { ...t, isCompleted: true };
          }
          return t;
        })
      );
    },
    close: () => {
      setTasks(() => tasks.filter((t) => t.id !== id));
    },
  };

  return (
    <button
      className={` py-1 px-2 ${
        isCompleted
          ? 'bg-gray-100'
          : btnType === 'check'
          ? 'bg-green-100 hover:bg-green-200'
          : 'bg-red-100 hover:bg-red-200 rounded-r'
      }`}
      onClick={handlers[btnType]}
    >
      {btnType === 'check' ? <MdCheck /> : <MdClose />}
    </button>
  );
}

export default TaskBtn;
