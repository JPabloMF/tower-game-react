import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import wood from '../../assets/textures/wood.png';
import grass from '../../assets/textures/grass.png';
import floorCannon from '../../assets/textures/floorcannon.png';
import floorCannonFront from '../../assets/textures/floorcannonfront.png';
import floorTower from '../../assets/textures/floortower.png';
import water from '../../assets/textures/water.png';

const handleBoxType = (type) => {
  switch (type) {
    case 'wood':
      return wood;
    case 'grass':
      return grass;
    case 'cannon':
      return floorCannonFront;
    case 'tower':
      return floorTower;
    case 'enemyCannon':
      return floorCannon;
    case 'enemyTower':
      return floorTower;
    case 'water':
      return water;
    default:
      return null;
  }
};

const StyledBox = styled.div`
${({ isActive, type }) =>
  isActive
    ? `background-image: linear-gradient(#ffffff85, #ffffff85), url(${handleBoxType(type)});`
    : `background-image: linear-gradient(transparent, transparent),url(${handleBoxType(type)});`}
  background-size: cover;
  width: 100px;
  height: 100px;
`;

const Box = ({ type }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'POWER_CARD',
    drop: () => ({ name: type }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;

  return (
    <StyledBox
      ref={drop}
      type={type}
      isActive={isActive}
    >
      {/* {type} */}
    </StyledBox>
  );
};

Box.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Box;
