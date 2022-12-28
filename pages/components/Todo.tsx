import React, { useState } from 'react'


function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 10; i++){
    initialTodos.push({
      id: i,
      data: 'item ' + ( i + 1)
    });
  }
  return initialTodos;
}

export default function Todo() {
 const [todos, setTodos] = useState(createInitialTodos);
 const [text, setText] = useState('');

  return (
    <>
    <div className='default'>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => {
          setText('');
          setTodos([{
            id: todos.length,
            data: text
          }, ...todos]);
        }}>Add</button>
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              {item.data}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
