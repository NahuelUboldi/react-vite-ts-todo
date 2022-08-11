import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className='border-black'>
      <h2 className='p-3 my-10 font-bold text-3xl border-2 border-red-500 rounded-full flex justify-center items-center'>
        {counter}
      </h2>
      <button
        className='p-3 px-5 mx-2 border-4 rounded-lg border-gray-100 bg-gray-300 text-lg'
        onClick={() => setCounter((c) => c + 1)}
      >
        +
      </button>
      <button
        className='p-3 px-5 mx-2 border-4 rounded-lg border-gray-100 bg-gray-300 text-lg'
        onClick={() => setCounter((c) => c - 1)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
