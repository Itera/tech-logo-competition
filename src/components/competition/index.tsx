import { useState } from 'react';
import styled from 'styled-components';
import { CompetitionInfo } from '../competition-info';
import { Grid } from '../grid';

export function Competition() {
  const [count, setCount] = useState(1);

  const handleCount = (index: number) => {
    setCount(index);
  };

  return (
    <Wrapper>
      <Header>Vinn gavekort fra Komplett!</Header>
      <div>
        <Grid index={count} handleCount={handleCount} />
      </div>
      <div>
        <CompetitionInfo index={count} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: 0.125fr 1fr;
  padding-left: 1.5vw;
`;

export const Header = styled.h1`
  font-family: 'Neue Machina';
  color: blue;
  font-size: 4vw;
  font-weight: 900;
  grid-column: 1 / 3;
  padding-top: 0.5vw;
`;
