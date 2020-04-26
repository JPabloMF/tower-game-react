import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ManaBar from '../../components/manaBar';
import PowerCard from '../../components/powerCard';
import { MIDDLE_AGE_MAP } from '../maps';

const StyledContainer = styled.div`
  width: 300px;
`;

const StyledRow = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 100px;
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
            <StyledBox key={boxIndex}>{JSON.stringify(box.type)}</StyledBox>
          ))}
        </StyledRow>
      ))}
      <ManaBar mana={5} />
      <StyledCardsContainer>
        <PowerCard manaCost={1} />
        <PowerCard manaCost={1} />
        <PowerCard manaCost={1} />
        <PowerCard manaCost={1} />
      </StyledCardsContainer>
    </StyledContainer>
  );
};

MiddleAge.propTypes = {
  props: PropTypes.object.isRequired,
};

export default MiddleAge;
