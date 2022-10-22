
import styled from 'styled-components'

const TodoListWrapper = styled.div`
    width: 40%;
    height: 60%;
    border: dashed 1px white;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;
    flex-direction: column;
`

const TodoListContainer = ({children}) => {
  return <TodoListWrapper>{children}</TodoListWrapper>
}

export default TodoListContainer