import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TicketList(props){

  const HelpQueueTickets = styled.ul`
  
  background-color: #F8D86E;
  width: 1200px;
  margin: auto;
  border: #FFBC8;
  padding: 25px;
  border-radius: 10px;
  `;

  return (
    
    <React.Fragment>
      <br></br>
      <HelpQueueTickets>
      {props.ticketList.map((ticket) =>
        <Ticket 
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          formattedWaitTime={ticket.formattedWaitTime}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}/>
      )}
      </HelpQueueTickets>
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;

