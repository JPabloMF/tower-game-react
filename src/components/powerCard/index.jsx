import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  position: relative;
  border: 1px solid red;
  width: 75px;
  height: 100px;
`;

const StyledManaCost = styled.div`
  border: 1px solid red;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const PowerCard = ({ img, manaCost }) => {
  return (
    <StyledCard img={img}>
      <StyledManaCost>{manaCost}</StyledManaCost>
    </StyledCard>
  );
};

PowerCard.propTypes = {
  img: PropTypes.object.isRequired,
  manaCost: PropTypes.number.isRequired,
};

export default PowerCard;
