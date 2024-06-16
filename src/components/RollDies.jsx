import React, { useState } from 'react'
import styled from 'styled-components'
// import dies1 from "../../public/images/dice_1.png"
const RollDies = ({roleDice, currentDice}) => {


  
  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`../../public/images/dice_${currentDice}.png`} alt='dice1'></img>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDies

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
    }

    .dice{
        cursor: pointer;
    }

`