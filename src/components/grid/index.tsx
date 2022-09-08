import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import reactLogo from '../../assets/logo512.png';
import docker from '../../assets/docker.png';
import github from '../../assets/github.png';
import java from '../../assets/java.png';
import python from '../../assets/python.png';
import stackoverflow from '../../assets/stackoverflow.svg';
import './styled.css';
import Rounds from '../Rounds';

type Props = {
  index: number;
  handleCount: Function;
};

export function Grid({ index, handleCount }: Props) {
  const [image, setImage] = useState<any>();

  const images = [
    { file: python, size: '47vw' },
    { file: reactLogo, size: '37vw' },
    { file: docker, size: '38vw' },
    { file: github, size: '35vw' },
    { file: java, size: '25vw' },
    { file: stackoverflow, size: '30vw' },
  ];

  const imageList = images.map((bilde) => (
    <img
      src={bilde.file}
      className='App-logo'
      alt='logo'
      style={{
        width: bilde.size,
        height: 'auto',
        paddingTop: '6vw',
      }}
    />
  ));

  useEffect(() => {
    setImage(imageList[index - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const board = buildBoard();

  return (
    <>
      <RoundTitle>{`Runde ${index}/6`}</RoundTitle>
      <div>
        {image}
        <div id='grid-base'>{board}</div>
      </div>
      <Rounds fromParent={handleCount} />
    </>
  );
}

export const RoundTitle = styled.h2`
  font-family: 'Neue Machina';
  font-size: 1.2vw;
  margin-bottom: 1.5vw;
`;

const fadeOut = keyframes`
from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface CellProps {
  cellNumber: number;
  delayTime: number;
}

function buildBoard() {
  const Cell = styled.div<CellProps>`
    animation: ${fadeOut} 2s linear forwards;
    animation-delay: ${(props) => props.delayTime + 's'};
    background-color: #ff4b34;
    border: 1.5px solid white;
  `;

  let board = [];

  const timeDelays = Array(400)
    .fill(400)
    .map((_, i) => i * 9);
  timeDelays.sort(() => Math.random() - 0.5);

  for (let row = 0; row < 20; row++) {
    for (let column = 0; column < 20; column++) {
      const number = row + 1 + column + 2;
      const timeDelay: number = timeDelays.pop()!;
      board.push(<Cell cellNumber={number} delayTime={timeDelay} />);
    }
  }

  return board;
}
