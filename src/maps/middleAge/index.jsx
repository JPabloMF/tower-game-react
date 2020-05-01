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

import poison from '../../assets/cards/poison.png';
import speedy from '../../assets/cards/speedy.png';
import asteroid from '../../assets/cards/asteroid.png';
import triforce from '../../assets/cards/triforce.png';

import { StyledContainer, StyledRow, StyledCardsContainer } from './styles';

const MockedCards = [
  { name: 'FIRE', img: fire, manaCost: 1, damage: 5 },
  { name: 'TWISTER', img: twister, manaCost: 2, damage: 8 },
  { name: 'THUNDER', img: thunder, manaCost: 3, damage: 10 },
  { name: 'ICE', img: ice, manaCost: 4, damage: 15 },

  { name: 'POISON', img: poison, manaCost: 5, damage: 17 },
  // { name: 'BATS', img: ice, manaCost: 6, damage: 15 },
  { name: 'SPEEDY', img: speedy, manaCost: 6, damage: 20 },
  { name: 'ASTEROID', img: asteroid, manaCost: 7, damage: 22 },
  { name: 'TRIFORCE', img: triforce, manaCost: 8, damage: 25 },
];

const MiddleAge = (props) => {
  const [manaUser, setManaUser] = useState(0);
  const [manaEnemy, setManaEnemy] = useState(0);

  const timerForUser = () => {
    if (manaUser + 1 <= 10) {
      setManaUser(manaUser + 1);
    }
  };

  const timerForEnemy = () => {
    if (manaEnemy + 1 <= 10) {
      setManaEnemy(manaEnemy + 1);
    }
  };

  useEffect(() => {
    const interval = setTimeout(timerForUser, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [manaUser]);

  useEffect(() => {
    const interval = setTimeout(timerForEnemy, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [manaEnemy]);

  const handleCardDroped = (manaCost) => {
    if (manaUser >= manaCost) {
      setManaUser(manaUser - manaCost);
    }
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
        {MockedCards.slice(0,4).map((card, cardIndex) => (
          <PowerCard
            key={cardIndex}
            img={card.img}
            name={card.name}
            manaCost={card.manaCost}
            usable={manaUser < card.manaCost}
            handleCardDroped={handleCardDroped}
          />
        ))}
      </StyledCardsContainer>
    </StyledContainer>
  );
};

MiddleAge.propTypes = {
  props: PropTypes.object.isRequired,
};

export default MiddleAge;
