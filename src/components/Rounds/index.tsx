import { useState } from 'react';
import styled from 'styled-components';
import { Round } from './Round';

type Props = {
  fromParent: Function;
};

export default function Rounds({ fromParent }: Props) {
  const [count, setCount] = useState(1);

  const times = [
    'Runde 1: kl. 10:00 – 10:55',
    'Runde 2: kl. 11:00 – 11:55',
    'Runde 3: kl. 12:00 – 12:55',
    'Runde 4: kl. 13:00 – 13:55',
    'Runde 5: kl. 14:00 – 14:55',
    'Runde 6: kl. 15:00 – 15:55',
  ];

  const Rounds = times.map((text) => <Round text={text} />);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Wrapper
      onClick={() => {
        fromParent(count + 1);
        handleClick();
      }}
    >
      <div style={{ margin: '0vw 2vw 2vw' }}>
        {Rounds[0]} {Rounds[1]} {Rounds[2]}
      </div>
      <div>
        {Rounds[3]} {Rounds[4]} {Rounds[5]}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 0.8vw 0vw 0vw 3.5vw;
`;
