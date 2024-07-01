// Action types
const TODO_ADDED = "todoAdded";
const TODO_REMOVED = "todoRemoved";
const TODO_COMPLETED = "todoCompleted";

// Actions
export function todoAdded(description) {
  return {
    type: TODO_ADDED,
    payload: {
      description,
    },
  };
}

export const todoRemoved = (id) => ({
  type: TODO_REMOVED,
  payload: {
    id,
  },
});

export const todoCompleted = (id) => ({
  type: TODO_COMPLETED,
  payload: {
    id,
  },
});

// Reducer
let lastId = 0;
export default function reducer(todos = [], action) {
  if (action.type === TODO_ADDED) {
    return [
      ...todos,
      {
        id: ++lastId,
        description: action.payload.description,
        isCompleted: false,
      },
    ];
  } else if (action.type === TODO_REMOVED) {
    return state.filter((todo) => todo.id !== action.payload.id);
  } else if (action.type === TODO_COMPLETED) {
    return state.map((todo) =>
      todo.id === action.payload.id ? { ...todo, isCompleted: true } : todo,
    );
  }
  return state;
}
