import create from "zustand";

import { Todo } from "./Todo";

interface TodoState {
  todos: Todo[];
  addTodo: (obj: any) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: any) => void;
  setTodos: (obj: any) => void;
  setEdit: (obj: any) => void;
}

export const useStore = create<TodoState>((set, get) => ({
  todos: [],
  setTodos: (obj: any) => {
    set((state) => ({
      todos: obj,
    }));
  },
  setEdit: (obj) => {
    set((state) => ({
      todos: [...state.todos, obj],
    }));
  },
  addTodo: (obj: any) => {
    set((state) => ({
      todos: [...state.todos, obj],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? ({ ...todo, completed: !todo.completed } as Todo)
          : todo
      ),
    }));
  },
}));
