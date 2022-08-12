import { useState, FC } from 'react';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import { ITask } from './interfaces';

const App: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className='App flex flex-col items-center'>
      <>
        <Header title='Todo app' tasks={tasks} setTasks={setTasks} />

        {tasks.map((t: ITask, key: number) => {
          console.log(t.taskName);
          return (
            <Task
              taskName={t.taskName}
              isCompleted={t.isCompleted}
              setTasks={setTasks}
            />
          );
        })}
      </>
    </div>
  );
};

export default App;
