import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import lifebarbg from '../../assets/objects/lifebar.png';
import lifebarbgup from '../../assets/objects/lifebarup.png';
import lifebarbgdown from '../../assets/objects/lifebardown.png';
import lifebarred from '../../assets/objects/lifebarred.png';
import lifebargreen from '../../assets/objects/lifebargreen.png';

const StyledBarsContainer = styled.div`
  width: 70px;
  margin: 10px 0 10px 10px;
  /* background-image: url(${lifebarbg}); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const StyledLifeBarContainer = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  align-items: flex-end;
  /* border: 1px solid black; */
  overflow: hidden;
`;

const StyledBarFrame = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${({ enemy }) =>
    enemy ? lifebarbgup : lifebarbgdown});
`;

const StyledLife = styled.div`
  width: 100%;
  /* height: ${({ life }) => `${life}%`}; */
  height: 100%;
  transform: ${({ life }) => `translateY(${100 - life}%)`};
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ enemy }) => (enemy ? '#fc5c65' : '#26de81')}; */
  background-image: url(${({ enemy }) => (enemy ? lifebarred : lifebargreen)});
  background-size: 100% 100%;`;

const LifeBar = ({ userLife, enemyLife }) => {
  return (
    <StyledBarsContainer>
      <StyledLifeBarContainer>
        <StyledBarFrame enemy />
        <StyledLife enemy life={enemyLife}>
          {enemyLife}
        </StyledLife>
      </StyledLifeBarContainer>
      <StyledLifeBarContainer>
        <StyledBarFrame user />
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
