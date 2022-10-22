import './index.css'

const User = props => {
  const {userDetails, displayTask} = props
  const {input} = userDetails

  const onClickEnter = () => {
    displayTask()
  }

  return (
    <li className="item-container">
      <button type="button" onClick={onClickEnter} className="enter-button">
        {input}
      </button>
    </li>
  )
}
export default User
