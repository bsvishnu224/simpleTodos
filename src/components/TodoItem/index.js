// Write your code here

import './index.css'

const TodoItem = props => {
  const {item, deleteList} = props
  const {id} = item

  const deleteItem = () => {
    deleteList(id)
  }

  return (
    <li className="list-container">
      <p>{item.title}</p>
      <button type="button" className="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
