
const todosKey = "Todos";


export const getLocalStorageData = () => {
    const getTodos = localStorage.getItem(todosKey);
    if (!getTodos) return [];
    return JSON.parse(getTodos);
};

export const setLocalStorageData = (task) => {
    
  return localStorage.setItem(todosKey, JSON.stringify(task));
  
};