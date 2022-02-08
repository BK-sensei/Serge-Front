import styled from 'styled-components'

const DiceDiv = styled.div`
    position: absolute;
    left: 78.99%;
    right: 6.54%;
    top: 65.26%;
    bottom: 17.15%;

    background: url(./img/dice.png);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Dice = () => {
    return (
        <DiceDiv>
            Dice
        </DiceDiv>
    );
};

export default Dice;