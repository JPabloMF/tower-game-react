import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledManaContainer = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
  margin: 10px 0;
`;

const StyledManaBar = styled.div`
  background-color: ${({ filled }) => (filled ? 'black' : 'transparent')};
  border: 1px solid red;
  width: 30px;
`;

const ManaBar = ({ mana }) => {
  return (
    <StyledManaContainer>
      {new Array(10).fill(0).map((_, manaIndex) => (
        <StyledManaBar filled={manaIndex <= mana} />
      ))}
    </StyledManaContainer>
  );
};

ManaBar.defaultProps = {
  mana: 0
};

ManaBar.propTypes = {
  mana: PropTypes.number,
};

export default ManaBar;
