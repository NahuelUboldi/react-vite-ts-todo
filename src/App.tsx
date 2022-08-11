import { useState } from 'react';
import './App.css';
import ActivityInput from './components/ActivityInput';
import Header from './components/Header';
import Counter from './components/test/Counter';

interface activityInter {
  id: number;
  activity: string;
  completed: boolean;
}

function App() {
  const [activities, setActivities] = useState<activityInter[]>([]);

  return (
    <div className='App flex flex-col items-center'>
      <>
        <Header title='Todo app' />
        {/* <Counter /> */}
        {activities.map((a) => {
          console.log(a);
        })}
        <ActivityInput activities={activities} setActivities={setActivities} />
      </>
    </div>
  );
}

export default App;
