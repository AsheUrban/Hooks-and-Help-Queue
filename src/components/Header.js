import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HelpQueueHeader = styled.div`
  text-align: center;
  color: #F8D86E;
  padding: 25px;
  background-color: #6495ED;
`;

const H1 = styled.h1`
  font-size: 36px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`;


function Header(){
  return (
    <React.Fragment>
        <HelpQueueHeader>
          <H1>
          Help Queue
          </H1>
          <Center>
            <Link to="/"> Home </Link> &emsp;|&emsp; <Link to="/sign-in"> Sign In </Link>
        </Center>
        </HelpQueueHeader>
       
    </React.Fragment>
  );
}

export default Header;