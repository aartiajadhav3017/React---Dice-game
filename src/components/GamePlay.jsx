import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDies from "./RollDies";

const GamePlay = () => {
    const [score, setScore]= useState(0);
    const [selectedNumber, setSelectedNumber] = useState(1)
    const [currentDice, setCurrentDice]= useState(5);

    const generateRandomNumber = (min, max)=>{
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roleDice = ()=>{
        if (!selectedNumber) return;
        const randomNumber = generateRandomNumber(1,7)
        setCurrentDice((prev)=>randomNumber);


        if (selectedNumber === randomNumber){
            setScore(prev => prev + randomNumber);
        }else{
            setScore(prev => prev-2)
        }

        setSelectedNumber(undefined);
    }
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector 
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDies 
      currentDice={currentDice}
      roleDice={roleDice}/>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
.top_section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
}
`;
