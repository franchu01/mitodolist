import './App.css';
import AppContainer from './AppContainer/AppContainer';
import { useState } from 'react';
import TodoListContainer from './TodoListContainer/TodoListContainer';


function App() {

  const [thingTodo, setThingTodo] = useState("");
  const [things, setThings] = useState([]);

  function addItem(){
    
    if(!thingTodo){
      alert("Ingresa algo!")

      const emptyThing = {
        id: Math.floor(Math.random() * 1000),
        value: "Ingresa algo bobo"
      };

      setThings(oldList => [...oldList, emptyThing])
    }
    
    const thing = {
      id: Math.floor(Math.random() * 1000),
      value: thingTodo
    };

    if(thingTodo){
      setThings(oldList => [...oldList, thing]);
    }
    setThingTodo("");

  }

  function deleteThing(id){
    var newArr = [...things.filter((thing) => thing.id !== id)]
    setThings(newArr)
  }

  return <AppContainer>
    <TodoListContainer>
      <h2>Todo List</h2>
      <div>
        <input 
        type="text" 
        placeholder='Ingresa tu cosa para hacer' 
        value={thingTodo} 
        onChange={e => setThingTodo(e.target.value)} />
        <button onClick={() => addItem()} >Agregar</button>
      </div>
      <ul>
        {things.map(thing => {
          return(
            <li key={thing.id}>{thing.value} <button onClick={ () => deleteThing(thing.id)} >❌</button> </li>
          )
        })}
      </ul>
    </TodoListContainer>
  </AppContainer>
}

export default App;
