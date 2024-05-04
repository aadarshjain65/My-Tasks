import styled from 'styled-components'

export const TasksListItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #131213;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 20px;
  width: 100%;
`

export const TaskName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #f8fafc;
`

export const TaskCategory = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: #323f4b;
  background-color: #f3aa4e;
  border-radius: 40px;
  padding: 8px 16px 8px 16px;
`
