import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { tasks } from '../../data/tasks';

// Асинхронное действие для загрузки
export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Симуляция API
  return tasks; // Возвращаем начальные данные
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    addtodo: (state, { payload }) => {
      state.items.push({ id: Date.now(), text: payload, isCompleted: false });
    },
    remove: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    completed: (state, { payload }) => {
      state.items.forEach((todo) => todo.id === payload && (todo.isCompleted = !todo.isCompleted));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      });
  },
});

export const { addtodo, remove, completed } = todoSlice.actions;
export default todoSlice.reducer;