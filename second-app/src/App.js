import React, {useState} from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [bbol, setBool] = useState(true)

  

  function func1(){
    
  }

  return (
    <div className="App">
      <button onClick={func1}>Click Me</button>
      <ul className = "todo">
        <TodoItem/>
      </ul>
    </div>
  );
}

export default App;
