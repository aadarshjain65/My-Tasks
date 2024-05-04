import {TasksListItem, TaskName, TaskCategory} from './styledComponents'

const TasksItem = props => {
  const {tasksItemDetails} = props
  const {taskName, taskCategory} = tasksItemDetails
  return (
    <TasksListItem>
      <TaskName>{taskName}</TaskName>
      <TaskCategory>{taskCategory}</TaskCategory>
    </TasksListItem>
  )
}

export default TasksItem
