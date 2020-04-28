import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ManaBar from '../../components/manaBar';
import PowerCard from '../../components/powerCard';
import Box from '../../components/box';
import { MIDDLE_AGE_MAP } from '../maps';

const StyledContainer = styled.div`
  width: 300px;
`;

const StyledRow = styled.div`
  display: flex;
`;

const StyledCardsContainer = styled.div`
  display: flex;
`;

const MiddleAge = (props) => {
  return (
    <StyledContainer>
      <ManaBar mana={2} />
      {MIDDLE_AGE_MAP.map((row, rowIndex) => (
        <StyledRow key={rowIndex}>
          {row.map((box, boxIndex) => (
            <Box key={boxIndex} type={box.type} />
          ))}
        </StyledRow>
      ))}
      <ManaBar mana={5} />
      <StyledCardsContainer>
        <PowerCard name="FIRE" manaCost={1} />
        <PowerCard name="TWISTER" manaCost={2} />
        <PowerCard name="THUNDER" manaCost={3} />
        <PowerCard name="ICE POISON" manaCost={4} />
      </StyledCardsContainer>
    </StyledContainer>
  );
};

MiddleAge.propTypes = {
  props: PropTypes.object.isRequired,
};

export default MiddleAge;
