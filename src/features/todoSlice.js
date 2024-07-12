import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            const id_to_remove = action.payload;
            state.todos = state.todos.filter((todo) => {
                return todo.id !== id_to_remove;
            })
        },
        updateTodo: (state, action) => {
            // destructure input payload which is passed in as object
            const { id_to_update, text } = action.payload;
            for (let todo of state.todos) {
                if (todo.id === id_to_update) {
                    todo = {...todo, text: text}
                }
            }
        }
    }
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer