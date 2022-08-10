import './App.css';
import Header from './components/Header';
import Counter from './components/test/Counter';

function App() {
  return (
    <div className='App flex flex-col items-center'>
      <Header title='Todo app' />
      <Counter />
    </div>
  );
}

export default App;
