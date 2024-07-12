import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo }  from '../features/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todos.todos);
    console.log(todos);
    const dispatch = useDispatch();
  return (
    <>
      {todos.length > 0 && (
        <div
          className="border border-gray-700 border-2 p-2 flex flex-col"
          style={{ width: "400px" }}
        >
          <ul className="list-outside list-disc ml-6">
            {todos.map((todo) => {
              return (
                <div key={todo.id} className="flex justify-between items-center">
                  <li className="mr-10">{todo.text}</li>
                  <button
                    className="border rounded-md px-1 py-1 hover:bg-black hover:text-white transition-colors duration-300"
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    Delete To-Do
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Todos
