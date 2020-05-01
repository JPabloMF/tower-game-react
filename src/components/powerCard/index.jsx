import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

const StyledCard = styled.div`
  background-image: url(${({ img }) => img});
  opacity: ${({ isUsable }) => (isUsable ? 0.4 : 1)};
  pointer-events: ${({ isUsable }) => (isUsable ?  'none': 'inherit')};
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  border: 1px solid black;
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

const PowerCard = ({ name, img, manaCost, usable, handleCardDroped }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'POWER_CARD' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`You dropped ${item.name} into ${dropResult.name}!`);
        handleCardDroped(manaCost);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const isUsable = isDragging || usable;

  return (
    <StyledCard ref={drag} img={img} isUsable={isUsable}>
      {/* <StyledManaCost>{manaCost}</StyledManaCost> */}
    </StyledCard>
  );
};

PowerCard.propTypes = {
  img: PropTypes.object.isRequired,
  manaCost: PropTypes.number.isRequired,
};

export default PowerCard;
