import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TicketList(props){

  const HelpQueueTickets = styled.ul`
  
  background-color: #f5b700;
  width: 300px;
  margin: auto;
  border: 4px inset lightblue
  `;

  return (
    
    <React.Fragment>
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

