import React from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #131415;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppContainer = ({children}) => {
  return <AppWrapper>{children}</AppWrapper>
}

export default AppContainer