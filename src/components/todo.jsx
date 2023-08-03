import React, { useState } from 'react'




const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [todosStatus, setTodosStatus]= useState(false);
    const [elementsHTML, setElementsHTML] = useState(''); 
    const [readMoodId, setReadMoodId] = useState(null); 
    const [readMood, setReadMood] = useState(false); 

    const [textareaValue, setTextareaValue] = useState('');  

    const handleAddTodo = (todoText) => { 
       if(todoText!='') {
        const countTodos = (todos.length)+1;
        setTodos([...todos,  todoText]);    
        setTodosStatus(  countTodos>0);
       }
    } 
 
    const handleToggleTodo = (todoId) => { 
    };
  
    const handleDeleteTodo = (todoId) => {
        console.log(todoId);
        
        setTodos(todos.filter((el, myid )=> todoId !==myid));  
    };

    const readMoodFnc = (todoId, todo) => {  
      setTextareaValue(todo)
        setReadMood(true); 
        setReadMoodId(todoId);  
    }

    const saveRead = (todoId, todo)  =>{
     const todoListtoRead = todos; 
     todoListtoRead[todoId] = textareaValue;
     const newTextTodo = todoListtoRead;
     setTodos(newTextTodo); 
     setReadMood(false); 
     setReadMoodId(null); 
    }
   
    return ( 
      <div>
        <h2>Список дел:</h2>  
        Всего дел: {todos.length}
        {elementsHTML}
        <ul>  
          { todosStatus? todos.map((todo, todoid ) => (

            <li key={todoid}> 
         
              {readMoodId===todoid?<textarea name="" id="" cols="30" rows="10" onChange={(el)=>setTextareaValue(el.target.value)} >{textareaValue}</textarea>:  <span>{todo}</span> }
              {readMoodId===todoid && readMood=== true? (
                <button onClick={() => { 
                    saveRead(todoid, todo)}}>сохр.  
                </button>
              ): (
                <button onClick={() => readMoodFnc(todoid, todo)}>Ред.  
                </button>
              ) }
                 <button onClick={() => handleDeleteTodo(todoid)}>X  
            </button> 
      
            </li>
          )): 'Задачи отсутствуют'}
        </ul> 
        <form onSubmit={(e) => {
          e.preventDefault(); 
          handleAddTodo(e.target.todoText.value);
          e.target.todoText.value = '';
        }}>
          <input type="text" name="todoText" />
          <button type="submit"   > Добавить дело</button>
        </form>
      </div>
    );
  };

  
 

export default TodoList; 
