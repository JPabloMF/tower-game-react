import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ManaBar from '../../components/manaBar';
import PowerCard from '../../components/powerCard';
import Box from '../../components/box';
import { MIDDLE_AGE_MAP } from '../maps';

import fire from '../../assets/cards/fire.png';
import twister from '../../assets/cards/twister.png';
import thunder from '../../assets/cards/thunder.png';
import ice from '../../assets/cards/ice.png';

import { StyledContainer, StyledRow, StyledCardsContainer } from './styles';

const MiddleAge = (props) => {
  const [manaUser, setManaUser] = useState(0);
  const [manaEnemy, setManaEnemy] = useState(0);

  const timer = () => {
    if (manaUser + 1 <= 9) {
      setManaUser(manaUser + 1);
    }
    if (manaEnemy + 1 <= 9) {
      setManaEnemy(manaEnemy + 1);
    }
  };

  useEffect(() => {
    const interval = setTimeout(timer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [manaUser]);

  useEffect(() => {
    const interval = setTimeout(timer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [manaEnemy]);

  const handleCardDroped = (manaCost) => {
    console.log(manaUser);
    setManaUser(manaUser - manaCost - 1);
  };

  return (
    <StyledContainer>
      <ManaBar mana={manaEnemy} />
      {MIDDLE_AGE_MAP.map((row, rowIndex) => (
        <StyledRow key={rowIndex}>
          {row.map((box, boxIndex) => (
            <Box key={boxIndex} type={box.type} />
          ))}
        </StyledRow>
      ))}
      <ManaBar mana={manaUser} />
      <StyledCardsContainer>
        <PowerCard
          img={fire}
          name="FIRE"
          manaCost={1}
          handleCardDroped={handleCardDroped}
        />
        <PowerCard
          img={twister}
          name="TWISTER"
          manaCost={2}
          handleCardDroped={handleCardDroped}
        />
        <PowerCard
          img={thunder}
          name="THUNDER"
          manaCost={3}
          handleCardDroped={handleCardDroped}
        />
        <PowerCard
          img={ice}
          name="ICE POISON"
          manaCost={4}
          handleCardDroped={handleCardDroped}
        />
      </StyledCardsContainer>
    </StyledContainer>
  );
};

MiddleAge.propTypes = {
  props: PropTypes.object.isRequired,
};

export default MiddleAge;
