
export function readTodos() {
  return JSON.parse(localStorage.getItem("todos") || '[]')
}
export function saveTodos(value) {
  localStorage.setItem("todos",JSON.stringify(value))
}
