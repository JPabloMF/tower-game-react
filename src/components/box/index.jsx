import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

const StyledBox = styled.div`
  border: 1px solid red;
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
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <StyledBox ref={drop} style={{ backgroundColor }}>
      {type}
    </StyledBox>
  );
};

Box.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Box;
