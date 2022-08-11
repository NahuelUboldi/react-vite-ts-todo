import { useState } from 'react';
function ActivityInput({ setActivities }) {
  const [text, setText] = useState<string>('second');

  const handleSubmit = () => {};

  return (
    <form>
      <input
        className='border'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' onSubmit={handleSubmit}>
        +
      </button>
    </form>
  );
}

export default ActivityInput;
