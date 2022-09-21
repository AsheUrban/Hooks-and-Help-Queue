import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #F8D86E;
  padding: 25px;
  background-color: #6495ED;
`;


function Header(){
  return (
    <React.Fragment>
        <HelpQueueHeader>
          Help Queue
        </HelpQueueHeader>
  
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
    </React.Fragment>
  );
}

export default Header;