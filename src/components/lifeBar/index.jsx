import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBarsContainer = styled.div`
  width: 50px;
  margin: 10px 0 10px 10px;
`;

const StyledLifeBarContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: flex-end;
  border: 1px solid black;
`;

const StyledLife = styled.div`
  width: 100%;
  height: ${({life}) => `${life}%`};
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ enemy }) => (enemy ? '#fc5c65' : '#26de81')};
`;

const LifeBar = ({ userLife, enemyLife }) => {
  return (
    <StyledBarsContainer>
      <StyledLifeBarContainer>
        <StyledLife enemy life={enemyLife}>
          {enemyLife}
        </StyledLife>
      </StyledLifeBarContainer>
      <StyledLifeBarContainer>
        <StyledLife user life={userLife}>
          {userLife}
        </StyledLife>
      </StyledLifeBarContainer>
    </StyledBarsContainer>
  );
};

LifeBar.propTypes = {
  userLife: PropTypes.number.isRequired,
  enemyLife: PropTypes.number.isRequired,
};

export default LifeBar;
