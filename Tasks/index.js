import './index.css'

const Tasks = props => {
  const {taskDetails, deleteTask, completedTask} = props
  const {taskInput, uniqueNo, isActive} = taskDetails

  const onClickDelete = () => {
    deleteTask(uniqueNo)
  }

  const onClickCheckBox = () => {
    completedTask(uniqueNo)
  }

  const taskInputValue = isActive && 'Completed'

  const className = isActive ? 'label-through' : 'task'

  return (
    <li className="check-container">
      <div className="box-container">
        <input
          type="checkbox"
          className="check-box"
          id="check"
          onClick={onClickCheckBox}
        />
        <label htmlFor="check" className={className}>
          {taskInput}
        </label>
        <p className="task">{taskInputValue}</p>
      </div>
      <button type="button" className="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}
export default Tasks
