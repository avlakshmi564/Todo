import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Tasks from '../Tasks'
import './index.css'

class Todo extends Component {
  state = {
    input: '',
    taskInput: '',
    userList: [],
    taskList: [],
  }

  onChangeUser = event => {
    this.setState({input: event.target.value})
  }

  onChangeTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onClickAdd = () => {
    const {input} = this.state

    const newUser = {
      id: uuidV4(),
      input,
    }

    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      input: '',
      taskInput: '',
    }))
  }

  deleteTask = uniqueNo => {
    const {taskList} = this.state

    const filteredTaskList = taskList.filter(each => each.uniqueNo !== uniqueNo)
    this.setState({taskList: filteredTaskList})
  }

  displayTask = () => {
    const {taskInput} = this.state

    const newTask = {
      uniqueNo: uuidV4(),
      taskInput,
      isActive: false,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      taskInput: '',
    }))
  }

  completedTask = uniqueNo => {
    this.setState(prevState => ({
      taskList: prevState.taskList.map(each => {
        if (uniqueNo === each.uniqueNo) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
  }

  render() {
    const {input, taskInput, userList, taskList} = this.state

    return (
      <div className="todo-container">
        <div className="heading-container">
          <h1 className="todo-heading">Todo Application</h1>
        </div>
        <div className="container">
          <div className="input-container">
            <label className="label" htmlFor="user">
              User Name
            </label>
            <input
              type="text"
              className="input"
              id="user"
              placeholder="Enter User Name Here"
              value={input}
              onChange={this.onChangeUser}
            />
            <button
              className="add-button"
              type="button"
              onClick={this.onClickAdd}
            >
              Add User
            </button>
            <label htmlFor="task" className="label">
              Tasks
            </label>
            <input
              type="text"
              className="input"
              id="task"
              placeholder="Enter Task"
              onChange={this.onChangeTask}
              value={taskInput}
            />
            <button
              className="add-button"
              type="button"
              onClick={this.displayTask}
            >
              Add Task
            </button>
          </div>
          <div className="task-container">
            <ul className="list-container">
              {userList.map(eachUser => (
                <h1 className="label">{eachUser.input}</h1>
              ))}
              <ul className="list-container">
                {taskList.map(eachTask => (
                  <Tasks
                    taskDetails={eachTask}
                    key={eachTask.uniqueNo}
                    deleteTask={this.deleteTask}
                    completedTask={this.completedTask}
                  />
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Todo
