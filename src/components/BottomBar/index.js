import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Cover from './components/cover';

const OuterContainer = styled.div`
   z-index: 50;
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   height: 64px;
   display: flex;
   justify-content: flex-start;
   align-items: center;

   @media screen and (max-width: 750px) {
      height: 7em;
      flex-direction: column-reverse;
   }
`;

class BottomBar extends Component {
    render() {
        return (
            <OuterContainer>
                <Cover />
            </OuterContainer>
        );
    }
}

export default BottomBar;
