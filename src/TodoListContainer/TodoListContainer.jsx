
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

    & button {
      border: none;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 8px;
      cursor: pointer;
      color: white;
    }

    & input{
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #28619b;
      color: white;
      margin-right: 15px;
    }

    & button:hover{
      transform: scale(1.1);
    }
    & ul {
      list-style: none;
      border-left: 1px solid white;
    }

`

const TodoListContainer = ({children}) => {
  return <TodoListWrapper>{children}</TodoListWrapper>
}

export default TodoListContainer