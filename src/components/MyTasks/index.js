import {Component} from 'react'
import {v4} from 'uuid'

import TagsItem from '../TagsItem'
import TasksItem from '../TasksItem'

import {
  AppContainer,
  LeftSection,
  Heading,
  FormContainer,
  InputAndLabelContainer,
  Label,
  Input,
  Select,
  Option,
  AddTaskButton,
  RightSection,
  Title,
  TagsList,
  TasksList,
  NoTaskView,
  NoTasksText,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    myTaskList: [],
    selectTag: tagsList[0].displayText,
    activeTag: 'INITIAL',
    taskInput: '',
  }

  onClickAddButton = () => {
    const {taskInput, selectTag} = this.state
    const taskName = taskInput
    const taskCategory = selectTag
    const id = v4()
    const bgColor = false

    if (taskName.length !== 0) {
      this.setState(prevState => ({
        myTaskList: [
          ...prevState.myTaskList,
          {id, taskName, taskCategory, bgColor},
        ],
        taskInput: '',
        selectTag: tagsList[0].displayText,
      }))
    }
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {myTaskList, taskInput, selectTag, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => each.taskCategory === activeTag)

    return (
      <AppContainer>
        <LeftSection>
          <Heading>Create a task!</Heading>
          <FormContainer>
            <InputAndLabelContainer>
              <Label htmlFor="textInput">Task</Label>
              <Input
                id="textInput"
                type="text"
                placeholder="Enter the task here"
                value={taskInput}
                onChange={this.onChangeTaskInput}
              />
            </InputAndLabelContainer>
            <InputAndLabelContainer>
              <Label htmlFor="optionInput">Tags</Label>
              <Select
                id="optionInput"
                value={selectTag}
                onChange={this.onChangeSelectTag}
              >
                {tagsList.map(eachTag => (
                  <Option value={eachTag.optionId} key={eachTag.optionId}>
                    {eachTag.displayText}
                  </Option>
                ))}
              </Select>
            </InputAndLabelContainer>
          </FormContainer>

          <AddTaskButton type="button" onClick={this.onClickAddButton}>
            Add Task
          </AddTaskButton>
        </LeftSection>
        <RightSection>
          <Title>Tags</Title>
          <TagsList>
            {tagsList.map(eachTag => {
              const isActive = activeTag === eachTag.optionId
              return (
                <TagsItem
                  key={eachTag.optionId}
                  tagsItemDetails={eachTag}
                  isActive={isActive}
                  onClickTag={this.onClickTag}
                />
              )
            })}
          </TagsList>
          <Title>Tasks</Title>
          {filterTaskList.length === 0 ? (
            <NoTaskView>
              <NoTasksText>No Tasks Added Yet</NoTasksText>
            </NoTaskView>
          ) : (
            <TasksList>
              {filterTaskList.map(eachTask => (
                <TasksItem key={eachTask.id} tasksItemDetails={eachTask} />
              ))}
            </TasksList>
          )}
        </RightSection>
      </AppContainer>
    )
  }
}

export default MyTasks
