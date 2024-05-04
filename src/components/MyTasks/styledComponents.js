import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LeftSection = styled.div`
  background-color: #131213;
  height: 100vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  color: #f3aa4e;
  font-weight: 500;
  margin-top: 48px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`
export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 90%;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f1f5f9;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  outline: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #64748b;
  padding: 20px;
  border: none;
`

export const Select = styled.select`
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  padding-left: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #475569;
  outline: none;
`

export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
  color: #323f4b;
`

export const AddTaskButton = styled.button`
  height: 45px;
  width: 150px;
  background-color: #f3aa4e;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding; 12px 24px 12px 24px;
  border-radius: 8px;
  margin-top: 40px;
  outline: none;
  cursor: pointer;
`

export const RightSection = styled.div`
  background-color: #000000;
  padding: 10px;
  height: 100vh;
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 48px;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0;
`

export const TagsList = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
`

export const TasksList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

export const NoTaskView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 60vw;
`

export const NoTasksText = styled.p`
  font-family: 'Roboto';
  font-size: 26px;
  color: #f1f5f9;
  font-weight: 500;
  text-align: center;
  margin-left: 48px;
`
