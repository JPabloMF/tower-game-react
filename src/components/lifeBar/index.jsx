import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBarsContainer = styled.div`
  width: 50px;
  border: 1px solid red;
  margin: 10px 0 10px 10px;
`;

const StyledLifeBar = styled.div`
  height: 50%;
  border: 1px solid red;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LifeBar = ({userLife, enemyLife}) => {
  return (
    <StyledBarsContainer>
      <StyledLifeBar>{enemyLife}</StyledLifeBar>
      <StyledLifeBar>{userLife}</StyledLifeBar>
    </StyledBarsContainer>
  );
};

LifeBar.propTypes = {
  userLife: PropTypes.number.isRequired,
  enemyLife: PropTypes.number.isRequired,
};

export default LifeBar;
