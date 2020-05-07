import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import mana from '../../assets/textures/energy.png';

const StyledManaContainer = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
  margin: 10px 0;
`;

const StyledManaBar = styled.div`
  /* background-color: ${({ filled }) => (filled ? 'black' : 'transparent')}; */
  background-image: url(${({ filled }) => (filled ? mana : null)});
  /* border: 1px solid red; */
  margin: 0 5px;
  width: 30px;
`;

const ManaBar = ({ mana }) => {
  return (
    <StyledManaContainer>
      {new Array(10).fill(0).map((_, manaIndex) => (
        <StyledManaBar key={manaIndex} filled={manaIndex + 1 <= mana} />
      ))}
    </StyledManaContainer>
  );
};

ManaBar.defaultProps = {
  mana: 0,
};

ManaBar.propTypes = {
  mana: PropTypes.number,
};

export default ManaBar;
