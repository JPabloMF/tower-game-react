import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ManaBar from '../../components/manaBar';
import PowerCard from '../../components/powerCard';
import Box from '../../components/box';
import LifeBar from '../../components/lifeBar';
import { MIDDLE_AGE_MAP } from '../maps';

import fire from '../../assets/cards/fire.png';
import twister from '../../assets/cards/twister.png';
import thunder from '../../assets/cards/thunder.png';
import ice from '../../assets/cards/ice.png';

import poison from '../../assets/cards/poison.png';
import speedy from '../../assets/cards/speedy.png';
import asteroid from '../../assets/cards/asteroid.png';
import triforce from '../../assets/cards/triforce.png';

import {
  StyledContainer,
  StyledRow,
  StyledCardsContainer,
  StyledBoardContainer,
} from './styles';

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

const MiddleAge = () => {
  const [userMana, setUserMana] = useState(0);
  const [manaEnemy, setManaEnemy] = useState(0);
  const [userLife, setUserLife] = useState(100);
  const [enemyLife, setEnemyLife] = useState(100);
  const [cards, setCards] = useState([]);

  const timerForUser = () => {
    if (userMana + 1 <= 10) {
      setUserMana(userMana + 1);
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
  }, [userMana]);

  useEffect(() => {
    const interval = setTimeout(timerForEnemy, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [manaEnemy]);

  useEffect(() => {
    setCards(MockedCards.slice(0, 4));
  }, []);

  const getNewCard = (name) => {
    let randomCard = MockedCards.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
    let existCard = cards.some((card) => card.name === randomCard.name);
    while (randomCard.name === name || existCard) {
      randomCard = MockedCards.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
      existCard = cards.some((card) => card.name === randomCard.name);
    }
    return randomCard;
  };

  const getEnemyDamage = (damage) => {
    if (enemyLife - damage > 0) {
      setEnemyLife(enemyLife - damage);
    } else {
      setEnemyLife(0);
      alert("WIN!")
    }
  };

  const handleCardDroped = (manaCost, name, damage, target) => {
    const cardDropedIndex = cards.findIndex((card) => card.name === name);
    let mockCards = [...cards];
    mockCards[cardDropedIndex] = getNewCard(name);
    setCards(mockCards);
    if (target === 'enemyCannon' || target === 'enemyTower') {
      getEnemyDamage(damage);
    }
    if (userMana >= manaCost) {
      setUserMana(userMana - manaCost);
    }
  };

  return (
    <StyledContainer>
      <StyledBoardContainer>
        <div>
          <ManaBar mana={manaEnemy} />
          {MIDDLE_AGE_MAP.map((row, rowIndex) => (
            <StyledRow key={rowIndex}>
              {row.map((box, boxIndex) => (
                <Box key={boxIndex} type={box.type} />
              ))}
            </StyledRow>
          ))}
          <ManaBar mana={userMana} />
        </div>
        <LifeBar userLife={userLife} enemyLife={enemyLife} />
      </StyledBoardContainer>
      <StyledCardsContainer>
        {cards.map((card, cardIndex) => (
          <PowerCard
            key={cardIndex}
            img={card.img}
            name={card.name}
            manaCost={card.manaCost}
            damage={card.damage}
            usable={userMana < card.manaCost}
            handleCardDroped={handleCardDroped}
          />
        ))}
      </StyledCardsContainer>
    </StyledContainer>
  );
};

export default MiddleAge;
