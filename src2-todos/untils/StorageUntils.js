export function readTodos(){
  return JSON.parse(localStorage.getItem("todos") ||
    '[{"complete":false,"title":"吃饭"},{"complete":false,"title":"睡觉"},{"complete":false,"title":"打代码"}]')
}
export function saveTodos(value){
  localStorage.setItem("todos",JSON.stringify(value))
}
