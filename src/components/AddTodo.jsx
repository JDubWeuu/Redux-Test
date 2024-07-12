import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));
        // reset input back
        setInput("");
    }

  return (
    <div>
      <input type='text' placeholder='enter a todo to add to your todo list' className='border border-black' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addTodoHandler} className='border rounded block mt-3'>Add To-Do</button>
    </div>
  )
}

export default AddTodo
